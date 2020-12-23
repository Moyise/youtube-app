import axios from "axios";

const KEY = "AIzaSyAkKYoUxQgmo9jJSjdRLWRLAt3Oc-lPr_k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
