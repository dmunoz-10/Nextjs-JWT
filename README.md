# NextJS-JWT

A JWT-Auth app created with [Next.js](https://nextjs.org/) and [Redux](https://redux.js.org/).

## Usage:

### Instalation:
Make sure you have Node and NPM installed.

```bash
git clone https://github.com/dmunoz-10/Nextjs-JWT.git
cd nextjs-jwt
npm install
```

### Starting the app:
```bash
# Run in dev mode:
npm run dev

# Run in production:
npm run build
npm start
```

### How to work it with your API:

####Folder Structure: 
```
.
├── components
│   ├── Layout.js
│   └── Navbar.js
├── node_modules
│   ├── [...]
├── pages
│   └── _app.js
|   └── index.js
|   └── me.js
|   └── signin.js
|   └── signup.js
├── redux
│   └── actions
│       └── authActions.js
│       └── index.js
│   └── reducers
│       └── authReducer.js
│       └── index.js
│   └── index.js
│   └── types.js
├── utils
│   └── cookie.js
│   └── initialize.js
├── config.js
├── next.config.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
```
- Change the API's URL:
    Go to `./config.js` and you can change it:
    ```
    module.exports = {
        API: 'http://localhost:3000/api/v1',
    };
    ```

- Change the Endpoints:
  Go to `./redux/actions/authActions.js`
  <br>

  - Sign up:
    
    ```
    21    fetch(`${API}/users`, {
    ```
  <br>

  - Sign in:
    
    ```
    54    fetch(`${API}/users/authenticate`, {
    ```
  Go to `./pages/me.js`
    <br>

    - Show the User's data:
        
        ```
        39    const response = await fetch(`${API}/user/me`, {
        ```

## TODO

- [ ] Add the API that uses JWT for Authentication.