# NextJS-JWT

A JWT-Auth app created with [Next.js](https://nextjs.org/) and [Redux](https://redux.js.org/).<br>
This app works with an API created with Rails, but you can change it [here](#how-to-work-it-with-your-api) to works with your API.

## Usage:

### Instalation:
Make sure you have Node and NPM installed.
Also that you have the [API](https://github.com/dmunoz-10/Rails-JWT)

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

#### Folder Structure:

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
    22    axios.post(`${API}/users`, {
    ```
  <br>

  - Sign in:
    
    ```
    67    axios.post(`${API}/users/authenticate`, {
    ```
    <br>

    **Note:** To change the way how you extract the token:

    ```
    72    setCookie('token', response.data.auth_token);
    73    Router.push('/me');
    74    dispatch({type: AUTHENTICATE, payload: response.data.auth_token});
    ```
  <br>

  Go to `./pages/me.js`
    <br>

    - Show the User's data:
        
        ```
        43    const response = await axios.get(`${API}/user/me`, {
        ```
        <br>

        **Note:** To change the way how you extract the data:

        ```
        48    const user = await response.data.user;
        ```

## TODO

- [x] Add the API that uses JWT for Authentication.
- [x] Show the errors validations in the Sign up and Sign in pages
