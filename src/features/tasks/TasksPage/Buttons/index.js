import { useSelector, useDispatch } from "react-redux";
import { ButtonsDiv, Button } from "../styled";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    selectIsAnyTaskDone } from "../../tasksSlice"

const Buttons = () => {

    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);

    const dispatch = useDispatch();

    return (
        <ButtonsDiv>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} disabled={!isAnyTaskDone}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsDiv>
    );
};


export default Buttons;