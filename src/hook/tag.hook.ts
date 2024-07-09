import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { TagService } from "../services/tag.service";
import { RootState } from "@store/store";
import { ITag } from "@model/tag.model";
import {
  addTagSuccess,
  editTagSuccess,
  fetchTagsAsync,
  setActiveTag,
} from "@store/slice/tag.slice";

const useTag = () => {
  const tags = useSelector<RootState, ITag[]>((state) => state.tag.tags);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.tag.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.tag.initialFetch
  );
  const tag = useSelector<RootState, ITag>((state) => state.tag.tag);

  const dispatch = useDispatch();

  const loadTags = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchTagsAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addTag = async (tag: ITag) => {
    return await TagService.create(tag)
      .then((tagResponse) => {
        dispatch(addTagSuccess(tagResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  const setTag = (tag: ITag) => {
    dispatch(setActiveTag(tag));
  };

  const editTag = async (tag: ITag) => {
    return await TagService.update(tag)
      .then((tagResponse) => {
        dispatch(editTagSuccess(tagResponse.data));
        setTag(tagResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  useEffect(() => {
    // loadTags();
  }, [tag, tags, isLoading, initialFetch]);

  return {
    tag,
    tags,
    isLoading,
    initialFetch,
    addTag,
    editTag,
    setTag,
  };
};

export { useTag };
