require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Clone created in backend');
});

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{});
        console.log('DB connected');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});