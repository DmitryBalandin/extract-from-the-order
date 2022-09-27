const docx = require("docx");
const fs = require("fs");
const log = require('./index');




createExtract = (dateOrder = {}, fullNameAndStimylator) => {

  let newExtact = new docx.Paragraph({
    children: [new docx.TextRun({
      text: "                                                             ВЫПИСКА",
      size: 26,
      break: 1
    }),
    new docx.TextRun({
      text: `${dateOrder.date}                                                                                                  ${dateOrder.numberOrder}`,
      size: 24,
      break: 1
    }), new docx.TextRun({
      text: "За добросовестный труд и хорошее поведение, поощрить  ",
      size: 24,
      break: 1
    }), new docx.TextRun({
      text: `Осужденного отр.№ ${dateOrder.numberDetachment} ${fullNameAndStimylator[0]}`,
      size: 24,
      break: 1
    }), new docx.TextRun({
      text: `Поощрение: ${fullNameAndStimylator[1]}`,
      size: 24,
      break: 1
    }), new docx.TextRun({
      text: "Выписка верна:",
      size: 24,
      break: 1
    }), new docx.TextRun({
      text: "Начальник отряда ОВРсО",
      size: 24,
      break: 1
    }), new docx.TextRun({
      text: `${dateOrder.rankChief}                                                                      ${dateOrder.fullNameChief}`,
      size: 24,
      break: 1
    }),]
  });
  return newExtact
}


createSectionExtract = (objDateOrder, arrayFullNameAndStimylator) => {
  let docExtracts = [];
  arrayFullNameAndStimylator.forEach(value => {
    docExtracts.push(createExtract(objDateOrder, value));
  })
  return docExtracts
};


module.exports = createSectionExtract;



