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
import { toast } from "react-hot-toast";

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
      toast.success("Tarea actualizada exitosamente");
    } else {
      await createTask(data);
      toast.success("Tarea creada exitosamente", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  const deleteTaskById = async () => {
    const accepted = window.confirm("¿Está seguro de eliminar esta tarea?");
    if (accepted) {
      await deleteTask(params.id);
      toast.success("Tarea eliminada exitosamente");
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
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>El título es requerido</span>}
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>La descripción es requerida</span>}
        {/* <input type="checkbox" {...register("done", { required: true })}/>
        {errors.done && <span>El estado es requerido</span>} */}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>
      {params.id && (
        <div className="flex">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={deleteTaskById}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
