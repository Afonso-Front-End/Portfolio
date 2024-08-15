import "./wrapper.css"
import { GoArrowDownRight } from "react-icons/go";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { useLayoutEffect } from "react";

gsap.registerPlugin(SplitText)
export default function Wrapper() {
    // useLayoutEffect(() => {
    //     const h1Text = new SplitText(".wrapper-title p", { type: "chars" })
    //     const h1TextChars = h1Text.chars
    //     gsap.from(h1TextChars, {
    //         y: 200,
    //         stagger: 0.05,
    //         duration: 2,
    //         ease: "power4.inOut"
    //     })
    // }, [])

    return (
        <section className="container-wrapper">
            <div className="content-wrapper">
                <div className="wrapper-title">
                    {/* <p>DEVELOPPER</p> */}
                    {/* <span><GoArrowDownRight size={20} />AFONSO SILVA <br />PORTFOLIO</span> */}
                </div>
            </div>
        </section>
    )
}