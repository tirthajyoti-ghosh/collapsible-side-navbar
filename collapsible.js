const openIcon = `<svg width="15" height="15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000" d="M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z"></path></svg>`;

const collapseIcon = `<svg width="15" height="15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000" d="M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.7c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.3-9.4-9.3-24.6 0-34zm192 34l194.3 194.3c9.4 9.4 24.6 9.4 33.9 0l22.7-22.7c9.4-9.4 9.4-24.5 0-33.9L323.5 256l154-154.7c9.3-9.4 9.3-24.5 0-33.9l-22.7-22.7c-9.4-9.4-24.6-9.4-33.9 0L226.5 239c-9.3 9.4-9.3 24.6 0 34z"></path></svg>`;

const newScript = document.createElement("script");
const inlineScript = document.createTextNode(`
    const toggleNavbar = (action) => {
        const nav = document.getElementById('left-sidebar');
        const sideNavToggler = document.getElementById('sidenav-toggler');

        if (action === 'collapse') {
            sideNavToggler.innerHTML = '${openIcon}';
            sideNavToggler.setAttribute('onclick', "toggleNavbar('open')");
            
            nav.style.width = 0;
        } else {
            sideNavToggler.innerHTML = '${collapseIcon}';
            sideNavToggler.setAttribute('onclick', "toggleNavbar('collapse')");

            nav.style.width = '300px';
        }
    };
`);
newScript.appendChild(inlineScript);
const head = document.getElementsByTagName('head')[0];
head.appendChild(newScript);

const main = document.querySelector('#app > div.row.flex-nowrap > main.col');
main.style.position = 'relative';
main.style.zIndex = '99';
main.style.transition = 'all 0.5s';

const nav = document.getElementById('left-sidebar');
nav.style.transition = 'all 0.5s';
nav.style.overflowX = 'hidden';
nav.style.whiteSpace = 'nowrap';

const header = document.querySelector('#app > div.row.flex-nowrap > main.col > header.row.top-navbar-section.p-3');
const headerInnerHTML = header.innerHTML;
header.innerHTML = `<div onclick="toggleNavbar('collapse')" id="sidenav-toggler" style="position: absolute; left: 0; top: 22px; z-index: 999; padding: 5px; border: 1.5px solid #000; border-left: 0; border-radius: 0 3px 3px 0; cursor: pointer">${collapseIcon}</div>${headerInnerHTML}`;
