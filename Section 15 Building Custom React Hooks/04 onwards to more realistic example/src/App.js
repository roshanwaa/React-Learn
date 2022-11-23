import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttps from './hooks/use-https';

function App() {
  const [tasks, setTasks] = useState([]);

  // const transformTask = useCallback((tasksObj) => {
  //   const loadedTasks = [];

  //   for (const taskKey in tasksObj) {
  //     loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
  // }, []);

  // const { isLoading, error, sendRequest } = httpData;

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-6b4a6.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  // const {
  //   isLoading,
  //   error,
  //   sendRequest: fetchTasks,
  // } = useHttps(
  //   // {
  //   //   url: 'https://react-movie-app-7b37a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
  // },
  // transformTask
  // );

  useEffect(() => {
    const transformTask =
      ((tasksObj) => {
        const loadedTasks = [];

        for (const taskKey in tasksObj) {
          loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
        }

        setTasks(loadedTasks);
      },
      []);

    fetchTasks(
      {
        url: 'https://react-movie-app-7b37a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      },
      transformTask
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
