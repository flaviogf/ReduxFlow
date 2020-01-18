<h1 align="center">
  Redux Flow
</h1>

<p align="center">
  <a href="#rocket-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Projeto

:zap: Redux Flow é uma biblioteca que adiciona tipagem estatica para projetos redux utilizando [Flow](https://flow.org/).

## :computer: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [React.js](https://pt-br.reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Flow](https://flow.org/)

## :thinking: Como utilizar

```js
import { Dispatch, GetState } from 'redux-flow';

const signIn  = (username: string, password: string) => (dispatch: Dispatch, getState: GetState) => {
    ...
}

export default { sign }
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
