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
import CryptoJS from "crypto-js";

const Todos = ({ todos, password }) => {
    return (
        <ColFifty>
            <TodosWrapper>
                <ColFull>
                    <TodoH1>Todos</TodoH1>
                </ColFull>

                <ColFull>
                    <TodoList>

                        {todos === [] || todos === null ? todos.map((todo, index) => {
                            return (
                                <TodoLi key={index}>
                                    <TodoFirstItem>
                                        <TodoCheckbox type="checkbox" selected={todo.isFinished} />
                                        <TodoSpan>{CryptoJS.AES.decrypt(todo.content)}</TodoSpan>
                                    </TodoFirstItem>

                                    <TodoSecondItem>
                                        <TodoIcons src={timesIcon} />
                                    </TodoSecondItem>
                                </TodoLi>
                            )
                        }) : <p>No Todos</p>}

                    </TodoList>

                    <TodoPlusBtn>
                        <img src={plusIcon} />
                    </TodoPlusBtn>

                </ColFull>
            </TodosWrapper>
        </ColFifty>
    )
}

export default Todos;