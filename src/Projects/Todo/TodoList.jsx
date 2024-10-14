import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({data ,checked,onHalndleDeleteTodo,onHalndleCheckedTodo}) => {
    return(
        <li className="todo-item">
                  <span className={checked ? "checkList": "notCheckList"}>{data}</span>
                  <button className="check-btn" onClick={() => onHalndleCheckedTodo(data)}>
                  <MdCheck/></button>
                  <button className="delete-btn" onClick={() =>
                    onHalndleDeleteTodo(data)}>
                  <MdDeleteForever/>
                  </button>
                </li>
    )
}