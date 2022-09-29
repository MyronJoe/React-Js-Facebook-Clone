import React from 'react'
import './Sidebar.css'
import SiderbarRow from './SiderbarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='sidebar'>
        <SiderbarRow src={user.photoURL}
        title={user.displayName}/>
        <SiderbarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
        <SiderbarRow Icon={EmojiFlagsIcon} title='Pages' />
        <SiderbarRow Icon={PeopleIcon} title='Friends' />
        <SiderbarRow Icon={ChatIcon} title='Messenger' />
        <SiderbarRow Icon={StorefrontIcon} title='Marketplace' />
        <SiderbarRow Icon={VideoLibraryIcon} title='Videos' />
        <SiderbarRow Icon={ExpandMoreIcon} title='More' />
        
    </div>
  )
}

export default Sidebar