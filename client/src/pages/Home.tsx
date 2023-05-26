import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Button from '../components/Button';
import Spinner from '../components/Spinner';

const Home = () => {
  const navigate = useNavigate();

  const [deadline] = useState('09 Jun 2023 15:00:00');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getTime = (deadline: string) => {
    const timeLeft = Date.parse(deadline) - Date.now();

    let seconds = Math.floor((timeLeft / 1000) % 60);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let hours = Math.floor(timeLeft / (1000 * 60 * 60));

    setTime(
      `${hours < 10 ? `0${hours}` : hours}.${
        minutes < 10 ? `0${minutes}` : minutes
      }.${seconds < 10 ? `0${seconds}` : seconds}`
    );

    setIsLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScan = () => {
    navigate('/scan');
  };

  return (
    <main
      className='bg-cover bg-center w-screen h-screen flex flex-col justify-center items-center gap-8 text-white relative font-custom font-semibold'
      style={{
        backgroundImage: 'url(images/home.svg)',
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='flex flex-col items-center gap-4'>
            <p className='text-3xl'>Are you ready to vote ?</p>
            <Button type='button' colorScheme='green' handleClick={handleScan}>
              Let's Go
            </Button>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-8xl'>{time}</p>
            <p className='text-4xl'>time left.</p>
          </div>

          <div className='absolute bottom-2 right-5'>
            <p className='text-3xl'>Vote Count: 120</p>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
