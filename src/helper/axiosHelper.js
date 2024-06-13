// import axios from "axios";

// export const apiProcessor = (axiosObj) => {
//   try {
//     const { URL, method, data } = axiosObj;
//     const datatoServer = axios({ URL, method, data });
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
import axios from "axios";

export const apiProcessor = (axiosObj) => {
  try {
    const { url, method, data } = axiosObj;
    const res = axios({
      url,
      method,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
