# Evexie Users

Microservice for users management

## Development

Start users database

```bash
docker run --name evexie-users -e POSTGRES_DB=postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```
