import crypto from 'crypto'

const password = "this is a password and it about to be hashed"
const hash = crypto.createHash('sha256')

hash.update(password)
console.log(hash.digest('hex'));


crypto.randomBytes(16 , (err , buf)=>{    // makes the password hash dynamic every time
    if (err) throw err;
    console.log(buf.toString("hex"));
    
})