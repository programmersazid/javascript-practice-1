let num = 0;
let sum = 0;
let sum1 = 0;
let sum2 = 0;
while(num < 5)
{
    console.log("Number:", num);
    sum = sum + num;
    if(num % 2 === 0)
    {
        console.log("Even : ", num);
        sum1 = sum1 + num;
        console.log("Even Sum : ", sum1);
    }
    else if(num % 2 !== 0)
    {
        console.log("Odd: ", num);
        sum2 = sum2 + num;
        console.log("Odd Sum :",sum2);
        

    }
    num++;

    
}
console.log("Total Sum: ", sum);