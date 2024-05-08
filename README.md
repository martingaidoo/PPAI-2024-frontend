# PPAI-2024

# Proyecto Practico De Aplicacion Integrador

Guia de actividades:




## Run Locally

Clone the project

```bash
  git clone https://github.com/martingaidoo/PPAI-2024-frontend
```

Go to the project directory

```bash
  cd PPAI-2024-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Authors

- [@Laureano-GR](https://github.com/Laureano-GR)

- [@JuanToranzo](https://github.com/JuanToranzo)

- [@Zaca-123](https://github.com/Zaca-123)

- [@LlancoMG](https://github.com/LlancoMG)

- [@MartinCesano](https://github.com/MartinCesano)

- [@valechiapero](https://github.com/valechiapero)

- [@GonzaGazzero](https://github.com/GonzaGazzero)

- [@fedeeperon](https://github.com/fedeeperon)

- [@martingaidoo](https://github.com/martingaidoo)





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
