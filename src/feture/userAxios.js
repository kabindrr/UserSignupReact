import { apiProcessor } from "../helper/axiosHelper";

// export const signUp = (userObj) => {
//   const axiosObj = {
//     URL,
//     method: "POST",
//     data: userObj,
//   };
//   return apiProcessor(axiosObj);
// };

export const signUp = (obj) => {
  const axiosObj = {
    URL,
    method: "POST",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
