import {
    ColFifty,
    ColFull,
    TodoCheckbox,
    TodoH1, TodoLabel,
    TodoLi,
    TodoList,
    TodoSpan,
    TodosWrapper
} from "../assets/style/styled";

const Todos = () => {
    return (
        <ColFifty>
            <TodosWrapper>
                <ColFull>
                    <TodoH1>Todos</TodoH1>
                </ColFull>

                <ColFull>
                    <TodoList>


                        <TodoLi>
                            <TodoLabel>
                                <TodoCheckbox type="checkbox"/>
                                <TodoSpan>Todo 1</TodoSpan>
                            </TodoLabel>
                        </TodoLi>


                    </TodoList>
                </ColFull>
            </TodosWrapper>
        </ColFifty>
    )
}

export default Todos;