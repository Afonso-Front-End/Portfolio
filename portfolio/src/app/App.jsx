import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Cursor from "../components/cursor/Cursor"
import "./App.css"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import ScrollSmoother from "gsap-trial/ScrollSmoother"
import { useLayoutEffect, useRef } from "react"
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
export default function App() {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        const smoother = new ScrollSmoother({
            wrapper: containerRef.current,
            content: "#content",
            smooth: 1,
            effects: true
        })
    },[])
    return (
        <BrowserRouter>
            <div id="container" ref={containerRef}>
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