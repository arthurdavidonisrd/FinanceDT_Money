import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header'
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";


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
   <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionOpen}/>

      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionOpen}
      />
     
      <GlobalStyle/>

   </>
  )
}
