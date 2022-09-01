// 기본 화면
const app = document.querySelector('.app');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const div = document.createElement('div');
div.className = 'title-box';

const pages = ['Home', 'About', 'Project'];

pages.map((page) => {
    const li = document.createElement('li');
    li.className = 'history';
    li.setAttribute('route', `/${page}`);
    li.innerHTML = `${page}`;
    ul.appendChild(li);
})

nav.appendChild(ul);
app.appendChild(nav); // 네비게이션 렌더링
app.appendChild(div); // 콘텐츠 표시 영역 렌더링

// 라우팅
    // 1. 네비게이션이 눌렸을 때 경로를 바꾸고, 경로에 맞게 렌더링
const historyLinker = document.querySelectorAll('.history');

historyLinker.forEach((element) => {
    element.addEventListener('click', (event) => {
        const pathName = event.target.getAttribute('route');
        window.history.pushState({}, pathName, window.location.origin + pathName);
        renderHTML(pathName);
    })
})
    // 2. 뒤로가기, 앞으로 가기로는 렌더링이 바뀌지 않는 문제 처리 (주소만 바뀌어도 렌더링이 바뀌어야 함)
window.onpopstate = () => {
    renderHTML(window.location.pathname);
}

// 경로별 렌더링을 처리하는 함수
const renderHTML = (pathName) => {
    div.innerHTML = `${pathName} 경로의 페이지 입니다!`;
    app.appendChild(div);
}