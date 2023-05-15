import axios from 'axios';

const TASKAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/"
})

export const getAllTasks = () => {
    //const response = axios.get("http://127.0.0.1:8000/tasks/api/v1/tasks/")
    return TASKAPI.get("/");
};

export const createTask = (task) => {
    //return axios.post("http://127.0.0.1:8000/tasks/api/v1/tasks/");
    return TASKAPI.post("/", task);
};

export const updateTask = (id, task) => {
    return TASKAPI.put(`/${id}/`, task);
};

export const deleteTask = (id) => {
    return TASKAPI.delete(`/${id}/`);
}

export const getTask = (id) => {
    return TASKAPI.get(`/${id}/`);
}
