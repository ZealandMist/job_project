import React from "react";

class Jobs extends React.Component {
  rendor() {
  <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Company Name</th>
        <th scope="col">Job Title</th>
        <th scope="col">Job Url</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
    
  }
}

export default Jobs;