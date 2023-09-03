const os = require("os");

const { username, sayHi } = require(`./test`);

const name = "Roma";

console.log(sayHi(name));

module.exports = name;

console.log(os.platform(), os.release());
