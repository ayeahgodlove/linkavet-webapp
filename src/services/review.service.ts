import { IReview, IReviewResponse, IReviewResponses } from "@model/review.model";
import { requestType } from ".";

export const reviewService = {
  list: async (): Promise<IReviewResponses> =>
    requestType.get("/api/reviews"),
  getSingleReview: async (id: string): Promise<IReviewResponse> =>
    requestType.get(`/api/reviews/${id}`),
  create: (review: IReview): Promise<IReviewResponse> =>
    requestType.post(`/api/reviews`, review),
  update: (review: IReview): Promise<IReviewResponse> =>
    requestType.put(`/api/reviews`, review),
  delete: (review: IReview): Promise<IReviewResponse> =>
    requestType.del(`/api/reviews`, review),
};
