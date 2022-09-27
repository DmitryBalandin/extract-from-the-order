const docx = require("docx");
const fs = require("./index");

console.log('Hello world');

const dateOrder = {
    date: '12.04.2022',
    numberDetachment: "5",
    numberOrder: "134-ос",
    fullNameChief: "Тропин В.А.",
    rankChief: "капитан вн.сл.",
}

const arrayStimylator = [
    [
      'Абайдуллин Ренат Имагатович',
      ' Дополнительная посылка (передача)'
    ],
    [ 'Абатуров Андрей Николаевич', 'Дополнительная посылка (передача)' ],
    [
      'Абушахмин Рабис Алимарданович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Алексеевский Остап Евгеньевич',
      'Дополнительная посылка (передача)'
    ],
    [
      'Антипин Виталий Владимирович',
      'СРНВ от 07.08.2020 (устный выговор)'
    ],
    [
      'Антонов Владимир Николаевич',
      'СРНВ от 09.06.2021 (устный выговор)'
    ],
    [
      'Ахметов Равиль Тахиржанович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Банников Виктор Николаевич', 'СРНВ от 24.10.2019 (3 суток ШИЗО)' ],
    [
      'Белобородов Евгений  Сергеевич',
      'СРНВ от 11.02.2021 (устный выговор)'
    ],
    [ 'Белоус Артем Валерьевич', 'Дополнительная посылка (передача)' ],
    [ 'Бокиев Сами Холмуродович', 'СРНВ от 29.10.2020(устный выговор)' ],
    [
      'Болдышев Александр Александрович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Глухих Иван Валериевич', 'Дополнительная посылка (передача)' ],
    [ 'Гочаров Павел Иванович', 'Дополнительная посылка (передача)' ],
    [
      'Долгушин Николай Павлович',
      'СРНВ от 27.07.2021 (устный выговор)'
    ],
    [
      'Донгак Чечен-оол Эрес-оолович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Ёлкин Алексей Владимирович', 'СРНВ от 20.05.2021(выговор)' ],
    [
      'Ермоленко Александр Леонидович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Жиляков Юрий Владимирович', 'Дополнительная посылка (передача)' ],
    [ 'Затайдух Андрей Алексеевич', 'Дополнительная посылка (передача)' ],
    [
      'Иваненко Александр Евгеньевич',
      ' Дополнительная посылка (передача)'
    ],
    [ 'Иванов Игорь Евгеньевич', 'Дополнительная посылка (передача)' ],
    [
      'Ильиных Александр Геннадьевич',
      'Дополнительная посылка (передача) '
    ],
    [ 'Кенден Анатлий Анатольевич', 'Дополнительная посылка (передача)' ],
    [ 'Керин Эдуард Владимирович', 'СРНВ от 14.04.2021(выговор)' ],
    [
      'Козлов Евгений Александрович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Колмаков Артур Константинович',
      'СРНВ от 29.07.2021(устный выговор)'
    ],
    [
      'Колышев Владислав Вадимович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Конин Сергей Юрьевич', 'СРНВ от 08.04.2021(устный выговор)' ],
    [
      'Кордопольцев Сергей Александрович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Коряковский Дмитрий Николаевич',
      'Дополнительная посылка (передача)'
    ],
    [ 'Кряклин Андрей Викторович', 'СРНВ от 28.07.2021(устный выговор)' ],
    [
      'Кузнецов Сергей Николаевич',
      ' Дополнительная посылка (передача)'
    ],
    [ 'Кузнецов Юрий Олегович', 'Дополнительная посылка (передача)' ],
    [
      'Лебедев Александр Сергеевич',
      'Дополнительная посылка (передача)'
    ],
    [
      'Лежняков Андрей Яковлевич',
      'СРНВ от 22.08.2021 (устный выговор)'
    ],
    [ 'Маметов Эдгар Ильдусович', 'Дополнительная посылка (передача)' ],
    [ 'Матяш Александр Олегович', 'СРНВ от 14.04.2021(выговор)' ],
    [ 'Медведев Алексей Сергеевич', 'Дополнительная посылка (передача)' ],
    [
      'Михальчук Сергей Владимирович',
      'СРНВ от 28.04.2021(устный выговор)'
    ],
    [
      'Монгуш Алдын-Херел Шолбанович',
      'СРНВ от 23.04.2020(устный выговор)'
    ],
    [
      'Морозов Александр Михайлович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Муратов Александр Викторович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Новиков Андрей Петрович', 'СРНВ от 08.07.2021(устный выговор)' ],
    [ 'Нуруллин Раиль Фаридович', 'Дополнительная посылка (передача)' ],
    [ 'Оюн Эдер-оол Михайлович', 'СРНВ от 22.01.2021 (5 суток ШИЗО)' ],
    [
      'Павлов Владимир Владимирович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Пальянов Александр Сергеевич',
      'Дополнительная посылка (передача)'
    ],
    [ 'Пензин Сергей Николаевич', 'Дополнительная посылка (передача)' ],
    [ 'Петров Сергей Владимирович', 'Дополнительная посылка (передача)' ],
    [ 'Петроченко Борис Георгиевич', 'СРНВ от 14.04.2021(15 сутокШИЗО)' ],
    [
      'Пиманов Сергей Александрович',
      'СРНВ от 20.05.2021 (устный выговор)'
    ],
    [
      'Пискунов Александр Анатольевич',
      ' Дополнительная посылка (передача)'
    ],
    [
      'Повышев Игорь Александрович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Полигуев Олег Владимирович', 'СРНВ от 19.01.2021 (выговор)' ],
    [ 'Полушкин Михаил Борисович', ' Дополнительная посылка (передача)' ],
    [
      'Пономарев Николай Николаевич',
      'СРНВ от 01.04.2021 (устный выговор)'
    ],
    [ 'Пукит Арвид Николаевич', 'Дополнительная посылка (передача)' ],
    [
      'Пыжиков Александр Александрович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Пятых Юрий Павлович', 'Дополнительная посылка (передача)' ],
    [ 'Ручкин Филипп Андреевич', 'Дополнительная посылка (передача)' ],
    [
      'Сандый-оол Иван Владимирович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Свинкин Виктор Владимирович',
      'СРНВ от 14.05.2021(устный выговор)'
    ],
    [
      'Сединкин Андрей Александрович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Синяков Сергей Александрович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Сиппель Яков Владимирович', 'Дополнительная посылка (передача)' ],
    [
      'Стасевич Геннадий Сергеевич',
      'Дополнительная посылка (передача)'
    ],
    [
      'Тарасов Дмитрий Александрович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Тлеубаев Марат Жунусович', 'Дополнительная посылка (передача)' ],
    [ 'Торопов Николай Андреевич', 'Дополнительная посылка (передача)' ],
    [
      'Ульрих Евгений Александрович',
      'Дополнительное длительное свидание'
    ],
    [
      'Ульянов Владимир Владимирович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Усов Дмитрий Александрович',
      'СРНВ от 06.07.2021 (устный выговор)'
    ],
    [
      'Филеев Алексей Владимирович ',
      'Дополнительная посылка (передача)'
    ],
    [
      'Халиков Альберт Каримчанович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Хомяков Вячеслав Геннадьевич',
      ' СРНВ от 08.04.2021 (устный выговор)'
    ],
    [ 'Цветиков Николай Юрьевич', 'СРНВ от 22.07.2021(устный выговор)' ],
    [
      'Черезов Дмитрий Вячеславович',
      'Дополнительная посылка (передача)'
    ],
    [
      'Чюдук Хурен-оол Сайзыракович',
      'Дополнительная посылка (передача) '
    ],
    [
      'Шабданбеков Азамат Таштанбекович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Широков Артур Эдуардович', 'Дополнительная посылка (передача)' ],
    [
      'Щеглов Владимир Николаевич',
      'СРНВ от 20.08.2021(устный выговор)'
    ],
    [
      'Щетенин Дмиртрий Александрович',
      'Дополнительная посылка (передача)'
    ],
    [ 'Эйсман Игорь Анатольевич', 'Дополнительная посылка (передача)' ],
    [ 'Яркаев Руслан Файсуллович', 'Дополнительная посылка (передача)' ],
    [ 'Ященко Юрий Николаевич', 'Дополнительная посылка (передача)' ]
  ];

function createExtract(dateOrder = {},fullNameAndStimylator) {
    
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

function createSectionExtract(objDateOrder,arrayFullNameAndStimylator){
  let docExtracts = [];
  arrayFullNameAndStimylator.forEach(value =>{
    docExtracts.push(createExtract(objDateOrder,value));
  })
  return docExtracts
}

const doc = new docx.Document({
    sections: [
        {
            properties: {},
            children: 

                createSectionExtract(dateOrder,arrayStimylator)
            ,
        },
    ],
});


setTimeout(() => docx.Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
}), 1000);


