import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { bannerService } from "../services/banner.service";
import { RootState } from "@store/store";
import {
  addBannerSuccess,
  deleteBanner,
  editBannerSuccess,
  fetchBannersAsync,
  setActiveBanner,
} from "@store/slice/banner.slice";
import { IBanner } from "@model/banner";

const useBanner = () => {
  const banners = useSelector<RootState, IBanner[]>(
    (state) => state.banner.banners
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.banner.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.banner.initialFetch
  );
  const banner = useSelector<RootState, IBanner>(
    (state) => state.banner.banner
  );

  const dispatch = useDispatch();

  const loadBanners = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchBannersAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addBanner = async (banner: IBanner) => {
    return await bannerService
      .create(banner)
      .then((bannerResponse) => {
        dispatch(addBannerSuccess(bannerResponse.data));
        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  const delBanner = async (banner: IBanner) => {
    return await bannerService
      .delete(banner)
      .then((resp) => {
        console.log("resp: ", resp);
        dispatch(deleteBanner(banner));
        return true;
      })
      .catch((error) => {
        console.log("error: ", error);
        return false;
      });
  };
  const setBanner = (banner: IBanner) => {
    dispatch(setActiveBanner(banner));
  };

  const editBanner = async (banner: IBanner) => {
    return await bannerService
      .update(banner)
      .then((bannerResponse) => {
        dispatch(editBannerSuccess(bannerResponse.data));
        setBanner(bannerResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error);
        return false;
      });
  };

  useEffect(() => {
    // loadBanners();
  }, [banner, banners, isLoading, initialFetch]);

  return {
    banner,
    banners,
    isLoading,
    initialFetch,
    addBanner,
    editBanner,
    setBanner,
    delBanner,
  };
};

export { useBanner };
