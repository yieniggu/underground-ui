import React from 'react'

export const WalletConnectButton = (props) =>{
  const {className, children} = props

  return(
    <button className='rounded-full border-2 border-app-primary px-8 py-2 text-app-primary w-max text-xl'>Connect Wallet</button>
  )
}