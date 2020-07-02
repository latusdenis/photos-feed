import { combineReducers } from "@reduxjs/toolkit";
import { photos } from "../src/features/PhotosFeed/photosFeedSlice";

const rootReducer = combineReducers({
  photos: photos.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
