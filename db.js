const mongoose = require("mongoose");
const MongoURI = "mongodb+srv://SanketGodara:Sanket123@cluster0.kxorjvx.mongodb.net/gofoodmern?retryWrites=true&w=majority";

async function mongoDb() {
    try {
        await mongoose.connect(MongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Access the collection directly using mongoose.model
        const FoodData = mongoose.model('FoodData', new mongoose.Schema({}), 'foodData2');
        const data = await FoodData.find({});
        global.foodData2=data;
 
        const FoodCat = mongoose.model('FoodCat', new mongoose.Schema({}), 'foodCategory');
        const catData = await FoodCat.find({});
        global.foodCategory = catData;

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDb;
