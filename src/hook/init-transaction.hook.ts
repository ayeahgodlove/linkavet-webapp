import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";

import { RootState } from "@store/store";
import { setActiveInitTransaction } from "@store/slice/init-transaction.slice";

const useInitTransaction = () => {
  const initTransaction = useSelector<RootState, any>(
    (state) => state.initTransaction.initTransaction
  );

  const dispatch = useDispatch();

  const setInitTransaction = (initTransaction: string) => {
    dispatch(setActiveInitTransaction(initTransaction));
  };

  useEffect(() => {
    // loadInitTransactions();
  }, [initTransaction]);

  return {
    initTransaction,
    setInitTransaction,
  };
};

export { useInitTransaction };
