import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { ReviewService } from "../services/review.service";
import { RootState } from "@store/store";
import { IReview } from "@model/review.model";
import { addReviewSuccess, editReviewSuccess, fetchReviewsAsync, setReview } from "@store/slice/review.slice";

const useReview = () => {
  const reviews = useSelector<RootState, IReview[]>(
    (state) => state.review.reviews
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.review.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.review.initialFetch
  );
  const review = useSelector<RootState, IReview>(
    (state) => state.review.review
  );

  const dispatch = useDispatch();

  const loadReviews = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchReviewsAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addReview = async (review: IReview) => {
    return await ReviewService.create(review)
      .then((reviewResponse) => {
        dispatch(addReviewSuccess(reviewResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error);
        return false;
      });
  };

  const setActiveReview = (review: IReview) => {
    dispatch(setReview(review));
  };

  const editReview = async (review: IReview) => {
    return await ReviewService.update(review)
      .then((reviewResponse) => {
        dispatch(editReviewSuccess(reviewResponse.data));
        setReview(reviewResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error);
        return false;
      });
  };

  useEffect(() => {
    // loadReviews();
  }, [review, reviews, isLoading, initialFetch]);

  return {
    review,
    reviews,
    isLoading,
    initialFetch,
    addReview,
    editReview,
    setActiveReview,
  };
};

export { useReview };
