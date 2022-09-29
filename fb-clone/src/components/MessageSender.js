import { Avatar } from '@mui/material'
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


import { useStateValue } from './StateProvider';

  
function MessageSender() {

    const [{ user }, dispatch] = useStateValue()

    const [input, setInput] = useState('')
    const [ImageURL, setImageUrl] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(input)
        console.log(ImageURL)
        

        setImageUrl("")
        setInput("")
    }
  return (
    <div className='message__sender'>

        <div className='message__sender__top'>
            <Avatar src={user.photoURL} />

            <form >
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='message__sender__input' 
                type='text' 
                placeholder={`What's on your mind ${user.displayName}?`}
                />
                <input
                value={ImageURL}
                onChange={(e) => setImageUrl(e.target.value)}
                type='text' 
                placeholder='Image URL (Optional)' 
                className='message__sender__url'
                />

                <button type='submit' className='btn' onClick={handleSubmit}>Hidden</button>

            </form>

        </div>
        <div className='message__sender__bottom'>

            <div className='msg-option'>
                <VideocamIcon style={{color:'red'}}/>
                <h4>Live Video</h4>
            </div>
            <div className='msg-option'>
                <PhotoLibraryIcon style={{color:'green'}}/>
                <h4>Photo/Video</h4>
            </div>
            <div className='msg-option'>
                <InsertEmoticonIcon style={{color:'orange'}}/>
                <h4>Feeling/Activity</h4>
            </div>
        

        </div>

    </div>
  )
}

export default MessageSender