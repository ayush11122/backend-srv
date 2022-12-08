const express = require('express');
const router = express.Router();

require('../db/connection');

const User = require('../model/userSchema');
 
router.get('/', (req, res) => {
    res.send('hello world from the server router.js');
    console.log("hello world from inside router /")
});

            // by-promises
// router.post('/AddContact', (req, res) => {
//     const {name, email, phone, gender, location} = req.body;
//     console.log("hello server from inside router /AddContact");
//     if(!name || !email || !phone || !gender || !location){
//         return res.status(422).json({error:"chor mt"});
//     }
//         User.findOne({email:email})
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({error:"user already exist"});
//             }
//             const user = new User({name, email, phone, gender, location});

//             user.save().then(() =>{
//                 res.status(201).json({ message: "user registered successfully"})
//             }).catch((err) => res.status(500).json({error:"failed to registered"}))
//         }).catch(err => { 
//             console.log(err);
//          });  
// });

            // by-async-await
router.post('/AddContact', async (req, res) => {
    const {name, email, phone, gender, location} = req.body;

        if(!name || !email || !phone || !gender || !location){
            return res.status(422).json({error: "please filled every field exsiting field"});
        }

        try {
            
            const userExist = await User.findOne({ email: email });

            if (userExist) {
                return res.status(422).json({ error: "user already Exist"});
            }

            const user = new User({ name, email, phone, gender, location });

            await user.save();

            res.status(201).json({ meassage: "user registered successfully"});
            
        } catch(err) {
            console.log(err);
          }

});

module.exports = router;