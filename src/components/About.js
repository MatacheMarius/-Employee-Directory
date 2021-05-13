import React from "react";
import Directory from "./Directory";
//This maps through the random users and creates a new table row for each user
function About(props) {
  const tableData = props.results.map((employee) => (
    <tr key={employee.email}>
      <th scope="row">{<Directory params={employee} />}</th>
      <td>
        <img
          className="img-fluid img-thumbnail"
          src={employee.picture.large}
          alt={employee.name.first}
        />
      </td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>
        {employee.location.city}, {employee.location.state},{" "}
        {employee.location.country}
      </td>
    </tr>
  ));
  return <tbody>{tableData}</tbody>;
}

export default About;
