// Author: NeutronStarPRO
// Date: 2023-04-18
// Version: 2.0.0

const btn = document.querySelector('.btn-join');
btn.addEventListener('click', () => {
    window.open('https://oc.app/4jwox-pyaaa-aaaar-amjbq-cai/?ref=3bmc2-5aaaa-aaaaf-agfiq-cai&code=1ab38ffae620366f', '_blank');
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
            window.open('https://neutronstardao.github.io/constellation.github.io', '_blank');
            modal.style.display = 'none';
        } else if (btnText === '中文简体') {
            window.open('https://neutronstardao.github.io/constellationzh.github.io', '_blank');
            modal.style.display = 'none';
        } else if (btnText === '日本語') {
            window.open('', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Français') {
            window.open('', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Русский язык') {
            window.open('', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Deutsch') {
            window.open('', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'Español') {
            window.open('', '_blank');
            modal.style.display = 'none';
        }
    }
});

