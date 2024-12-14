import React from "react";

const Table = ({ stddata }) => {
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>NAME</th>
            <th>ID</th>
            <th>ROLL NUMBER</th>
          </tr>
        </thead>
        
        <tbody>
          {stddata.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.rollnum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
