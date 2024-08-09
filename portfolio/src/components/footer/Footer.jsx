import "./footer.css"
import { GoArrowDownRight } from "react-icons/go";
export default function Footer() {
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
                    <li><a href="#"><GoArrowDownRight size={20}/>LINKEDIN</a></li>
                    <li><a href="#"><GoArrowDownRight size={20}/>GITHUB</a></li>
                    <li><a href="#"><GoArrowDownRight size={20}/>INSTAGRAN</a></li>
                </ul>
            </div>
        </footer>
    )
}