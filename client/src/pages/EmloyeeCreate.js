import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_EMPLOYEE } from "../redux/features/employee";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
});

const EmployeeCreate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    nom: "",
    prenom: "",
    email: "",
    age: "",
    position: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  const onSubmit = async (data) => {
    const response = await fetch("/api/employee/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (response.ok) {
      dispatch(CREATE_EMPLOYEE(json));
    }
    reset();
  };
  return (
    <div>
      <form
        className="d-flex justify-content-center flex-column  w-25"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <label htmlFor="n">Nom</label>
          <input
            type="text"
            className="form-control"
            id="n"
            onChange={handleChange}
            {...register("nom")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="p">Prenom</label>
          <input
            type="text"
            className="form-control"
            id="p"
            onChange={handleChange}
            {...register("prenom")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="e">Email</label>
          <input
            type="email"
            className="form-control"
            id="e"
            onChange={handleChange}
            {...register("email")}
          />
        </div>
        <p>{errors.email?.message}</p>
        <div className="form-group">
          <label htmlFor="a">Age</label>
          <input
            type="text"
            className="form-control"
            id="a"
            onChange={handleChange}
            {...register("age")}
          />
        </div>
        <p>{errors.age?.message}</p>
        <div className="form-group">
          <label htmlFor="pos">Position</label>
          <input
            type="text"
            className="form-control"
            id="pos"
            onChange={handleChange}
            {...register("position")}
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
