
const funcTableToArrayItem = function tableToArrayItem(valueString) {
    let domTableString = JSON.stringify(valueString).match(/<table>.+?<\/table>/).join();
    let arrayLineTable = Array.from(domTableString.match(/(<tr>.+?<\/tr>)/gi));

    let arrayCellTable = arrayLineTable.map((value) => {
        return value.toString().match(/(<td>.+?<\/td>)/gi)
            .map(value => value.replace(/<.+?>/g, ""));

    });
    return arrayCellTable;
}


const funcArrayValueToNormDoubleArray = function arrayValueToNormDoubleArray(arrayValue) {
    let mapValue;
    let arrSort = [];
    arrayValue.forEach((value, index) => {
        if (sumLengthStringOnArr(value) < 20) {
            mapValue = arrayValue.slice(index + 1);
        }
    })
    let counterObj = counterLenghtRowSqyareArray(mapValue);
    for (let key in counterObj) {
        arrSort.push([key, counterObj[key]]);
    }
    arrSort.sort((a, b) => b[1] - a[1]);
    return arrayFromPrimaryToFullNameAndStimulation(mapValue, arrSort);
}


function sumLengthStringOnArr(arr) {
    return arr.reduce((sum, item) => sum + item.length, 0);
}


function counterLenghtRowSqyareArray(arr) {
    let counteObj = {};
    arr.forEach((item) => {
        item.forEach((value, index) => {
            !counteObj[index] ? counteObj[index] = value.length : counteObj[index] += value.length
        })
    })
    return counteObj
}


function arrayFromPrimaryToFullNameAndStimulation(mapValue, arrSort) {
    return mapValue.map((item) => {
        let array = [];
        item.forEach((value, index) => {
            if (index == +arrSort[0][0] || index == +arrSort[1][0]) {
                array.push(value);
            }
        })
        return array;
    })
}



module.exports = {
    funcTableToArrayItem,
     funcArrayValueToNormDoubleArray, };