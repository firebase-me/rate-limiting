// Accessing a secret named "API_KEY"
const apiKey = SECRETS.API_KEY;

// Cloudflare Worker for Firestore CRUD

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname.split('/').filter(Boolean);
  const projectId = 'your-firebase-project-id';
  const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${path.join('/')}`;

  // Forward the request to Firestore
  const firestoreResponse = await fetch(firestoreUrl, {
    method: request.method,
    headers: {
      ...request.headers,
      'Content-Type': 'application/json',
    },
    body: request.method !== 'GET' ? await request.json() : undefined,
  });

  // Modify or filter response as needed
  const responseBody = await firestoreResponse.json();

  // Return the modified or filtered response
  return new Response(JSON.stringify(responseBody), {
    status: firestoreResponse.status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


// Cloudflare Worker for Realtime Database CRUD

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname.split('/').filter(Boolean);
  const projectId = 'your-firebase-project-id';
  const databaseUrl = `https://${projectId}.firebaseio.com/${path.join('/')}.json`;

  // Forward the request to Realtime Database
  const databaseResponse = await fetch(databaseUrl, {
    method: request.method,
    headers: {
      ...request.headers,
      'Content-Type': 'application/json',
    },
    body: request.method !== 'GET' ? await request.json() : undefined,
  });

  // Modify or filter response as needed
  const responseBody = await databaseResponse.json();

  // Return the modified or filtered response
  return new Response(JSON.stringify(responseBody), {
    status: databaseResponse.status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
