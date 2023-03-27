import React, { useState } from 'react'
import DappActions from '../../components/DappActions'
import DappFooter from '../../components/DappFooter'
import ModalWindow from '../../components/ModalWindow'
import SelectToken from '../../components/SelectToken'
import DappSettingsWindow from '../../components/DappSettingsWindow'
import './dapp.css'
import { showBalance } from '../../utils/helper'
import { useStakeEthInfo } from '../../hooks/useStakeEthInfo'

const Dapp = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState('select-token');
  const { totalEth } = useStakeEthInfo()

  return (
    <>
      <main className='dapp'>
        <section className='dapp-section'>
          <h1 className="dapp-section__title">
            <span>Stake coins</span>
            {showBalance(totalEth)}
          </h1>
          <p className="dapp-section__about">ETH staked</p>
        </section>
        <DappActions setIsModalVisible={setIsModalVisible} setCurrentModal={setCurrentModal} />
      </main>
      <DappFooter />
      {
        isModalVisible &&
        <ModalWindow>
          {
            currentModal === 'select-token' && <SelectToken setIsModalVisible={setIsModalVisible} />
          }

          {
            currentModal === 'settings' && <DappSettingsWindow setIsModalVisible={setIsModalVisible} />
          }
        </ModalWindow>
      }
    </>
  )
};

export default Dapp;
