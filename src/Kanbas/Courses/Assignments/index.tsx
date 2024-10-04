import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentsControls";
import { TfiWrite } from "react-icons/tfi";
import AssignmentControlButton from "./AssignmentControlButton";
import AssignmentTitleControl from "./AssignmentTitleControl";
import { Link } from "react-router-dom";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br /><br /><br />

        <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              ASSIGNMENTS 
              <AssignmentTitleControl /> 
        </div>
        <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="wd-fg-color-green me-2 fs-3 " />
                <Link id="wd-assignment-1-link"  to="/Kanbas/Courses/5002/Assignments/1">
                A1
                </Link>
                <p className="wd-fg-color-red">
                  Multiple Modules
                <span className="wd-fg-color-black">| <b>Not available until</b> Oct 1 at 12:00am | <b>Due</b> Oct 14 at 11:59pm | 100 pts</span>
                </p>
                <AssignmentControlButton />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="wd-fg-color-green me-2 fs-3 " />
                <Link id="wd-assignment-2-link"  to="/Kanbas/Courses/5002/Assignments/1">
                A2
                </Link>
                <p className="wd-fg-color-red">
                  Multiple Modules
                <span className="wd-fg-color-black">| <b>Not available until</b> Nov 15 at 12:00am | <b>Due</b> Nov 30 at 11:59pm | 100 pts</span>
                </p>
                <AssignmentControlButton /> 
              </li>
        </ul>
      </div>
  );
}
  