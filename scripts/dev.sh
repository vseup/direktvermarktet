#!/bin/bash
set -e

echo "starting dev database docker container..."
docker compose up -d

echo "waiting for database to be ready..."
until docker exec direktvermarktet-dev-db pg_isready -U root -h localhost > /dev/null 2>&1; do
  sleep 1
done

echo "init database..."
npm run dev:prisma:generate --workspace=direktvermarktet-api
npm run dev:prisma:migrate:deploy --workspace=direktvermarktet-api

echo "starting frontend + backend..."
concurrently -r \
  "npm run start:dev --workspace=direktvermarktet-api" \
  "npm run dev --workspace=direktvermarktet-client" 
  
echo "stopping docker containers..."
docker compose down -v --remove-orphans