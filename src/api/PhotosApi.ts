import { Api } from "./Api";
import { PhotosData } from "../features/PhotosFeed/photosFeedSlice";

export const PhotosApi = {
  getPhotos: (page: number, limit: number): Promise<PhotosData[]> => {
    return Api.get(`/photos?_page=${page}&_limit=${limit}`);
  },
};
