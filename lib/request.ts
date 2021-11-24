type methodProps = "GET" | "POST" | "PUT" | "DELETE";

const request = async (path: string, method?: methodProps, data?: any) => {
  const res = await fetch(path, {
    method: method || "GET",
    body: data && JSON.stringify(data),
  });

  return res.json();
};

export default request;
