import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_EMPLOYEES } from "../redux/features/employee";

const EmloyeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  const getEmployeeList = async () => {
    const response = await fetch("/api/employee");
    const json = await response.json();
    dispatch(SET_EMPLOYEES(json));
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  return (
    <div>
      <table className="table mt-4 w-75">
        <thead className="thead-dark bg-dark text-white w-75">
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Plus d'informations</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee, key) => (
              <tr key={key}>
                <th>{employee._id}</th>
                <td>{employee.nom}</td>
                <td>{employee.prenom}</td>
                <td>
                  <Link
                    to={`/${employee._id}`}
                    state={employee}
                    className="nav-link text-danger fw-bold"
                  >
                    Plus d'informations
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmloyeeList;
