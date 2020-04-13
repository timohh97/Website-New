function bubbleSort(numbers, myChart) {
    for (i = 0; i < numbers.length; i++) {
      (function (i) {
        setTimeout(function () {
          myChart.update()
          passNumbersFromGraph(numbers)
          for (j = 1; j < numbers.length - i; j++) {
            (function (j) {
              setTimeout(function () {

                numbers = compareTwo(numbers, j)
                myChart.update()
                passNumbersFromGraph(numbers)
              }, 100 * j);
            })(j);
          }
        }, 1500 * i);
      })(i);
    }

  }


function quickSort(numbers)
{  
    
    if(numbers.length==1||numbers.length==0)
    {
      return numbers
    }

    var pivot = numbers[0]
    var leftArray =[]
    var rightArray =[]

    for(i=1;i<numbers.length;i++)
    {
      if(numbers[i]<pivot)
      {
          leftArray.push(numbers[i])
      }
      else
      {
          rightArray.push(numbers[i])
      }
    }

    var leftArraySorted = quickSort(leftArray)
    var rightArraySorted = quickSort(rightArray)
    var pivotArray =[pivot]
    numbers = leftArraySorted.concat(pivotArray,rightArraySorted)

    return numbers
    
}