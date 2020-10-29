var Profile = {
    companies: {
        "EPAM, Travel Solutions Department": {
            projects: [
                {
                    range: ["Apr, 2005", "Jun, 2005"],
                    name: "South African Airways booking",
                    role: "Java web developer",
                    participation: "Java frontend development",
                    achievements: "Promoted JSP Tag unit tests.",
                    skills: "Java, JSP/EL/JSTL, HTML/CSS, Struts, JUnit, WSDL, Axis, Java EE Servlets"
                },{
                    range: ["Jul, 2005", "Dec, 2005"],
                    name: "Scandinavian Airlines booking",
                    role: "Java web developer",
                    participation: "Presentation layer and business logic implementation.",
                    skills: "Javascript, DWR, Java, JSP/EL/JSTL, HTML/CSS, Struts, JUnit, WSDL, Axis, Java EE Servlets"
                },{
                    range: ["Jan, 2006", "Sep, 2006"],
                    name: "Vail Resorts call center",
                    role: "Java web developer",
                    participation: "Research and architecture on web communication layer. Development and support of custom BREAD MVC framework.",
                    achievements: "Created custom MVC javascript framework.",
                    skills: "Javascript, Java, JSP/EL/JSTL, HTML/CSS, Struts, JUnit, WSDL, Axis, Java EE Servlets"
                },{
                    range: ["Oct, 2006", "Aug, 2007"],
                    name: "Travel Distribution Platform, generic travel/booking platform",
                    role: "Java web services developer, Java web developer",
                    participation: "Design of booking web services. Integration with particular customers.",
                    skills: "UML, Java, Struts, JSP/EL/JSTL, JUnit, WSDL, Axis"
                }
            ]
        },
        "EPAM, Hyperion Department": {
            projects: [
                {
                    range: ["Sep, 2007", "Jan, 2008"],
                    name: "Hyperion Strategic Finance : Profitability module (webapp for company financial plan)",
                    role: "Java web developer",
                    participation: "Development of UI modules",
                    skills: "Java, Java EE Servlets, JMS, EJB, JSF, MS SQL Server, ORM TopLink, SQL, Bindows"
                }
            ]
        },
        "Generation-P consulting ltd.": {
            projects: [
                {
                    range: ["Feb, 2008", "Jun, 2008"],
                    name: "French job recruitment surveys web services",
                    role: "Java web services developer",
                    participation: "DB integration optimisation (safety, memory usage, performance). Creating monitoring tools. Code review. EJB 2/3 upgrade. Spring integration.",
                    skills: "Java, Java EE Servlets, JMS, EJB, ORM Hibernate, Oracle, SQL, JOnAS, Spring, JUnit"
                }
            ]
        },
        "Agava": {
            projects: [
                {
                    range: ["Jul, 2008", "Aug, 2008"],
                    name: "Adbroker.ru instant search module",
                    role: "Javascript web developer, Java web services developer",
                    participation: "Development of instant search module.",
                    achievements: "Introduced minor performance optimization on instant search.",
                    skills: "Java, Java EE Servlets, EJB, Web services, JBoss, ORM Hibernate, SQL, JBoss Seam, Axis, Javascript, jQuery, HTML/CSS, XSLT"
                }
                ,
                {
                    range: ["Sep, 2008", "Nov, 2008"],
                    name: "Rebot.ru personalised news feed",
                    role: "Javascript web developer, Java web services developer",
                    participation: "Web services development, web frontend development, integration with internal CRM.",
                    skills: "Java, Javascript, jQuery, HTML/CSS, Java EE Servlets, Java EE Web services, Axis, JBoss, Apache HTTP, nginx, ant"
                }
            ]
        },
        "Specific Group AG": {
            projects: [
                {
                    range: ["Mar, 2009", "Apr, 2010"],
                    name: "UniCredit European Gate (automatic banking transactions conversion) : monitoring and admin webapps",
                    role: "Technical writer, Java developer, Java web developer",
                    participation: "Project documentation, architecture support, consulting, status feedback. Introduction of CI process. Web client improvements, wicket model optimization, pipelines optimization.",
                    achievements: "Documentation process introduction. Multiple code and process optimizations.",
                    skills: "ANTLR, UML, Java, Spring, Wicket, HTML/CSS, ORM Hibernate, Java EE Servlets, Enterprise Architect, Confluence, Cruise Control, Nexus, Team City"
                }
            ]
        },
        "Logic Way": {
            projects: [
                {
                    range: ["May, 2010"],
                    name: "Moscow Internal Affairs archive: webapp to secure and manage official documentation",
                    role: "DB developer, Java backend developer",
                    participation: "DB structure implementation. Development of database export/import utility.",
                    skills: "Java, SQL, PL/SQL, Oracle, IBM DB2"
                },{
                    range: ["Jun, 2010", "Nov, 2010"],
                    name: "Moscow Council archive: webapp to secure, manage, browse and share official documentation",
                    role: "Team leading, SQL developer, Java backend developer, Java web developer",
                    participation: "Java webapp from scratch. Development of IBM ICM interface utility (ICM operations interface, data export/import/synchronization).",
                    achievements: "Made AOP-based data caching for better performance.",
                    skills: "Java, XML/XSD, Freemarker, HTML/CSS, Javascript, SQL, IBM CM, Javassist, Java EE Servlets, Solaris, IBM DB2, IBM CM, IBM NSE, Tivoli storage, WebSphere AS, Tomcat"
                },{
                    range: ["Dec, 2010", "May, 2011"],
                    name: "Severstal ESK Contractor Management System",
                    role: "Team lead",
                    participation: "Portal server maintenance, portlet implementation assistance, team training.",
                    skills: "Java, XML/XSD, WSDL, Axis, IBM XML Beans, JSP/EL/JSTL, HTML/CSS, Javascript, jQuery, Portlets, Java EE Servlets, Oracle AS, Oracle Portal, Orion Portlet Provider"
                },{
                    range: ["Jun, 2011", "Jul, 2011"],
                    name: "PeopleNet logistics cargo routing and tracking web application",
                    role: "Java web developer",
                    participation: "Web service development, GWT components development.",
                    skills: "Java, SQL, OSCi, ORM Hibernate, Spring, GWT, Ext GWT, Portlets, Java EE Servlets, EJB, Karaf, Liferay"
                },{
                    range: ["Aug, 2011"],
                    name: "Automated fine payment system for customs application",
                    role: "SQL developer",
                    participation: "Development of PL/SQL services.",
                    skills: "PL/SQL"
                },{
                    range: ["Sep, 2011", "Jan, 2012"],
                    name: "Whiteboard module for Mind.com webinars",
                    role: "Lead developer",
                    participation: "Technology assistance, project management, development.",
                    achievements: "Project management skills, SVG experience.",
                    skills: "Java, HTML/CSS, SVG, VML, RaphaelGWT, Raphael, Guava, ORM Hibernate, Javascript, jQuery, Java EE Servlets, JBoss, PostGRE"
                },{
                    range: ["Feb, 2012", "Apr, 2012"],
                    name: "Mind.com webinars.",
                    role: "Java developer, Web developer",
                    participation: "Development of various features and improvements.",
                    skills: "Java, HTML/CSS, SVG, VML, RaphaelGWT, Raphael, Guava, Hibernate, Java EE Servlets, JBoss, PostGRE"
                },{
                    range: ["May, 2012"],
                    name: "YouTube downloader - utility for downloading youtube videos.",
                    role: "Java developer",
                    participation: "Research, development.",
                    skills: "Java, YouTube API, FLV, Video encoding"
                },{
                    range: ["Jun, 2012"],
                    name: "CeConvergence : money accountant training courses web app",
                    role: "Java developer",
                    participation: "Development of various features.",
                    skills: "Java, Spring, PL/SQL, Oracle"
                },{
                    range: ["Jul, 2012"],
                    name: "Russian Car Insurance Association web services for insurance agencies.",
                    role: "Java web developer, Java backend developer",
                    participation: "Development of web services and admin web interface.",
                    skills: "Java, Spring, PL/SQL, Oracle"
                },{
                    range: ["Aug, 2012", "Nov, 2012"],
                    name: "Customs services web client",
                    role: "Lead developer",
                    participation: "Architecture development and support, UI elements update, team coordination.",
                    achievements: "Automatic DFM form to HTML layout conversion.",
                    skills: "Java, Wicket, HTML/CSS, Spring, SQL, ORM Hibernate, Javascript, jQuery, Java EE Servlets"
                }
            ]
        },
        "Fitbit": {
            projects: [
                {
                    range: ["Dec, 2012", "Dec, 2013"],
                    name: "Fitbit Corporate Wellness : monitoring corporate personnel physical activity",
                    role: "Javascript web developer, Java developer",
                    participation: "Development, support, improvement of UI/UX functionality.",
                    achievements: "Highcharts library extension.",
                    skills: "Javascript, jQuery, Backbone.js, Underscore.js, Highcharts, HTML/CSS, SVG, VML, Raphael, JSP/EL/JSTL, Java, Spring, Stripes, Guava, Java EE Servlets, JMS, ORM Hibernate, Oracle, NoSQL Cassandra"
                }
            ]
        },
        "R-Style Lab":{
            projects: [
                {
                    range: ["Jan, 2014", "Apr, 2014"],
                    name: "eGov.kz v2 prototype : social services web app",
                    role: "Frontend tech lead",
                    participation: "Development of UI architecture and functionality",
                    skills: "Javascript, Node.js, jQuery, Backbone.js, Marionette, Underscore, HTML/CSS, Java"
                },
                {
                    range: ["May, 2014", "Jan, 2015"],
                    name: "eGov.kz v2 : web kiosk app with variety of governmental services to individual and organizations",
                    role: "Frontend tech lead",
                    participation: "Development and support of toolchain, frameworks, web components. Team/PM assistance.",
                    achievements: "Introduced development methodologies which gave major boost on development performance",
                    skills: "Javascript, Node.js, AngularJS, Lodash, Node.js, Express, HTML/CSS"
                }
            ]
        },
        "Social Discovery Ventures": {
            projects: [
                {
                    range: ["Feb, 2015", "May, 2015"],
                    name: "Dating site mobile web client",
                    role: "Tech lead",
                    participation: "Custom JS bundling framework, platform upgrade introduction",
                    skills: "Javascript, Gulp, HTML/CSS, Node.js, Express, Browserify"
                }
            ]
        },
        "Andersen soft": {
            projects: [
                {
                    range: ["Jul, 2015", "Feb, 2016"],
                    name: "IHS.com BOM Intelligence: Electronic Parts management solution",
                    role: "Team lead",
                    participation: "Created webapp from scratch, pipelines, team management, devops assistance",
                    achievements: "Created from scratch comfortable, scalable code base",
                    skills: "Javascript, Gulp, Webpack, AngularJS, Node.js, HTML/CSS"
                },
                {
                    range: ["Mar, 2016", "Jul, 2016"],
                    name: "Tinkoff Bank online banking client for organizations",
                    role: "Senior Developer",
                    participation: "Development, review, couching",
                    skills: "Javascript, AngularJS, Angular2, Typescript, Webpack, Gulp, Node.js, HTML/CSS"
                }
            ]
        },
        "Godel Technologies Europe": {
            projects: [
              {
                range: ["Oct, 2016", "Dec, 2017"],
                name: "Rentalcars online car provider onboarding",
                role: "Frontend tech lead",
                participation: "Webapp from scratch",
                skills: "Javascript, AngularJS, Webpack, Gulp, HTML/CSS, Node.js"
              },
              {
                range: ["Jan, 2018", "Apr, 2018"],
                name: "\"Comparethemarket\" webapp for comparing energy providers",
                role: "Senior Developer",
                participation: "Backend development",
                skills: "Javascript, Node.js, Mongodb"
              },
              {
                range: ["May, 2018", "Aug, 2020"],
                name: "\"Comparethemarket\" multiple webapps to compare different banking services and products",
                role: "Senior Developer",
                participation: "Webapp from scratch, webapp support, middleware support, backend development, backend support",
                skills: "React, Webpack, Javascript, Node.js, Swagger, HTML/CSS"
              }
            ]
        }
    }
}
