var Util = function(){

    var _PROFILE_DATE_FORMAT = "MMM, YYYY";
    var _SHORT_DATE_FORMAT = "MMM" + '\u2013' + "YYYY";
    var _LONG_DATE_FORMAT = "MMMM, YYYY";

    var _getMonthEnd = function(monthStart){
        return moment(monthStart).add('M', 1).subtract('d', 1).toDate();
    };

    var _formatProfileDate = function(date, /* optional */ format){
        return moment(date).format(format ? format : _SHORT_DATE_FORMAT);
    };

    return {
        parseProfileDate: function(dateStr){
            return moment(dateStr, _PROFILE_DATE_FORMAT).toDate();
        },
        formatMonthDuration: function(monthsNumber){
            if( monthsNumber == 0 ) return "one month";
            var years = ~~(monthsNumber/12); var months = monthsNumber%12;
            return (years>1 ? years + " years" : ( years==1 ? "1 year" : "" ) ) + (months>0 ? (years>0?" and ":"") + (months==1 ? "1 month" : months + " months"): "");
        },
        formatRangeVerbose: function(preWord, midWord, startDate, endDate) {
            startDate = moment(startDate);
            endDate = moment(endDate);
            var shortForm = startDate.year() == endDate.year() && startDate.month() == endDate.month();
            return (shortForm?"":preWord + " ") + _formatProfileDate(startDate, _LONG_DATE_FORMAT) + (shortForm?"":" " + midWord + " " + _formatProfileDate(endDate, _LONG_DATE_FORMAT));
        },
        formatRange: function(startDate, endDate){
            return _formatProfileDate(startDate, _SHORT_DATE_FORMAT) + " " + '\u2013' +" " + _formatProfileDate(endDate, _SHORT_DATE_FORMAT);

        },
        formatPercents: function(val){
            return Math.round(val*100) + "%";
        },
        chooseRateLabel: function(val, ratings){
            var r = 0;
            for(; r < ratings.length; r++ ){
                if( val <= ratings[r][0] ) break;
            }
            return ratings[r][1];
        },
        getMonthEnd: function(date){
            return _getMonthEnd(date);
        },
        getMonthDuration: function(startDate, endDate){
            startDate = moment(startDate);
            endDate = moment(endDate);
            //moment duration calc is lame - use manual calculation here
            var monthDiff = endDate.month() - startDate.month();
            var yearDiff = endDate.year() - startDate.year();
            var dayDiff = endDate.date() - startDate.date();
            return yearDiff*12 + monthDiff + (dayDiff > 15 ? 1 : 0);
        },
        viewed: function(lookIn, elements) {
            var viewTop = $(lookIn).offset().top;
            var viewBottom = viewTop + $(lookIn).height();
            var inView = $(elements).filter(function(){
                var elemTop = $(this).offset().top;
                var elemBottom = elemTop + $(this).height();
                return elemTop >= viewTop && elemTop <= viewBottom;
            });
            inView = inView.sort(function(a, b){return $(a).offset().top - $(b).offset().top;});
            return inView;

        },
        buildColorGradient: function(from, to, length ){
            var result = [];
            var rgb1 = from.substr(1).match(/.{1,2}/g);
            var rgb2 = to.substr(1).match(/.{1,2}/g);
            $.each(rgb1, function(i, c){ rgb1[i] = parseInt(c, 16); });
            $.each(rgb2, function(i, c){ rgb2[i] = parseInt(c, 16); });

            for( var i = 0; i < length; i++ ){
                result.push("#");
                var ratio = i / (length - 1);
                for( var j = 0; j < 3; j++ ){
                    var c = rgb1[j] + ~~(ratio*(rgb2[j] - rgb1[j]));
                    result[result.length-1] += (c < 0x10 ? "0": "") + c.toString(16);
                }
            }
            return result;
        },
        clamp: function(left, val, right){
            if( val < left ) return left;
            if( val > right ) return right;
            return val;
        }
    };
}();