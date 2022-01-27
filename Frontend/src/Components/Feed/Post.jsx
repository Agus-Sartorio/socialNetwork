
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllPost } from "../../actions";
import { format } from "timeago.js";


export default function Post () {
    
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(AllPost());
    },[dispatch])
    
    const post = useSelector((state => state.allPost))
    console.log(post, 'allpoststate')
  

    return (

        <>         
         {post.map((p)=> {
             return(
              <div key={p._id}>
                  <Link to={`/profile/${p.autor.id}`}>
                      <img src={p.autor.profile} alt="img not found" width={"30px"} height={"30px"}/>
                  </Link>
                  <span>{p.autor.fullname}</span>
                  <hr/>
                  <span>{format(p.createdAt)}</span>
                  <h1>{p.description}</h1>
                  <button>Like</button>
              </div>
         )})}
          
          </>


    )
}