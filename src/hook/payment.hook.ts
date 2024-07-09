import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { PaymentService } from "../services/payment.service";
import { RootState } from "@store/store";
import { IPayment } from "@model/payments.model";
import {
  addPaymentSuccess,
  editPaymentSuccess,
  fetchPaymentsAsync,
  setActivePayment,
} from "@store/slice/payment.slice";
const usePayment = () => {
  const payments = useSelector<RootState, IPayment[]>(
    (state) => state.payment.payments
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.payment.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.payment.initialFetch
  );
  const payment = useSelector<RootState, IPayment>(
    (state) => state.payment.payment
  );

  const dispatch = useDispatch();

  const loadPayments = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchPaymentsAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addPayment = async (payment: IPayment) => {
    return await PaymentService.create(payment)
      .then((paymentResponse) => {
        dispatch(addPaymentSuccess(paymentResponse.data));
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const setPayment = (payment: IPayment) => {
    dispatch(setActivePayment(payment));
  };

  const editPayment = async (payment: IPayment) => {
    return await PaymentService.update(payment)
      .then((paymentResponse) => {
        dispatch(editPaymentSuccess(paymentResponse.data));
        setPayment(paymentResponse.data);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const totalAmountPaid =
    payments.length < 0 ? 0.0 : payments.reduce((a, b) => a + b.amount, 0);
  useEffect(() => {
    // loadPayments();
  }, [payment, payments, isLoading, initialFetch]);

  return {
    payment,
    payments,
    isLoading,
    initialFetch,
    addPayment,
    editPayment,
    setPayment,
    totalAmountPaid,
  };
};

export { usePayment };
