import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./Courses/enrollmentsReducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [displayAllCourses, setDisplayAllCourses] = useState(false);

  const isEnrolledCourse = (course: any) => enrollments.some(
      (enrollment: any) => currentUser && enrollment.user === currentUser._id &&       
        enrollment.course === course._id);

  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
      <>
      <h5>New Course
        <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input    value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/><hr />
      </>)}

      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setDisplayAllCourses(!displayAllCourses)}
        >
          Enrollments
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(displayAllCourses ? courses : courses       
            .filter((course) =>
              enrollments.some(
                (enrollment: any) =>         //No courses displayed when the currentUser is null
                  currentUser && enrollment.user === currentUser._id &&       
                  enrollment.course === course._id
                 )))
            .map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image || "/images/5000.jpg"} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>

                    {currentUser.role === "FACULTY" && (
                    <>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                      }} className="btn btn-danger float-end" id="wd-delete-course-click">
                      Delete </button>
                    <button id="wd-edit-course-click" onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" > Edit </button>
                    </>)}

                    {currentUser.role === "STUDENT" && (
                    <>
                      {isEnrolledCourse(course) ? 
                        <button className="btn btn-danger float-end" id="wd-unenroll-course"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(deleteEnrollment({
                                    userId: currentUser._id,
                                    courseId: course._id,
                                  }));
                                }}>
                          Unenroll
                        </button> 
                      : <button className="btn btn-success float-end" id="wd-enroll-course"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(addEnrollment({
                                    userId: currentUser._id,
                                    courseId: course._id,
                                  }));
                                }}>
                          Enroll
                        </button>}
                    </>)}

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);
}

