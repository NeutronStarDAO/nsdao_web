// Author: NeutronStarPRO
// Date: 2023-04-18
// Version: 1.0.0

// 点击首页按钮跳转到openchat
const btn = document.querySelector('.btn-join');
btn.addEventListener('click', () => {
    window.open('https://oc.app/4jwox-pyaaa-aaaar-amjbq-cai/?ref=3iq22-xyaaa-aaaar-amjrq-cai&code=834791b392db154c', '_blank');
});

// 配置canvas画布
var type;
var options = {
    Background: '#0A0A0A',
    Color1: '#FF3054',
    Color2: '#4614E9',
    Range: 50,
    Speed: 25,
    Counts: 1000,
    Size: 5,
    Direction: 'Center-Outward',

    Random: function () {
        var Color1 = random(['#3370ff', '#ff3389', '#27ff6e', '#27f7ff']);
        color1Control.setValue(Color1);
        var Color2 = random(['#3370ff', '#ff3389', '#27ff6e', '#27f7ff']);
        color2Control.setValue(Color2);
        var speed = random(10, 30);
        speedControl.setValue(speed);
        var range = random(100);
        RangeControl.setValue(range);
        var points = random(300, 2000);
        PointsControl.setValue(points);
        var Size = random(1, 10);
        SizeControl.setValue(Size);
        var Direction = random(['Center-Outward', 'Center-Inward', 'Left', 'Right', 'Up', 'Down']);
        DirControl.setValue(Direction);
    },
    Save: function () {
        saveFrames("Star-Emission", "png", 1, 1);
    }
}


// 获取class名为ICCookbook的标签和模态框元素
const ICCookbookTag = document.querySelector('.ICCookbook');
const modal = document.querySelector('.modal');

// 为a标签添加点击事件监听器
ICCookbookTag.addEventListener('click', () => {
    modal.style.display = 'block';
});

// 点击模态框外的区域，模态框消失
modal.addEventListener('click', (e) => {
    // 如果点击的是模态框，就隐藏模态框
    if (e.target === modal) {
        modal.style.display = 'none';
    } else {
        return;
    }
});

// 点击模态框内的按钮，模态框消失
const modalBtn = document.querySelector('.btn');
modalBtn.addEventListener('click', (e) => {
    
});

// 点击模态框内的按钮，跳转到对应的页面
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
        } else if (btnText === 'Português') {
            window.open('', '_blank');
            modal.style.display = 'none';
        } else if (btnText === 'بالعربية') {
            window.open('', '_blank');
            modal.style.display = 'none';
        }
    }
});

