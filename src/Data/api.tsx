import http from "./http-common";
import Courses from './model'

const getAll = () => {
    return http.get<Array<Courses>>("/3c53322e8dc8c3b524cfb2623c097cc5/raw/adc988f34c4fb1a0fe12035b4b030259776115ea/response.json");
  };

export default getAll;