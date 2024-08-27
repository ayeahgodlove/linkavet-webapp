import { ITransactionHistoryResponses } from "@model/transaction-history.model";
import { requestType } from "@services";

export const ProcessPaymentService = {
  initPayment: (initPayment: any): Promise<any> =>
    requestType.post(`/api/process-payments`, initPayment),
  getTransactions: (): Promise<ITransactionHistoryResponses> =>
    requestType.get(`/api/process-payments/history`),
};
