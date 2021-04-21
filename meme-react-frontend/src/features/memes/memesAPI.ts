import axios from 'axios';
import {config} from "../../constants";
import {IMeme} from "./memesSlice";

export function fetchMemes() {
  return axios.get<IMeme[]>(`${config.API_URL}/api/v1/memes`);
}
