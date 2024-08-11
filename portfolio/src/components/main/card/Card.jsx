import { useEffect, useLayoutEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import "./card.css"

import img01 from "./image/img-01.jpg"
import img02 from "./image/img-02.jpg"
import img03 from "./image/img-03.jpg"
import img04 from "./image/img-04.jpg"
import img05 from "./image/img-05.jpg"

gsap.registerPlugin(ScrollTrigger)
export default function Card() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const footer = document.querySelector(".footer-card");
            const lastCard = document.querySelector(".card.scroll");
            const pinnedSection = gsap.utils.toArray(".pinned");

            pinnedSection.forEach((section, index, sections) => {
                let imgs = section.querySelectorAll(".img")

                let nextSections = sections[index + 1] || lastCard;
                let endScalePoint = `top+=${nextSections.offsetTop - section.offsetTop} top`;

                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        markers: true,
                        start: "top top",
                        end: index === sections.length ? `+=${lastCard.offsetHeight / 2}` : footer.offsetTop - window.innerHeight,
                        pin: true,
                        pinSpacing: false,
                        scrub: 1,
                    },
                });
                imgs.forEach((img) => {
                    gsap.fromTo(img, { scale: 1 }, {
                        scale: 0.5,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: endScalePoint,
                            scrub: 1
                        }
                    })
                })
            });
        })
        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <div className="container-card">

            <section className="card pinned">
                <div className="img"><img src={img01} alt="" /></div>
            </section>

            <section className="card pinned">
                <div className="img"><img src={img02} alt="" /></div>
            </section>
            <section className="card pinned">
                <div className="img"><img src={img03} alt="" /></div>
            </section>
            <section className="card pinned">
                <div className="img"><img src={img04} alt="" /></div>
            </section>
            <section className="card pinned">
                <div className="img"><img src={img05} alt="" /></div>
            </section>
            <section className="card scroll">
                <div className="img"><img src={img05} alt="" /></div>
            </section>

            <section className="footer-card">
                <button>
                    <span></span>
                    MORE ABOUT ME
                </button>
            </section>
        </div>
    )
}