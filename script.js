//Частина перша
//Завдання №1
/*const getMaxValue = (arrayWithValues) => Math.max(...arrayWithValues.map(item => item % 2 === 0 && Number(item)));

const arr = ["7","12","9","26","115"];
alert(getMaxValue(arr));*/

//Завдання №2
/*function findUniqe(arrayWithValues)
{
    let temp = [];

    arrayWithValues.forEach(item => { if(!temp.includes(item)) temp.push(item) });
    return temp;
}

const arr = ["HI",3,"hello",2,"HI",3,"@","$"];
alert(findUniqe(arr).join("-"));*/

//Завдання №3
/*function calculateSum(arrayToCalculate)
{
    let temp = 0;

    arrayToCalculate.forEach(item => temp += item);
    return temp;
}

alert(calculateSum([2,4,6]));*/

//Завдання №4
/*function calculateNumber(binaryArray)
{
    let sum = 0;

    for(let i = binaryArray.length - 1, j = 0; i >= 0; i--, j++)
    {
        sum += Math.pow(2,j) * binaryArray[i];
    }
    return +sum;
}

const binary = [1,0,0,1];
alert(calculateNumber(binary));*/
//--------------------------------------------------------