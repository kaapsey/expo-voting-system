import React from 'react';

type propsType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  colorScheme?: string;
  handleClick?: () => void;
  isDisabled?: boolean;
  children: React.ReactNode;
};

const Button = ({
  type = 'button',
  colorScheme = '',
  handleClick = () => {},
  isDisabled = false,
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
      className={`font-sans text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${
        isDisabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer opacity-100'
      } ${getColorScheme(colorScheme)}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
