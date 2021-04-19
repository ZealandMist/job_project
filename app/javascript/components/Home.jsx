import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="card">
    <img src="https://storage.googleapis.com/pathrise-app/job_sources/google.png" className="img-fluid" alt="" />
      <div className="card-body">
        <h5 className="card-title">Job Board Name</h5>
        <p className="card-text">
          Board description
        </p>
        <a href="/jobs" className="btn btn-primary">
          Link to jobs for this company
        </a>
      </div>
    </div>
  </div>
);
