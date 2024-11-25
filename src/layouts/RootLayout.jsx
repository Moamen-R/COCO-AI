import {Outlet, Link} from "react-router-dom";
import {Component} from "react";

export default class RootLayout extends Component {
    render() {
        return (
            <div className={"rootLayout"}>
                <header>
                    <Link to={"/"}>
                        <img src={"/logo.png"} alt="logo"/>
                        <span>COCO-AI</span>
                    </Link>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        )
    }
}
