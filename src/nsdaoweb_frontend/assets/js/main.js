// Author: NeutronStarPRO
// Date: 2023-04-18
// Version: 2.0.0

const btn = document.querySelector('.btn-join');
btn.addEventListener('click', () => {
    window.open('https://oc.app/4jwox-pyaaa-aaaar-amjbq-cai/?ref=3iq22-xyaaa-aaaar-amjrq-cai&code=834791b392db154c', '_blank');
});



const ICCookbookTag = document.querySelector('.ICCookbook');
const modal = document.querySelector('.modal');

ICCookbookTag.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    } else {
        return;
    }
});

const modalBtn = document.querySelector('.btn');
modalBtn.addEventListener('click', (e) => {
    
});

const modalBox = document.querySelector('.modal__box');
modalBox.addEventListener('click', (e) => {
    if (e.target === modalBox) {
        return;
    } else {
        const btn = e.target;
        const btnText = btn.textContent;
        if (btnText === 'English') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-en', '_blank');
            modal.style.display = 'none';
        } else if (btnText === '中文简体') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === '中文繁体') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === '日本語') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Français') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Русский язык') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Deutsch') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Español') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Português') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'بالعربية') {
            window.open('https://github.com/NeutronStarPRO/ICCookbook-zh', '_blank');
            modal.style.display = 'none';
        }
    }
});

