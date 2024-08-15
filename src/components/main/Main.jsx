import Wrapper from "./wrapper/Wrapper"
import About from "./about/About"
import Skils from "./skils/Skils"
import Card from "./card/Card"
export default function Main(){
    return(
        <main>
            <Wrapper/>
            <About/>
            <Skils/>
            {/* <Card/> */}
        </main>
    )
}
