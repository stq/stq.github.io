function Data(json){

    var _json;

    //augment Profile with calculated data (project/company statistics and hierarchy)
    var init = function(){

        _json = json;

        var totalDuration = 0;
        var companyIndex = 0;
        var companiesNumber = _.keys(_json.companies).length;
        $.each(_json.companies, function(companyName, company){

            var companyDuration = 0;
            $.each(company.projects, function(projectIndex, project){
                project.company = company;

                var range = project.range;
                if( range.length == 1 ) range.push(range[0]);

                var stats = {
                    startDate: Util.parseProfileDate(project.range[0]),
                    endDate: Util.getMonthEnd(Util.parseProfileDate(project.range[1]))
                };
                stats.duration = Util.getMonthDuration(stats.startDate, stats.endDate);
                companyDuration += stats.duration;

                project.stats = stats;
                project.isFirst = projectIndex == 0;
                project.isLast = projectIndex == company.projects.length - 1;
                project.index = projectIndex;
            });

            company.stats = {
                duration: companyDuration,
                startDate: company.projects[0].stats.startDate,
                endDate: company.projects[company.projects.length-1].stats.endDate
            };
            company.name = companyName;
            company.isFirst = companyIndex==0;
            company.isLast = companyIndex==companiesNumber-1;
            company.index = companyIndex;

            totalDuration += companyDuration;
            companyIndex++;
        });


        var minRate = 0;
        var maxRate = 0;
        $.each(_json.companies, function(companyName, company){
            $.each(company.projects, function(projectIndex, project){
                project.stats.rate = project.stats.duration / totalDuration;
                minRate = Math.min(minRate, project.stats.rate);
                maxRate = Math.max(maxRate, project.stats.rate);

            });
        });

        var rateColors = Util.buildColorGradient("#c0c0c0", "#333333", 101);
        var rateNorm = function(rate) { return (rate - minRate) /(maxRate - minRate) };
        $.each(_json.companies, function(companyName, company){
            $.each(company.projects, function(projectIndex, project){
                project.stats.rateNorm = rateNorm(project.stats.rate);
                project.stats.rateLabel = Util.chooseRateLabel(project.stats.rateNorm,
                    [[0.10,'Minor'],[0.25,'Short'],[0.50,'Medium'],[0.75,'Long'], [1, 'Very long']])
                project.stats.rateColor = rateColors[~~(project.stats.rateNorm*100)];
            });
        });

    };

    init();

    return {

        findCompanyByIndex: function(companyIndex){
            if( !_json ) return null;
            for(var companyName in _json.companies){
                if( _json.companies[companyName].index == companyIndex){
                    return _json.companies[companyName];
                }
            }
            return null;
        },

        findProjectByIndex: function(companyIndex, projectIndex){
            if( !_json ) return null;
            for(var companyName in _json.companies){
                if( _json.companies[companyName].index == companyIndex){
                    for(var i in _json.companies[companyName].projects) if( projectIndex == _json.companies[companyName].projects[i].index ) return _json.companies[companyName].projects[i];
                }
            }
            return null;
        },

        getCompanies: function(){
            return _json.companies;
        }
    };
}
