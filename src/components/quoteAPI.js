import { useState, useEffect } from 'react';

function APIRequest() {
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
          }
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
    };
  });
}
