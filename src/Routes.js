import { BrowserRouter, Route, Routes } from "react-router-dom"
import ToDoList from "./components/ToDoList/index"
import EditToDo from "./components/EditToDo/index"
export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ToDoList />} />
        <Route path="todo/edit/:id" element={<EditToDo />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
