let resume = document.getElementById("resume");
      
      resume.addEventListener("click", function(event) {

        var check = confirm("Would you like a PDF of my resume?")
          if (check === true) {
            resume.setAttribute("href", "assets/resume/Jameson_Midgley_Resume2.PDF");
            resume.setAttribute("download", "resume");
          } else {
            resume.setAttribute("href", "");
          };
      });