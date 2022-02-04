import { getMyProfileData } from "../../actions";
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import EditProfile from './EditProfile';
import Layout from '../Layout/Layout'
import { Loader } from "../Loader/Loader";

function Edit() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.myProfileData)

  useEffect(() => {
    dispatch(getMyProfileData())
  }, [dispatch])

  return (
    <Layout>
      {userInfo.data ? <EditProfile userInfo={userInfo.data[0]} /> : <Loader></Loader>}
    </Layout>

  );
}

export default Edit;

