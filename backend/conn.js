const mongoose = require("mongoose");
const connect = async () => {
    try{
        const port = `mongodb+srv://shreyash:shreyash@cluster0.1xybcnp.mongodb.net/test`
        await mongoose.connect(port);
        console.log("Database Connected");
    }catch(err){
        console.log(err);
    }
}
connect();
module.exports = connect;