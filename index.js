const Encode = require('./encode')

const inputs = process.argv.slice(2) // get text from command line argument

inputs.forEach(input => {   // if you have many or one args. You can use this.
    console.log(Encode(input))
})

