import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  const update = (url: string) => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }

  return { data, loading, error, update };
}

export default useFetch;