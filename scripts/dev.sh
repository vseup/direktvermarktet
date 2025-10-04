#!/bin/bash
set -e

echo "starting dev database docker container..."
docker compose up -d

echo "init database..."
npm run db:dev:deploy --workspace=direktvermarktet-api

echo "starting frontend + backend..."
concurrently -r \
  "npm run start:dev --workspace=direktvermarktet-api" \
  "npm run dev --workspace=direktvermarktet-client" 
  
echo "stopping docker containers..."
docker compose down -v
