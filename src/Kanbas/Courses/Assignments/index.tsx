import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentsControls";
import { TfiWrite } from "react-icons/tfi";
import AssignmentControlButton from "./AssignmentControlButton";
import AssignmentTitleControl from "./AssignmentTitleControl";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br /><br /><br />

        <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              ASSIGNMENTS 
              <AssignmentTitleControl /> 
        </div>

        <ul className="wd-lessons list-group rounded-0 wd-padded-left wd-bg-color-green">
          {assignments.filter(assignment => assignment.course === cid)
                      .map((assignment) => (
            <li key={assignment._id} className="wd-lesson list-group-item d-flex align-items-center p-3">
              <div className="icon-container me-2">
                <BsGripVertical className="fs-3" />
                <TfiWrite className="wd-fg-color-green me-2 fs-3" />
              </div>
              <div className="assignment-details flex-grow-1">
                <strong>
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-_id">
                  {assignment._id}
                </Link>
                </strong>
                <h6>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-link wd-fg-color-red">
                      Multiple Modules
                    </Link>
                    <span className="wd-fg-color-black"> | <b>Not available until</b> {`${assignment.startDate} at 12:00am`} | <b>Due</b> {`${assignment.dueDate} at 11:59pm`} | {`${assignment.points}`} pts</span>
                </h6>
              </div>
              <div className="control-buttons">
                <AssignmentControlButton />
              </div>
           </li>
          ))}
       </ul>
      </div>
  );
}
  