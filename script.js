



import express from 'express'


const app = express();
app.use(express.json());



const PORT = 8000;


const users = [
    {
        id:1,
        name:'Behrooz Khan',
        email:'behroozKhan@gmail.com'
    },
    {
        id:2,
        name:'Behrooz Khan',
        email:'behroozKhan@gmail.com'
    },
]
// Get Api jis se user clinet pe show ho jyenge
app.get("/",(req,res)=>{
        res.send(users)
})


app.post('/', (req,res)=>{
    console.log('req-->',req.body);
    users.push({id: users.length + 1  ,...req.body});
    res.send({message: "user Added Succefullu"})
})





app.listen(PORT, ()=>{
    console.log(PORT Running On ${PORT});
})