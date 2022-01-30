import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllPost, getCleanHome, getMyProfileData } from "../../actions";
import { format } from "timeago.js";


export default function Post () {
    
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(AllPost());
        dispatch(getMyProfileData())
        return () => {
            dispatch(getCleanHome())
        }
    },[dispatch])
    
    const post = useSelector((state => state.allPost))
    const myData = useSelector((state => state.myProfileData))

  
  

    return (

        <>         
         {post?.length? post.map((p)=> {
             return(
              <div key={p._id}>
                  <Link to={`/${p.autorData?.[0]?.id === myData?.data?.[0]?.id?`myprofile`: `profile/${p.autorData?.[0]?.id}`}`}>
                      <img src={p.autorData?.[0]?.profile} alt="img not found" width={"30px"} height={"30px"}/>
                  </Link>
                  <span>{p.autorData?.[0]?.fullname}</span>
                  <hr/>
                  <span>{format(p.createdAt)}</span>
                  <h1>{p.description}</h1>
                  <button>Like</button>
              </div>
         )}): <div>Cargando...</div>}
          
          </>


    )
}