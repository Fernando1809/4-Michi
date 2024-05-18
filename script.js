window.addEventListener('load', function() {
    var canvas = document.getElementById('stageCanvas');
    var stage = new createjs.Stage(canvas);

    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    var text = new createjs.Text(
        "Te amo como no te imaginas Michelle.\nGracias por llegar a mi vida y ser la luz enmedio de la oscuridada.\nSi te pusieras en mi lugar entenderias cuanto estoy dispuesto a hacer por ti por que TE AMO",
        "bold 24px Arial",
        "#fff"
    );
    text.textAlign = "center";
    text.x = w / 2;
    text.y = h / 2 - text.getMeasuredLineHeight() / 2;

    stage.addChild(text);

    function createHeartShape(graphics, x, y, width, height) {
        graphics.moveTo(x, y + height / 4);
        graphics.bezierCurveTo(x, y, x + width / 4, y, x + width / 4, y + height / 4);
        graphics.bezierCurveTo(x + width / 4, y, x + width / 2, y, x + width / 2, y + height / 4);
        graphics.bezierCurveTo(x + width / 2, y, x + 3 * width / 4, y, x + 3 * width / 4, y + height / 4);
        graphics.bezierCurveTo(x + 3 * width / 4, y, x + width, y, x + width, y + height / 4);
        graphics.bezierCurveTo(x + width, y + height / 2, x + width / 2, y + height, x + width / 2, y + height);
        graphics.bezierCurveTo(x, y + height / 2, x, y + height / 4, x, y + height / 4);
        graphics.closePath();
    }

    function createHeart() {
        var heart = new createjs.Shape();
        var colors = ["#00FF00", "#800080"]; // Verde y morado
        var color = colors[Math.floor(Math.random() * colors.length)];
        heart.graphics.beginFill(color);
        createHeartShape(heart.graphics, -10, -10, 20, 20);
        heart.graphics.endFill();
        heart.x = Math.random() * w;
        heart.y = Math.random() * h;
        heart.scale = Math.random() * 0.5 + 0.5;
        heart.alpha = Math.random() * 0.5 + 0.5;
        createjs.Tween.get(heart, { loop: true })
            .to({ y: h + 10, alpha: 0 }, 4000 + Math.random() * 6000, createjs.Ease.quadIn)
            .call(() => heart.y = -10);

        stage.addChild(heart);
    }

    for (var i = 0; i < 100; i++) {
        createHeart();
    }

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", stage);

    window.addEventListener('resize', function() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        text.x = w / 2;
        text.y = h / 2 - text.getMeasuredLineHeight() / 2;
    });
});
