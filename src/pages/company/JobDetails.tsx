import React from "react";
import { useParams } from "react-router-dom";

const openPositions = [
  /* ...your job data... */
];
function JobDetails() {
  const { jobId } = useParams();
  const job = openPositions.find((j) => j.id === jobId);
  if (!job) return <div>Job not found.</div>;
  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>
        <b>Department:</b> {job.department}
      </p>
      <p>
        <b>Location:</b> {job.location}
      </p>
      <p>
        <b>Type:</b> {job.type}
      </p>
    </div>
  );
}
export default JobDetails;
