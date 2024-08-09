import "./skils.css"
import gsap from "gsap"
import SplitText from "gsap-trial/SplitText"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import { useEffect } from "react"
gsap.registerPlugin(SplitText, ScrollTrigger)
export default function Skils() {
    useEffect(() => {
        const tl = gsap.timeline()
        // const listItems = document.querySelectorAll(".content-skils ul li");

        // listItems.forEach(item => {
        //   const link = item.querySelector("a");
        //   const span = item.querySelector("span");
        
        //   item.addEventListener("mouseenter", () => {
        //     gsap.to(link, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
        //     gsap.to(span, { y: -25, duration: 0.3, ease: "power2.out" });
        //   });
        
        //   item.addEventListener("mouseleave", () => {
        //     gsap.to(link, { y: 100, opacity: 0, duration: 0.3, ease: "power2.in" });
        //     gsap.to(span, { y: 0, duration: 0.3, ease: "power2.in" });
        //   });
        // });
        return () => {
            tl.kill()
        }
    }, [])


    return (
        <section className="container-skils">
            <div className="content-skils">
                <ul>
                    <h2>EXPERTSES/SKILS</h2>
                    <li >
                        <p>-</p>
                        <span>HTML</span>
                        <a >HTML</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>CSS</span>
                        <a>CSS</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>JAVASCRIPT</span>
                        <a>JAVASCRIPT</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>MYSQL</span>
                        <a>MYSQL</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>NOSQL</span>
                        <a>NOSQL</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>NODEJS</span>
                        <a>NODEJS</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>-</p>
                        <span>REACTJS</span>
                        <a>REACTJS</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>ANGULARJS</span>
                        <a>ANGULARJS</a>
                    </li>
                    <li>
                        <p>-</p>
                        <span>TAURI</span>
                        <a>TAURI</a></li>
                    <li>
                        <p>-</p>
                        <span>GSAPGRENSHOK</span>
                        <a>GSAPGRENSHOK</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}