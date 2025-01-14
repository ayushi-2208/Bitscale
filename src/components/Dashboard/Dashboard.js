import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Enrich from '../../images/enrich.svg'
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-left'>
        <div className='dashboard-search-input'>
        <SearchRoundedIcon style={{backgroundColor:"transparent"}}/>
        <input type='text' placeholder='Search'/>
        </div>
        <div className='dashboard-smaller-container'>
        <TableRowsOutlinedIcon style={{width:"22px", height:"22px"}}/>
        <span>1/1 Row</span>
        </div>
        <div className='dashboard-smaller-container'>
        <ViewWeekOutlinedIcon style={{width:"22px", height:"22px"}}/>
        <span>3/3 Column</span>
        </div>
        <div className='dashboard-smaller-container'>
        <FilterAltOutlinedIcon style={{width:"22px", height:"22px"}}/>
        <span>0 filter</span>
        </div>
        <div className='dashboard-smaller-container'>
        <SwapVertOutlinedIcon style={{width:"22px", height:"22px"}}/>
        <span>Sort</span>
        </div>
      </div>
      <div className='dashboard-right'>
        <button className='dashboard-enrich'>
          <img style={{width:"16px",height:"16px",backgroundColor:"transparent"}} src={Enrich} alt=''/>
          Enrich
        </button>
       <ShareOutlinedIcon style={{width:"22px", height:"22px"}}/>
       <FileDownloadOutlinedIcon style={{width:"22px", height:"22px"}}/>
       <DeleteOutlineOutlinedIcon style={{width:"22px", height:"22px"}}/>
      </div>
    </div>
  )
}

export default Dashboard
