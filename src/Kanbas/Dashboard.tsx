import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5002/Home">
            <img src="/images/5002.jpg" width={200} />
            <div>
              <h5>
                 CS5002 Discrete Structures
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5004/Home">
            <img src="/images/5004.jpg" width={200} />
            <div>
              <h5>
                 CS5004 Object-Oriented Design
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5008/Home">
            <img src="/images/5008.jpg" width={200} />
            <div>
              <h5>
                 CS5008 Data Structures and Algorithms
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5100/Home">
            <img src="/images/5100.jpg" width={200} />
            <div>
              <h5>
                 CS5100 Foundations Artificial Intelligence
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5800/Home">
            <img src="/images/5800.jpg" width={200} />
            <div>
              <h5>
                 CS5800 Algorithms
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6120/Home">
            <img src="/images/6120.jpg" width={200} />
            <div>
              <h5>
                 CS6120 Natural Language Processing
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6650/Home">
            <img src="/images/6650.jpg" width={200} />
            <div>
              <h5>
                 CS6650 Scalable Distributed Systems
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

