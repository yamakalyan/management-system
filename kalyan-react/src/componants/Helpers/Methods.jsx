import { BaseURL } from "./Helpers";

export const getProfileMethod = async (Url) => {
  const token = localStorage.getItem("authToken");

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", header_key: token },
  };

  const response = await fetch(BaseURL + Url, options);
  const data = await response.json();
  const results = data.success ? data.results : "Error occured" + data.message;
  return results;
};
