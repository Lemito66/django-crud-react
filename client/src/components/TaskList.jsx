import React from "react";
import { useEffect, useState } from "react";
import { getAllTasks } from "../../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Se ha cargado la página");
    async function loadTasks() {
      const response = await getAllTasks();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map(({id, title, description, done}) => {
        return (
          <TaskCard
            key={id}
            id={id}
            title={title}
            description={description}
            done={done}
          />
        );
      })}
    </div>
  );
}
