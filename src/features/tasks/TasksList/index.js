import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TasksList = () => {

const {tasks, hideDone} = useSelector(selectTasks);
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
                        {task.content}
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