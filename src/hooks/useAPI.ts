import React, { useEffect, useState } from "react";

type StatusType = "idle" | "padding" | "success" | "error";

//for home product T===> IProduct
const useAPI = <T>(asyncService: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusType>("idle");

  // const [products, setProducts] = useState<[] | IProduct[]>();

  useEffect(() => {
    setStatus("padding");
    setError(null);
    asyncService()
      .then(data => {
        setData(data);
        setStatus("success");
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return {
    data,
    isLoading: status === "padding",
    isSuccess: status === "success",
    error,
  };
};

export default useAPI;
