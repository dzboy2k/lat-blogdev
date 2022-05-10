## Blog Dev

### 01 - Setup
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