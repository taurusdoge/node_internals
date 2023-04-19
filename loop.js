// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // check 1: any pending setTimeout, setInterval, setImmediate?
  // check 2: any pending OS tasks? (networking, server listening to port, etc.)
  // check 3: any pending long running ops? ('fs' module, long tasks, thread pool stuff)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// every loop is a TICK
while (shouldContinue()) {
  // 1) Node looks at pending timers and sees if any functions
  // are ready to be called. setTimeout, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and
  // executes relevant callbacks
  // 3) Node pauses execution. Continue when...
  //  - a new pendingOSTask is done
  //  - a new pendingOperation is done
  //  - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}

// exit back to terminal
