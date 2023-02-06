import AddToDo from "./../AddToDo/index"
import ToDoItem from "./../ToDoItem/index"
import styles from "./style.module.css"
import { useState, useEffect } from "react"
import { db } from "../../firebase-config"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const changeToDoStatus = (id) => {
    // setTodos([
    //   ...todos.map((elm) =>
    //     elm.id !== id ? elm : { ...elm, completed: !elm.completed }
    //   ),
    // ])
  }
  const handleDelete = async (id) => {
    let item = await doc(db, "todos", id)
    await deleteDoc(item)
    setTodos([...todos.filter((elm) => elm.id !== id)])
  }
  const todoList = collection(db, "todos")
  const loadToDos = async () => {
    let data = await getDocs(todoList)
    setTodos(data.docs.map((elm) => ({ ...elm.data(), id: elm.id })))
  }
  useEffect(() => {
    loadToDos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <h3 className={styles.title}>ToDoList</h3>
      <h4 className={styles.count}>You have {todos.length} ToDo's</h4>
      <AddToDo />
      {todos.map((elm) => {
        return (
          <ToDoItem
            onDelete={handleDelete}
            onChangeStatus={changeToDoStatus}
            item={elm}
            key={elm.id}
          />
        )
      })}
    </div>
  )
}
export default ToDoList
