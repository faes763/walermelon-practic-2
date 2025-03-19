import { useState, useEffect } from 'react';

// Тип для состояния времени
interface TimeRemaining {
  days: number;
  day: number;
  month: string;
  hours: number;
  minutes: number;
  seconds: number;
  hoursDay: number;
  totalSeconds: number;
  
}

// Тип для принимаемой даты
export type DateInput = Date | string | number;

// Хук таймера
export function useTimer(date: DateInput): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(date));
  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeRemaining(date);
      setTimeRemaining(calculateTimeRemaining(date));
      if(Object.values(time).every(el=>el==0)) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]); 
  

  return timeRemaining;
}

export function calculateTimeRemaining(endDate: DateInput): TimeRemaining {
  const difference = Date.parse(endDate.toString()) - Date.parse(new Date().toString());
  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, month: "", totalSeconds: 0, day: 0, days: 0, hoursDay: 0 };
  }

  const targetDate = new Date(endDate);

  const day = targetDate.getDate(); // Получаем день месяца
  const monthNames = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  const month = monthNames[targetDate.getMonth()];
  const hoursDay = Math.floor(difference / (1000 * 60 * 60));

  const totalSeconds = Math.floor(difference / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.min(Math.floor(totalSeconds / 3600),23);
  const days = Math.floor(Math.floor(totalSeconds / 3600) / 24);

  return { hours, minutes, seconds, day, days, month, totalSeconds,  hoursDay };
}