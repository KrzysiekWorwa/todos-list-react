
export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        return JSON.parse(savedTasks);
    }

    return [];
};


