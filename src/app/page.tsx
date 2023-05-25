'use client';

// components
import Button from '@/components/Button';

const Home = () => {
  return (
    <main
      className='bg-cover bg-center w-screen h-screen flex flex-col justify-center items-center gap-8 text-white relative font-custom font-semibold'
      style={{
        backgroundImage: 'url(images/home.svg)',
      }}
    >
      <div className='flex flex-col items-center gap-4'>
        <p className='text-3xl'>Are you ready to vote ?</p>
        <Button
          type='button'
          colorScheme='green'
          handleClick={() => console.log('asdf')}
        >
          Let's Go
        </Button>
      </div>
      <div className='flex flex-col items-end'>
        <p className='text-8xl'>12.03.00</p>
        <p className='text-4xl'>time left.</p>
      </div>

      <div className='absolute bottom-5 right-5'>
        <p className='text-3xl'>Vote Count: 120</p>
      </div>
    </main>
  );
};

export default Home;
