async function wait() {
  // runs like usual, but returns Promise<undefined>
  console.log("wait");
}

async function test() {
  // logs this first
  console.log("1");

  // awaits finishing of the execution
  await wait();
  // after the first await everything is basically inside of an imaginary .then(),
  // hence the next synchonous code is executed which is $ console.log("end")

  // only then we execute the following line:
  console.log("2");
}

// starts running synchronously, going inside
test();
console.log("end");

// 1
// wait
// end
// 2
