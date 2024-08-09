import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Cursor from "../components/cursor/Cursor"
import "./App.css"

export default function App() {
    return (
        <BrowserRouter>
            <div id="container">
                <div id="content">
                    {/* <Cursor /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}