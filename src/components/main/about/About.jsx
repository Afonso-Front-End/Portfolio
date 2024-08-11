import "./about.css"
import { gsap } from "gsap/gsap-core"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"
import { useLayoutEffect } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function About() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const span = new SplitText(".text-about span")
            const spanChars = span.chars
            gsap.from(spanChars,{
                y: 100,
                duration: 0.3,
                stagger: 0.01,
                rotateY: "90deg",
                delay: -1,
                opacity: 0,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: ".text-about",
                    start: "top 50%",
                    end: "bottom bottom",
                    markers: true
                }
            })
        })

        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <section className="container-about">
            <div className="content-about">
                <div className="text-about">
                    <span>
                        <p>A passionate and motivated Junior Front-End Developer with  </p>
                    </span>
                    <span>
                        <p> a strong foundation in creating interactive user interfaces </p>
                    </span>
                    <span>
                        <p>and animations. Eager to learn and grow, they focus on building</p>
                    </span>
                    <span>
                        <p> clean, responsive, and user-friendly applications. Continuously </p>
                    </span>
                    <span>
                        <p> improving their skills, they are committed to delivering high-quality</p>
                    </span>
                    <span>
                        <p> code and exploring new tools and frameworks in the ever-evolving  </p>
                    </span>
                    <span>
                        <p>world of front-end development.</p>
                    </span>
                    <button>
                        <span></span>
                        MORE ABOUT ME
                    </button>
                </div>
            </div>
        </section>
    )
}