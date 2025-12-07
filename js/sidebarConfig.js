const sidebarTitlesArray = [
  [true, '💻 网站首页', "replace('home.html'); "],
  [false, '📝 个人项目', [
    [true, '📄 小学成长纪念册', "replace('projects/q61.html')"]
  ]],
  [false, '📚 学习笔记', [
    [false, '📁 七年级上学期', [
      [false, '📁 语文', [
        [true, '📘 第一单元', "replace('studyNoteFiles/grade71/chinese/unit1.html'); "],
        [true, '📘 第二单元', ""],
        [true, '📘 第三单元', ""],
        [true, '📘 第四单元', ""],
        [true, '📘 第五单元', ""],
        [true, '📘 第六单元', ""],
        [true, '📘 第七单元', ""],
        [true, '📘 第八单元', ""]
      ]],
      [false, '📁 数学', [
        [true, '📘 第一单元', ""],
        [true, '📘 第二单元', ""],
        [true, '📘 第三单元', ""],
        [true, '📘 第四单元', ""],
        [true, '📘 第五单元', ""],
        [true, '📘 第六单元', ""]
      ]]
    ]],
  ]],
  [false, '📔 编程笔记', [
    [false, '📁 Python', [
      [false, '📁 Numpy', [
        [false, '📁 初级教程', [
          [true, '📘 安装和导入', "replace('programmingNoteFiles/Python/Numpy/1/1.html'); "],
          [true, '📘 创建数组', "replace('programmingNoteFiles/Python/Numpy/1/2.html'); "],
          [true, '📘 索引和切片', "replace('programmingNoteFiles/Python/Numpy/1/3.html'); "],
          [true, '📘 数组的运算', "replace('programmingNoteFiles/Python/Numpy/1/4.html'); "],
          [true, '📘 数组形状操作', "replace('programmingNoteFiles/Python/Numpy/1/5.html'); "],
          [true, '📘 随机数生成', "replace('programmingNoteFiles/Python/Numpy/1/6.html'); "],
          [true, '📘 进阶操作', "replace('programmingNoteFiles/Python/Numpy/1/7.html'); "]
        ]],
        [false, '📁 高级教程', [
          [true, '📘 视图与副本', "replace('programmingNoteFiles/Python/Numpy/2/1.html'); "],
          [true, '📘 广播机制', "replace('programmingNoteFiles/Python/Numpy/2/2.html'); "],
          [true, '📘 高级花式索引', "replace('programmingNoteFiles/Python/Numpy/2/3.html'); "],
          [true, '📘 结构化数组', "replace('programmingNoteFiles/Python/Numpy/2/4.html'); "],
          [true, '📘 通用函数技巧', "replace('programmingNoteFiles/Python/Numpy/2/5.html'); "],
          [true, '📘 性能优化技巧', "replace('programmingNoteFiles/Python/Numpy/2/6.html'); "]
        ]]
      ]],
      [false, '📁 Pandas', [
        [true, '📘 安装与导入', "replace('programmingNoteFiles/Python/Pandas/1.html'); "],
        [true, '📘 两大数据结构', "replace('programmingNoteFiles/Python/Pandas/2.html'); "],
        [true, '📘 读取与写入', "replace('programmingNoteFiles/Python/Pandas/3.html'); "],
        [true, '📘 检查与概览', "replace('programmingNoteFiles/Python/Pandas/4.html'); "],
        [true, '📘 挑选与切片', "replace('programmingNoteFiles/Python/Pandas/5.html'); "],
        [true, '📘 清洗与整理', "replace('programmingNoteFiles/Python/Pandas/6.html'); "],
        [true, '📘 排序与筛选', "replace('programmingNoteFiles/Python/Pandas/7.html'); "],
        [true, '📘 计算与分组', "replace('programmingNoteFiles/Python/Pandas/8.html'); "],
        [true, '📘 合并与连接', "replace('programmingNoteFiles/Python/Pandas/9.html'); "],
        [true, '📘 时间序列处理', "replace('programmingNoteFiles/Python/Pandas/10.html'); "],
        [true, '📘 数据可视化', "replace('programmingNoteFiles/Python/Pandas/11.html'); "]
      ]],
      [false, '📁 Matplotlib', [
        [true, '📘 安装与导入', "replace('programmingNoteFiles/Python/Matplotlib/1.html'); "],
        [true, '📘 第一个图表', "replace('programmingNoteFiles/Python/Matplotlib/2.html'); "],
        [true, '📘 添加初级元素', "replace('programmingNoteFiles/Python/Matplotlib/3.html'); "],
        [true, '📘 图表类型', "replace('programmingNoteFiles/Python/Matplotlib/4.html'); "],
        [true, '📘 面向对象接口', "replace('programmingNoteFiles/Python/Matplotlib/5.html'); "],
        [true, '📘 与Pandas的集成', "replace('programmingNoteFiles/Python/Matplotlib/6.html'); "],
        [true, '📘 高级技巧', "replace('programmingNoteFiles/Python/Matplotlib/7.html'); "],
        [true, '📘 综合实践', "replace('programmingNoteFiles/Python/Matplotlib/8.html'); "]
      ]],
      [false, '📁 Seaborn', [
        [true, '📘 安装和导入', "replace('programmingNoteFiles/Python/Seaborn/1.html'); "],
        [true, '📘 代码框架', "replace('programmingNoteFiles/Python/Seaborn/2.html'); "],
        [true, '📘 初级绘图', "replace('programmingNoteFiles/Python/Seaborn/3.html'); "],
        [true, '📘 高级绘图', "replace('programmingNoteFiles/Python/Seaborn/4.html'); "],
        [true, '📘 精细化样式控制', "replace('programmingNoteFiles/Python/Seaborn/5.html'); "],
        [true, '📘 与Pandas的集成', "replace('programmingNoteFiles/Python/Seaborn/6.html'); "],
        [true, '📘 实战案例', "replace('programmingNoteFiles/Python/Seaborn/7.html'); "]
      ]],
      [false, '📁 Scikit-learn', [
        [true, '📘 安装和导入', ""]
      ]],
      [false, '📁 PySide6', [
        [false, '📁 初级教程', [
          [true, '📘 准备工作', "replace('programmingNoteFiles/Python/PySide6/1/1.html'); "],
          [true, '📘 信号与槽', "replace('programmingNoteFiles/Python/PySide6/1/2.html'); "],
          [true, '📘 创建界面', "replace('programmingNoteFiles/Python/PySide6/1/3.html'); "],
          [true, '📘 布局管理', "replace('programmingNoteFiles/Python/PySide6/1/4.html'); "]
        ]],
        [false, '📁 高级教程', [
          [true, '📘 Model/View 架构', "replace('programmingNoteFiles/Python/PySide6/2/1.html'); "],
          [true, '📘 多线程', "replace('programmingNoteFiles/Python/PySide6/2/2.html'); "],
          [true, '📘 样式表', "replace('programmingNoteFiles/Python/PySide6/2/3.html'); "],
          [true, '📘 对话框', "replace('programmingNoteFiles/Python/PySide6/2/4.html'); "]
        ]],
        [true, '📘 控件一览表', "replace('programmingNoteFiles/Python/PySide6/1.html'); "]
      ]],
      [false, '📁 Tkinter', [
        [true, '📘 暂无笔记', ""]
      ]]
    ]],
    [false, '📁 HTML', [
      [false, '📁 标签', [
        [true, '📘 暂无笔记', ""]
      ]]
    ]],
    [false, '📁 JavaScript', [
      [true, '📘 暂无笔记', ""]
    ]],
    [false, '📁 CSS', [
      [true, '📘 暂无笔记', ""]
    ]]]],
  [true, '💬 联系方式', "replace('contact.html'); "],
  [false, '💻 其他工具', [
    [false, '📒 英语单词本', [
      [true, '📘 2025年下', "replace('other/words-notebook/2025-1.html'); "]
    ]]
  ]],
  [false, '📄 帮助文档', [
    [true, '📋 更新日志', "replace('help/log.html'); "],
    [true, '📜 开源许可', "replace('help/license.html'); "]
  ]]
];

