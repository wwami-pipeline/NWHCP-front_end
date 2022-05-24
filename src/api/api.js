import axios from "axios";

export const getAllPrograms = async () => {
  return await axios.get("https://nwhealthcareerpath.uw.edu/api/v3/orgs-all")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err))
}