import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Post({profilepic, image, username, timestamp, message}) {
  return (
    <div className='post'>
        <div className='post__top'>
          <Avatar src={profilepic} className='post__avatar'/>
          <div className='post__topinfo'>
              <h4>{username}</h4>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>

        <div className='post__bottom'>
          <p>{message}</p>
        </div>
        <div className='post__image'>
          <img src={image} alt=""/>
        </div>

        <div className='post__options'>
          <div className='post__option'>
            <ThumbUpAltSharpIcon />
            <p>Like</p>
          </div>
          <div className='post__option'>
            <ChatBubbleOutlineSharpIcon />
            <p>Comment</p>
          </div>
          <div className='post__option'>
            <NearMeSharpIcon />
            <p>Share</p>
          </div>
          <div className='post__option'>
            <AccountCircleSharpIcon />
            <ExpandMoreSharpIcon />
          </div>
        </div>
    </div>
  )
}

export default Post