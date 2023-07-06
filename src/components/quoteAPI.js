import { useState, useEffect } from 'react';

export default function APIRequest() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=alone', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'zfT6CgCuL8N7cYDDfQd6JQ==1VWPQ1MrEGMEayon',
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="quote-container">
      {data.length > 0 && (
      <>
        <h2>{data[0].quote}</h2>
        <p>{data[0].author}</p>
      </>
      )}
    </div>
  );
}
