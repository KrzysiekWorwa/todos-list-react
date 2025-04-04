import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./common/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";


const App = () => (
    <HashRouter>
        <Navigation />
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route>
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
    </HashRouter>
);

export default App;