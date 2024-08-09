import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import "./cursor.css"

export default function Cursor() {
    const cursor = useRef()

    useLayoutEffect(() => {
        window.addEventListener("mousemove", (event) => {
            gsap.to(cursor.current, {
                x: event.offsetX,
                y: event.offsetY,
            })
        })

        return (
            window.removeEventListener("mousemove", cursor)
        )
        
    }, [cursor])

    return (
        <div className="cursor" ref={cursor}></div>
    )
}