// this function for check String contain number 
const checkIncludeNumber =  (text) =>{ 
    if(text.match(/([0-9])+/g)){
        process.emitWarning(`"${text}" includes number, You wil confuse with string encoded`)
    }
}
// this function do encode string to Run Length Encoded format 
const Encoder = (text) => { 
    checkIncludeNumber(text)
    let prevChar = text[0] 
    let count = 1
    let newString = ""
    for(let i = 1; i < text.length; i++){
        if(prevChar === text[i]){
            count+=1
        } else {
            newString+=`${prevChar}${count}`
            prevChar = text[i]
            count = 1
        }
    }  
    newString+=`${prevChar}${count}`
    return newString
}


module.exports =  Encoder