// src/api.js
const API_URL =
  "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
const headers = {
  Accept: "image/png",
  Authorization:
    "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
  "Content-Type": "application/json",
};

export const query = async (payload) => {
  const response = await fetch(API_URL, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(payload),
  });
  const result = await response.blob();
  return result;
};
