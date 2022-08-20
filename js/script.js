//Elements
const sectionProject = document.querySelector(".projects");
const sectionContact = document.querySelector(".contact");
const sectionSkills = document.querySelector(".skill");
const btnContact = document.querySelector("#btn-contact");
const btnProject = document.querySelector("#btn-project");
const btnSkills = document.querySelector("#btn-skills");


// Scroll Smooth

btnProject.addEventListener("click", function () {
  sectionProject.scrollIntoView({ behavior: "smooth" });
});

btnContact.addEventListener("click", function () {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});

btnSkills.addEventListener("click", function () {
  sectionSkills.scrollIntoView({ behavior: "smooth" });
});
//


