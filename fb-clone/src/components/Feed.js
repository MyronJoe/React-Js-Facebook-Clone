import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import { doc, onSnapshot, collection, where, query, orderBy, getFirestore} from "firebase/firestore";
import { useStateValue } from './StateProvider';



function Feed() {

  const [{ user }, dispatch] = useStateValue()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const post = query(collection(db, "posts"))
    const unsub = onSnapshot(post, (querySnapshot) => {
      // console.log(querySnapshot.docs.map(doc => doc.data()));
      setPosts( querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }) ));

      const citiesRef = collection(db, "posts");
      const doc = query(citiesRef,  orderBy("timestamp", "desc"));
    });
  }, [])
  console.log(posts)

  return (
    <div className='feed'>
        
        <StoryReel />
        {/* <MessageSender /> */}
      
        
        {posts.map((post) => (

          <Post 
          key={post.id}
          profilepic={post.data.profilepic}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          />

        ))}
        
    </div>
  )
}

export default Feed