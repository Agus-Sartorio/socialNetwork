import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorized } from "../../../actions";
import Layout from "../../Layout/Layout";
import { CardsAuthorize } from "./CardsAuthorize";
import { FormAuthorize } from "./FormAuthorize";

export const Authorize = () => {
  const dispatch = useDispatch();
  const usersAuthorized = useSelector((state) => state.authorized);
  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  return (
    <Layout>
      <p>Personas autorizadas</p>
      <FormAuthorize />
      {usersAuthorized?.length ? (
        usersAuthorized.map((e) => <CardsAuthorize users={e} />)
      ) : (
        <p></p>
      )}
    </Layout>
  );
};
