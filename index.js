const mammoth = require("mammoth");
const fs = require('fs');
let script = require('./script');
const docx = require("docx");
const { funcTableToArrayItem, funcArrayValueToNormDoubleArray } = require("./controllers/modificatonDocument");
const createSectionExtract = require('./controllers/createDocExtract');


const dateOrder = {
    date: '12.04.2022',
    numberDetachment: "5",
    numberOrder: "134-ос",
    fullNameChief: "Тропин В.А.",
    rankChief: "капитан вн.сл.",
};


log = () => {
    const result =
        mammoth.convertToHtml({ path: './documentdocx/order.docx' })
            .then(result =>  JSON.stringify(result))
            .then((result, reject) => {
                fs.writeFile('./text2.html', `${result}`, () => { })
                return (funcTableToArrayItem(result));
            })
            .then(result => { let arrName = funcArrayValueToNormDoubleArray(result) 
                const doc = new docx.Document({
                    sections: [
                        {
                            properties: {},
                            children: 
                  
                                createSectionExtract(dateOrder,arrName)
                            ,
                        },
                    ],
                  });
               
                return doc;
            }).then( doc => docx.Packer.toBuffer(doc))
            .then(buffer => fs.writeFileSync("My Document.docx", buffer));
                return result;
};




log();