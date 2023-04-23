import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request,redirect }) => {
  const body = await request.json();
  const response = await fetch('https://api-img-app.onrender.com/api/users', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });
  const data = await response.json()
  return data
}