import { useState } from 'react';
import projects from '../utils/projects.json';
import ProjectCard from './ProjectCard';

export interface Project {
  title: string;
  slug: string;
  description: string;
  categories: string[];
  sourceCode: string;
  link: string;
}

export default function ProjectsList() {
  const [elements, setElements] = useState(projects);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      {elements.map((project: Project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
