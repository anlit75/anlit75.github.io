function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const myWorkLink = document.getElementById('my-work-link');
const myWorkLinkNav = document.getElementById('my-work-link-nav');
const aboutLink = document.getElementById('about-link');

if (myWorkLink) {
  myWorkLink.addEventListener('click', () => scrollToSection('my-work-section'));
}

if (myWorkLinkNav) {
  myWorkLinkNav.addEventListener('click', () => scrollToSection('my-work-section'));
}

if (aboutLink) {
  aboutLink.addEventListener('click', () => scrollToSection('about-section'));
}


document.addEventListener("DOMContentLoaded", function () {
  const tableOfContents = document.getElementById("table-of-contents");
  const headings = document.querySelectorAll("h1, h2, h3");

  headings.forEach((heading) => {
    const link = document.createElement("a");
    link.textContent = heading.textContent;
    link.href = `#${heading.id}`;

    const listItem = document.createElement("li");
    listItem.appendChild(link);

    tableOfContents.appendChild(listItem);
  });
});


// 監聽頁面滾動事件
window.addEventListener("scroll", function() {
  var scrollButton = document.querySelector(".scroll-to-top");

  // 如果滾動超過某個閾值（例如 200 像素），則顯示按鈕；否則隱藏它
  if (window.scrollY > 200) {
      scrollButton.style.display = "block";
  } else {
      scrollButton.style.display = "none";
  }
});

// 監聽回到頂部按鈕的點擊事件
document.querySelector("#back-to-top-button").addEventListener("click", function(e) {
  e.preventDefault(); // 防止鏈接跳轉
  window.scrollTo({ top: 100, behavior: "smooth" }); // 平滑滾動到頁面頂部
});


// // 获取Markdown容器元素
// const markdownContainer = document.getElementById("markdown-container");

// // 使用fetch API获取Markdown文件内容
// fetch("TEST.md")
//   .then((response) => response.text())
//   .then((markdownText) => {
//     // 使用Marked.js将Markdown渲染为HTML
//     const htmlContent = marked(markdownText);

//     // 将HTML内容插入Markdown容器
//     markdownContainer.innerHTML = htmlContent;
//   })
//   .catch((error) => {
//     console.error("Error fetching Markdown file:", error);
//   });
