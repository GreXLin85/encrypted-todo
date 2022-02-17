import {ColFifty} from "../assets/style/styled";
import lockIcon from '../assets/img/lock.svg'

const TodoLock = () => {
    return(
                <ColFifty style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src={lockIcon} alt="lock" style={{height: "128px"}}/>
                </ColFifty>
    )
}

export default TodoLock;