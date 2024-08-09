import "./wrapper.css"
import { GoArrowDownRight } from "react-icons/go";
export default function Wrapper() {
    return (
        <section className="container-wrapper">
            <div className="content-wrapper">
                <div className="wrapper-title">
                    <p>DEVELOPER</p>
                    <h1>AFONSO SILV</h1>
                    <p><GoArrowDownRight />FRONT END</p>
                </div>
            </div>
        </section>
    )
}