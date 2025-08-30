const sidebarTitlesArray = [
  [true, '💻 网站首页', "replace('main.html'); "],
  [false, '📝 个人项目', [
    [true, '📄 小学成长纪念册', "replace('projects\\\\q61.html')"]
  ]],
  [false, '📚 学习笔记', [
    [false, '📁 七年级上学期', [
      [false, '📁 语文', [
        [true, '📘 第一单元', ""],
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
        [false, '📁 基础教程', [
          [true, '📘 安装和导入', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\1.html'); "],
          [true, '📘 创建数组', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\2.html'); "],
          [true, '📘 索引和切片', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\3.html'); "],
          [true, '📘 数组的运算', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\4.html'); "],
          [true, '📘 数组形状操作', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\5.html'); "],
          [true, '📘 随机数生成', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\6.html'); "],
          [true, '📘 进阶操作', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\7.html'); "]
        ]],
        [false, '📁 高级教程', [
          [true, '📘 视图与副本', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\1.html'); "],
          [true, '📘 广播机制', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\2.html'); "],
          [true, '📘 高级花式索引', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\3.html'); "],
          [true, '📘 结构化数组', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\4.html'); "],
          [true, '📘 通用函数技巧', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\5.html'); "],
          [true, '📘 性能优化技巧', "replace('programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\6.html'); "]
        ]]
      ]],
      [false, '📁 Pandas', [
        [true, '📘 安装与导入', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\1.html'); "],
        [true, '📘 两大数据结构', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\2.html'); "],
        [true, '📘 读取与写入', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\3.html'); "],
        [true, '📘 检查与概览', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\4.html'); "],
        [true, '📘 挑选与切片', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\5.html'); "],
        [true, '📘 清洗与整理', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\6.html'); "],
        [true, '📘 排序与筛选', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\7.html'); "],
        [true, '📘 计算与分组', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\8.html'); "],
        [true, '📘 合并与连接', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\9.html'); "],
        [true, '📘 时间序列处理', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\10.html'); "],
        [true, '📘 数据可视化', "replace('programmingNoteFiles\\\\Python\\\\Pandas\\\\11.html'); "]
      ]],
      [false, '📁 Matplotlib', [
        [true, '📘 安装与导入', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\1.html'); "],
        [true, '📘 第一个图表', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\2.html'); "],
        [true, '📘 添加基础元素', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\3.html'); "],
        [true, '📘 图表类型', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\4.html'); "],
        [true, '📘 面向对象接口', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\5.html'); "],
        [true, '📘 与Pandas的集成', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\6.html'); "],
        [true, '📘 高级技巧', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\7.html'); "],
        [true, '📘 综合实践', "replace('programmingNoteFiles\\\\Python\\\\Matplotlib\\\\8.html'); "]
      ]],
      [false, '📁 Seaborn', [
        [true, '📘 安装和导入', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\1.html'); "],
        [true, '📘 代码框架', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\2.html'); "],
        [true, '📘 基础绘图', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\3.html'); "],
        [true, '📘 高级绘图', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\4.html'); "],
        [true, '📘 精细化样式控制', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\5.html'); "],
        [true, '📘 与Pandas的集成', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\6.html'); "],
        [true, '📘 实战案例', "replace('programmingNoteFiles\\\\Python\\\\Seaborn\\\\7.html'); "]
      ]],
      [false, '📁 PyTorch', [
        [true, '📘 安装和导入', "replace('programmingNoteFiles\\\\Python\\\\PyTorch\\\\1.html'); "],
        [true, '📘 暂无笔记', "replace('programmingNoteFiles\\\\Python\\\\PyTorch\\\\2.html'); "],
        [true, '📘 暂无笔记', "replace('programmingNoteFiles\\\\Python\\\\PyTorch\\\\3.html'); "],
        [true, '📘 暂无笔记', "replace('programmingNoteFiles\\\\Python\\\\PyTorch\\\\4.html'); "]
      ]],
      [false, '📁 Tkinter', [
        [true, '📘 暂无笔记', ""]
      ]],
      [false, '📁 PySide', [
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
  [true, '📄 帮助文档', "replace('help.html'); "]
];

let path = [];
let subject = 'light';


function replace(url) {
  const iframe = document.querySelector('.htmlDisplayArea');
  closeSidebar();
  iframe.setAttribute('src', url);
  setTimeout(() => { sendSubjectToIframe(); }, 200);
}


function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  setTimeout(() => { sidebar.style.left = '-1rem'; }, 10);
  setTimeout(() => { sidebar.style.left = '-2rem'; }, 20);
  setTimeout(() => { sidebar.style.left = '-3rem'; }, 30);
  setTimeout(() => { sidebar.style.left = '-4rem'; }, 40);
  setTimeout(() => { sidebar.style.left = '-5rem'; }, 50);
  setTimeout(() => { sidebar.style.left = '-6rem'; }, 60);
  setTimeout(() => { sidebar.style.left = '-7rem'; }, 70);
  setTimeout(() => { sidebar.style.left = '-8rem'; }, 80);
  setTimeout(() => { sidebar.style.left = '-9rem'; }, 90);
  setTimeout(() => { sidebar.style.left = '-10rem'; }, 100);
  setTimeout(() => { sidebar.style.left = '-11rem'; }, 110);
  setTimeout(() => { sidebar.style.left = '-12rem'; }, 120);
  setTimeout(() => { sidebar.style.left = '-13rem'; }, 130);
  setTimeout(() => { sidebar.style.left = '-14rem'; }, 140);
  setTimeout(() => { sidebar.style.left = '-15rem'; }, 150);
  setTimeout(() => { sidebar.style.left = '-16rem'; }, 160);
  setTimeout(() => { sidebar.style.left = '-17rem'; }, 170);
  setTimeout(() => { sidebar.style.left = '-18rem'; }, 180);
  setTimeout(() => { sidebar.style.left = '-19rem'; }, 190);
  setTimeout(() => { sidebar.style.left = '-20rem'; }, 200);
  setTimeout(() => { sidebar.style.left = '-21rem'; }, 210);
  setTimeout(() => { overlay.style.display = 'none'; }, 210);
}

function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'block';
  setTimeout(() => { sidebar.style.left = '-20rem'; }, 10);
  setTimeout(() => { sidebar.style.left = '-19rem'; }, 20);
  setTimeout(() => { sidebar.style.left = '-18rem'; }, 30);
  setTimeout(() => { sidebar.style.left = '-17rem'; }, 40);
  setTimeout(() => { sidebar.style.left = '-16rem'; }, 50);
  setTimeout(() => { sidebar.style.left = '-15rem'; }, 60);
  setTimeout(() => { sidebar.style.left = '-14rem'; }, 70);
  setTimeout(() => { sidebar.style.left = '-13rem'; }, 80);
  setTimeout(() => { sidebar.style.left = '-12rem'; }, 90);
  setTimeout(() => { sidebar.style.left = '-11rem'; }, 100);
  setTimeout(() => { sidebar.style.left = '-10rem'; }, 110);
  setTimeout(() => { sidebar.style.left = '-9rem'; }, 120);
  setTimeout(() => { sidebar.style.left = '-8rem'; }, 130);
  setTimeout(() => { sidebar.style.left = '-7rem'; }, 140);
  setTimeout(() => { sidebar.style.left = '-6rem'; }, 150);
  setTimeout(() => { sidebar.style.left = '-5rem'; }, 160);
  setTimeout(() => { sidebar.style.left = '-4rem'; }, 170);
  setTimeout(() => { sidebar.style.left = '-3rem'; }, 180);
  setTimeout(() => { sidebar.style.left = '-2rem'; }, 190);
  setTimeout(() => { sidebar.style.left = '-1rem'; }, 200);
  setTimeout(() => { sidebar.style.left = '0rem'; }, 210);
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
  notesListCodeConfig();
}

function notesListCodeConfig() {
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
  notesListCodeConfig();
}

function subjectConfig() {
  const subjectButton = document.querySelector('.subjectButton');
  subject = subject == 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-subject', subject);
  subjectButton.innerHTML = subject == 'light' ? '☀️' : '🌙';
  sendSubjectToIframe();
}

function sendSubjectToIframe() {
  const iframe = document.querySelector('.htmlDisplayArea');
  iframe.contentWindow.postMessage({
    type: 'THEME_CHANGE',
    subject: subject
  }, window.location.origin);
}


document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const text = '<header class="header"><div class="left-content">&nbsp;&nbsp;<b class="menuButton" onclick="openSidebar(); ">☰</b>&nbsp;&nbsp;&nbsp;TrueIB</div><div class="right-content"><b class="subjectButton" onclick="subjectConfig(); ">☀️</b>&nbsp;&nbsp;</div></header><div class="overlay" onclick="closeSidebar(); "></div><div class="sidebar"><div class="closeButton" onclick="closeSidebar(); ">×</div><div style="padding: 20px;"><h1>TrueIB</h1><ul></ul></div></div>';
  body.innerHTML = text + body.innerHTML;
  notesListCodeConfig();
});
