import { useState, useEffect } from 'react'
import { stakeEthInfo } from '../contracts/info'

export const useStakeEthInfo = () => {
  const [apr, setApr] = useState()
  const [minimum, setMinimum] = useState()
  const [totalEth, setTotalEth] = useState()
  const [totalLsEth, setTotalLsEth] = useState()
  const [exchangeRate, setExchangeRate] = useState()

  const setInfos = async () => {
    try {
      const { lsdApr, minimumAmount, ethAmount, lsdExchangeRate, lsEthTotalSupply } = await stakeEthInfo()
      
      setApr(lsdApr)
      setMinimum(minimumAmount)
      setTotalEth(ethAmount)
      setExchangeRate(lsdExchangeRate)
      setTotalLsEth(lsEthTotalSupply)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setInfos()
  }, [])

  return { apr, minimum, totalEth, totalLsEth, exchangeRate }
}