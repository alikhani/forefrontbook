# Welcome to the GraphQL workshop!

This project is built with [Next.js](https://nextjs.org/), [Apollo](https://www.apollographql.com/) & [Prisma](https://prisma.io/)

To get the project up and running:
1. Clone or fork this repo.
2. Install the dependencies: `npm install`
3. To create the SQLLite file and initiate: `npx prisma migrate dev --name init`
4. Seed the db with initial data: `npx prisma db seed`
5. Copy `.env-test` and create your own `.env`. Request `GITHUB_ID` and `GITHUB_SECRET` from a collegaue through some other channel.
6. Run the project: `npm run dev `

## Troubleshooting

- Make sure you have `yarn` installed (`npm install -g yarn` if needed)
- Run a current version of Node! Node 12 seems to be too old, 16 (stable) works just fine. Consider installing `nvm` if you need to keep another version for work-related purposes: Mac/Linux: https://github.com/nvm-sh/nvm Windows: https://github.com/coreybutler/nvm-windows 
- Yes, the app asks for a lot of Github permissions. It will be removed/revoked after the weekend, so as long as you trust Nima, you will be fine :)
