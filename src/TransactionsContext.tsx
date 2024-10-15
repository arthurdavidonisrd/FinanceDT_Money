import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transactions{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string
 
}

interface TransactionsProviderProps{
  children: React.ReactNode;
}


type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}



export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({children} : TransactionsProviderProps){

  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => {
        setTransactions(response.data.transactions || []); // Ajuste se necessário
      })
      .catch(error => {
        console.error("Error fetching transactions:", error);
      });
}, []);

async function createTransaction(transactionInput: TransactionInput){
 const response = await api.post('/transactions', transactionInput)
 const {transaction} = response.data;

 setTransactions([...transactions, transaction])
}

return(
  <TransactionContext.Provider value={{transactions, createTransaction}}>
    {children}
  </TransactionContext.Provider>
)
  

}
