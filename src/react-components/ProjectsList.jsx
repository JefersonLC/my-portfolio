import { useState } from 'react';
import projects from '../utils/projects.json';

export default function ProjectsList() {
  const currentPage = 1;
  const maxContent = 1;
  const maxPages = Array(Math.ceil(projects.length / maxContent)).fill();

  function getElementsForPage(pageNumber) {
    const startIndex = (pageNumber - 1) * maxContent;
    const endIndex = startIndex + maxContent;
    return [...projects].slice(startIndex, endIndex);
  }

  const [elements, setElements] = useState(getElementsForPage(currentPage));

  function changePage(page) {
    setElements(getElementsForPage(page));
  }

  return (
    <div>
      {elements.map((project, i) => (
        <div key={i}>
          {project.title}
          <a href={'project/' + project.slug}>Link</a>
        </div>
      ))}
      {maxPages.map((button, i) => (
        <button key={i} onClick={() => changePage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
