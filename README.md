# node_pg_prisma1

node_pg_prisma

- npm init -y
- npm install express
- npm install --save-dev nodemon
- add Dockerfile
- npm install @prisma/client
- npm install prisma -D
- npx prisma init
- create models in prisma/schema.prisma file
- npx prisma migrate dev --name initial_migration
- Added controllers, routes folders
- setup Cloud Run [https://www.youtube.com/watch?v=cr61rtWjLYQ](https://www.youtube.com/watch?v=cr61rtWjLYQ) , [https://www.youtube.com/watch?v=ZBlnwDj9-6U](https://www.youtube.com/watch?v=ZBlnwDj9-6U)
- Add environment var DATABASE_URL="postgresql://postgres:YOURPASSWORD@34.74.125.46:5432/db1?schema=public"
- Entire tutorial: [REST API with Node.js, Prisma and PostgreSQL](https://www.youtube.com/watch?v=ExS2OHzsvKA)
- In DBeaver, connection Host is public IP.
- npm i bcryptjs dotenv express-fileupload jsonwebtoken uuid @vinejs/vine
- npx prisma migrate dev --name users_table
-

## Postman APIs

### Add Category

```json Add new Category
{
  "name": "Cat1"
}
```
