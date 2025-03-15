import { useSelector, useDispatch } from "react-redux";
import { ButtonsDiv, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {

    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
    tasks.length > 0 && (
        <ButtonsDiv>
        <Button onClick={() => dispatch(toggleHideDone())} >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsDiv>
    )
);
};


export default Buttons;