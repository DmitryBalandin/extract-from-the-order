const mammoth = require("mammoth");
const fs = require('fs');
let script = require('./script');
let date;

//  fs.readFile("./example/example.txt", "utf-8", (err,result) => {
//     console.log(result);
//     date = result;
// });


mammoth.convertToHtml({ path: './documentdocx/order.docx' })
    .then((result) => {
        console.log(typeof result);
        date = JSON.stringify(result);
        console.log(typeof date);
    });
script = JSON.stringify(script);
setTimeout(() => console.log("Hello"), 1000);
setTimeout(() => fs.writeFile('./text.html', `${date}${script}`, () => { }), 2000);

setTimeout(()=> fs.appendFile('./text.html',"ikoweioweffkindkondsfkon", () => { }),3000);