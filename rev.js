function reverseArray()
{
    var inputString = document.getElementById("textinput").value;

    if(inputString.length==0)
    {
        alert("Please enter at least one number!");
        return false;
    }

    if(inputString.charAt(0)==','||inputString.charAt(inputString.length-1)==',')
    {
        alert("The input is not valid!");
        return false;
    }

    if(!isValidInput(inputString))
    {
       alert("The input is not valid!");
       return false;
    }

    var stringArray = inputString.split(",");

    var numberArray = stringArray.map(s=>Number(s));

    document.getElementById("textinput").value=numberArray.reverse();

    alert("Answer: "+numberArray);

}

function isValidInput(str)
{
  return str.split(",").filter(function(val){ return isNaN(val); }).length == 0;
}

