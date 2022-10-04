import { Route, Routes } from "react-router-dom"
import "./App.css"
import LoginPage from "./Components/Auth/LoginPage"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/login"  element={<LoginPage />}/>
    </Routes>
    </>
  )
}

export default App