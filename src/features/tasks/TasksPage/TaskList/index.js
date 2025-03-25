import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, TaskDetailsLink } from "./styled";
import {  toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";


const TasksList = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        $toggleDone
                    >{task.done ? "✓" : ""}
                    </Button>
                    <Content $done={task.done}>
                        <TaskDetailsLink to={`/zadania/${task.id}`}>{task.content}</TaskDetailsLink>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        $remove
                    >
                        ⨉
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;