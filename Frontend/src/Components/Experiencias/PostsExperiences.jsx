import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PostsExperiences() {
  const posts = useSelector((state) => state.experiencesPost);
  const myId = useSelector((state) => state.myId);
  console.log(posts, "experiences");

  return (
    <div>
      {posts?.map((el) => (
          <>
          <Link to={`/${myId.id === el.autorData[0].id ? 'myprofile' : `profile/${el.autorData[0].id}`}`} >
         <img src={el.autorData[0].profile} alt='' width={'20px'} height={'20px'}/>
        {el.autorData[0].fullname}
        </Link>
        <div>{el.description}</div>
        {el.tags[0]}
        
        </>
        
      ))}
    </div>
  );
}