let path = [];
let subject = 'light';
const urlObject = new URL(window.location.href);


function replace(url) {
  const urlObject = new URL(window.location.href + url);
  urlObject.searchParams.set('page', url);
  urlObject.searchParams.set('path', path.toString());
  closeSidebar();
  window.location.replace(urlObject.toString());
}


function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  for (let i = 0; i < 19; i++) {
    eval(`setTimeout(() => { sidebar.style.left = '${-i - 1}rem'; }, ${i * 10 + 10}); `);
  }
  setTimeout(() => { sidebar.style.display = 'none'; }, 200);
  setTimeout(() => { overlay.style.display = 'none'; }, 200);
}

function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  sidebar.style.display = 'block';
  overlay.style.display = 'block';
  for (let i = 0; i < 19; i++) {
    eval(`setTimeout(() => { sidebar.style.left = '${i - 19}rem'; }, ${i * 10 + 10}); `);
  }
}

function enter(option) {
  let list = [...sidebarTitlesArray];
  for (let item of path) {
    list = list[item];
    list = list[2];
  }
  for (let item = 0; item < list.length; item++) {
    if (list[item][1] == option) {
      path.push(item);
      break;
    }
  }
  sidebarCodeConfig();
}

function sidebarCodeConfig() {
  const notesList = document.querySelector('.sidebar ul');
  let list = [...sidebarTitlesArray];
  let text = path.length == 0 ? '' : '<li onclick="returnToTheLastOne(); " style="text-align: left; line-height: 2rem; cursor: pointer; padding-left: 0;">← 返回</li>';
  for (let item of path) {
    list = list[item];
    list = list[2];
  }
  for (let item of list) {
    if (item[0]) {
      text += `<li onclick="${item[2]}">${item[1]}</li>`;
    } else {
      text += `<li onclick="enter('${item[1]}'); "><div class="li"><div class="left-content">${item[1]}</div><div class="right-content">&gt;</div></div></li>`;
    }
  }
  notesList.innerHTML = text;
}

