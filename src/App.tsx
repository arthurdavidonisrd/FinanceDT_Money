import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header'
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";
import {  TransactionsProvider } from "./TransactionsContext";


Modal.setAppElement('#root')

export function App() {

  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  function handleOpenNewTransactionOpen(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionOpen(){
      setIsNewTransactionModalOpen(false);
  }

  return (
   <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionOpen}/>

      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionOpen}
      />
     
      <GlobalStyle/>

   </TransactionsProvider>
  )
}
