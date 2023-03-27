import React from 'react'
import DappSectionHeader from './DappSectionHeader'
import DappSectionReceive from './DappSectionReceive'
import DappSectionWithdraw from './DappSectionWithdraw'
import { useSelector } from 'react-redux'

const DappActions = ({ setIsModalVisible, setCurrentModal }) => {
  const stakeType = useSelector(state => state.stakeEthReducer.stakeType)
  const inputValue = useSelector(state => state.stakeEthReducer.inputValue)

  const handleStake = () => {
    console.log('input value: ', inputValue)
  }

  const handleUnstake = () => {
    console.log('input value: ', inputValue)
  }

  return (
    <div className='dapp-section__actions'>
      <div className="dapp-section__actions-wrapper">
        <DappSectionHeader setIsModalVisible={setIsModalVisible} setCurrentModal={setCurrentModal} />
        <DappSectionWithdraw setIsModalVisible={setIsModalVisible} />
        <DappSectionReceive setIsModalVisible={setIsModalVisible} />
      </div>
      {
        stakeType === 'Stake' ?
          <button type="button" className="dapp-section__submit" onClick = {handleStake}>Stake now</button>
          :
          <button type="button" className="dapp-section__submit" onClick = {handleUnstake}>Unstake now</button>
      }
    </div>
  )
}

export default DappActions;
