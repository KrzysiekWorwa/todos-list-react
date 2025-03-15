import { useSelector, useDispatch } from "react-redux";
import { ButtonsDiv, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {

    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    const hasDoneTasks = tasks.some(({ done }) => done);

    return (
    tasks.length > 0 && (
        <ButtonsDiv>
        <Button onClick={() => dispatch(toggleHideDone())} disabled={!hasDoneTasks} >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsDiv>
    )
);
};


export default Buttons;