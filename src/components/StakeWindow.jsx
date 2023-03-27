import React, { useState } from 'react'

const StakeWindow = ({ setIsModalVisible }) => {

  const tabs = ['Stake', 'Unstake'];
  const [activeTab, setActiveTab] = useState('Stake');

  return (
    <div className='stake-window'>
      <header className='stake-window__header'>
        <h2 className='stake-window__title'>Stake LSD</h2>
        <button className='stake-window__close' onClick={() => setIsModalVisible(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </header>
      <div className='stake-window__wrapper'>
        <ul className={`stake-window__tabs ${activeTab === 'Unstake' && `stake-window__tabs--unstake`}`}>
          {
            tabs.map((tab) => <li className={`stake-window__tab ${activeTab === tab && 'active'}`} key={tab} onClick={() => setActiveTab(tab)}>{tab}</li>)
          }
        </ul>
        <form className='stake-window__form'>
          <div className='stake-window__form-wrapper'>
            <label htmlFor="stake-input">Stake</label>
            <p>
              Balance: <span>2,850.30 ETH</span>
            </p>
            <input type="text" placeholder='Enter an amount' id='stake-input' />
          </div>
          <div className='stake-window__total'>
            <span className='stake-window__subtitle'>Total</span>
            <button className='stake-window__max-btn'>Max</button>
            <b className='stake-window__total-amount'>=$0.00</b>
          </div>
          <footer className='stake-window__footer'>
            <button type='button' className='gray' onClick={() => setIsModalVisible(false)}>Cancel</button>
            <button type='submit' className='stake-window__footer-confirm purple'>Confirm</button>
          </footer>
        </form>
      </div>
    </div>
  )
}

export default StakeWindow;
