const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    todoName: {
        type:String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: false,
    }
});

const Todo = mongoose.model("Todo", FoodSchema);
module.exports = Todo;