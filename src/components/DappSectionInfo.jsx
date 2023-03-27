import React from 'react'
import { useStakeEthInfo } from '../hooks/useStakeEthInfo'
import { showRate } from '../utils/helper'

const DappSectionInfo = () => {

  const { apr, minimum,totalEth, totalLsEth, exchangeRate } = useStakeEthInfo()
  
  return (
    <div className="dapp-section__info">
      <p className="dapp-section__min">
        Min deposit ETH
        <span>{minimum} ETH</span>
      </p>
      <div className="dapp-section__info-list">
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Exchange rate</li>
          <li className="dapp-section__info-numbers">1 ETH = {showRate(exchangeRate)} LS-ETH</li>
          <li className="dapp-section__info-tip">
            <button className="dapp-section__info-button">Info</button>
            <span className='dapp-section__info-tip-text'>The amount you expect to receive at the current market price. Yoy may receive less or more if the market price changes while your trnscation is pending.</span>
          </li>
        </ul>
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Average Return</li>
          <li className="dapp-section__info-numbers">
            <span className="green">≈ {apr/100}%</span> APR
          </li>
          <li className="dapp-section__info-tip">
            <button className="dapp-section__info-button">Info</button>
            <span className='dapp-section__info-tip-text'>The amount you expect to receive at the current market price. Yoy may receive less or more if the market price changes while your trnscation is pending.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DappSectionInfo;
