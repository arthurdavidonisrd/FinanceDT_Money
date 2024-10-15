import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import {App} from './App.tsx'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {id: 1, title: 'Freelance de website', type: 'deposit', category: 'Development', amount: 15.000},
        {id: 2, title: 'Conta de luz', type: 'withdraw', category: 'Bills', amount: 150},
        {id: 3, title: 'Freelance de sistema', type: 'deposit', category: 'Development', amount: 18.000}
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')

    })

    this.post('transactions' ,(schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
