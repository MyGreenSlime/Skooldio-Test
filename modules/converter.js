// this function for check String contain number 
const checkIncludeNumber =  (text) =>{ 
    if(text.match(/([0-9])+/g)){
        throw new Error(`"${text}" includes number, Can't encode it`)
    }
}
// this function do encode string to Run Length Encoded format 
const Encoder = (text) => {  
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


module.exports =  {Encoder, checkIncludeNumber}