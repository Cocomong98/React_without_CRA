// babel을 설치했으므로 JSX 문법으로 react 코드 작성가능
const App = () => /*#__PURE__*/ React.createElement("h1", null, "HELLO REACT WORLD WITH JSX");
// root에서 App을 실행하도록 설정
ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), document.getElementById("root"));
