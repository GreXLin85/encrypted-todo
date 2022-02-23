import './assets/style/style.css'
import Login from "./components/Login";
import TodoLock from "./components/TodoLock";
import {Container, Row} from "./assets/style/styled";
import Todos from "./components/Todos";
import {useState} from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <>
            <Container>
                <Row>
                    <Login todosChange={(todos) => setTodos(todos)}/>
                    {/*<TodoLock/>*/}
                    <Todos todos={todos}/>
                </Row>
            </Container>
        </>
    );
}

export default App;
