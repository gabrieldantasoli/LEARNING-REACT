import { Link } from "react-router-dom"

import './Header-Style.css';


export default (props) => {
    const pages = ["/","/about"];

    return(
        <header>
            <div>
                <h1 id="logo">QuickNote</h1>
                {pages.map((item) => {
                    if (item != props.where) {
                        return (
                            <Link className="link" to={item}>{item === "/" ? "Home" : "About"}</Link>
                        )
                    }
                })}
            </div>
            
        </header>
    )
}