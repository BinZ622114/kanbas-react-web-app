export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Number">Number</option>
                <option selected value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    );
}
  