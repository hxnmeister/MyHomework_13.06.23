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

//Частина друга
//Завдання №1
/*function stringStatistic(value)
{
    let statistic = [0,0,0];

    for (const item of value) 
    {
        if((item >= "a" && item <= "z") || (item >= "A" && item <= "Z"))
        {
            ++statistic[0];
        }
        else if((item > "0" && item < "9"))
        {
            ++statistic[1];
        }
        else
        {
            ++statistic[2];
        }
    }

    return `Літер: ${statistic[0]}\nЦифр: ${statistic[1]}\nСпец. символи: ${statistic[2]}`;
}

console.log(stringStatistic("He11oz@%"));*/

//Завдання №2
/*function toCamelCase(value)
{
    while(value.includes("-"))
    {
        const index = value.indexOf("-");
        
        value = value.replace(value[index] + value[index + 1], value[index + 1].toUpperCase());
    }

    return value;
}

const str = "font-size-aaaa";

alert(toCamelCase(str));*/

//Завдання №3
/*const creatingAbbreviation = (value) => value.split(/\ |\-/).map(x => x[0].toUpperCase()).join("");

const str = "об’єктно-орієнтоване програмування";

alert(creatingAbbreviation(str));*/

//Завдання №4
/*const rowSeparation = (str, separator) => str.split(separator); 

const temp = "10/08/2020";

alert(rowSeparation(temp,"/"));*/

//Завдання №5
/*function getInfoAboutSite(siteValue)
{
    let infoAboutSite = [];
    const temp = siteValue.split("/");

    if(siteValue.includes("https://") || siteValue.includes("http://"))
    {
        infoAboutSite.push(temp[0]);
        infoAboutSite.push(temp[2]);
        infoAboutSite.push(siteValue.substring(infoAboutSite[0].length + infoAboutSite[1].length + 2));
    }
    else
    {
        infoAboutSite.push("Інформація про протокол відсутня!");
        infoAboutSite.push(temp[0]);
        infoAboutSite.push(siteValue.substring(infoAboutSite[1].length));
    }

    return `Протокол: ${infoAboutSite[0]}\nДомен: ${infoAboutSite[1]}\nШлях: ${infoAboutSite[2]}`;
}
const userUrl = "https://itstep.org/ua/about";

console.log(getInfoAboutSite(userUrl));*/

