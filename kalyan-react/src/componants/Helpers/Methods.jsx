import { BaseURL } from "./Helpers";

export const GET = async (Url) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(BaseURL + Url, options)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        return data.results;
      } else {
        return data.results;
      }
    });
};
