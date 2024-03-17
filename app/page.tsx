'use client';
import Image from "next/image";
import Header from "./_component/Header";
import Calendar from "./_component/Calendar"; 
import {useState} from 'react';

export default function Home() {
  const [date, setDate] = useState(new Date()); 
  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen">
      <Header date={date} />
      <Calendar date={date} setDate={setDate}/>
    </main>
  );
}
