import { Section } from "./style";

export default function Questions() {
    
    const Toggle = (e) => {
        const element = e.target;
        const elementFather = element.parentNode;
        const classFather = elementFather.getAttribute("class");

        if(classFather === "active") {
            elementFather.classList.remove("active");
        } else {
            elementFather.classList.add("active");
        }
    }

    return (
        <Section id="faq">
            <div className="container">
                <h2>Perguntas Frequentes</h2>
                <article>
                    <label onClick={Toggle}>Como isso funciona?</label>
                    <p>Pedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitas</p>
                </article>
                <article>
                    <label onClick={Toggle}>Como isso funciona?</label>
                    <p>Pedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitas</p>
                </article>
                <article>
                    <label onClick={Toggle}>Como isso funciona?</label>
                    <p>Pedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitas</p>
                </article>
                <article>
                    <label onClick={Toggle}>Como isso funciona?</label>
                    <p>Pedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitasPedro Souza dereitas</p>
                </article>
            </div>
        </Section>
    )
}