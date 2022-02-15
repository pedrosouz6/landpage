import { Footerr } from "./style";
import Logo  from "../../images/logo/LogoPO.png";

export default function Footer() {
    return(
        <Footerr>
            <div className="center">
                <div className="container">
                    <p>Copyright © 2020</p>
                    <img src={Logo} />
                </div>
            </div>
        </Footerr>
    )
}