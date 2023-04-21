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
    }
}
