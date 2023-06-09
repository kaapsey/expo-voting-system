import { useState, useRef } from 'react';
import Button from '../components/Button';

const LuckyDraw = () => {
  const [slotMachineIndex, setSlotMachineIndex] = useState(0);
  const [isPlayed, setIsPlayed] = useState([false, false, false]);
  const [numbers, setNumbers] = useState<number[][]>([[], [], []]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const slotsOneRef = useRef<HTMLDivElement>(null);
  const slotsTwoRef = useRef<HTMLDivElement>(null);
  const slotsThreeRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setIsBtnDisabled(true);
    let nums: number[] = [];
    nums = getRandomNumbers(10);
    
    setNumbers([
      ...numbers.map((num, i) => {
        if (i === slotMachineIndex) {
          num = nums;
        }
        return num;
      }),
    ]);
    getTranslation(nums.length);

    setIsPlayed([
      ...isPlayed.map((p, i) => {
        if (i === slotMachineIndex) {
          p = true;
        }
        return p;
      }),
    ]);

    setTimeout(() => {
      setSlotMachineIndex(slotMachineIndex + 1);
      if (slotMachineIndex < 2) {
        setIsBtnDisabled(false);
      }
    }, 5000);
  };

  const handleReset = () => {
    setIsBtnDisabled(false);
    setIsPlayed([false, false, false]);
    setNumbers([[], [], []]);
    setSlotMachineIndex(0);

    if (slotsOneRef.current) {
      slotsOneRef.current.style.transform = `translateY(0px)`;
      slotsOneRef.current.style.animation = 'none';
    }
    if (slotsTwoRef.current) {
      slotsTwoRef.current.style.transform = `translateY(0px)`;
      slotsTwoRef.current.style.animation = 'none';
    }
    if (slotsThreeRef.current) {
      slotsThreeRef.current.style.transform = `translateY(0px)`;
      slotsThreeRef.current.style.animation = 'none';
    }
  };

  const getRandomNumbers = (max: number) => {
    let items = [];
    let itemsCount = Math.floor(Math.random() * (40 - 20) + 20);

    for (let x = 0; x < itemsCount; x++) {
      let item = x % max;
      items.push(item);
    }

    return items;
  };

  const getTranslation = (count: number) => {
    let initalPosY = Math.floor(count / 2) * 4.5 * 16;
    let finalPosY = -Math.floor(count / 2) * 4.5 * 16;

    if (count % 2 === 0) {
      initalPosY -= 36;
      finalPosY += 36;
    }

    document.documentElement.style.setProperty(
      `--translate-${slotMachineIndex + 1}-inital`,
      `${initalPosY}px`
    );
    document.documentElement.style.setProperty(
      `--translate-${slotMachineIndex + 1}-final`,
      `${finalPosY}px`
    );

    if (slotMachineIndex + 1 === 1) {
      if (slotsOneRef.current) {
        slotsOneRef.current.style.animation = `spin-${
          slotMachineIndex + 1
        } 5s ease-in-out`;
        slotsOneRef.current.style.transform = `translateY(${finalPosY}px)`;
      }
    } else if (slotMachineIndex + 1 === 2) {
      if (slotsTwoRef.current) {
        slotsTwoRef.current.style.animation = `spin-${
          slotMachineIndex + 1
        } 5s ease-in-out`;
        slotsTwoRef.current.style.transform = `translateY(${finalPosY}px)`;
      }
    } else if (slotMachineIndex + 1 === 3) {
      if (slotsThreeRef.current) {
        slotsThreeRef.current.style.animation = `spin-${
          slotMachineIndex + 1
        } 5s ease-in-out`;
        slotsThreeRef.current.style.transform = `translateY(${finalPosY}px)`;
      }
    }
  };

  return (
    <main className='w-screen h-screen bg-gray-800 flex flex-col gap-6 justify-center'>
      {/* slot-machine */}
      <div className='flex gap-2 justify-center items-center'>
        {/* slots-1 */}
        <div
          className={`w-24 h-24 bg-gray-50 rounded-lg flex flex-col justify-center items-center font-sans font-bold text-5xl text-gray-900 overflow-hidden`}
        >
          <div className='flex flex-col gap-6' ref={slotsOneRef} id='slotsOne'>
            {isPlayed[0] ? (
              <>
                {numbers[0].map((number, numberIndex) => {
                  return <p key={numberIndex}>{number}</p>;
                })}
              </>
            ) : (
              <p className='text-red-600'>?</p>
            )}
          </div>
        </div>

        {/* slots-2 */}
        <div
          className={`w-24 h-24 bg-gray-50 rounded-lg flex flex-col justify-center items-center font-sans font-bold text-5xl text-gray-900 overflow-hidden`}
        >
          <div className='flex flex-col gap-6' ref={slotsTwoRef}>
            {isPlayed[1] ? (
              <>
                {numbers[1].map((number, numberIndex) => {
                  return <p key={numberIndex}>{number}</p>;
                })}
              </>
            ) : (
              <p className='text-red-600'>?</p>
            )}
          </div>
        </div>

        {/* slots-3 */}
        <div
          className={`w-24 h-24 bg-gray-50 rounded-lg flex flex-col justify-center items-center font-sans font-bold text-5xl text-gray-900 overflow-hidden`}
        >
          <div className='flex flex-col gap-6' ref={slotsThreeRef}>
            {isPlayed[2] ? (
              <>
                {numbers[2].map((number, numberIndex) => {
                  return <p key={numberIndex}>{number}</p>;
                })}
              </>
            ) : (
              <p className='text-red-600'>?</p>
            )}
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className='flex justify-center items-center gap-2'>
        <Button handleClick={handlePlay} isDisabled={isBtnDisabled}>
          Play
        </Button>
        <Button colorScheme='red' handleClick={handleReset}>
          Reset
        </Button>
      </div>
    </main>
  );
};

export default LuckyDraw;
