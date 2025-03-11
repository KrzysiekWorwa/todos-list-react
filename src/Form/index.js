import { useRef, useState } from "react";
import { FormBody, FormInput, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent.trim()) return;
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <FormBody
            onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </FormBody>
    )
};

export default Form;