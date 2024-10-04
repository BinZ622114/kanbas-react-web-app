import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

export default function AssignmentControls() {
    return (
      <div id="wd-assignments-controls">
        <IoSearchOutline className="position-relative" style={{ bottom: "1px" }} />
        <input id="wd-assignment-search" placeholder="Search..." />
        <button id="wd-add-group" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    );
}