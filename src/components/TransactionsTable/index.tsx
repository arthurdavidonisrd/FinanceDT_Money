import { useContext } from "react";
import { Container } from "./sytles";
import { TransactionContext } from "../../TransactionsContext";



export function TransactionsTable(){

    const {transactions} = useContext(TransactionContext)

    return(
       <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                   {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td className="title">
                                {transaction.title}
                            </td>
                            <td className={transaction.type}>
                                 {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                 }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                
                            </td>
                        </tr>
                   ))}
                   
                </tbody>
            </table>
       </Container> 
    )
}