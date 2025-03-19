import { add } from "./utils/add.js";
import { div } from "./utils/div.js";
import { mul } from "./utils/mul.js";
import { sub } from "./utils/sub.js";

console.log(add(1, 1));
console.log(sub(1, 1));
console.log(mul(1, 1));
console.log(div(1, 1));

// babel을 설치했으므로 JSX 문법으로 react 코드 작성가능
const App = () => <h1>HELLO REACT WORLD WITH JSX{process.env.TEST_API_URL}</h1>;
// root에서 App을 실행하도록 설정
ReactDOM.render(<App />, document.getElementById("root"));
