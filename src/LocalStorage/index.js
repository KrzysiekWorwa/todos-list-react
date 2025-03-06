
export const saveTasksToLocalStorage = (tasks) => {
    localStorage.getItem("tasks", JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        return JSON.parse(savedTasks);
    }

    return [];
};


