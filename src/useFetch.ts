import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  const update = (url: string) => {
    setLoading(true);
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }

  return { data, loading, error, update };
}

export default useFetch;