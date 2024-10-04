export default function AssignmentEditor() {
  return (
    
    <div id="wd-assignments-editor">
      <div className="mb-3" >
      <label htmlFor="input1" className="form-label">
      Assignment Name</label>
      <input type="assignment" className="form-control"
        id="input1" placeholder="A1"/>
    </div>
    <div className="mb-3">
      <textarea className="form-control" id="wd-description" rows={6}>
        Assignment 1
      </textarea>
    </div>
    <div className="mb-3 row">
    <label htmlFor="points"
      className="col-sm-2 col-form-label">
      Points
    </label>
    <div className="col-sm-10">
      <input type="text" className="form-control"
        id="point" value="100" />
    </div>
    </div>
    <div className="mb-3 row">
    <label htmlFor="assign-group"
      className="col-sm-2 col-form-label">
      Assignment Group
    </label>
    <div className="col-sm-10" id="wd-assign-group-dropdown">
    <select className="form-select">
       <option selected>ASSIGNMENT</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
    </select>
    </div>
    </div>
    <div className="mb-3 row">
    <label htmlFor="assign-group"
      className="col-sm-2 col-form-label">
      Display Grade as
    </label>
    <div className="col-sm-10" id="wd-assign-group-dropdown">
    <select className="form-select">
       <option selected>Percentage</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
    </select>
    </div>
    </div>
    <div className="mb-3 row">
    <label htmlFor="assign-group"
      className="col-sm-2 col-form-label">
      Submission Type
    </label>
    <div className="col-sm-10" id="wd-assign-group-dropdown">
    <select className="form-select">
       <option selected>Online</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
    </select><br></br>
    <h5>Online Entry Options</h5>
    <div className="row mb-3">
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                 id="r1" />
          <label className="form-check-label" htmlFor="r1">
            Text Entry </label> <br/>
          <input className="form-check-input" type="checkbox" 
                 id="r2" />
          <label className="form-check-label" htmlFor="r2">
            Media Recordings </label> <br/>
          <input className="form-check-input" type="checkbox" 
                 id="r3" />
          <label className="form-check-label" htmlFor="r3">
            Website URL </label> <br/>
          <input className="form-check-input" type="checkbox" 
                 id="r4" />
          <label className="form-check-label" htmlFor="r4">
            Student Annotation </label> <br/>
          <input className="form-check-input" type="checkbox" 
                 id="r5" />
          <label className="form-check-label" htmlFor="r5">
            File Upload </label> <br/>
        </div> 
      </div>
    </div>
  </div>
</div>
<div className="mb-3 row">
    <label htmlFor="assign-group"
      className="col-sm-2 col-form-label">
      Assign
    </label>
    <div className="col-sm-10" id="wd-assign-assign-to">
    <h5>Assign to</h5>
    <div className="row mb-3">
      <div className="col-sm-10">
        <input type="text" className="form-control"
        id="assign-to" value="Everyone" /><br></br>
    <h5>Due</h5>  
    <input type="date" id="wd-due-date" defaultValue="2024-9-30"/><br></br>
            <h5>Avaliable from</h5>
            <input type="date" id="wd-available-from" defaultValue="2024-9-15"/><br></br>
            <h5>Until</h5>
            <input type="date" id="wd-available-until" defaultValue="2024-10-7"/><br></br>
      </div> 
    </div>
    </div>
</div>
      <table>
      <tr>
        <td align="right" valign="top" colSpan={2}>
          <hr />
          <button id="wd-cancel" type="button">
              Cancel
          </button>
          <button id="wd-save" type="button">
              Save
          </button>
        </td>
      </tr>
  </table>
</div>
);
}  
  