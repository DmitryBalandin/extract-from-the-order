const mammoth = require("mammoth");
const fs = require('fs');
let script = require('./script');
const { funcTableToArrayItem, funcArrayValueToNormDoubleArray, sum, title } = require("./modificatonDocument");


//  fs.readFile("./example/example.txt", "utf-8", (err,result) => {
//     console.log(result);
//     date = result;
// });


mammoth.convertToHtml({ path: './documentdocx/order.docx' })
    .then((result) => {
        console.log(typeof result);
        
        return JSON.stringify(result);
    })
    .then((result, reject) => {
        fs.writeFile('./text2.html', `${result}`, () => { })
        return (funcTableToArrayItem(result));
    })
    .then(result => funcArrayValueToNormDoubleArray(result))
    .then(result =>console.log(result));
    



module.exports = fs;