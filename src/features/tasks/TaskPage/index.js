import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />

            <Section
                title={task ? task.content : "Nie ma takiego zadania 😥"}
                body={!!task && (
                    <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
                )}
            />
        </Container>
    );
}

export default TaskPage; 
