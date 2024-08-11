import { useEffect, useLayoutEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
import "./card.css"

import img01 from "./image/und-clone.png"
import img02 from "./image/rejouice-clone.png"
import img03 from "./image/models.png"
import img04 from "./image/cadastro.png"
import img05 from "./image/woodpecker.png"
import img06 from "./image/nitendo.png"

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
                <div className="img">
                    <img src={img01} alt="" />
                </div>
            </section>

            <section className="card pinned">
                <div className="img">
                    <img src={img02} alt="" />
                </div>
            </section>
            <section className="card pinned">
                <div className="img">
                    <img src={img03} alt="" />
                </div>
            </section>
            <section className="card  scroll">
                <div className="img">
                    <img src={img06} alt="" />
                </div>
            </section>
            <div className="footer-card">
                <button>
                    <span></span>
                    VIEW PROJECTS
                </button>
            </div>
        </div>
    )
}