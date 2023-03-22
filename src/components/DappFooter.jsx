import React from 'react'

const DappFooter = () => {
  return (
    <footer className="dapp-footer">
      <ul className="dapp-footer__info">
        <li>
          <span>414,750</span> ETH staking across
        </li>
        <li>
          <span>2,146</span> Total LS-ETH Supply
        </li>
      </ul>
      <a href="" className='dapp-footer__supported'>
        A product by LSD Labs FZCO (Dubai)
        <img src="img/logo.svg" alt="$LSD logo smiile" />
      </a>
    </footer>
  )
}

export default DappFooter;
