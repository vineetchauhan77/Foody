const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foody:Vineet,iec77@cluster0.ejkoajh.mongodb.net/foodymern?retryWrites=true&w=majority'
const mongoDB =async()=>{
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else console.log();
            });
        }

    });
}
module.exports=mongoDB;


