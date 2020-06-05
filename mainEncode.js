const {Encoder, checkIncludeNumber} = require('./modules/converter')

// get texts from command line argument
const inputs = process.argv.slice(2) 

// print output from with Encode Function 
// if you have many or one args. You can use this.
inputs.forEach(input => {   
    try{
        checkIncludeNumber(input)
        console.log(Encoder(input))
    } catch (e){
        console.log(`Error :${e.message}`)
        return
    }
        
    
    
})

