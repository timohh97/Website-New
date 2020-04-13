function findMax()
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

    var start = window.performance.now();

    var max = parseFloat(stringArray[0]);
    
    for(i=1;i<stringArray.length;i++)
    {
         if(parseFloat(stringArray[i])>max)
         {
             max = parseFloat(stringArray[i]);
         }
    }
    
    var stop = window.performance.now();

    var diff = stop-start;

    document.getElementById("textinput").value=max;

    alert("Answer: "+max+"\n"+"Runtime: "+diff+"ms");
    
}

function isValidInput(str) 
{
  return str.split(",").filter(function(val){ return isNaN(val); }).length == 0;
}


  