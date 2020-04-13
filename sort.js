function passNumbersFromCalc() {
    var result = document.getElementById("textinput").value
    localStorage.setItem("textvalue", result)
    return false

}

function pasteNumberString()
{
    document.getElementById("textinput").value=localStorage.getItem("textvalue")
}

function passNumbersFromGraph(numbers)
{
     localStorage.setItem("textvalue",numbers)
}

function checkInput() {
    var inputString = localStorage.getItem("textvalue")

    if (inputString.length == 0) {
        alert("Please enter at least one number!");
        return false;
    }

    if (inputString.charAt(0) == ',' || inputString.charAt(inputString.length - 1) == ',') {
        alert("The input is not valid!");
        return false;
    }


    if (!isValidInput(inputString)) {
        alert("The input is not valid!");
        return false;
    }

    return true
}

function getNumberArray() {
    var inputString = localStorage.getItem("textvalue")

    var stringArray = inputString.split(",");

    var numberArray = stringArray.map(s => Number(s));

    return numberArray
}

function isValidInput(str) {
    return str.split(",").filter(function (val) { return isNaN(val); }).length == 0;
}

function compareTwo(numberArray, j) {
    
        if (numberArray[j - 1] > numberArray[j]) {
            var temp = numberArray[j - 1];
            numberArray[j - 1] = numberArray[j];
            numberArray[j] = temp;
        }
    

    return numberArray
}















