import { useEffect } from "react";
import { Container } from "./sytles";
import { api } from "../../services/api";



export function TransactionsTable(){

    useEffect(() =>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])



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
                    <tr>
                        <td className="title">
                            Desenvolvimento de sites
                        </td>
                        <td className="deposit">
                            R$ 500,00
                        </td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td className="title">
                            Aluguel
                        </td>
                        <td className="withdraw">
                            R$ 900,00
                        </td>
                        <td>Contas da casa</td>
                        <td>20/02/2021</td>
                    </tr>

                   
                </tbody>
            </table>
       </Container> 
    )
}