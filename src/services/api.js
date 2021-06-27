import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
export default {
  async getWords() {
    return await axios.get(BASE_URL + "/words");
  },

  async saveText(text) {
    const form = new FormData();
    form.append("text", text);

    return await axios.post(BASE_URL + "/words", form);
  },
};
