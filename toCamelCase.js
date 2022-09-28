let sampleStr = "the-stealth-warrior";
let sampleStr2 = "the_stealth_warrior";

function toCamelCase(str) {
    let strToArr = null
    let newStrToArr = []

    if (str.includes('-')) {
        strToArr = str.split('-')
    } else if (str.includes('_')) {
        strToArr = str.split('_')
    }
    
    
    for (let i = 0; i<strToArr.length; i++) {
        newStrToArr.push(strToArr[i].charAt(0).toUpperCase() + strToArr[i].slice(1));
    }
    return newStrToArr.join('')
}

console.log(toCamelCase(sampleStr2))