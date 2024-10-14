import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import incomeImage from '../../assets/Icons.png'
import downImage from '../../assets/down.png'


interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Título' />

                <input type="number" placeholder='Valor' />

                <TransactionTypeContainer>
                    <button
                        type='button'
                    >
                        <img src={incomeImage} alt="Income" />
                        <span>Entrada</span>
                    </button>

                    <button
                        type='button'
                    >
                        <img src={downImage} alt="Income" />
                        <span>Entrada</span>
                    </button>

                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria' />

                <button className='btn'>
                    Cadastrar
                </button>
            </Container>
        </Modal>

    )
}