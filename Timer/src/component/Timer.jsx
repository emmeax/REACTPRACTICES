import { useState, useEffect } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeRun, setTimeRun] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRun((prevElapsedTime) => prevElapsedTime + 10); // Update every 10 milliseconds
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTimeRun(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const milliseconds = `0${timeRun % 1000}`.slice(-2);
    const seconds = `0${Math.floor((timeRun / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor(timeRun / (1000 * 60))}`.slice(-2);

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div>
      <div className="bg-black  w-70 h-72 text-white ml-56 mr-56 mt-6 pt-6 rounded-xl">
        <div className="justify-between ">{formatTime()}</div>
        <button
          className="py-2  rounded-full bg-gray-500  px-4 mt-36 mr-4"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className={`${
            isRunning ? "bg-red-500" : "bg-green-500"
          } text-green-400 py-2 px-4 rounded-full mt-20 ml-4`}
          onClick={startStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
