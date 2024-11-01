import axios from "axios";

export const getBtcValue = async () => {
  try {
    const response = await axios.get(
      `https://cointradermonitor.com/api/pbb/v1/ticker`
    );
    
    return response.data.last;
  } catch (error) {
    return {
      message: `Request error. Try again!`,
    };
  }
};
