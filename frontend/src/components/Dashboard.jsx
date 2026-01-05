import React, { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import RagTile from "./RagTile";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(data => setProjects(data));
  }, []);

  const total = projects.length;
  const red = projects.filter(p => p.rag_status === "Red").length;
  const amber = projects.filter(p => p.rag_status === "Amber").length;
  const green = projects.filter(p => p.rag_status === "Green").length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">National Coordination Dashboard</h1>
      <div className="flex">
        <RagTile label={`Red (${red})`} rag="Red" />
        <RagTile label={`Amber (${amber})`} rag="Amber" />
        <RagTile label={`Green (${green})`} rag="Green" />
      </div>
      <div className="mt-4">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border px-2">Project</th>
              <th className="border px-2">Department</th>
              <th className="border px-2">Status</th>
              <th className="border px-2">RAG</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.project_id}>
                <td className="border px-2">{p.name}</td>
                <td className="border px-2">{p.department}</td>
                <td className="border px-2">{p.status}</td>
                <td className="border px-2">{p.rag_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
