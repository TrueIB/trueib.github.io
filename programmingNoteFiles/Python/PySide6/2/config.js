document.addEventListener('DOMContentLoaded', () => {
  const subject = localStorage.getItem("trueib-subject");
  const body = document.querySelector("body");
  document.documentElement.setAttribute("data-subject", subject ? subject : "light");
  body.innerHTML += `<footer class="footer">Copyright &copy;${new Date().getFullYear()} TrueIB</footer>`;const codeContents = document.querySelectorAll("pre");
  let isDragging = false;
  let startX, scrollLeft;
  for (let codeContent of codeContents) {
    codeContent.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - codeContent.offsetLeft;
      scrollLeft = codeContent.scrollLeft;
    }, { passive: true });

    codeContent.addEventListener('touchend', () => {
      isDragging = false;
    });

    codeContent.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - codeContent.offsetLeft;
      const walk = (x - startX) * 2;
      codeContent.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  }
});

window.addEventListener("message", function (event) {
  if (event.data && event.data.type === "THEME_CHANGE") {
    this.document.documentElement.setAttribute("data-subject", event.data.subject);
  }
});
