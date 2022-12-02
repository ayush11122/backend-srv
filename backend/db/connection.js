const mongoose=require('mongoose');

const DB="mongodb+srv://ayush11122:ayushayu@cluster0.8zuhhja.mongodb.net/test";

mongoose.connect(DB).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => console.log(`No Connection`));