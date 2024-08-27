const Generatenumbers = ()=>{
    return Math.floor(Math.random() * 100)  + 1;
}

 const converter = (cel) =>{
    return (cel * 9 ) /5 + 32
 }
module.exports = {Generatenumbers, 
converter
}