let script = "alert('Hello')";


console.log(script);
script = `<script>${script}</script>`
console.log(script);
module.exports = script;