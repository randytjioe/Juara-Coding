import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.js";

const DownloadPage = () => {
  return (
    <div className="container mt-20 d-flex justify-content-center align-items-center flex-column bg-fixed">
      {" "}
      {/* Menggunakan kelas Bootstrap */}
      <div className="max-w-screen-xl mx-auto pt-20">
        {" "}
        {/* Menggunakan kelas Bootstrap */}
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Welcome to Download Page</h2>
            <p>You are logged in.</p>
            <h3>Available Downloads:</h3>
            <ul className="list-group">
              {data.map((file, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {file.name}
                  <a href={file.url} className="btn btn-primary" download>
                    Download
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/" className="btn btn-secondary mt-3">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
