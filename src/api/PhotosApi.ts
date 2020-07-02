import { axios } from "./config";
import { PhotosData } from "../features/PhotosFeed/photosFeedSlice";

export const PhotosApi = {
  getPhotos: (page: number, limit: number): Promise<PhotosData[]> => {
    return axios.get(`/photos?_page=${page}&_limit=${limit}`);
  },
};
