import React, { useEffect, useState } from 'react'
import { useAddress, useSigner } from '@thirdweb-dev/react'

const AddLiquidityForm = ({ setIsModalVisible }) => {

  return (
    <form className='stake-window__form'>
      <div className='stake-window__form-wrapper'>
        <label htmlFor="stake-eth-input">Stake ETH</label>
        <p>
          Balance: <span>2,850.30 ETH</span>
        </p>
        <input type="text" placeholder='Enter an amount' id='stake-eth-input' />
        <em>$1,264,300.50</em>
      </div>
      <div className='stake-window__form-wrapper'>
        <label htmlFor="stake-lsd-input">Stake LSD</label>
        <p>
          Balance: <span>286.0064 LSD</span>
        </p>
        <input type="text" placeholder='Enter an amount' id='stake-lsd-input' />
        <em>$1,264,300.50</em>
      </div>
      <footer className='stake-window__footer'>
        <button type='button' className='gray' onClick={() => setIsModalVisible(false)}>Cancel</button>
        <button type='submit' className='purple'>Unstake</button>
      </footer>
    </form>
  )
}

export default AddLiquidityForm;
