var Main = function(){

    var _data;

    //router singleton, responsible for navigation and location handling
    var _router = new function(){

        //represents active content for all four panels
        var _panels = new function(){
            return {
                set: {
                    summary: new function(){
                        var _headerFx;
                        return {
                            init: function() {
                                if( !_headerFx ) _headerFx = new HeaderFx();
                            }
                        }
                    },
                    experience: new function() {
                        var _experienceChart;
                        return {
                            init: function() {
                                if( !_experienceChart )_experienceChart = new ExperienceChart(_data);
                            }
                        }
                    }(),
                    skills: new function() {
                        var _skillCloud;
                        return {
                            init: function() {
                                if( !_skillCloud ) _skillCloud = new SkillCloud(_data);
                            }
                        }
                    }(),
                    contact: new function() {

                        var _clockId;
                        var initClock = function(){
                            var doTick = function(){
                                var tstamp = moment().tz("Europe/Minsk");
                                $(".time").html(tstamp.format("hh:mm:ss A"));
                            };
                            doTick();
                            _clockId = setInterval(doTick, 1000);
                        };

                        return {
                            init: function(){
                                if( !_clockId ) initClock();
                            }
                        };
                    }()
                },
                indexById: function(id){
                    return [ 'summary', 'experience', 'skills', 'contact' ].indexOf(id);
                }
            }
        };

        var disableKeybinds = function(){
            $(".nav li[role=tab]").unbind('keydown');
        };

        var initNavHintLinks = function(){
            //handler
            $(".summary .navigation-hint a").mousedown(function(){
                switchto($(this).attr("href").substr(1));
            }).click(function(e){e.preventDefault();});

            //ui beautification
            $(".navigation-hint a").mouseenter(function(){
                $("li[aria-controls=" + $(this).attr("href").substr(1) + "]").css({backgroundColor:'#FFF'}, 300).stop().animate({backgroundColor:'#EEF'}, 300);
            }).mouseleave(function(){
                $("li[aria-controls=" + $(this).attr("href").substr(1) + "]").stop().animate({backgroundColor:'#FEFEFE'}, 300);
            });
        };

        var switchto = function(id){
            $("div.wrapper").tabs("load", _panels.indexById(id));
        };

        var load = function(id){
            $("body").toggleClass("fluid", id=="experience");//special css mode for convinient experience scrolling
            $(".nicescroll-rails").toggle(id=="experience");//nicescroll sometimes fail to hide itself, so we do it manually
            _panels.set[id].init();
        };

        var initTabs = function(){

            //create tabs
            $("div.wrapper").tabs({
                activate: function(e, ui){
                    switchto(ui.newPanel.attr("id"));
                    load(ui.newPanel.attr("id"));
                },
                event: "mousedown"
            });

            _panels.set['summary'].init();

            $(".nav").css("visibility", "visible");

            $(".nav li").click(function(e){e.preventDefault();});

            //ui beautification
            $(".nav li").mouseenter(function(){
                if( $(this).hasClass("ui-tabs-active") ) return;
                $(this).css({backgroundColor:'#FEFEFE'}, 300).stop().animate({backgroundColor:'#EEF'}, 300);
            }).mouseleave(function(){
                if( $(this).hasClass("ui-tabs-active") ) return;
                $(this).stop().animate({backgroundColor:'#FEFEFE'}, 300);
            }).click(function(){
                $(".nav li").css({backgroundColor:'#FEFEFE'});
                $(".nav li.ui-tabs-active").css({backgroundColor:'#EEF'});
            });
        };

        return {
            init: function(){
                initTabs();
                disableKeybinds();//fixes jqueryui.tabs messy keybindings
                initNavHintLinks();//integrate navigation hint links with tabs
            }
        }


    }();

    return {
        loadData: function(json){
            _data = new Data(json);
            return this;
        },
        start: function(){
            _router.init();
            return this;
        }
    }
};

//entry point
$(function() {
    new Main().loadData(Profile).start();
}());
