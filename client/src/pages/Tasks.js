import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import Checkbox from "../components/Checkbox";
import * as Icon from "react-icons/fi";

function Tasks() {
  const [todoName, setTodoName] = useState("");
  const [isCompleted, setIsCompleted] = useState(null);
  const [newTodoName, setNewTodoName] = useState("");

  const [todoList, setTodoList] = useState([]);

  useEffect(async () => {
    // Axios.get("http://localhost:5000/read").then((response) => {
    //   setTodoList(response.data);
    // });

    const response = await fetch("http://localhost:5000/read");
    const myJson = await response.json();
    setTodoList(myJson);
  }, []);

  const addToList = async () => {
    // //console.log(foodName + days);
    // Axios.post("http://localhost:5000/insert", {
    //   todoName: todoName,
    //   isCompleted: isCompleted,
    // });

    window.location.reload();

    const newTodo = { todoName: todoName, isCompleted: isCompleted };
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    };
    const response = await fetch("http://localhost:5000/insert", options);
    if (response.ok) {
      const d = await response.json();

      setTodoList(d);
    } else {
      throw new Error("Something went wrong ...");
    }
  };

  const updateFood = async (id) => {
    // Axios.put("http://localhost:5000/update", {
    //   id: id,
    //   newTodoName: newTodoName,
    // });
    // window.location.reload();

    window.location.reload();

    const newTodo = { id: id, newTodoName: newTodoName };
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    };
    const response = await fetch("http://localhost:5000/update", options);
    if (response.ok) {
      const d = await response.json();

      setTodoList(d);
    } else {
      throw new Error("Something went wrong ...");
    }
  };

  const deleteFood = async (id) => {
    // Axios.delete(`http://localhost:5000/delete/${id}`);
    window.location.reload();

    return await fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
    }).then((response) =>
      setTodoList({
        todoList: [...todoList.filter((todo) => todo.id !== id)],
      })
    );
  };
  // const markComplete = (todoName) => {
  //   this.setCompleted({
  //     todoList:todoList.map((todo) => {
  //       if (todo.todoName === todoName) todo.completed = !todo.completed;

  //       return todo;
  //     }),
  //   });
  // };

  const completeTodo = (id) => {
    const newTodos = [...todoList];
    newTodos[id].isCompleted = true;
    setTodoList(newTodos);
  };

  const onSubmit = (e) => {
    e.prevenDefault();

    setTodoList();
  }



  return (
    <div className="app">
      <div className="add-note">
        <form onSubmit={() => onSubmit()}>
          <input
            className="input-add"
            type="text"
            placeholder="New Todo..."
            onChange={(event) => {
              setTodoName(event.target.value);
            }}
            autoFocus
          />
          <button className="btn" onClick={() => addToList()}>
            <FaPlus size="27px" />
          </button>
        </form>
      </div>
      <div className="items">
        {todoList.map((val, key, completeTodo) => {
          return (
            <div key={key} className="item">
              <li className={val.isCompleted ? "done" : "li-item"}>
                <div className="item-title">
                  <div className="check-input">
                    <Checkbox
                      icon={
                        <div
                          style={{
                            display: "flex",
                            flex: 1,
                            backgroundColor: "#0F053C",
                            borderRadius: 20,
                          }}
                        >
                          <Icon.FiCheck color="#fff" size={20} />
                        </div>
                      }
                      className="check-label"
                      name="my-input"
                      onClick={() => completeTodo(key)}
                      borderColor="#0F053C"
                      borderRadius={20}
                      style={{ cursor: "pointer" }}
                      labelStyle={{ marginLeft: 5, userSelect: "none" }}
                    />
                    <input
                      type="text"
                      className="val-todo"
                      defaultValue={val.todoName}
                      onChange={(event) => {
                        setNewTodoName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="btns">
                    <button
                      className="btn-del"
                      onClick={() => deleteFood(val._id)}
                    >
                      <AiFillDelete size={17} color={"#060b26"} />
                    </button>
                    <button
                      className="btn-upd"
                      onClick={() => updateFood(val._id)}
                    >
                      <MdEdit size={17} color={"#060b26"} />
                    </button>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
