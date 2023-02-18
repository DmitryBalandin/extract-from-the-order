const mammoth = require("mammoth");
const fs = require('fs');
const docx = require("docx");
const path = require('path');
const express = require('express');
const multer = require('multer');





const { funcTableToArrayItem, funcArrayValueToNormDoubleArray } = require("./controllers/modificatonDocument");
const createSectionExtract = require('./controllers/createDocExtract');


const app = express();
const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("filedata"));


app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    console.log(req.body);
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else{
    console.log(filedata.filename);
     (async () =>{ 
        await log(filedata.filename, req.body);
        fs.unlink(path.resolve(__dirname,'uploads',filedata.filename),(err) =>{
            if(err) console.log(err);
            console.log("file in unloads deleted")
        })
        res.setHeader('Content-Type','application/msword');
        await res.sendFile(path.resolve(__dirname,`${filedata.filename}.docx`))
        setTimeout(()=>(fs.unlink(path.resolve(__dirname,`${filedata.filename}.docx`),(err) =>{
            if(err) console.log(err);
            console.log("file deleted")
        })),5000)
    })();

     console.log(typeof filedata.filename);
       
    }
});

app.post('/',(req,res)=>{
    const {date,numberDetachment,numberOrder,fullNameChief,fileOrder} = req.body;
   
    
})



log = (pathDoc,dateOrder) => {
    const result =
        mammoth.convertToHtml({ path: `./uploads/${pathDoc}` })
            .then(result =>  JSON.stringify(result))
            .then((result, reject) => {
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
            .then(buffer => fs.writeFileSync(`${pathDoc}.docx`, buffer));
                return result;
};



app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
  });

app.listen(PORT,(error)=>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});