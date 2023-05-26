import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Button from '../components/Button';
import Spinner from '../components/Spinner';

import Html5QrcodePlugin from '../utils/HTML5QrcodePlugin.jsx';

const Scan = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    navigate(-1);
  };

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    console.log(decodedText, decodedResult);
  };

  return (
    <main className='w-screen h-screen bg-gray-800 flex justify-center relative'>
      {isLoading ? (
        <div className='flex w-full h-full justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <div className='flex flex-col gap-8 w-full items-center px-4 md:px-0 pt-8 md:pt-12 pb-28'>
          <p className='text-white font-sans font-semibold text-xl text-center'>
            Show your QR code to start voting
          </p>
          {/* <div className='border-2 border-dashed border-red-500 w-2/3 h-5/6 rounded-lg'></div> */}
          <Html5QrcodePlugin
            fps={10}
            qrbox={100}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
          <Button handleClick={handleCancel} colorScheme='red'>
            Cancel
          </Button>
        </div>
      )}
    </main>
  );
};

export default Scan;
