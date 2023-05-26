import React from 'react';

type propsType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  colorScheme?: string;
  handleClick?: () => void;
  children: React.ReactNode;
};

const Button = ({
  type = 'button',
  colorScheme = '',
  handleClick = () => {},
  children,
}: propsType) => {
  const getColorScheme = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-600 hover:bg-green-700';

      case 'red':
        return 'bg-red-600 hover:bg-red-700';

      default:
        return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  return (
    <button
      type={type}
      className={`font-sans text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${getColorScheme(
        colorScheme
      )}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
