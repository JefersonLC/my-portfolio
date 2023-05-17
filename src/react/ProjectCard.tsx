import Category from './Category';
import type { Project } from './ProjectsList';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='bg-blue-200 py-6 px-2'>
      <div className='flex text-4xl px-8'>
        <div className='flex-grow text-green'>
          <i className='fa-regular fa-folder'></i>
        </div>
        <div className='flex-grow flex justify-end gap-4 text-gray-100 hover:[&>a]:text-green'>
          <a href={project.sourceCode} target='_blank'>
            <i className='fa-brands fa-github'></i>
          </a>
          <a href={project.link} target='_blank'>
            <i className='fa-solid fa-up-right-from-square'></i>
          </a>
        </div>
      </div>
      <div className='px-6 py-4'>
        <h4 className='text-2xl text-gray-100'>{project.title}</h4>
        <p className='mt-2 text-gray-200'>{project.description}</p>
      </div>
      <div className='px-6 mt-4 flex gap-2'>
        {project.categories.map((category, i) => (
          <Category key={i}>{category}</Category>
        ))}
      </div>
    </div>
  );
}
