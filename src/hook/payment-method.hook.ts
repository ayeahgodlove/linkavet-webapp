import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";

import { RootState } from "@store/store";
import { setActivePaymentMethod } from "@store/slice/payment-method.slice";

const usePaymentMethod = () => {
  const paymentMethod = useSelector<RootState, any>(
    (state) => state.paymentMethod.paymentMethod
  );

  const dispatch = useDispatch();

  const setPaymentMethod = (paymentMethod: string) => {
    dispatch(setActivePaymentMethod(paymentMethod));
  };

  useEffect(() => {
    // loadPaymentMethods();
  }, [paymentMethod]);

  return {
    paymentMethod,
    setPaymentMethod,
  };
};

export { usePaymentMethod };
