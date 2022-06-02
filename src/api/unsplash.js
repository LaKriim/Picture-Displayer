import axios from "axios";
export default axios.create({
   baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID sOPB9raDJWWBP3s2vICsRtFrGHS0AFRZ7e6xP-goZ6w",
      }
});