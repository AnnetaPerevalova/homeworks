
//блок-схема 1
var x = prompt( 'Введите число' );

    if ( x >= 0 ) {
        alert ("Число положительное") 
    }
    
    else if (x < 0){
        alert ("Число отрицательное") 
    }



//блок-схема 2

var arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
    sum += array[i];
    }
console.log(sum);    

}
arraySum(arr);



//блок-схема 3

var numbers = [254, 115, 78, 25, 91, 45, 37];

for (var i = 0; i < numbers.length; i++) {
    var currentValue = numbers[i];

    if (currentValue > 50 ){
        console.log( currentValue )

    }
}
