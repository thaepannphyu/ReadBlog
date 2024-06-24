

export const BaseQuery = {
  baseUrl: "http://127.0.0.1:8000/api/V1",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authSlice.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Origin","https://read-blog.vercel.app/")
    return headers;
  },
};
