# Multi-Container Docker App

I built this project to learn how Docker works in a real-world setup — not just
running a single container, but getting a frontend, backend, and database to all
talk to each other.

## What's inside

- **React** for the frontend
- **Node.js** for the backend API
- **MongoDB** as the database

## How to run it

Make sure you have Docker installed, then just run:

```bash
docker-compose up
```

That starts everything. No need to install Node or MongoDB locally.

- Frontend → http://localhost:3000
- Backend → http://localhost:5000

To stop it:

```bash
docker-compose down
```

## Project structure
multi-container/
├── client/          # React app
├── server/          # Node.js API
└── docker-compose.yml

## What I learned

This was my first time setting up a multi-container environment. The trickiest
part was getting the containers to talk to each other — turns out Docker Compose
handles that through its internal network, so the backend can reach MongoDB just
by using `mongodb` as the hostname instead of `localhost`.

Writing separate Dockerfiles for the frontend and backend also helped me
understand how each service gets built and run in isolation.

