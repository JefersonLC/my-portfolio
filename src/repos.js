import fs from 'fs/promises'
import { loadEnv } from 'vite'

const { PUBLIC_GITHUB_API_KEY } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ''
)

function removeHyphens(word) {
  return word.replace(/[-_]/g, ' ')
}

function acronymToUpperCase(word) {
  const acronymsList = /api|url/g

  return word.replace(acronymsList, (match) => match.toUpperCase())
}

function formatName(name) {
  const toTitle = acronymToUpperCase(removeHyphens(name))

  return toTitle
    .trim()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ')
}

const REPOS = [
  'react_tic-tac-toe',
  'react_calculator',
  'url-shortener',
  'react_find-countries',
  'api_realtime-chat',
  'react_realtime-chat',
]

async function getRepositories() {
  const projects = []

  for (let repository of REPOS) {
    const res = await fetch(
      'https://api.github.com/repos/JefersonLC/' + repository,
      {
        headers: {
          Authorization: `Bearer ${PUBLIC_GITHUB_API_KEY}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    )

    const repo = await res.json()

    projects.push({
      title: formatName(repo.name),
      description: repo.description,
      slug: repo.name,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      link: repo.homepage,
      sourceCode: repo.html_url,
    })
  }

  return projects
}

function createJSON(projects) {
  const jsonData = JSON.stringify(projects)

  const path = './src/utils/projects.json'

  fs.access(path)
    .then(() => {
      console.log('El archivo ya existe. Eliminando el archivo...')
      return fs.unlink(path)
    })
    .catch(() => {
      console.log(
        'El archivo no existe o no se puede acceder a él. Realizando alguna acción...'
      )
    })
    .finally(() => {
      return fs.writeFile(path, jsonData)
    })
    .then(() => {
      console.log('Archivo JSON creado correctamente.')
    })
    .catch((err) => {
      console.error('Error al escribir o eliminar el archivo:', err)
    })
}

getRepositories().then((projects) => createJSON(projects))
