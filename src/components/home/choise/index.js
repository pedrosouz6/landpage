import { Section } from "./style";

//Icons
import { FcReadingEbook } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

export default function Choise() {
    return(
        <Section>
            <div className="center">
                <h2>Qual o Seu Perfil?</h2>
                <div className="container">
                    <div className="cards">
                        <div className="icons">
                            <i><FcShop/></i>
                        </div>
                        <div className="title">
                            <h4>Produtor</h4>
                        </div>
                        <ul>
                            <li> <i><FcOk/></i> Vender seus produtos com mais facilidade</li>
                            <li> <i><FcOk/></i> Aumentar as vendas</li>
                            <li> <i><FcOk/></i> Facilidade de uso</li>
                            <button>Acessar</button>
                        </ul>
                    </div>

                    <div className="cards">
                        <div className="icons">
                            <i><FcReadingEbook/></i>
                        </div>
                        <div className="title">
                            <h4>Consumidor</h4>
                        </div>
                        <ul>
                            <li> <i><FcOk/></i> Acesso aos produtos orgânicos</li>
                            <li> <i><FcOk/></i> Produtos baratos</li>
                            <li> <i><FcOk/></i> Facilidade de uso</li>
                            <button>Acessar</button>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}