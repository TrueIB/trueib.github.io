window.addEventListener("message", function (event) {
  if (event.data && event.data.type === "THEME_CHANGE") {
    this.document.documentElement.setAttribute("data-subject", event.data.subject);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const codeContents = document.querySelectorAll("pre");
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
})
