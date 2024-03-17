import React from 'react';

interface HeaderProps {
  date: Date;
}

const Header: React.FC<HeaderProps> = ({ date }) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-1/3 flex justify-center items-center bg-gray-200 text-gray-800 py-2 rounded-b-2xl">
      <h1 className="text-xl px-5">{formattedDate}</h1>
    </div>
  );
};

export default Header;

