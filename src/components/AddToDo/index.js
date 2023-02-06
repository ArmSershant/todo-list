import { useState } from "react"
import styles from "./style.module.css"
import { db } from "../../firebase-config"
import { addDoc, collection } from "firebase/firestore"
const AddToDo = () => {
  const toDos = collection(db, "todos")
  const [todo, setTodo] = useState({ title: "", completed: false })
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!todo.title.trim()) {
      setError("Please write something")
    } else {
      await addDoc(toDos, todo)
      setTodo({ title: "" })
      setError("")
    }
  }
  return (
    <div>
      <p className={styles.error}>{error}</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            className={styles.textInput}
            placeholder="Add new ToDo"
            type="text"
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value })
            }}
          />
          <div>
            <button className={styles.btnAdd} type="submit">
              Add
            </button>
          </div>
        </label>
      </form>
    </div>
  )
}
export default AddToDo
