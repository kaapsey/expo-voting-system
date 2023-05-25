type propsType = {
  id: string;
  name: string;
  college: string;
  stallNumber: number;
  cover: string;
};

const ProjectStallCard = ({
  id,
  name,
  college,
  stallNumber,
  cover,
}: propsType) => {
  return (
    <div className='card' onClick={() => console.log(id)}>
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
    </div>
  );
};

export default ProjectStallCard;
