import { ButtonsDiv, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {

    const hasDoneTasks = tasks.some(({ done }) => done);

    return (
    tasks.length > 0 && (
        <ButtonsDiv>
        <Button onClick={toggleHideDone} disabled={!hasDoneTasks}>
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