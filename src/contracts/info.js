import { ethers } from 'ethers'
import { rpcUrl } from '../utils/constants'
import updateBalance from './abis/updateBalance.json'
import owner from './abis/owner.json'
import lsEth from './abis/lseth.json'
import { parseEther, formatEther } from '../utils/helper'

const getContracts = () => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

  const balanceContract = new ethers.Contract(updateBalance.address, updateBalance.abi, provider)
  const lsEthContract = new ethers.Contract(lsEth.address, lsEth.abi, provider)
  const ownerContract = new ethers.Contract(owner.address, owner.abi, provider)

  return { balanceContract, lsEthContract, ownerContract }
}

const stakeEthInfo = async () => {
  // Get LSDOwner contract
  const { ownerContract, lsEthContract, balanceContract } = getContracts()
  try {
    // Get Apr
    const lsdApr = Number(await ownerContract.getApy())

    // Get minimum deposit amount
    const minimumAmount = formatEther(await ownerContract.getMinimumDepositAmount())

    // Get Staked ETH Amount
    const ethAmount = formatEther(await balanceContract.getVirtualETHBalance())

    // Get exchange rate
    const lsdExchangeRate = formatEther(await lsEthContract.getExchangeRate())

    // Get Total Supply Amount
    const lsEthTotalSupply = formatEther(await lsEthContract.totalSupply())

    return { lsdApr, minimumAmount, ethAmount, lsdExchangeRate, lsEthTotalSupply }

  } catch (error) {
    console.log(error)
  }
}

export { stakeEthInfo }