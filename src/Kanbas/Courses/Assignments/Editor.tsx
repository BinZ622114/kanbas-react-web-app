import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from "../../Database";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">Assignment Name</label>
        <input type="text" className="form-control" id="input1" value={assignment.title}/>
      </div>

      <div className="form-control" id="wd-description" style={{ minHeight: '150px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
      <div className="mb-3">
        <p>The assignment is <span style={{ color: 'red' }}>available online</span></p>
        <p>{assignment.description}</p>
      </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="points" value={`${assignment.points}`} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="assign-group" className="col-sm-4 col-form-label text-end">
          Display Grade as
        </label>
        <div className="col-sm-8" id="assign-group">
          <select className="form-select">
            <option selected>Percentage</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="assign-group" className="col-sm-4 col-form-label text-end">Assign</label>
        <div className="col-sm-8" id="wd-assign-assign-to" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h5>Assign to</h5>
          <input type="text" className="form-control" id="assign-to" value="Everyone" /><br></br>
          <h5>Due</h5>  
          <input type="datetime-local" className="form-control" id="wd-due-date" defaultValue="2024-12-06T11:59" /><br></br>
          <div className="row">
            <div className="col-sm-6">
              <h5>Available from</h5>
              <input type="datetime-local" className="form-control" id="wd-available-from" defaultValue="2024-09-06T12:00" />
            </div>
            <div className="col-sm-6">
              <h5>Until</h5>
              <input type="date" className="form-control" id="wd-available-until" defaultValue="2024-12-17"/>
            </div>
         </div>
        </div>
      </div>

      <hr />
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button id="wd-save-btn" className="btn btn-danger me-1 float-end">
          Save
        </button>
      </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button id="wd-cancel-btn" className="btn btn-secondary me-1 float-end">
          Cancel
        </button>
      </Link>

    </div>
  );
}  
  