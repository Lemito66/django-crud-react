import React from "react";
import { useForm } from "react-hook-form";
import { createTask } from "../../api/tasks.api";
import { useNavigate } from "react-router-dom";

export function TaskFormPage() {
  // yup y zod son librerias para validar formularios
  const { register, handleSubmit, formState:{errors} } = useForm();

  const navigate = useNavigate();

  // HandleSubmit es una función que recibe los datos del formulario y los valida
  const onSubmit =  handleSubmit(async data => {
    await createTask(data);
    navigate("/tasks");
  });
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
    </div>
  );
}
