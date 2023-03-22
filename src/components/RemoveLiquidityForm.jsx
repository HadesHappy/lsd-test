import React from 'react'

const RemoveLiquidityForm = ({setIsModalVisible}) => {
  return (
    <form className='stake-window__form'>
      <div className='stake-window__form-wrapper'>
        <label htmlFor="unstake-input">LP-Token</label>
        <p>
          Balance: <span>2,850.30 ETH</span>
        </p>
        <input type="text" placeholder='Enter an amount' id='unstake-input' />
      </div>
      <div className='stake-window__total'>
        <span className='stake-window__subtitle'>Staked amount of LP token</span>
        <button className='stake-window__max-btn'>Max</button>
        <b className='stake-window__total-amount'>10.8612</b>
      </div>
      <footer className='stake-window__footer'>
        <button type='button' className='gray' onClick={() => setIsModalVisible(false)}>Cancel</button>
        <button type='submit' className='purple'>Unstake</button>
      </footer>
    </form>
  )
}

export default RemoveLiquidityForm;
