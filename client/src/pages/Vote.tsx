import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

// utils
import { projectStalls } from '../utils/projectStalls';

// scheme
import { projectScheme } from '../utils/scheme';

export default function Vote() {
  const params = useParams();

  const [projects, setProjects] = useState<projectScheme[]>();
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (id: string) => {
    if (selectedProjects.includes(id)) {
      setSelectedProjects((prev) => prev.filter((project) => project !== id));
    } else {
      if (selectedProjects.length < 3) {
        setSelectedProjects([...selectedProjects, id]);
      }
    }
  };

  const handleSubmit = () => {
    console.log(params.tokenId);
    console.log(selectedProjects);
  };

  useEffect(() => {
    setProjects(projectStalls);
    setIsLoading(false);
  }, []);

  return (
    <main className='w-screen min-h-screen bg-gray-800 flex justify-center relative'>
      {isLoading ? (
        <div className='flex w-full h-screen justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className='flex flex-col gap-8 w-full items-center px-4 md:px-0 pt-8 md:pt-12 pb-28'>
            <p className='text-white font-sans font-semibold text-xl text-center'>
              Please vote for minimum 1 or maximum 3 projects by selecting them
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
              {projects?.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    id={project._id}
                    name={project.name}
                    college={'GCES'}
                    stallNumber={project.stall_no}
                    cover={project.cover_image}
                    handleClick={handleClick}
                    isSelected={selectedProjects.includes(project._id)}
                    isDisabled={selectedProjects.length > 2}
                  />
                );
              })}
            </div>
          </div>
          <div className='fixed bottom-0 bg-gray-900 w-full py-4 px-6 flex justify-center z-20'>
            <div className='w-full md:w-2/3 flex justify-end'>
              <Button handleClick={handleSubmit}>Vote</Button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
