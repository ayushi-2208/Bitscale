import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div>
        <div className='dashboard-search-input'>
        <SearchRoundedIcon/>
        <input type='text' placeholder='Search'/>
        </div>
        <div>
        <TableRowsOutlinedIcon/>
        <span>1/1 Row</span>
        </div>
        <div>
        <ViewWeekOutlinedIcon/>
        <span>3/3 Column</span>
        </div>
        <div>
        <FilterAltOutlinedIcon/>
        <span>0 filter</span>
        </div>
        <div>
        <SwapVertOutlinedIcon/>
        <span>Sort</span>
        </div>
      </div>
      <div>
       <ShareOutlinedIcon/>
       <FileDownloadOutlinedIcon/>
       <DeleteOutlineOutlinedIcon/>
      </div>
    </div>
  )
}

export default Dashboard
