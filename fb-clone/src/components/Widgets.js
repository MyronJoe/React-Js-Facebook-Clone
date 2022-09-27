import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
        {/* <iframe title="This is a unique title" id="frame1" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmyron.joe.50&tabs=timeline&width=100%&height=100%&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="100%"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}

        <iframe title="This is a unique title" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=100%&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="500"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default Widgets