const arr = [1,10,4,2];
const meanValueArr  = (arr) =>{ //метод вычисляющий среднее значение элементов массива
    let summ = 0;
    for(let i = 0; i < arr.length; i++){
        summ += arr[i];
    }
    console.log(summ/arr.length);
}
meanValueArr(arr);
Array.prototype.meanValue = function () { 
    let summ = 0;
    for(let i = 0; i < this.length; i++){
        summ += arr[i];
    }
    console.log(summ/this.length);
}
arr.meanValue();

//максимальное число
// const a = parseInt(prompt("enter first number"));
// const b = parseInt(prompt("enter second number"));
// const c = parseInt(prompt("enter third number"));

function max(a,b,c){
    if (a == undefined){
        return undefined;
    }
    if(b == undefined){
        return a;
    }
    if(c== undefined){
        return a < b ? a : b;
    }
    if (a>b && a > c){
        return a;
    }
   
    return b > c ? b : c;
}
// alert("Max number: "+ max(a,b,c));

//Игра угадай число
let randomNumber = Math.round((Math.random()*100));
console.log(randomNumber);
let number = parseInt(prompt("enter the  number"));
let count = 1;
while(number!=randomNumber){
    if(number > randomNumber){
         number = parseInt(prompt("less"));
         count++;
    }else{
        number = parseInt(prompt("more"));
        count++;

    }
    
     
}
alert("You win!!!! number of attempts: " + `${count}`);
