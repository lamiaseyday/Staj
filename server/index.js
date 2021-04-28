const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const TodoModel = require('./models/Todo');

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://myserver:123myserver@crud.m2zqy.mongodb.net/todo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {

    const todoName = req.body.todoName;
    const isCompleted = req.body.isCompleted;
    // const days = req.body.days;

    const todo = new TodoModel({todoName: todoName, isCompleted: false});

    try{
        await todo.save();
        res.send("inserted data");
    }catch(err) {
        console.log(err);
    }
});

/*
find() metodu parametre olarak verilen, true/false değer döndüren test 
fonksiyonunu karşılayan dizi içerisindeki ilk elemanın değerini döndürür.
 Aksi halde undefined döndürür.
*/
app.get("/read", async (req, res) => {
    TodoModel.find({}, (err,result) =>{
        if(err){
            res.send(err);
        }

        res.send(result);
    })
    
});

app.put("/update", async (req, res) => {

    const newTodoName = req.body.newTodoName;
    const id = req.body.id;
    try{
        await TodoModel.findById(id, (err, updatedFood) => {
            updatedFood.todoName = newTodoName;
            updatedFood.save();
            res.send("update");
        })
    }catch(err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
    await TodoModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})

app.listen(5000, () => {
  console.log("server running on port 5000");
});
