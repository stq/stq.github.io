var HeaderFx = function(){
    var _colors = Util.buildColorGradient("#666666", "#eeeeff", 41);
    var _frame = _colors.length - 1, _frameCounter = null;
    var _posX = 0, _posY = 0;
    var _fx = _.throttle(function(){
        var left = activeArea.position().left, top = activeArea.position().top,
            width = activeArea.width(), height = activeArea.height();
        var c = [ left + width/ 2, top + height/ 2 ],
            d = [ c[0] - _posX, c[1] - _posY ],
            ratio = [ 2/width, 2/height ],
            ratioBlur = 1/Math.sqrt(width*width/4 + height*height/4),
            scale = [ 50, 2 ],
            blurScale = 10;
        var shadow = ~~(ratio[0]*d[0]*scale[0]) + "px " +
            ~~(ratio[1]*d[1]*scale[1]) + "px " +
            ~~(ratioBlur*Math.sqrt(d[0]*d[0]+d[1]*d[1])*blurScale + 1) + "px " + _colors[_frame];
        activeArea.css("text-shadow", shadow);
    }, 25), activeArea = $(".header .title div");

    var _move = function(e){
        _posX = e.clientX;
        _posY = e.clientY;
        _fx();
    };

    var _lighten = function(){
        if( _frameCounter ) clearInterval(_frameCounter);
        _frameCounter = setInterval(function(){
            if( _frame < _colors.length-1 ) _frame++;
            if( _frame === _colors.length-1 ){
                clearInterval(_frameCounter);
                _frameCounter = null;
            }
            _fx();
        }, 25)
    };

    var _darken = function(){
        if( _frameCounter ) clearInterval(_frameCounter);
        _frameCounter = setInterval(function(){
            if( _frame > 0 ) _frame--;
            if( _frame === 0 ){
                clearInterval(_frameCounter);
                _frameCounter = null;
            }
            _fx();
        }, 5)
    };

    $("body").mousemove(_move);
    activeArea.mouseenter(_darken);
    activeArea.mouseleave(_lighten);

    return {};
};