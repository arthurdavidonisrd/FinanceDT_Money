import { Container } from "./sytles";
import Up from '../../assets/Icons.png'
import Down from '../../assets/down.png'
import Total from '../../assets/Vector (Stroke).png'
import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";
export function Summary(){

    const {transactions} = useContext(TransactionContext)

    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }  

        return acc;

    }, {deposits: 0, withdraws: 0, total: 0})

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Up} alt="Inputs img" />
                </header>
                <strong>
                    {summary.deposits.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Down} alt="Outcomes img" />
                </header>
                <strong>
                    - {summary.withdraws.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total img" />
                </header>
                <strong>
                    {summary.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </strong>
            </div>
        </Container>
    )
}
