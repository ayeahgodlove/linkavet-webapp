import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { CommentService } from "../services/comment.service";
import { RootState } from "@store/store";
import { CommentData, IComment } from "@model/comment";
import {
  addCommentSuccess,
  editCommentSuccess,
  fetchcommentError,
  fetchcommentSuccess,
  setActiveComment,
} from "@store/slice/comment.slice";

const useComment = () => {
  const comments = useSelector<RootState, IComment[]>(
    (state) => state.comment.comments
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.comment.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.comment.initialFetch
  );
  const comment = useSelector<RootState, IComment>(
    (state) => state.comment.comment
  );

  const errors = useSelector<RootState, string>(
    (state) => state.comment.errors
  );

  const dispatch = useDispatch();

  const loadComments = useCallback(
    async (postId: string) => {
      return await CommentService.list(postId)
        .then((response) => {
          dispatch(fetchcommentSuccess(response.data));
          return true;
        })
        .catch((error) => {
          dispatch(fetchcommentError(error));
          return false;
        });
    },
    [dispatch]
  );

  const addComment = async (comment: CommentData) => {
    return await CommentService.create(comment)
      .then((commentResponse) => {
        dispatch(addCommentSuccess(commentResponse.data));
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const setComment = (comment: IComment) => {
    dispatch(setActiveComment(comment));
  };

  const editComment = async (comment: CommentData) => {
    return await CommentService.update(comment)
      .then((commentResponse) => {
        dispatch(editCommentSuccess(commentResponse.data));
        setComment(commentResponse.data);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  useEffect(() => {}, [comment, comments, isLoading, initialFetch]);

  return {
    comment,
    comments,
    isLoading,
    initialFetch,
    addComment,
    editComment,
    setComment,
    loadComments,
    errors,
  };
};

export { useComment };
