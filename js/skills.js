function SkillCloud(data) {

    var _data = data;

    var arrangeSkills = function(skillMap) {

        if( ! skillMap ) return null;

        var result = [];
        $.each(skillMap, function(name, item){
            result.push({
                name: name,
                count: item.count,
                sub: arrangeSkills(item.sub)
            })
        });

        result = result.sort(function(a, b){return b.count - a.count;});

        return result;
    };

    //constructor
    (function(){

        if( $("div.technologies .tag").length>0 ) return;

        var skillMap = {};
        $.each(_data.getCompanies(), function(companyName, company){
            $.each(company.projects, function(projectIndex, project){
                var skills = project.skills.split(",");
                $.each(skills, function(projectSkillIndex, skill){
                    var skillName = $.trim(skill);
                    if( ! skillMap[skillName] ) {
                        skillMap[skillName] = [];
                    }
                    skillMap[skillName].push(project);
                });
            });
        });

        var skillMapLvl2 = {};
        $.each(skillMap, function(entry, projects){

            var duration = 0, weight = 0;
            $.each(projects, function(i, project){
                var diff =  moment().diff(moment(project.stats.endDate), 'years') || 1;
                var coef = 1/diff;
                weight += project.stats.duration*coef;
                duration += project.stats.duration;
            });

            var subSkillsSplit = entry.split("(");
            var skillName = $.trim(subSkillsSplit[0]);
            if( ! skillMapLvl2[skillName] ){
                skillMapLvl2[skillName] = { weight: 0, duration: 0 };
            }
            skillMapLvl2[skillName].weight += weight;
            skillMapLvl2[skillName].duration += duration;

            if( subSkillsSplit.length > 1 ) {
                if( ! skillMapLvl2[skillName].sub ) skillMapLvl2[skillName].sub = {};
                var subSkills = subSkillsSplit[1].replace(/\)/g, "").split(";");
                $.each(subSkills, function(subIndex, subSkill){ subSkills[subIndex] = $.trim(subSkill); });
                $.each(subSkills, function( i, subSkillName ) {
                    if( ! skillMapLvl2[skillName].sub[subSkillName] ) skillMapLvl2[skillName].sub[subSkillName] = { weight: 0, duration: 0 };
                    skillMapLvl2[skillName].sub[subSkillName].weight += weight;
                    skillMapLvl2[skillName].sub[subSkillName].duration += duration;
                });
            }
        });

        //render skill view
        var tpl = _.template($("#skill-tpl").html());
        $.each(arrangeSkills(skillMapLvl2), function(skillIndex, skill){
            var skillHtml = tpl({skill: skill});
            //ugly code to remove html spaces which make layout look messy
            skillHtml = skillHtml.replace(/\n/g, "").
                replace(/(>)(\s*)(\S*)/g, "$1$3").
                replace(/(\S*)(\s*)(<)/g, "$1$3").
                replace(/(\S*)(\s*)(\()/g, "$1$3").
                replace(/(\))(\s*)(\S*)/g, "$1$3").
                replace(/(>)(\s*)(\))/g, "$1$3");
            $(".skills .technologies").append(skillHtml);
        });

        //skill & subskill auto tooltip
        $(".skills .technologies .tag").tooltip({ show : {effect: "fade", duration: 10 }});
        //enable second tooltip for subskill group
        $(".skills .technologies div.tag.skill").mousemove(function(){
            if( ! $(this).attr("aria-describedby") ){
                if(! $(this).attr("title")) { $(this).attr("title", $(this).attr("alttitle")); } // fix for jquery tooltip bug which sometimes make title reset
                $(this).tooltip("open");
            }
        });
    })();

    return {};
}

