import http from "../../http";
import { API_URLs } from "../../CONSTANTS";

const home_apis = API_URLs.home;

export const apiCall_getLotteryRules = async () => {
  return http.get(home_apis.getLotteryRules);
};
