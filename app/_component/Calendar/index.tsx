"use client"
import React, { useState, Dispatch, SetStateAction } from 'react';
import { getMonth, getYear } from 'date-fns';


interface CalendarProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const Calendar: React.FC<CalendarProps> = ({ date, setDate }) => {
  
  return (
    <div className="w-1/4 h-1/3 fixed top-[50px] left-3 flex flex-col">
      <div className="flex justify-around w-full">
        <CalendarHeader date={date} setDate={setDate} />  
      </div>
      <CalendarTitle date={date} />
      <CalendarBody date={date} setDate={setDate}/>
    </div>
  );
};
const CalendarCell: React.FC<{ day: number | undefined, date: Date, setDate: Dispatch<SetStateAction<Date>> }> = ({ day, date, setDate }) => {
  return (
    <button className={`flex justify-center items-center border border-gray-300 w-10 h-10 hover:bg-gray-200 ${day === date.getDate() ? 'bg-gray-500 hover:bg-gray-500' : ''} ${day === date.getDate() ? 'text-white' : ''}`} 
    onClick={() => setDate(new Date(date.getFullYear(), date.getMonth(), day))}
    disabled={day === null}
    >
      {day}
    </button>
  );
};

const CalendarBody: React.FC<CalendarProps> = ({ date, setDate }) => {
  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const daysArray = new Array(startDay).fill(null).concat(Array.from(Array(daysInMonth).keys()).map(day => day + 1));
  
  return (
    <div className="grid grid-cols-7 gap-2 px-1">
      {daysArray.map((day, index) => (
        <CalendarCell key={index} day={day} date={date} setDate={setDate}/>
      ))}
    </div>
  );
};



const CalendarTitle: React.FC<{date: Date}> = ({date}) =>{
const daysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
const today = date.getDay();
return (
  <div className="grid grid-cols-7 gap-2 px-1">
    {daysOfWeek.map((day, index) => (
      <span key={index} className={`px-2 ${index === today ? 'text-red-500' : ''}`}>{day}</span>
    ))}
  </div>
);
}
const CalendarHeader: React.FC<CalendarProps> = ({ date, setDate }) => {
  const month = getMonth(date) + 1; 
  const year = getYear(date);
  const handlePrevMonth = () => {
    setDate(new Date(year, month - 2, 1)); 
  };
  const handleNextMonth = () => {
    setDate(new Date(year, month, 1)); 
  };
  return (
    <>
      <button onClick={handlePrevMonth}>{"<<"}</button>
        <span>{month}, {year}</span>
      <button onClick={handleNextMonth}>{">>"}</button>
    </>
  );
};

export default Calendar;