function returnToTheLastOne() {
  path.pop();
  sidebarCodeConfig();
}

function subjectConfig() {
  const subjectButton = document.querySelector('.subjectButton');
  subject = subject == 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-subject', subject);
  subjectButton.innerHTML = subject == 'light' ? '☀️' : '🌙';
  localStorage.setItem('trueib-subject', subject);
  sendSubjectToIframe();
}

function sendSubjectToIframe() {
  const iframe = document.querySelector('.htmlDisplayArea');
  iframe.contentWindow.postMessage({
    type: 'THEME_CHANGE',
    subject: subject
  }, "*");
}


document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  if (urlObject.searchParams.get('page') == null) {
    urlObject.searchParams.set('page', 'home.html');
    body.innerHTML = '';
    window.location.replace(urlObject.toString());
  } else {
    subject = localStorage.getItem("trueib-subject") ? localStorage.getItem("trueib-subject") : subject;
    document.documentElement.setAttribute("data-subject", subject);
    body.innerHTML = `<header class="header"><div class="left-content">&nbsp;&nbsp;<b class="menuButton" onclick="openSidebar(); ">☰</b>&nbsp;&nbsp;&nbsp;TrueIB</div><div class="right-content"><b class="subjectButton" onclick="subjectConfig(); ">${subject == 'dark' ? '🌙' : '☀️'}</b>&nbsp;&nbsp;</div></header><div class="overlay" onclick="closeSidebar(); "></div><div class="sidebar"><div class="closeButton" onclick="closeSidebar(); ">×</div><div style="padding: 20px;"><h1>TrueIB</h1><ul></ul></div></div>` + body.innerHTML;
    const iframe = document.querySelector('.htmlDisplayArea');
    iframe.setAttribute('src', urlObject.searchParams.get('page'));
    if (urlObject.searchParams.get('path') != null && urlObject.searchParams.get('path') != '') {
      path = urlObject.searchParams.get('path').split(',').map(Number);
    }
    sidebarCodeConfig();
  }
});
