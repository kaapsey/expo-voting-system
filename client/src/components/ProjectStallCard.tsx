type propsType = {
  id: string;
  name: string;
  college: string;
  stallNumber: number;
  cover: string;
  handleClick: (arg0: string) => void;
  isSelected: boolean;
  isDisabled: boolean;
};

const ProjectStallCard = ({
  id,
  name,
  college,
  stallNumber,
  cover,
  handleClick = () => {},
  isSelected,
  isDisabled,
}: propsType) => {
  return (
    <div
      className={`card relative ${
        isDisabled && !isSelected
          ? 'cursor-not-allowed pointer-events-none opacity-50'
          : 'cursor-pointer'
      }`}
      onClick={() => handleClick(id)}
    >
      <img
        src={cover || 'images/placeholder.png'}
        alt='Project Cover'
        className='card-cover'
      />
      <div className='card-detail'>
        <div className='card-detail-number'>#{stallNumber}</div>
        <div className='card-detail-text'>
          <h1 className='title'>{name}</h1>
          <p className='subtitle'>from {college}</p>
        </div>
      </div>
      <div className='absolute -top-5 -left-5'>
        <img
          src='images/sticker.svg'
          className={`w-24 h-24 ${isSelected ? 'visible' : 'invisible'}`}
        />
      </div>
    </div>
  );
};

export default ProjectStallCard;
