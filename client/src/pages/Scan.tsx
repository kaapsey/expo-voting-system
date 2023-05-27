import { useNavigate } from 'react-router-dom';
import { QrScanner } from '@yudiel/react-qr-scanner';

// components
import Button from '../components/Button';

const Scan = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleScannerResult = (result: string) => {
    if (result) {
      navigate(`/vote/${result}`);
    }
  };

  const handleScannerError = (error: any) => {
    console.log(error);
  };

  return (
    <main className='w-screen h-screen bg-gray-800 flex justify-center relative'>
      <div className='flex flex-col gap-8 w-full items-center px-4 md:px-0 pt-8 md:pt-12 pb-28'>
        <p className='text-white font-sans font-semibold text-xl text-center'>
          Show your QR code to start voting
        </p>

        <div className='w-[300px] md:w-[500px]'>
          <QrScanner
            onDecode={(result) => handleScannerResult(result)}
            onError={(error) => handleScannerError(error)}
            hideCount={true}
            containerStyle={{
              borderRadius: '8px',
            }}
            videoStyle={{
              transform: 'rotateY(180deg)',
            }}
          />
        </div>
        <Button handleClick={handleCancel} colorScheme='red'>
          Cancel
        </Button>
      </div>
    </main>
  );
};

export default Scan;
