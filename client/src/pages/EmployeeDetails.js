import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EmloyeeDetails = () => {
  const { id } = useParams();

  const employee = useSelector((state) =>
    state?.employee?.employees?.find((employee) => employee._id == id)
  );
  return (
    <div>
      <table className="table mt-4 w-75">
        <thead className="thead-dark bg-dark text-white w-75">
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Age</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee?._id}</td>
            <td>{employee?.nom}</td>
            <td>{employee?.prenom}</td>
            <td>{employee?.email}</td>
            <td>{employee?.age}</td>
            <td>{employee?.position}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmloyeeDetails;
