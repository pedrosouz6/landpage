import { HeaderSite } from "./style";

export default function Header() {
    return (
        <HeaderSite>
            <div className="center">
                <div className="container">
                    <div className="logo">
                        <h2>Logo</h2>
                    </div>
                    <nav>
                        <ul className="list">
                            <li>Sobre</li>
                            <li>Contato</li>
                            <li>Como funciona</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderSite>    
    )
}