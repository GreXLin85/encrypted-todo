import './assets/style/style.css'
import Login from "./components/Login";
import TodoLock from "./components/TodoLock";
import {Container, Row} from "./assets/style/styled";
import Todos from "./components/Todos";

const App = () => {
    return (
        <>
            <Container>
                <Row>
                    <Login/>
                    <TodoLock/>
                    {/*<Todos/>*/}
                </Row>
            </Container>
        </>
    );
}

export default App;
