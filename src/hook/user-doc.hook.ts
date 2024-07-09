import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { UserDocService } from "../services/user-doc.service";
import { RootState } from "@store/store";
import { IUserDoc } from "@model/user-doc.model";
import {
  addUserDocSuccess,
  editUserDocSuccess,
  fetchUserDocsAsync,
  setActiveUserDoc,
} from "@store/slice/user-doc.slice";

const useUserDoc = () => {
  const userDocs = useSelector<RootState, IUserDoc[]>(
    (state) => state.userDoc.userDocs
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.userDoc.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.userDoc.initialFetch
  );
  const userDoc = useSelector<RootState, IUserDoc>(
    (state) => state.userDoc.userDoc
  );

  const dispatch = useDispatch();

  const loadUserDocs = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchUserDocsAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addUserDoc = async (userDoc: IUserDoc) => {
    return await UserDocService.create(userDoc)
      .then((userDocResponse) => {
        dispatch(addUserDocSuccess(userDocResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  const setUserDoc = (userDoc: IUserDoc) => {
    dispatch(setActiveUserDoc(userDoc));
  };

  const editUserDoc = async (userDoc: IUserDoc) => {
    return await UserDocService.update(userDoc)
      .then((userDocResponse) => {
        dispatch(editUserDocSuccess(userDocResponse.data));
        setUserDoc(userDocResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  useEffect(() => {
    // loadUserDocs();
  }, [userDoc, userDocs, isLoading, initialFetch]);

  return {
    userDoc,
    userDocs,
    isLoading,
    initialFetch,
    addUserDoc,
    editUserDoc,
    setUserDoc,
  };
};

export { useUserDoc };
