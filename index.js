const express=require('express');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const port = process.env.PORT || 8000;

// connecting to database
require('./connection');

app.get('/', (req, res)=>{
    res.send('Hello World');
});

const userRoute=require('./routes/UserRoute');
app.use('/', userRoute);

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})