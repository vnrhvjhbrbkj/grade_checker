
    function checkGrade() {
      const obtainedMarks = parseInt(document.getElementById('marksInput').value, 10);
      let grade;
      if (isNaN(obtainedMarks)) {
        grade = "Please enter your marks.";
      } else if (obtainedMarks >= 90) {
        grade = "Grade A";
      } else if (obtainedMarks >= 80) {
        grade = "Grade B";
      } else if (obtainedMarks >= 70) {
        grade = "Grade C";
      } else if (obtainedMarks >= 60) {
        grade = "Grade D";
      } else if (obtainedMarks >= 50) {
        grade = "Grade E";
      } else {
        grade = "You have failed";
      }
      document.getElementById('result').textContent = grade;
    }
