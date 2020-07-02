import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotosApi } from "../../api/PhotosApi";
import { AppThunk } from "../../store";

export interface PhotosData {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface IPhotos {
  isLoading: boolean;
  data: PhotosData[] | null;
  error: string | null;
}

export interface PhotosState {
  photos: IPhotos;
}

const initialState: IPhotos = {
  isLoading: false,
  data: null,
  error: null,
};

export const photos = createSlice({
  name: "photos",
  initialState,
  reducers: {
    isPhotosLoading(state) {
      state.isLoading = true;
    },
    getPhotosSuccess(state, action: PayloadAction<PhotosData[]>) {
      state.data = [...(state.data || []), ...(action.payload || [])];
      state.error = null;
      state.isLoading = false;
    },
    getPhotosFailure(state, action: PayloadAction<string>) {
      state.data = null;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { isPhotosLoading, getPhotosSuccess, getPhotosFailure } = photos.actions;

export const getPhotos = (page: number): AppThunk => async (dispatch) => {
  dispatch(isPhotosLoading());

  try {
    const photosResponse = await PhotosApi.getPhotos(page, 20);

    dispatch(getPhotosSuccess(photosResponse));
  } catch (err) {
    dispatch(getPhotosFailure(err.toString()));
  }
};
