import { useState } from 'react';

// components
import ProjectStallCard from '../components/ProjectStallCard';
import { projectStalls } from '../utils/projectStalls';

export default function Vote() {
  const [projects, setProjects] = useState([]);

  return (
    <main className='w-screen min-h-screen bg-dark-100 flex justify-center'>
      <div className='flex flex-col gap-8 w-full items-center px-4 md:px-0 py-8 md:py-12'>
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
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
