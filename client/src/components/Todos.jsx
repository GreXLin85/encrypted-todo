import {
    ColFifty,
    ColFull,
    TodoCheckbox, TodoFirstItem,
    TodoH1, TodoIcons, TodoLabel,
    TodoLi,
    TodoList, TodoPlusBtn, TodoSecondItem,
    TodoSpan,
    TodosWrapper
} from "../assets/style/styled";

import timesIcon from "../assets/img/times.svg";
import plusIcon from "../assets/img/plus.svg";
import deleteIcon from "../assets/img/delete.svg";

const Todos = ({ todos }) => {
    return (
        <ColFifty>
            <TodosWrapper>
                <ColFull>
                    <TodoH1>Todos</TodoH1>
                    <TodoPlusBtn>
                        <img src={deleteIcon} alt="delete"/>
                    </TodoPlusBtn>
                </ColFull>

                <ColFull>
                    <TodoList>

                        {todos === [] || todos === null ? todos.map((todo, index) => {
                            return (
                                <TodoLi key={index}>
                                    <TodoFirstItem>
                                        <TodoCheckbox type="checkbox" selected={todo.isFinished} />
                                        <TodoSpan>{todo.content}</TodoSpan>
                                    </TodoFirstItem>

                                    <TodoSecondItem>
                                        <TodoIcons src={timesIcon} />
                                    </TodoSecondItem>
                                </TodoLi>
                            )
                        }) : <p>No Todos</p>}

                    </TodoList>

                    <TodoPlusBtn plus={true}>
                        <img src={plusIcon} alt="plus"/>
                    </TodoPlusBtn>


                </ColFull>
            </TodosWrapper>
        </ColFifty>
    )
}

export default Todos;