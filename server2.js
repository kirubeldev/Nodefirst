import {createServer} from 'http'
const port =process.env.PORT


 const users = [
    {id: 1 , name: 'the battleground'},
    {id: 2 , name: 'spiderman'},
    {id: 3 , name: 'pablo'},
    {id: 4 , name: 'queen of the south'}
]



 // logger

 const logger = (req, res, next) =>{
console.log(`${req.method} ${req.url}`);
next()
}


const getAllUserHanddler =(req, res) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
}

const getUsersByIDHandller = (req, res)=>{
    const id= parseInt(req.url.split('/')[3])
    const user = users.find((user)=>user.id === id)
        if (user){
    
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }
        else{
            res.writeHead(404, { 'Content-Type': 'application/json' });
    
            res.end('user not found');
        }
}


const NotFoundHanddler = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('Route not found');
}
const server = createServer((req, res) =>{
    logger(req, res, ()=>{
         
        
        if (req.url ==='/api/users' && req.method ==='GET'){
  getAllUserHanddler(req, res)
}
else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method ==='GET'){
  

getUsersByIDHandller(req, res)



}
else {
  
    NotFoundHanddler(req , res)


}
})

})

server.listen(port ,()=>{
console.log(`listening on ${port}`);

})