function SkillCloud(data) {

  var _data = data;

  var arrangeSkills = function (skillMap) {

    if (!skillMap) return null;

    var result = [];
    $.each(skillMap, function (name, item) {
      result.push({
        name: name,
        count: item.count,
        start: item.start,
        end: item.end,
        weight: item.weight,
        shift: item.shift
      })
    });


    result = result.filter(function(s){return s.count >= 1});
    console.log('lookhere1', result);

    result = result.sort(function(a,b){
      if( a.end === b.end ) {
        return a.count - b.count;
      }
      return a.end - b.end;
    });
    console.log('lookhere2', result);

    result = result.reverse();
    console.log('lookhere3', result);

    return result;
  };

  (function () {

    if ($("div.technologies .tag").length > 0) return;

    var skillMap = {};
    $.each(_data.getCompanies(), function (companyName, company) {
      $.each(company.projects, function (projectIndex, project) {
        var skills = project.skills.split(",");
        $.each(skills, function (projectSkillIndex, skill) {
          var skillName = $.trim(skill);
          if (!skillMap[skillName]) {
            skillMap[skillName] = [];
          }
          skillMap[skillName].push(project);
        });
      });
    });

    var skillsVm = {};
    var minStartDate, maxEndDate;
    $.each(skillMap, function (entry, projects) {
      var skillName = $.trim(entry);

      var skillMonths = 0, minDate, maxDate;
      $.each(projects, function (i, project) {
        skillMonths += project.stats.duration;
        minDate = (!minDate || moment(project.stats.startDate).isBefore(minDate)) && project.stats.startDate || minDate;
        maxDate = (!maxDate || moment(project.stats.endDate).isAfter(maxDate)) && project.stats.endDate || maxDate;
      });

      skillsVm[skillName] = {
        count: skillMonths,
        minDate: minDate,
        maxDate: maxDate
      };

      minStartDate = (!minStartDate || moment(minDate).isBefore(minStartDate)) && minDate || minStartDate;
      maxEndDate = (!maxEndDate || moment(maxDate).isAfter(maxEndDate)) && maxDate || maxEndDate;
    });

    var totalMonth = Util.getMonthDuration(minStartDate, maxEndDate);

    $.each(skillsVm, function(skillName, skill){
      skill.start = Util.getMonthDuration(minStartDate, skill.minDate)/totalMonth;
      skill.end = Util.getMonthDuration(minStartDate, skill.maxDate)/totalMonth;
      skill.shift = Util.getMonthDuration(skill.maxDate, maxEndDate)/totalMonth;
      skill.weight = skill.count/totalMonth;
    });


    //render skill view
    var tpl = _.template($("#skill-tpl").html());
    $.each(arrangeSkills(skillsVm), function (skillIndex, skill) {
      var skillHtml = tpl({skill: skill});
      skillHtml = skillHtml.replace(/\n/g, "").replace(/(>)(\s*)(\S*)/g, "$1$3").replace(/(\S*)(\s*)(<)/g, "$1$3").replace(/(\S*)(\s*)(\()/g, "$1$3").replace(/(\))(\s*)(\S*)/g, "$1$3").replace(/(>)(\s*)(\))/g, "$1$3");
      $(".skills .technologies").append(skillHtml);
    });

    //skill auto tooltip
    $(".skills .technologies .tag").tooltip({show: {effect: "fade", duration: 10}});
  })();

  return {};
}

