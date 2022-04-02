import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const LikeButton = ({blog, id, countNumber,allReadyLiked, blogComments, rendering, setRendering}) => {
    const {user} = useFirebase()
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(countNumber)
    const [liker, setLiker] = useState([])
    const [effectRender, setEffectRender] = useState(0)

    console.log(rendering);

    useEffect(() => {
      if (allReadyLiked) {
        setLike(allReadyLiked)
      }
      else{
        setLike(false)
      }

    },[allReadyLiked])

    
    const likeMinus = () => {
        setLike(false)
        setLikeCount(parseInt(countNumber) - 1)
        const userWithdraw = blog?.likers?.filter(l => l?.likerEmail !== user?.email)
        setLiker(userWithdraw)
        setEffectRender(effectRender + 1)
        
      }
      const likePlus = () => {
        setLike(true)
        setLikeCount(parseInt(countNumber) + 1)
        setLiker({likerEmail : user.email})
        setEffectRender(effectRender + 1)
      }
    useEffect(() => {
        if (effectRender) {
          
          if (like) {
            const likes = {
              likes : likeCount,
              likers : [liker, ...blog?.likers]
            }
            axios.put(`http://localhost:5000/blog/likes/${id}`, likes)
          }
          else{
            const likes = {
              likes : likeCount,
              likers : [...liker]
            }
            axios.put(`http://localhost:5000/blog/likes/${id}`, likes)
          }
          setRendering(rendering + 1)
        }

 
      },[likeCount])
    return (
        <div className="like-comment mt-3 d-flex justify-content-between fs-3">
            <div>
              <span className="me-3"> {blog?.likes} <i className="fas fa-heart text-danger"></i></span>
              <span> {blogComments.length} <i className="fas fa-comment text-success"></i></span>
              </div>
              <div>
              {
                like ? <i onClick={likeMinus} className="fas fa-heart text-danger"></i>: 
                <i onClick={likePlus} className="far fa-heart text-danger"></i>
              }
              </div>
        </div>
    );
};

export default LikeButton;