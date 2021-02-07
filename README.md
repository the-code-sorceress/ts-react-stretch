# ts-react-stretch
Fully featured dockerised typescript react boilerplate with
- Redux
- Redux Sagas
- Connected React Router
- GraphQL
- Material UI

Environment variables are configurable in webpack.config.js
Uses webpack's dev server to run in development mode 
Uses a lightweight express server to run in staging and production mode.

# Setup 
Prequisites: Make and Docker
```sh 
git clone git@github.com:the-code-sorceress/ts-react-stretch.git
cd ts-react-stretch
make
```

# Teardown
```sh 
make down
```
