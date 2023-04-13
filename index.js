const filterInput = document.getElementById("filter-input");
const personalProjects = document.getElementById("personal-projects");
const semesterProjects = document.getElementById("semester-projects");
const finalYearProjects = document.getElementById("final-year-projects");

// Filter projects based on technology
function filterProjects() {
  const filterValue = filterInput.value.toLowerCase();

  // Filter personal projects
  Array.from(personalProjects.children).forEach(function(project) {
    const technology = project.getAttribute("data-technology");
    if (technology.toLowerCase().indexOf(filterValue) > -1) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });

  // Filter semester projects
  Array.from(semesterProjects.children).forEach(function(project) {
    const technology = project.getAttribute("data-technology");
    if (technology.toLowerCase().indexOf(filterValue) > -1) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });

  // Filter final year projects
  Array.from(finalYearProjects.children).forEach(function(project) {
    const technology = project.getAttribute("data-technology");
    if (technology.toLowerCase().indexOf(filterValue) > -1) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}

// Listen for input events on the filter input
filterInput.addEventListener("input", filterProjects);
