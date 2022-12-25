//Code your solutions in this file
function writeCards(stringName, eventName) {
    let mes = [];
    for (let i = 0; i < stringName.length; i++) {
        mes.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`)
    }
    return mes;
}

function countDown(number) {
    while (number > -1) {
        console.log(number)
        number--
    }
    return number;
}

