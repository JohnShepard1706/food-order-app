import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (url, applyData, sendObject = null) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, sendObject);
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { error, isLoading, sendRequest };
};
export default useHttp;
