var Profile = {
    companies: {
        "EPAM, Travel Solutions Department": {
            projects: [
                {
                    range: ["Apr, 2005", "Jun, 2005"],
                    name: "South African Airways booking",
                    desc: "Web application for flight itinerary search and reservation.",
                    role: "Java developer",
                    participation: "Presentation layer and business logic implementation.",
                    achievements: "Promoted JSP Tag unit tests.",
                    skills: "Java, JSP/EL/JSTL, HTML/CSS, Struts 1.x, JUnit, WSDL, Apache Axis, Java EE (Servlets)",
                    team: "5-10",
                    tools: "Tomcat, VSS"
                }
                ,
                {
                    range: ["Jul, 2005", "Dec, 2005"],
                    name: "Scandinavian Airlines booking",
                    desc: "Web application for flight itinerary search and reservation. Have original design.",
                    role: "Web developer, Java developer",
                    participation: "Presentation layer and business logic implementation.",
                    achievements: "Perfect teamwork, happy customer.",
                    skills: "Javascript, DWR, Java, JSP/EL/JSTL, HTML/CSS, Struts 1.x, JUnit, WSDL, Apache Axis, Java EE (Servlets)",
                    team: "5-10",
                    tools: "Tomcat, VSS"
                }
                ,
                {
                    range: ["Jan, 2006", "Sep, 2006"],
                    name: "Vail Resorts call center",
                    desc: "Web frontend with BREAD-functionality for reservation management service.",
                    role: "Web developer, Java developer",
                    participation: "Research and architecture on web communication layer. Development and support of custom BREAD MVC framework.",
                    achievements: "Introduction of custom model-view javascript framework.",
                    skills: "Javascript, Java, JSP/EL/JSTL, HTML/CSS, Struts 1.x, JUnit, WSDL, Apache Axis, Java EE (Servlets)",
                    team: "5-10",
                    tools: "Tomcat, Ant, VSS"
                }
                ,
                {
                    range: ["Oct, 2006", "Aug, 2007"],
                    name: "Travel Distribution Platform",
                    desc: "Platform for online booking web applications.",
                    role: "Java developer",
                    participation: "Design and development of booking services. Assisting with integration.",
                    achievements: "Good experience with web services.",
                    skills: "UML, Java, Struts 1.x, JSP/EL/JSTL, JUnit, WSDL, Apache Axis)",
                    team: "10-15",
                    tools: "Enterprise Architect, CVS/SVN"
                }
            ]
        },
        "EPAM, Hyperion Department": {
            projects: [
                {
                    range: ["Sep, 2007", "Jan, 2008"],
                    name: "Hyperion Strategic Finance / Profitability module",
                    desc: "Web client software for development of financial plan.",
                    role: "Java developer, Web developer",
                    participation: "Module component development: UI, business logic, testing and integration.",
                    achievements: "Got some Java EE experience.",
                    skills: "Java, Java EE (Servlets; JMS; EJB; JSF), ORM (TopLink), SQL, Bindows",
                    team: "15-20",
                    tools: "MS SQL Server, Essbase, Oracle DB, Hyperion Workspace, ClearCase"
                }
            ]
        },
        "Generation-P consulting ltd.": {
            projects: [
                {
                    range: ["Feb, 2008", "Jun, 2008"],
                    name: "Web application for job surveys service",
                    desc: "Online survey for a big job agency. Featuring automatic survey management, analysis and report tools.",
                    role: "Consultant, Java developer",
                    participation: "Architecture optimization: transaction safety, deadlocks, memory usage, performance, clustering. Performance and functional testing tools. Code review. EJB 2.0 upgrade to EJB 3.0. Spring integration.",
                    achievements: "Successfully improved performance and stability of application.",
                    skills: "Java, Java EE (Servlets; JMS; EJB), ORM (Hibernate), SQL, Clustering (JOnAS), Spring (DI), JUnit",
                    team: "4",
                    tools: "MyEclipse, Ant, Maven, Oracle DB, JOnAS, SQLDeveloper, Meld, CVS"
                }
            ]
        },
        "Agava": {
            projects: [
                {
                    range: ["Aug, 2008"],
                    name: "Adbroker.ru instant search",
                    desc: "Web advertisements management system: ads trade, management, control, statistics.",
                    role: "Web developer, Java developer",
                    participation: "Development of instant search.",
                    achievements: "Introduced minor performance optimization on instant search.",
                    skills: "Java, Java EE (Servlets; EJB; Web services), ORM (Hibernate), SQL, JBoss Seam, Axis, Javascript(jQuery), HTML/CSS, XSLT",
                    team: "1",
                    tools: "JBoss, CVS"
                }
                ,
                {
                    range: ["Sep, 2008", "Nov, 2008"],
                    name: "Rebot.ru web development",
                    desc: "News feed reader, which knows what news will be interesting to the user.",
                    role: "Web developer",
                    participation: "WSDL development, web frontend development, integration with Agava CRM.",
                    achievements: "Boost on HTML/CSS skills.",
                    skills: "Java, Javascript(jQuery), HTML/CSS, Java EE (Servlets; Web services), Axis, Axis WSF",
                    team: "2-3",
                    tools: "JBoss, Apache HTTP, nginx, ant, CVS"
                }
            ]
        },
        "Specific Group AG": {
            projects: [
                {
                    range: ["Mar, 2009", "Apr, 2010"],
                    name: "European Gate",
                    desc: "Server application for format conversion of financial transaction. With web client for control/monitoring.",
                    role: "Technical writer, Java developer, Web developer",
                    participation: "Project documentation, status feedback, code review, architecture review. Consulting branch department. Introduction of CI process. Web client improvements, wicket model optimization. Conversion compatibility testing framework development.",
                    achievements: "Documentation process introduction. Multiple code and process optimizations.",
                    skills: "ANTLR, UML, Java, Spring (DI; ORM), Wicket, HTML/CSS, ORM (Hibernate), Java EE(Servlets)",
                    team: "5-7",
                    tools: "Tomcat, Enterprise Architect, Confluence, Cruise Control, Nexus, Team City, SVN"
                }
            ]
        },
        "Logic Way": {
            projects: [
                {
                    range: ["May, 2010"],
                    name: "MSC Internal Affairs Archive",
                    desc: "DB archive application to secure and manage official documentation.",
                    role: "DB developer, Java developer",
                    participation: "DB structure implementation and support. Development of database export/import utility.",
                    achievements: "Good DB experience.",
                    skills: "Java, SQL, PL/SQL",
                    team: "2",
                    tools: "Oracle, IBM DB2, Toad, CVS"
                }
                ,
                {
                    range: ["Jun, 2010", "Nov, 2010"],
                    name: "MSC Council Archive",
                    desc: "Web application to store, secure, manage, browse and share official documentation.",
                    role: "SQL developer, Java developer, Web developer, Team lead",
                    participation: "Development of UI BREAD engine and UI implementation. Frontend application DB/BL/Services development. Development of IBM ICM interface utility (ICM operations interface, data export/import/synchronization).",
                    achievements: "Made AOP-based data caching for better performance.",
                    skills: "Java, XML/XSD, Freemarker, HTML/CSS, Javascript, SQL, IBM CM, Javassist, Java EE(Servlets)",
                    team: "1-3",
                    tools: "Solaris, IBM DB2, IBM CM, IBM NSE, Tivoli storage, WebSphere AS, Tomcat, CVS"
                }
                ,
                {
                    range: ["Dec, 2010", "May, 2011"],
                    name: "Severstal ESK Contractor Management System",
                    desc: "Web client application for contractors browsing and management (variety of specific business domain actions).",
                    role: "Java developer, Team lead",
                    participation: "Portal server maintenance, portlet implementation assistance, team training.",
                    achievements: "Helped customer to fix server failure after midnight.",
                    skills: "Java, XML/XSD, WSDL, Axis, IBM XML Beans, JSP/EL/JSTL, HTML/CSS, Javascript(jQuery), Portlets, Java EE(Servlets)",
                    team: "5-6",
                    tools: "Oracle AS, Oracle Portal, Orion Portlet Provider, CVS"
                }
                ,
                {
                    range: ["Jun, 2011", "Jul, 2011"],
                    name: "PeopleNet logistics tracking",
                    desc: "Web application which provide different services for logistics &mdash; tracking, optimization.",
                    role: "Contractor, Java developer",
                    participation: "Web service development.",
                    achievements: "Contractor experience, GWT experience.",
                    skills: "Java, SQL, OSCi, ORM (Hibernate), Spring (DI; ORM), GWT, Ext GWT, Portlets, Java EE(Servlets, EJB)",
                    team: "20-30",
                    tools: "Karaf, Liferay, Tomcat, SVN"
                }
                ,
                {
                    range: ["Aug, 2011"],
                    name: "Automated fine payment system",
                    desc: "Module for fine payment in customs control application.",
                    role: "SQL developer",
                    participation: "Development of PL/SQL services.",
                    achievements: "",
                    skills: "PL/SQL",
                    team: "1",
                    tools: "Toad"
                }
                ,
                {
                    range: ["Sep, 2011", "Jan, 2012"],
                    name: "Whiteboard module for Mind.com webinars",
                    desc: "Whiteboard module for sharing drawings, images and documents at web video conference system.",
                    role: "Lead developer, Team management",
                    participation: "Technology assistance, project management, development.",
                    achievements: "Project management skills, SVG experience.",
                    skills: "Java, HTML/CSS, SVG, VML, RaphaelGWT, Raphael, Guava, ORM (Hibernate), Apache Batic, Javascript(jQuery), Java EE(Servlets)",
                    team: "3",
                    tools: "JBoss, PostGRE, Wowza, SVN"
                }
                ,
                {
                    range: ["Feb, 2012", "Apr, 2012"],
                    name: "Mind.com webinars",
                    desc: "Online webinars system.",
                    role: "Java developer, Web developer",
                    participation: "Development of various features and improvements.",
                    achievements: "",
                    skills: "Java, HTML/CSS, SVG, VML, RaphaelGWT, Raphael, Guava, Hibernate, Apache Batic, Java EE(Servlets)",
                    team: "8",
                    tools: "JBoss, PostGRE, Wowza, SVN"
                }
                ,
                {
                    range: ["May, 2012"],
                    name: "YouTube downloader",
                    desc: "Software which allows downloading youtube videos.",
                    role: "Java developer",
                    participation: "Research, development.",
                    achievements: "",
                    skills: "Java, YouTube API, FLV, Video encoding",
                    team: "1",
                    tools: ""
                }
                ,
                {
                    range: ["Jun, 2012"],
                    name: "CeConvergence",
                    desc: "Web application for tracking and notification of accountant training courses.",
                    role: "Java developer",
                    participation: "Development of various features.",
                    achievements: "",
                    skills: "Java, Spring (MVC; DI), PL/SQL",
                    team: "5",
                    tools: "Tomcat, Oracle, SVN"
                }
                ,
                {
                    range: ["Jul, 2012"],
                    name: "Car insurance agency web services",
                    desc: "Set of web services under Russian Car Insurance Association to be used by local agencies.",
                    role: "Java developer",
                    participation: "Development of MQ manager and web services.",
                    achievements: "",
                    skills: "Java, Spring (DI), PL/SQL",
                    team: "10-15",
                    tools: "Tomcat, Oracle, CVS"
                }
                ,
                {
                    range: ["Aug, 2012", "Nov, 2012"],
                    name: "Customs Management application",
                    desc: "Web client to manage customs database entities, made on base of existing Delphi application.",
                    role: "Lead developer",
                    participation: "Architecture development and support, base components development, team coordination.",
                    achievements: "Automatic DFM form to HTML layout conversion.",
                    skills: "Java, Wicket, HTML/CSS, Spring (DI; ORM), SQL, ORM (Hibernate), Javascript(jQuery), Java EE(Servlets)",
                    team: "3-10",
                    tools: "Tomcat, CVS"
                }
            ]
        },
        "Fitbit": {
            projects: [
                {
                    range: ["Dec, 2012", "Dec, 2013"],
                    name: "Fitbit Corporate Wellness",
                    desc: "Web application for monitoring corporate personnel physical activity.",
                    role: "Web developer, Java developer",
                    participation: "Development, support, improvement of UI/UX functionality." +
                    "Development and support of various web widgets. " +
                    "Development of OAuth authentication flow.",
                    achievements: "Major boost on web skills. Getting over highcharts limits. Advanced Agile methodology experience.",
                    skills: "Javascript (jQuery; Backbone; Underscore; Highcharts), HTML/CSS, SVG, VML, Raphael, JSP/EL/JSTL, Java, Spring (DI; MVC; REST), Stripes, Guava, Java EE(Servlets, JMS), ORM (Hibernate), NoSQL (Cassandra)",
                    team: "10-15",
                    tools: "Tomcat, Oracle, Cassandra, SVN, Git, Fiddler"
                }
            ]
        },
        "R-Style Lab":{
            projects: [
                {
                    range: ["Jan, 2014", "Apr, 2014"],
                    name: "eGov.kz v2 prototype",
                    desc: "A prototype of web app which provide governmental services to citizens.",
                    role: "Lead web developer",
                    participation: "Development of UI architecture and functionality",
                    achievements: "Separated frontend from java devs so they could't ruin development performance",
                    skills: "Javascript (jQuery; Backbone; Marionette; Underscore), HTML/CSS, Java",
                    team: "3",
                    tools: "JBoss, Git, Webkit"
                },
                {
                    range: ["May, 2014", "Feb, 2015"],
                    name: "eGov.kz v2",
                    desc: "A web portal and kiosk-mode web app designed to provide a variety of governmental services to individual and organizations",
                    role: "Frontend Architect",
                    participation: "Development and support of toolchain, frameworks, web components. Team/PM assistance.",
                    achievements: "Suggested development methodologies which gave major boost on development performance",
                    skills: "Javascript (Angular, Lodash), Node.js (Express, Walk), HTML/CSS",
                    team: "38",
                    tools: "NodeJS, Git, Webkit"
                }
            ]
        },
        "Current Work": {
            projects: [
                {
                    range: ["Mar, 2015", "Mar, 2016"],
                    name: "Social network mobile web client",
                    desc: "A web site targeting mobile and tablet platforms, presenting certain functionality of the well known social network",
                    role: "Tech lead",
                    participation: "Technology revamp, features implementation",
                    skills: "Gulp, HTML/CSS, Node.js (Express, Browserify)"
                }
            ]
        }
    }
}
