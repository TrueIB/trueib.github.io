document.addEventListener('DOMContentLoaded', () => {
  const subject = localStorage.getItem("trueib-subject");
  const body = document.querySelector("body");
  document.documentElement.setAttribute("data-subject", subject ? subject : "light");
  body.innerHTML += `<footer class="footer">Copyright &copy;${new Date().getFullYear()} TrueIB</footer>`;
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
  const languageSelect = document.querySelector('#language');
  languageSelect.addEventListener('change', function() {
    const value = this.value;
    if (value == 'all') {
      displayAll(words, '2025年下英语单词本');
    } else if (value == 'Chinese') {
      displayChinese(words, '2025年下英语单词本');
    } else {
      displayEnglish(words, '2025年下英语单词本');
    }
  })
});

function displayAll(wordsArray, header) {
  const wordsTable = document.querySelector('#words-table');
  wordsArray.sort((a, b) => a[0].localeCompare(b[0]));
  text = `<tr><th colspan="2">${header}</th></tr>`;
  for (let i of wordsArray) {
    text += `<tr><th>${i[0]}</th><td>${i[1]}</td></tr>`;
  }
  wordsTable.innerHTML = text;
}

function displayChinese(wordsArray, header) {
  const wordsTable = document.querySelector('#words-table');
  wordsArray.sort((a, b) => a[0].localeCompare(b[0]));
  text = `<tr><th>${header}</th></tr>`;
  for (let i of wordsArray) {
    text += `<tr><td>${i[1]}</td></tr>`;
  }
  wordsTable.innerHTML = text;
}

function displayEnglish(wordsArray, header) {
  const wordsTable = document.querySelector('#words-table');
  wordsArray.sort((a, b) => a[0].localeCompare(b[0]));
  text = `<tr><th>${header}</th></tr>`;
  for (let i of wordsArray) {
    text += `<tr><th>${i[0]}</th></tr>`;
  }
  wordsTable.innerHTML = text;
}

window.addEventListener("message", function (event) {
  if (event.data && event.data.type === "THEME_CHANGE") {
    this.document.documentElement.setAttribute("data-subject", event.data.subject);
  }
});
