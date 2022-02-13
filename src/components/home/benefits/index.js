import { Section } from "./style";

//Icons
import { FcBiohazard } from "react-icons/fc"
import { FcPlus } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

export default function Benefits () {
    return (
        <Section>
            <div className="center">
                <div className="container">
                   <header>
                       <h2>Os Benecífios dos Produtos Orgânicos</h2>
                   </header>
                   <article>
                        <div className="cards">
                            <div className="icon">
                                <i><FcPlus/></i>
                            </div>
                            <div className="title">
                                <h3>Mais saúde</h3>
                            </div>
                            
                            <div className="content">
                                <p>Alimentos orgânicos evitam problemas causados pela ingestão de substâncias químicas tóxicas, como agrotóxicos, fertilizantes, antibióticos e hormônios que podem causar desde reações alérgicas e respiratórias até doenças mais sérias.</p>
                            </div>
                       </div>
                       <div className="cards">
                            <div className="icon">
                                <i><FcOk/></i>
                            </div>

                            <div className="title">
                                <h3>Certificação</h3>
                            </div>
                            <div className="content">
                                <p>Os produtos orgânicos são certificados. Isso significa que, ao comprar um alimento que possui um selo de Orgânico, garante ao consumidor a qualidade do alimento consumido que é saudável e livre de resíduos tóxicos;</p>

                            </div>
                       </div>
                       <div className="cards">
                            <div className="icon">
                                <i><FcBiohazard/></i>
                            </div>

                            <div className="title">
                                <h3>Contaminação</h3>
                            </div>
                           
                            <div className="content">
                                <p>
                                O uso de fertilizantes na produção dos alimentos atinge o solo, o ar, a água, as pessoas e os animais. Já a produção de alimentos orgânicos preserva tais recursos naturais por não haver produtos químicos.
                                </p>
                            </div>
                       </div>
                       <div className="cards">
                            <div className="icon">
                                <i><FcBullish/></i>
                            </div>

                            <div className="title">
                                <h3>Nutrientes</h3>
                            </div>
                           
                            <div className="content">
                                <p>Os solos sem contaminação e enriquecidos com adubos naturais, como acontece nas plantações de alimentos orgânicos, produzem alimentos mais ricos em nutrientes</p>
                            </div>
                       </div>
                   </article>
                </div>
            </div>
        </Section>            
    )
}