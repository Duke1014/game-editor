import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
