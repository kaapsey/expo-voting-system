import './globals.css';

export const metadata = {
  title: 'Expo Voting System',
  description: 'GCES 9th IT Expo Voting System',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
