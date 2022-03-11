import React,  {useState}from "react";
import "./post.css";
import { Users } from "../../dummyData";
// import { MoreVert } from '@mui/icons-material'

function Post({post}) {
 const [like,setLike] = useState(post.like)
 const [isLiked,setIslike] = useState(false)

function likeHandler(){
 setLike(isLiked ? like-1 : like+1)
 setIslike(!isLiked)
 }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture}
              alt="person"
              className="postProfileImg"
            />
            <span className="postUsername">{Users.filter((u)=>u.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight"><img className="more" src="assets/icons/morevert.png" alt="more"  width={4} /></div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="post" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="like" className="likeIcon" onClick={likeHandler} />
                <img src={isLiked ? '/assets/heart2.png' : '/assets/heart.png'} alt="like" className="likeIcon"onClick={likeHandler}  />
                <span className="postLikeCounter">{/*{isLiked ? 'You and' : ''}*/} {like}  poeple liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
