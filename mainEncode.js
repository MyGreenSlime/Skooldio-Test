const Encoder = require('./converter')

// get texts from command line argument
const inputs = process.argv.slice(2) 

// print output from with Encode Function 
// if you have many or one args. You can use this.
inputs.forEach(input => {   
    console.log(Encoder(input))
})

