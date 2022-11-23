import { useState, useCallback } from 'react';

const useHttps = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          header: requestConfig.header ? requestConfig.header : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();

        applyData(data);

        //   const loadedTasks = [];

        //   for (const taskKey in data) {
        //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        //   }

        //   setTasks(loadedTasks);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [applyData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttps;
