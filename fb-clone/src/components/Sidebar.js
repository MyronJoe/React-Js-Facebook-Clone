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

function Sidebar() {
  return (
    <div>
        <SiderbarRow src='https://scontent.fenu1-1.fna.fbcdn.net/v/t1.6435-9/106494344_1593152077526839_1194996090190141473_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u1wGs27kSTEAX-mkM-U&tn=xzoBoIPHwqGeuQdX&_nc_ht=scontent.fenu1-1.fna&oh=00_AT-XCb7G1Uc-fiGfs_6ReSvJMhvQeoRmg1Q5DHUky51-eg&oe=6356F1F3' title='Myron joe'/>
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