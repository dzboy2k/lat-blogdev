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

### 02 - Register
```
cmd
  npm i bcrypt jsonwebtoken
  npm i @types/bcrypt @types/jsonwebtoken

Postman 
http://localhost:5000/api/register POST
  body -> raw -> json

  {
    "name": "DevAT",
    "account": "user01@gmail.com",
    "password": "123456"
  }

regex email js
  {
    "name": "DevAT",
    "account": "user01@gmail.com",
    "password": "1234"
  }

  {
    "name": "DevAT",
    "account": "user01@",
    "password": "123456"
  }

  {
    "name": "DevAT",
    "account": "+84374481936",
    "password": "123456"
  }

  {
    "name": "",
    "account": "+84374481936",
    "password": "123456"
  }

jwt - https://jwt.io/ (Encoded)

tsconfig.json
  "include": [
    "server/**/*"
  ]
```

### 03 - Send Mail
```
cmd
  npm i nodemailer google-auth-library
  npm i -D @types/nodemailer
  npm uninstall @types/bcrypt @types/jsonwebtoken
  npm i -D  @types/bcrypt @types/jsonwebtoken

google console
  https://console.cloud.google.com/ => New Project:
    Project name: blog-devat
    Location: No organization
  => Create
  APIs & Services => Credentials =>  Create credentials => OAuth client ID
    => Configure consent screen => Create

    OAuth consent screen:
      App name: blogdev
      User support email: ...
      Developer contact information: ...
    => Save and Continue x2
    => Add Users => Save and Continue => Back to Dashboard

    Credentials => OAuth client ID:
      Application type: Web application 
      Name: BlogDev
      Authorized JavaScript origins => Add URI: http://localhost:3000
      Authorized redirect URIs => Add URI: https://developers.google.com/oauthplayground
      => Create

    https://developers.google.com/oauthplayground/
      => Use your own OAuth credentials
        OAuth Client ID
        OAuth Client secret
      Input your own scopes: http://mail.google.com => Authorize APIs
      => Exchange authorization code for tokens => Refresh token

Postman
  {
    "name": "DevAT",
    "account": "dzboy2k50@gmail.com",
    "password": "123456"
  }
```