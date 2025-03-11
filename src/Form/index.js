import { useState } from "react";
import { FormBody, FormInput, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent.trim()) return;
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };
    return (
        <FormBody
            onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>
                Dodaj zadanie
            </Button>
        </FormBody>
    )
};

export default Form;