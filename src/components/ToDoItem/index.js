import styles from "./style.module.css"
import { useNavigate } from "react-router-dom"
const ToDoItem = (props) => {
  const navigate = useNavigate()
  const style =
    styles.flex +
    (props.item.completed ? " " + styles.done : " " + styles.active)
  return (
    <div className={styles.flex}>
      <p className={style}>{props.item.title}</p>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={props.onChangeStatus(props.item.id)}
      />
      <button
        onClick={() => props.onDelete(props.item.id)}
        className={styles.delete}
      >
        Delete
      </button>
      <button
        onClick={() => navigate("todo/edit/" + props.item.id)}
        className={styles.edit}
      >
        Edit
      </button>
    </div>
  )
}
export default ToDoItem
