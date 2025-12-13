document.addEventListener('DOMContentLoaded', () => {
  const subject = localStorage.getItem("trueib-subject");
  const body = document.querySelector("body");
  const image = document.querySelector('#image');
  if (image) {
    image.src = `home-${subject}.png`;
  }
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
    const image = this.document.querySelector('#image');
    if (image) {
      image.src = `home-${event.data.subject}.png`;
    }
  }
});
