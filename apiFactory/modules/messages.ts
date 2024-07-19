import { axiosInstance } from "../axios.config";

export const messagesApiFactory = {
  $_send_message(data: any) {
    let endpoint = `/api/v2/conversations/send-message`;
    return axiosInstance.post(endpoint, data);
  },
  $_get_messages_in_conversation(userId: string | number) {
    const url = `/api/v2/conversations/{conversationId}/messages`;
    return axiosInstance.get(url);
  },
  $_search_conversation() {
    const url = `/api/v2/conversations/search`;
    return axiosInstance.get(url);
  },
  $_delete_message_in_conversation(conversationId: string | number) {
    const url = `/api/v2/conversations/${conversationId}/message`;
    return axiosInstance.delete(url);
  }
}