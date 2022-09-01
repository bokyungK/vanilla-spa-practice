// 기본 화면
const app = document.querySelector('.app');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const pages = ['Home', 'About', 'Project'];

pages.map((page) => {
    const li = document.createElement('li');
    li.className = 'history';
    li.setAttribute('route', `/${page}`);
    li.innerHTML = `${page}`;
    ul.appendChild(li);
})

nav.appendChild(ul);
app.appendChild(nav);

// 라우팅
const historyLinker = document.querySelectorAll('.history');

historyLinker.forEach((element) => {
    element.addEventListener('click', (event) => {
        const pathName = event.target.getAttribute('route');
        window.history.pushState({}, pathName, window.location.origin + pathName);
        renderHTML(element, pathName)
    })
})

// 경로별 렌더링
const renderHTML = (element) => {
    const div = document.createElement('div');
    const title = element.innerHTML;
    div.innerHTML = `${title} 경로의 페이지 입니다!`;
    app.appendChild(div);
}