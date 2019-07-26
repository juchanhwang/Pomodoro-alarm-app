import axios from 'axios';
import { API_ROUTE } from '';

export default axios.create({
  baseURL: API_ROUTE,
});
