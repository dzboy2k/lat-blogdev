## Blog Dev

### 01 - Setup - P1
```
cmd
  npm init -y
  clear
  npm i express mongoose dotenv cors morgan cookie-parser
  npm i -D @types/express @types/mongoose @types/dotenv @types/cors @types/morgan @types/cookie-parser
  npm i -D typescript ts-node-dev @types/node
  clear
  npx tsc --init

package.json
  "target": es6,
  "rootDir": "./server",
  "outDir": "./dist",
  "moduleResolution": "node",

cmd
  node server/index.ts
  clear
  ts-node-dev server/index.ts
  npx ts-node-dev server/index.ts
  npx tsc (build ra file o disc)
  node dist/index.js

package.json
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node-dev server/index.js"
  },

Xóa folder dist

cmd
 npm run dev
```

### 01 - Setup - P2
```
https://www.mongodb.com/
  Sign in
  Project - New Project
    Name Your Project: blogdev
    => Create Project
    => Build a Database
  Create a Shared Cluster => Create Cluster
  
  Database Access => Database Users => Add New Database User
  => Password
  devat
  devat123
    => Add User

  Network Access => Add IP Address => Allow Access from Anywhere => Confirm

cmd
  npx create-react-app client --template typescript
https://www.mongodb.com/
  Database => Connect => Connect your application 
    => mongodb+srv://devat:devat123...mongodb.net/blogdev?retryWrites
```