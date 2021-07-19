import React from 'react'
import './button.css'

const clicou =()=>{
    document.addEventListener('click',e =>{
      const el = e.target
      if (el.classList.contains('bt')){
        alert('Pagamento Ralizado')
      }
  })
  }

export const ButonTotal = () => {
    return(
        <button className="bt" onClick={clicou()}>Pagar Agora</button>
    )
}