import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import incomeImage from '../../assets/Icons.png'
import downImage from '../../assets/down.png'
import  {useState, useContext, type FormEvent}  from 'react'


import { TransactionContext } from '../../TransactionsContext'


interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps){


    const {createTransaction} = useContext(TransactionContext)

    const [type, setType] = useState('')

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');



    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        await createTransaction({title, amount, category, type})

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder='Título' />

                <input type="number" value={amount} onChange={event => setAmount(Number(event.target.value))} placeholder='Valor' />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImage} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={downImage} alt="Income" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text" value={category} onChange={event => setCategory(event.target.value)} placeholder='Categoria' />

                <button className='btn'>
                    Cadastrar
                </button>
            </Container>
        </Modal>

    )
}