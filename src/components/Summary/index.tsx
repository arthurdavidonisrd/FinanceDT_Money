import { Container } from "./sytles";
import Up from '../../assets/Icons.png'
import Down from '../../assets/down.png'
import Total from '../../assets/Vector (Stroke).png'
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Up} alt="Inputs img" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Down} alt="Outcomes img" />
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total img" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}