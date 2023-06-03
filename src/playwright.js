import { firefox } from 'playwright';
import fs from 'fs/promises';

const links = [
  'https://github.com/JefersonLC/react_tic-tac-toe',
  'https://github.com/JefersonLC/react_calculator',
];

const browser = await firefox.launch({ headless: true });

const page = await browser.newPage();

const PROJECTS = [];

// Obteniendo la data
for (let link of links) {
  await page.goto(link);

  const project = await page.$eval('body', (body) => {
    const title = body.querySelector('readme-toc h1').innerText.trim();

    const description = body
      .querySelector('#responsive-meta-container div .f4')
      .innerText.trim();

    const slug = body
      .querySelector('#repository-container-header strong a')
      .innerText.trim();

    const languages = new Array(
      ...body.querySelectorAll('.BorderGrid-cell .list-style-none .d-inline')
    ).map((item) => item.querySelector('a .text-bold').innerText.trim());

    const stars = Number(
      body
        .querySelectorAll('#responsive-meta-container > div > .mb-3 a')[0]
        .innerText.trim()
        .slice(0, 1)
    );

    const forks = Number(
      body
        .querySelectorAll('#responsive-meta-container > div > .mb-3 a')[1]
        .innerText.trim()
        .slice(0, 1)
    );

    const link = body
      .querySelector('#responsive-meta-container div span')
      .innerText.trim();

    return { title, description, slug, languages, stars, forks, link };
  });

  const sourceCode = page.url();

  PROJECTS.push({ ...project, sourceCode });
}

await browser.close();

// Creando el JSON
const jsonData = JSON.stringify(PROJECTS);

const path = './src/utils/projects.json';

fs.access(path)
  .then(() => {
    console.log('El archivo ya existe. Eliminando el archivo...');
    return fs.unlink(path);
  })
  .catch(() => {
    console.log(
      'El archivo no existe o no se puede acceder a él. Realizando alguna acción...'
    );
  })
  .finally(() => {
    return fs.writeFile(path, jsonData);
  })
  .then(() => {
    console.log('Archivo JSON creado correctamente.');
  })
  .catch((err) => {
    console.error('Error al escribir o eliminar el archivo:', err);
  });
