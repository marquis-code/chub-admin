import { axiosInstance } from "../axios.config";

export const userApiFactory = {
  $_follow_user(userId: string | number) {
    let endpoint = `/user/follow/${userId}`;
    return axiosInstance.post(endpoint);
  },
  $_unFollow_user(userId: string | number) {
    const url = `/user/un-follow/${userId}`;
    return axiosInstance.delete(url);
  },
  $_delete_user_account(userId: string | number) {
    const url = `/user/delete-account`;
    return axiosInstance.delete(url);
  },
  $_get_user_details() {
    const url = `/user/me`;
    return axiosInstance.get(url);
  },
  $_send_users_feedback(data: any) {
    const url = `/user/me/feedback`;
    return axiosInstance.post(url, data);
  },
  $_get_user_notifications() {
    const url = `/user/me/notifications`;
    return axiosInstance.get(url);
  },
  $_get_shared_challenge(userId: string | number, metadata: { page: number; limit: number }, fields: any, sortBy?: string) {
    let endpoint = `/user/${userId}/shared-challenges?page=${metadata.page}&limit=${metadata.limit}`;
    if (fields && fields.trim() !== "") {
      endpoint += `&fields=${encodeURIComponent(fields.trim())}`;
    }
    if (sortBy && sortBy.trim() !== "") {
      endpoint += `&sort=${encodeURIComponent(sortBy.trim())}`;
    }
    return axiosInstance.get(endpoint);
  },
  $_get_completed_challenge(userId: string | number, metadata: { page: number; limit: number }, fields: any, sortBy?: string) {
    let endpoint = `/user/${userId}/completed-challenges?page=${metadata.page}&limit=${metadata.limit}`;
    if (fields && fields.trim() !== "") {
      endpoint += `&fields=${encodeURIComponent(fields.trim())}`;
    }
    if (sortBy && sortBy.trim() !== "") {
      endpoint += `&sort=${encodeURIComponent(sortBy.trim())}`;
    }
    return axiosInstance.get(endpoint);
  },
  $_edit_profile(data: any) {
    const url = `/user/me/profile`;
    return axiosInstance.patch(url, data);
  },
 $_add_phone_number(data: any) {
    const url = `/user/me/profile/phone`;
    return axiosInstance.put(url, data);
  },
  $_get_user_communities(userId: string | number) {
    const url = `/user/${userId}/communities`;
    return axiosInstance.get(url);
  },
  $_get_another_user_profile(userId: string | number) {
    const url = `/user/${userId}/communities`;
    return axiosInstance.get(url);
  },
  $_get_challenge_stats(userId: string | number) {
    const url = `/user/${userId}/challenge-stats`;
    return axiosInstance.get(url);
  },
  $_get_user_followers(userId: string | number) {
    const url = `/user/${userId}/followers`;
    return axiosInstance.get(url);
  },
  $_get_user_followings(userId: string | number) {
    const url = `/user/${userId}/following`;
    return axiosInstance.get(url);
  },
};
