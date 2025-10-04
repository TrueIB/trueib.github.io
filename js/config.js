document.addEventListener('DOMContentLoaded', () => {
  const subject = localStorage.getItem("trueib-subject");
  const body = document.querySelector("body");
  document.documentElement.setAttribute("data-subject", subject ? subject : "light");
  body.innerHTML += `
  <footer class="footer">Copyright &copy;
    ${new Date().getFullYear()} TrueIB
  </footer>
  `;
});

window.addEventListener("message", function (event) {
  if (event.data && event.data.type === "THEME_CHANGE") {
    this.document.documentElement.setAttribute("data-subject", event.data.subject);
  }
});
