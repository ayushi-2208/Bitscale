import React from 'react'
import './header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-container-right'>
      <ArrowBackIcon style={{width:"18px", height:"18px"}}/>
      <span>Name of the file</span>
    </div>
    <div className='header-container-left'>
      <div className='header-subcontainer-left'>
      <ToggleOnRoundedIcon style={{width:"40px",height:"40px",color:"#0E9F6E"}} />
      <span>Auto save</span>
      </div>
      <div className='header-circle'>
      <PersonOutlinedIcon style={{width:"18px", height:"18px",backgroundColor:"transparent",color:"#D03801"}}/>
      </div>
      
    </div>
    </div>
    
  )
}

export default Header
