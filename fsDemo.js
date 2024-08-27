// import fs from 'fs';

// fs.readFile('./text.txt', 'utf8', (err, data)  => {
//     if (err )throw   err;
//     console.log(data);
// })


// //syncrons 

// const data = fs.readFileSync('./text.txt', 'utf8')
//     console.log(data);
    


import fs from 'fs/promises'
// promis
fs.readFile('./text.txt', 'utf8')
.then((data) => console.log(data))
.catch((err) => console.log(err));

// async. await

const readfile = async ()=>{
    try {
        const data = await fs.readFile('text.txt', 'utf8')
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}



const writefiles = async ()=>{
    try {
        await fs.writeFile('./text.txt', "hey this is the text i write with writefile");
        console.log("file written to....");
        
    } catch (error) {
        console.log(error);
        
    }
}

// the above cod ewill remove the existing text and add the new text. so we can use the append method.



 const appendfile = async ()=>{ 
    await fs.writeFile('./text.txt', "\n this is the appended text.")
 }

 // just add "\n " to the text we wnt to write.

 
 readfile()
 writefiles()
 appendfile()
