import { useState } from 'react';

// components
import ProjectStallCard from '../components/ProjectStallCard';
import { projectStalls } from '../utils/projectStalls';
import Button from '../components/Button';

export default function Vote() {
  const [projects, setProjects] = useState<string[]>([]);

  const handleClick = (id: string) => {
    if (projects.includes(id)) {
      setProjects((prev) => prev.filter((project) => project !== id));
    } else {
      if (projects.length < 3) {
        setProjects([...projects, id]);
      }
    }
  };

  const handleSubmit = () => {
    console.log(projects);
  };

  return (
    <main className='w-screen min-h-screen bg-gray-800 flex justify-center relative'>
      <div className='flex flex-col gap-8 w-full items-center px-4 md:px-0 pt-8 md:pt-12 pb-28'>
        <p className='text-white font-sans font-semibold text-xl text-center'>
          Please vote for minimum 1 or maximum 3 projects by selecting them
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {projectStalls.map((projectStall, index) => {
            return (
              <ProjectStallCard
                key={index}
                id={projectStall.id}
                name={projectStall.name}
                college={projectStall.college}
                stallNumber={projectStall.stallNumber}
                cover={projectStall.cover}
                handleClick={handleClick}
                isSelected={projects.includes(projectStall.id)}
                isDisabled={projects.length > 2}
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
    </main>
  );
}
