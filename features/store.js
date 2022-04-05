import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import projectsReducer from './slices/projectsSlice';
import blogsReducer from './slices/blogsSlice';
import interestsReducer from './slices/interestsSlice';
import technologiesReducer from './slices/technologiesSlice';
import certificationsReducer from './slices/certificationsSlice';
import educationsReducer from './slices/educationsSlice';
import experiencesReducer from './slices/experiencesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
    interests: interestsReducer,
    technologies: technologiesReducer,
    certifications: certificationsReducer,
    educations: educationsReducer,
    experiences: experiencesReducer,
  },
  devTools: true,
})