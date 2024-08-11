import "./footer.css"
import { GoArrowDownRight } from "react-icons/go";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { useLayoutEffect } from "react";
gsap.registerPlugin(SplitText)
export default function Footer() {

    useLayoutEffect(() => {
        const text = new SplitText(".footer-text h1", { type: "chars" })
        const textChars = text.chars
        gsap.from(textChars, {
            y: 250,
            duration: 0.5,
            stagger: 0.07,
            scrollTrigger: {
                trigger: ".footer-text",
                start: "top top",
                end: "bottom bottom",
            }
        })
    }, [])
    return (
        <footer>
            <div className="footer-text">
                <h1>Interested?</h1>
                <button>
                    <span></span>
                    <a href="mailto:">DROP ME AL EMAIL</a>
                </button>
            </div>
            <div className="links">
                <p>©️2024-AFONSO</p>
                <ul>
                    <li><a href="#"><GoArrowDownRight size={20} />LINKEDIN</a></li>
                    <li><a href="#"><GoArrowDownRight size={20} />GITHUB</a></li>
                    <li><a href="#"><GoArrowDownRight size={20} />INSTAGRAN</a></li>
                </ul>
            </div>
        </footer>
    )
}