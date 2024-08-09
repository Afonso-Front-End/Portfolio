import { useLayoutEffect } from "react"
import "./header.css"
import gsap from "gsap"

export default function Header() {
    useLayoutEffect(() => {
        const startLoader = () => {
            let conterElement = document.querySelector(".cont")
            let currentValue = 0

            const updateCounter = () => {
                if (currentValue === 100) {
                    return
                }
                currentValue += Math.floor(Math.random() * 10) + 1;

                if (currentValue > 100) {
                    currentValue = 100
                }
                conterElement.textContent = currentValue

                let delay = Math.floor(Math.random() * 200) + 50;
                setTimeout(updateCounter, delay)
            }

            updateCounter()
        }
        startLoader()

        gsap.to(".cont", 0.25, {
            delay: 3.5,
            opacity: 0,
            zIndex: -1
        })
        gsap.to(".bar", 1.5, {
            height: 0,
            delay: 3.5,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut"
        })

    }, [])
    return (
        <header>
            <nav>
                <div></div>
                <ul>
                    <li></li>
                </ul>
            </nav>
            <div className="loading">
                <div className="loader">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="cont">
                        0
                    </div>
                </div>
            </div>
            <menu className="overlay">

            </menu>
        </header>
    )
}