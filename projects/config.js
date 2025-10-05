function replace(url, href, file) {
  const urlNum = {
    'q61': 9
  }
  let whref = '';
  for (let i = 0; i < window.location.href.length - urlNum[file]; i++) {
    whref += window.location.href[i];
  }
  const urlObject = new URL(whref + '/' + url);
  urlObject.searchParams.set('src', href); const link = document.createElement('a');
  link.href = urlObject.toString();
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
}

document.addEventListener('DOMContentLoaded', () => {
  const subject = localStorage.getItem("trueib-subject");
  const body = document.querySelector("body");
  document.documentElement.setAttribute("data-subject", subject ? subject : "light");
  body.innerHTML += `<footer class="footer">Copyright &copy;${new Date().getFullYear()} TrueIB</footer>`; const codeContents = document.querySelectorAll("pre");
  let isDragging = false;
  let startX, scrollLeft;
  const aArray = document.querySelectorAll('.a');
  for (let a of aArray) {
    a.addEventListener('click', () => {
      replace(`iframe.html`, a.innerHTML, a.id);
    });
  }
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
