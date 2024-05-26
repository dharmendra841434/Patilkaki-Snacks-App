import React, {useState, useEffect} from 'react';
import CustomText from './CustomText';

const OtpTimer = ({initialSeconds, setIsResend}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
        //console.log(seconds);
        if (seconds === 1) {
          setIsResend(true);
          console.log(seconds);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  //console.log(seconds);

  return (
    <CustomText
      className={` text-[16px] ${
        seconds === 0 ? 'text-gray-500' : 'text-primary'
      } `}>
      {formatTime(seconds)}
    </CustomText>
  );
};

export default OtpTimer;
