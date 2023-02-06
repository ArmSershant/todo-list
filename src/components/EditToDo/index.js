import { useParams } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../firebase-config"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.css"
const EditToDo = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const getTodo = async () => {
    let todo = doc(db, "todos", id)
    let info = await getDoc(todo)
    setData(info.data())
  }
  const handleSubmit = async (e) => {
     e.preventDefault()
     if (!data.title.trim()) {
        setError("ToDo can't be empty")
     } else {
        let docRef = doc(db, "todos", id)
        await updateDoc(docRef, data)
        navigate("/")
     }
  }
  useEffect(() => {
    getTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p className={styles.error}>{error}</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <input
                className={styles.textInput}
                placeholder="Change your ToDo"
                type="text"
                value={data.title}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value })
                }}
              />
              <div>
                <button className={styles.btnUpdate} type="submit">
                  Update
                </button>
              </div>
            </label>
          </form>
        </div>
      )}
    </div>
  )
}
export default EditToDo
