import React from "react";
import { useForm } from "react-hook-form";
import {
  createTask,
  deleteTask,
  updateTask,
  getTask,
} from "../../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function TaskFormPage() {
  const [task, setTask] = useState([]);

  // yup y zod son librerias para validar formularios
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  //console.log(params)

  // HandleSubmit es una función que recibe los datos del formulario y los valida
  const onSubmit = handleSubmit(async (data) => {
    /* await createTask(data);
    navigate("/tasks"); */
    if (params.id) {
      //console.log("actualizando")
      await updateTask(params.id, data);
    } else {
      await createTask(data);
    }
    navigate("/tasks");
  });

  const deleteTaskById = async () => {
    const accepted = window.confirm("¿Está seguro de eliminar esta tarea?");
    if (accepted) {
      await deleteTask(params.id);
      navigate("/tasks");
    }
  };
  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        console.log("Obteniendo Datos");
        const {
          data: { title, description },
        } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
        />
        {errors.title && <span>El título es requerido</span>}
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>La descripción es requerida</span>}
        {/* <input type="checkbox" {...register("done", { required: true })}/>
        {errors.done && <span>El estado es requerido</span>} */}
        <button>Guardar</button>
      </form>
      {params.id && <button onClick={deleteTaskById}>Eliminar</button>}
    </div>
  );
}
