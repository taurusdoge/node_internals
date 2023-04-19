process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require("crypto");

const start = Date.now();
for (let i = 1; i <= 10; i++) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`${i}: `, Date.now() - start);
  });
}
