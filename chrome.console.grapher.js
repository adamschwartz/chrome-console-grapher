(function(){
    if (!window.console || !window.console.log) {
        return;
    }

    var canvas,
        context,
        height = 100,
        width = 400
    ;

    canvas = document.createElement('canvas');
    canvas.height = height + '';
    canvas.width = width + '';
    context = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.style.cssText = 'position: absolute; left: -99999px';

    context.fillStyle = '#fff';

    var _graph = function(imageURL, height, width) {
        console.log('%c ', '' +
            'font-size: 0;' +
            'padding-left: ' + width + 'px;' +
            'padding-bottom: ' + height + 'px;' +
            'background: url("' + imageURL + '"),' +
                '-webkit-linear-gradient(#eee, #888);' +
        '');
    };

    window.console.graph = function (data) {
        var units = Math.floor(width / data.length);
        width = units * data.length;

        context.clearRect(0, 0, width, height);
        for (var i = 0; i < data.length; i++) {
            context.fillRect(i * units, 0, units, 100 - data[i]);
        }

        _graph(canvas.toDataURL(), height, width);
    };
})();