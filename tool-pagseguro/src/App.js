import React, { useState } from 'react';
import './App.css';

function App() {

  const [disabled, setDisabled] = useState(false)
  const [token, setToken] = useState()
  const [hashUser, setHasUser] = useState()
  const [error, setError] = useState()
  const [session, setSession] = useState()

  async function generate() {
    setError(null)
    setDisabled(true)
    window.PagSeguroDirectPayment.setSessionId(session)
    window.PagSeguroDirectPayment.createCardToken({
      cardNumber: '4739458879884732', // Número do cartão de crédito
      brand: 'visa', // Bandeira do cartão
      cvv: '657', // CVV do cartão
      expirationMonth: '12', // Mês da expiração do cartão
      expirationYear: '2019', // Ano da expiração do cartão, é necessário os 4 dígitos.
      success: function(response) {
        setToken(response.card.token)
        window.PagSeguroDirectPayment.onSenderHashReady(function(response){
          setDisabled(false)
          setHasUser(response.senderHash)
        });
      },
      error: function(response) {
        setError(response)
        setDisabled(false)
      },
      complete: function(response) {
          setDisabled(false)
      }
    })
  }

  return (
    <div className="App">
      <button disabled={disabled} onClick={generate} >generate</button>
      <input placeholder="Session id" onChange={event => setSession(event.target.value)} />
      <p>Token Card: { token }</p>
      <p>Hash User: { hashUser }</p>
      {error && <p>Error: { JSON.stringify(error) }</p>}
    </div>
  );
}

export default App;
