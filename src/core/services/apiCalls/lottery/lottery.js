import http from "../../http";
import { API_URLs } from "../../CONSTANTS";

const lottery_apis = API_URLs.lottery;

export const apiCall_getAllLottery = async ({ CurrentPage, PageSize }) => {
  return http.get(
    lottery_apis.getAllLottery +
      `?CurrentPage=${CurrentPage}&PageSize=${PageSize}`
  );
};

export const apiCall_getLotteryDetail = async ({ id }) => {
  return http.get(lottery_apis.getLotteryDetail + `?Id=${id}`);
};

export const apiCall_buyLottery = async ({ LotteryId, TicketCount }) => {
  return http.post(
    lottery_apis.buyLottery +
      `?LotteryId=${LotteryId}&TicketCount=${TicketCount}`
  );
};

export const apiCall_getAllUsersTicket = async () => {
  return http.get(lottery_apis.getAllUsersTicket);
};

export const apiCall_winners = async (lotteryId) => {
  return http.get(lottery_apis.getWinners + "?lotteryId=" + lotteryId);
};
