const mammoth = require("mammoth");
const fs = require('fs');
const docx = require("docx");
const path = require('path');
const express = require('express');
const multer = require('multer');





const { funcTableToArrayItem, funcArrayValueToNormDoubleArray } = require("./controllers/modificatonDocument");
const createSectionExtract = require('./controllers/createDocExtract');
let script = require('./script');

const dateOrder = {
    date: '12.04.2022',
    numberDetachment: "5",
    numberOrder: "134-ос",
    fullNameChief: "Тропин В.А.",
    rankChief: "капитан вн.сл.",
};

const app = express();
const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
    console.log(filedata.filename);
        res.send("Файл загружен");
});

app.post('/',(req,res)=>{
    const {date,numberDetachment,numberOrder,fullNameChief,fileOrder} = req.body;
    console.log(req.path);
    
})



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


app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
  });

app.listen(PORT,(error)=>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});