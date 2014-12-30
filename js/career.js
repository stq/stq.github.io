function ExperienceChart(data) {

    var _data, _chart;

    var _opts = {
        title: { text: "" },
        legend: { enabled: false },
        chart:{
            inverted:true, animation: false, reflow: false, backgroundColor: "#f0f0f0",
            ignoreHiddenSeries: false,
            renderTo: $("#timeline")[0], width: 50, height: 100, marginLeft: 15, marginRight: 15
        },
        plotOptions:{
            line:{
                animation: false,
                lineWidth: 5,
                marker:{ enabled: false }
            }
        },
        xAxis:{
            type:"datetime", reversed: false,
            tickWidth: 0,
            gridLineWidth: 0,
            gridLineColor: "#FEFEFE",
            lineWidth: 0,
            lineColor: "#CC0000",
            minorGridLineWidth: 0,
            minorGridLineColor: "#CC0000",
            minRange: 1000,
            labels: {
                x: -1, step: 1, rotation: 270,
                formatter: function(){
                    return moment(this.value).format("YYYY");
                }
            }
        },
        yAxis:{
            min: -0.001, max: 0.001, minTickInterval: 5,
            labels: { enabled: false },
            title: { enabled: false },
            tickWidth: 0,
            gridLineWidth: 0,
            gridLineColor: "#FEFEFE",
            lineWidth: 0,
            lineColor: "#CC0000",
            minorGridLineWidth: 0,
            minorGridLineColor: "#CC0000"
        },
        tooltip: {
            enabled: false
        }
    };

    (function(){

        _data = data;

        //return if chart already drawn
        if( $(".highcharts-container").length ) return;

        //generate chart series data
        _opts.series = [];
        $.each(_data.getCompanies(), function(companyName, company){
            var serie = { data: [], type: "line", animation: false };
            $.each(company.projects, function(projectIndex, project){
                var serieValue = { project:project, y:0 };
                serie.data.push(serieValue);
                serie.data[serie.data.length-1].x = project.stats.startDate;
                if( project.isLast ) {
                    serie.data.push(_.clone(serieValue));
                    serie.data[serie.data.length-1].x = project.stats.endDate;
                    serie.data[serie.data.length-1].isSerieEnd = true;
                }
            });
            _opts.series.push(serie);
        });

        //generate year beginning plot lines
        _opts.xAxis.plotLines = [];
        for( var d = moment("2005-01-01"); d.isBefore(moment().add("M", 1)); d.add("y", 1) ){
            _opts.xAxis.plotLines.push({ value: moment(d), dashStyle: "Solid", color: "#999", width: 1 });
        }

        _opts.colors = [ "#55AADD", "#55DDAA" ];

        _chart = new Highcharts.Chart(_opts);

        $("path").attr("stroke-linecap", "butt");

        //remove highcharts logo
        $("svg > text").remove();

        //fix chart html container css to make tooltip to be not truncated
        $(".highcharts-container").css("overflow", "visible");

        //highcharts fail to disable markers even if they are specified disabled; so we remove them manually
        $(".highcharts-markers").remove();

        //render projects widgets
        var tpl = _.template($("#project-tpl").html());
        $.each(_data.getCompanies(), function(companyName, company){
            $.each(company.projects, function(projectIndex, project){
                $("#experience .details").prepend($(tpl({ project:project })));
            });
        });

        var resize = function(){
            var sectionHeight = $("#experience .details").height();
            _chart.setSize(_opts.chart.width, sectionHeight, false);

            var minHeight = $("#experience .details .project > table").height();
            $.each($("#experience .details .project > table"), function(i, projectDiv) { minHeight = Math.min(minHeight, $(projectDiv).height()); });
            var selector = "#experience .details .project.first[company-index=0]";//just to avoid idea warnings, it's buggy about attributes with hyphen in selectors
            var firstInList = $(selector);
            firstInList.css("margin-bottom", sectionHeight - firstInList.height() - minHeight + 20);
        };

        var updateSelection = function(e){
            var selection = Util.viewed($("#experience .details"), $("#experience div.project > table"))[0];
            var projectDiv = $(selection).parent();
            $("#experience .details .infocus").removeClass("infocus");
            $(projectDiv).toggleClass("infocus", true);

            var project = _data.findProjectByIndex($(projectDiv).attr("company-index"), $(projectDiv).attr("project-index"));

            _chart.xAxis[0].removePlotBand('highlight-selection');
            _chart.xAxis[0].removePlotBand('highlight-project');
            _chart.xAxis[0].addPlotBand({
                from: project.stats.startDate,
                to: project.stats.endDate,
                color: _opts.colors[project.company.index%2],
                id: 'highlight-selection'
            });

        };
        $(".details").scroll(updateSelection);

        $(window).on('resize', function(){
            resize();
            updateSelection();
        });
        resize();
        updateSelection();

        $("#experience .project .date .range").mousemove(function(){
            var companyIndex = $(this).closest("#experience .project").attr("company-index");
            var projectIndex = $(this).closest("#experience .project").attr("project-index");

            var project = _data.findProjectByIndex(parseInt(companyIndex), parseInt(projectIndex));
            _chart.xAxis[0].addPlotBand({
                from: project.stats.startDate,
                to: project.stats.endDate,
                color: [ "#77CCFF", "#77FFDD" ][project.company.index%2],
                id: 'highlight-project'
            });
        }).mouseleave(function(){
            _chart.xAxis[0].removePlotBand('highlight-project');
        });

        $("#experience div.details").niceScroll({
            mousescrollstep : 20,
            sensitiverail: false,
            background: "#d6d6d6",
            spacebarenabled: false,
            cursorwidth: 12,
            hidecursordelay: 0x0FFFFFFF,
            horizrailenabled: false
        });
    })();

    return { };
}

