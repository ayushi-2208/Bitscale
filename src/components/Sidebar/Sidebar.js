import React from 'react'
// import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
// import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
// import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
// import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import firstIcon from '../../images/Icon.svg';
import secondIcon from '../../images/2.svg';
import thirdIcon from '../../images/3.svg';
import fourthIcon from '../../images/4.svg';
import CoinStack from '../../images/coins-stacked-01.svg'
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-container-top'>
      <img src={thirdIcon} alt=''/>
      <img src={secondIcon} alt=''/>
      <img src={fourthIcon} alt=''/>
      </div>
      <div className='sidebar-container-bottom'>
      <img src={firstIcon} alt=''/>
        <img src={CoinStack} alt=''/>
      </div>
    </div>
  )
}

export default Sidebar
