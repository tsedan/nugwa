(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),l=a.n(s),o=(a(15),a(17),a(1)),i=a(2),c=a(4),m=a(3),d=a(5),u=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"schedule-header heading-div"},r.a.createElement("div",{className:"planner-header"},this.props.userName,"'s Planner"),r.a.createElement("div",{className:"settings-div"},r.a.createElement("img",{className:"sched-set btn-outline-warning glyph-icon",alt:"settings",src:"assets/si-glyph-dial-number.svg","data-toggle":"modal","data-target":"#settingsModal"})))}}]),t}(n.Component),p={periodToColor:{"Period A":"red","Period B":"blue","Period C":"green","Period D":"orange","Period E":"purple","Period F":"yellow","Period G":"brown",Brunch:"dark",Lunch:"dark",FlexTime:"dark",Other:"gray"},normalSchedules:[null,[{name:"Period A",start:"8:25",end:"9:45"},{name:"Brunch",start:"9:45",end:"10:00"},{name:"Period B",start:"10:00",end:"11:15"},{name:"Period C",start:"11:25",end:"12:40"},{name:"Lunch",start:"12:40",end:"13:20"},{name:"Period F",start:"13:20",end:"14:35"}],[{name:"Period D",start:"8:25",end:"9:45"},{name:"Brunch",start:"9:45",end:"10:00"},{name:"FlexTime",start:"10:00",end:"10:50"},{name:"Period E",start:"11:00",end:"12:15"},{name:"Lunch",start:"12:15",end:"12:55"},{name:"Period A",start:"12:55",end:"14:15"},{name:"Period G",start:"14:25",end:"15:40"}],[{name:"Period B",start:"8:25",end:"9:50"},{name:"Brunch",start:"9:50",end:"10:05"},{name:"Period C",start:"10:05",end:"11:25"},{name:"Period D",start:"11:35",end:"12:55"},{name:"Lunch",start:"12:55",end:"13:35"},{name:"Period F",start:"13:35",end:"14:55"}],[{name:"Period E",start:"8:25",end:"9:50"},{name:"Brunch",start:"9:50",end:"10:05"},{name:"FlexTime",start:"10:05",end:"10:55"},{name:"Period B",start:"11:05",end:"12:15"},{name:"Lunch",start:"12:15",end:"12:55"},{name:"Period A",start:"12:55",end:"14:05"},{name:"Period G",start:"14:15",end:"15:35"}],[{name:"Period C",start:"8:25",end:"9:40"},{name:"Brunch",start:"9:40",end:"9:55"},{name:"Period D",start:"9:55",end:"11:05"},{name:"Period E",start:"11:15",end:"12:25"},{name:"Lunch",start:"12:25",end:"13:05"},{name:"Period F",start:"13:05",end:"14:15"},{name:"Period G",start:"14:25",end:"15:35"}],null],firstDay:"2019-01-01T00:00:00-07:00",lastDay:"2019-5-31T00:00:00-07:00",keywords:["schedule","extended","holiday","no students","break"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],classNames:{"Period A":"A","Period B":"B","Period C":"C","Period D":"D","Period E":"E","Period F":"F","Period G":"G",Brunch:"Brunch",Lunch:"Lunch",FlexTime:"Flex"}},h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="class-card-div "+this.getClassColor(this.props.period);return r.a.createElement("div",{className:e},r.a.createElement("p",{className:"card-identifier"},this.getDataClassName(this.props.period)),r.a.createElement("p",{className:"card-name"},this.getClassName(this.props.period)))}},{key:"getClassColor",value:function(e){return null!=p.periodToColor[e]?p.periodToColor[e]:p.periodToColor.Other}},{key:"getClassName",value:function(e){return null!=this.props.appState.classNames[e]?this.props.appState.classNames[e]:null}},{key:"getDataClassName",value:function(e){return null!=p.classNames[e]?p.classNames[e]:e}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={today:new Date},a.alternatesLoaded=function(){return void 0===a.props.appState.events?r.a.createElement("span",{className:"assign-badge red"},"No Alts"):""},a.yesterday=function(){var e=new Date(a.state.today.getTime()-864e5);a.setState({today:e})},a.today=function(){a.setState({today:new Date})},a.tomorrow=function(){var e=new Date(a.state.today.getTime()+864e5);a.setState({today:e})},a.isAlternateSchedule=function(){var e=a.filterEventsByDate(a.state.today);return a.findAlternate(e)},a.filterEventsByDate=function(e){var t=0,n=[];for(var r in a.props.appState.events){var s=(a.props.appState.events[r].start.date||a.props.appState.events[r].start.dateTime.split("T")[0]).split("-");s=new Date(s[0],s[1]-1,s[2]),a.sameDay(s,a.state.today)&&(n[t]=a.props.appState.events[r],t++)}return n},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"heading-div"},r.a.createElement("h2",{className:"heading-float-left"},p.dayNames[this.state.today.getDay()]),r.a.createElement("div",{className:"heading-float-right"},r.a.createElement("img",{className:"btn-outline-secondary glyph-icon",onClick:this.yesterday,alt:"yesterday",src:"assets/si-glyph-arrow-left.svg"}),r.a.createElement("img",{className:"btn-outline-secondary glyph-icon m-1",onClick:this.today,alt:"today",src:"assets/si-glyph-circle.svg"}),r.a.createElement("img",{className:"btn-outline-secondary glyph-icon",onClick:this.tomorrow,alt:"tomorrow",src:"assets/si-glyph-arrow-right.svg"}))),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"heading-div"},r.a.createElement("div",{className:"heading-float-left"},r.a.createElement("p",{className:"month-p no-margin"},p.monthNames[this.state.today.getMonth()]+" "+this.state.today.getDate())),r.a.createElement("div",{className:"heading-float-right"},this.alternatesLoaded())),r.a.createElement("div",{className:"non-header"},this.handleSchedule())))}},{key:"handleSchedule",value:function(){return this.createCards(this.getSchedule(this.isAlternateSchedule()))}},{key:"findAlternate",value:function(e){for(var t in e)for(var a in e[t].summary.split(" "))if(p.keywords.indexOf(e[t].summary.split(" ")[a].toLowerCase())>=0)return e[t];return null}},{key:"sameDay",value:function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}},{key:"getSchedule",value:function(e){if(null==e)return p.normalSchedules[this.state.today.getDay()];if(""===e.description||null==e.description)return null;var t=e.description.split(")");for(var a in t.splice(-1,1),t=t.map(function(e){return e.split(" (")[0]}))t[a]={name:t[a]};return t}},{key:"createCards",value:function(e){if(null!=e){var t,a=[];for(t in e)a[t]=r.a.createElement(h,{appState:this.props.appState,key:t.toString(),period:e[t].name});return r.a.createElement(r.a.Fragment,null,a)}return r.a.createElement("img",{alt:"",className:"no-school",src:"assets/NoSchool.gif"})}}]),t}(n.Component),v=a(6),f=a.n(v),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).saveSettings=function(){a.props.onSave(a.state)},a.handleChange=function(e){var t=e.target;if("inputName"===e.target.id){var n=t.value;a.setState({name:n})}else if("inputMessage"===e.target.id){var r=t.value;a.setState({message:r})}else if("toggleTodos"===e.target.id)a.setState({todosEnabled:!a.state.todosEnabled});else{var s=t.value,l=t.dataset.name,o=a.state.classNames;o[l]=s,a.setState({classNames:o})}},a.state={classNames:e.appState.classNames,name:e.appState.name,message:e.appState.message,todosEnabled:e.appState.todosEnabled},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){f()("#settingsModal").on("hidden.bs.modal",function(e){f()(this).find("#settingsForm")[0].reset()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"settingsModal",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Settings"),r.a.createElement("button",{type:"button",className:"close exit-button","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{id:"settingsForm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodA"},"Period A"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodA","data-name":"Period A",placeholder:this.state.classNames["Period A"],onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodB"},"Period B"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodB","data-name":"Period B",placeholder:this.state.classNames["Period B"],onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodC"},"Period C"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodC","data-name":"Period C",placeholder:this.state.classNames["Period C"],onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodD"},"Period D"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodD","data-name":"Period D",placeholder:this.state.classNames["Period D"],onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodE"},"Period E"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodE","data-name":"Period E",placeholder:this.state.classNames["Period E"],onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodF"},"Period F"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodF","data-name":"Period F",placeholder:this.state.classNames["Period F"],onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodG"},"Period G"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodG","data-name":"Period G",placeholder:this.state.classNames["Period G"],onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputName",placeholder:this.state.name,onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputMessage"},"Welcome Message"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputMessage",placeholder:this.state.message,onChange:this.handleChange})))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("div",{className:"force-left form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"toggleTodos",defaultChecked:this.state.todosEnabled,onChange:this.handleChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"toggleTodos"},"Enable Assignments")),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveSettings,"data-dismiss":"modal"},"Save")))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",periodDue:""},a.createEvent=function(){var e={};e.classDue=document.getElementById("controlPeriod").value,e.name=a.state.name,e.completed=!1,a.props.onCreate(e)},a.handleChange=function(e){var t=e.target;if("inputName"===e.target.id){var n=t.value;a.setState({name:n})}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){f()("#upcomingModal").on("hidden.bs.modal",function(e){f()(this).find("#eventForm")[0].reset()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"upcomingModal",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Add An Event"),r.a.createElement("button",{type:"button",className:"close exit-button","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{id:"eventForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputName",placeholder:"Event Name",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"controlPeriod"},"Relevant Period"),r.a.createElement("select",{className:"form-control",id:"controlPeriod",onChange:this.handleChange},r.a.createElement("option",null,"Period A"),r.a.createElement("option",null,"Period B"),r.a.createElement("option",null,"Period C"),r.a.createElement("option",null,"Period D"),r.a.createElement("option",null,"Period E"),r.a.createElement("option",null,"Period F"),r.a.createElement("option",null,"Period G"),r.a.createElement("option",null,"Non school")))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Nevermind"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.createEvent,"data-dismiss":"modal"},"Create")))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={now:new Date},a.handleAssignments=function(){for(var e=a.props.upcoming,t=[],n=0;n<e.length;n++)!1===e[n].completed&&t.push(e[n]);return 0===t.length?r.a.createElement("div",null,"All tasks completed"):1===t.length?r.a.createElement("div",null,r.a.createElement("span",{className:"assign-badge lightblue"},"1")," task to complete"):r.a.createElement("div",null,r.a.createElement("span",{className:"assign-badge lightblue"},t.length)," tasks to complete")},a.handleClass=function(){var e=a.findNext(a.state.now);return null!=e?r.a.createElement("div",{className:"p-b-10"},a.formatClass(e.name)," ",e.suffix," in ",r.a.createElement("strong",null,a.formatTime(e.time))):r.a.createElement("div",{className:"p-b-10"},"School's Out for the Day")},a.findNext=function(e){var t=a.parseSchedule(a.getAlternateSchedule(e),e),n=[e.getHours(),e.getMinutes()];for(var r in t){var s=[parseInt(t[r].start.split(":")[0],10),parseInt(t[r].start.split(":")[1],10)];if(n[0]<s[0]||n[0]===s[0]&&n[1]<=s[1]){var l=s[0]-n[0],o=s[1]-n[1];o<0&&(l-=1,o=60+o);var i=l+":"+o;return{name:t[r].name,time:i,suffix:"starts"}}var c=[parseInt(t[r].end.split(":")[0],10),parseInt(t[r].end.split(":")[1],10)];if(n[0]<c[0]||n[0]===c[0]&&n[1]<=c[1]){var m=c[0]-n[0],d=c[1]-n[1];d<0&&(m-=1,d=60+d);var u=m+":"+d;return r<t.length?{name:t[r].name,time:u,suffix:"ends"}:{name:"School",time:u,suffix:"ends"}}}return null},a.formatTime=function(e){var t=parseInt(e.split(":")[0],10),n=parseInt(e.split(":")[1],10);return 0===t?n+" min"+a.isPlural(n):0===n?t+" hr"+a.isPlural(t):t+" hr"+a.isPlural(t)+" "+n+" min"+a.isPlural(n)},a.formatClass=function(e){if(null!=e){var t="class-badge "+a.getClassColor(e);return r.a.createElement("span",{className:t},e)}return null},a.parseSchedule=function(e,t){if(null==e)return p.normalSchedules[t.getDay()];var a=e.description.split(")");a.splice(-1,1);var n=a.map(function(e){return e.split(" (")[0]}),r=a.map(function(e){return e.split(" (")[1]});r=r.map(function(e){return e.split("-")});var s,l=!1;for(var o in r)l?(r[o][0]=String(parseInt(r[o][0].split(":")[0],10)+12)+":"+r[o][0].split(":")[1],r[o][1]=String(parseInt(r[o][1].split(":")[0],10)+12)+":"+r[o][1].split(":")[1]):parseInt(r[o][0].split(":")[0],10)>parseInt(r[o][1].split(":")[0],10)&&(l=!0,r[o][1]=String(parseInt(r[o][1].split(":")[0],10)+12)+":"+r[o][1].split(":")[1]);for(s in a)a[s]={name:n[s],start:r[s][0],end:r[s][1]};return a},a.getAlternateSchedule=function(e){var t=a.filterEventsByDate(e);return a.findAlternate(t)},a.filterEventsByDate=function(e){for(var t=[],n=0;n<a.props.events.length;n++){var r=(a.props.events[n].start.date||a.props.events[n].start.dateTime.split("T")[0]).split("-");r=new Date(r[0],r[1]-1,r[2]),a.sameDay(r,e)&&t.push(a.props.events[n])}return t},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.dateUpdateInt=setInterval(function(){return e.setState({now:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.dateUpdateInt)}},{key:"render",value:function(){return!1===this.props.isMobile?r.a.createElement("h4",{className:"m-3"},this.handleClass(),this.handleAssignments()):r.a.createElement("h4",{className:"mobile-desc"},this.handleClass(),this.handleAssignments())}},{key:"copy",value:function(e){var t,a,n;for(n in t=Array.isArray(e)?[]:{},e)a=e[n],t[n]="object"===typeof a?this.copy(a):a;return t}},{key:"isPlural",value:function(e){return 1!==e?"s":""}},{key:"getClassColor",value:function(e){return null!=p.periodToColor[e]?p.periodToColor[e]:p.periodToColor.Other}},{key:"findAlternate",value:function(e){for(var t in e)for(var a in e[t].summary.split(" "))if(p.keywords.indexOf(e[t].summary.split(" ")[a].toLowerCase())>=0)return e[t];return null}},{key:"sameDay",value:function(e,t){return e=new Date(e),t=new Date(t),e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).getCompletion=function(){return a.props.config.completed?r.a.createElement("span",{className:"badge badge-success text-white"},"COMPLETED"):r.a.createElement("span",{className:"badge badge-warning text-white"},"NOT DONE")},a.getClassDue=function(){return"Non school"===a.props.config.classDue?"":r.a.createElement(r.a.Fragment,null,"Due ",r.a.createElement("span",{className:"class-badge "+a.getClassColor(a.props.config.classDue)},a.props.config.classDue))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getClassColor",value:function(e){return null!=p.periodToColor[e]?p.periodToColor[e]:p.periodToColor.Other}},{key:"sameDay",value:function(e,t){return e=new Date(e),t=new Date(t),e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}},{key:"render",value:function(){return r.a.createElement("div",{className:"upcoming-card-div"},r.a.createElement("div",{className:"upcoming-div lightblue"},r.a.createElement("p",{className:"card-name"},this.props.config.name),r.a.createElement("p",{className:"card-done"},this.getCompletion()),r.a.createElement("p",{className:"card-due-class"},this.getClassDue())),this.completeDiv())}},{key:"completeDiv",value:function(){return this.props.config.completed?r.a.createElement("div",{className:"finish-div badge-warning"},r.a.createElement("button",{className:"close center-exit",onClick:this.props.onComplete},r.a.createElement("img",{className:"sched-set btn-outline-warning glyph-icon",alt:"finish",src:"assets/si-glyph-delete.svg"}))):r.a.createElement("div",{className:"finish-div badge-success"},r.a.createElement("button",{className:"close center-exit",onClick:this.props.onComplete},r.a.createElement("img",{className:"sched-set btn-outline-success glyph-icon",alt:"finish",src:"assets/si-glyph-checked.svg"})))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleUpcoming=function(){for(var e=a.props.appState.upcoming,t=[],n=function(n){t.push(r.a.createElement(b,{config:e[n],onComplete:function(){a.props.onComplete(n)},key:"Upcoming "+n}))},s=0;s<e.length;s++)n(s);return 0===t.length?"All tasks completed.":t},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"heading-div"},r.a.createElement("h2",{className:"heading-float-left"},"Upcoming"),r.a.createElement("div",{className:"heading-float-right"},r.a.createElement("img",{className:"btn-outline-secondary glyph-icon m-1",alt:"addEvent",src:"assets/si-glyph-circle-plus.svg","data-toggle":"modal","data-target":"#upcomingModal"}))),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"heading-div"},this.handleUpcoming())))}}]),t}(n.Component);a(18);function P(e,t){return new Date(e.start.dateTime||e.start.date).getTime()-new Date(t.start.dateTime||t.start.date).getTime()}function D(e){return void 0!==e?e.replace(/<(?:.|\n)*?>/gm,"").split(",").join("").split(") ").join(")"):""}var S=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onComplete=function(e){var t=a.state.upcoming;t[e].completed?t=a.arrayRemove(t,t[e]):t[e].completed=!0,a.setState({upcoming:t})},a.handleSave=function(e){a.setState({classNames:e.classNames}),a.setState({name:e.name}),a.setState({message:e.message}),a.setState({todosEnabled:e.todosEnabled})},a.handleCreate=function(e){var t=a.copy(a.state.upcoming);t.push(e),a.setState({upcoming:t})},a.getUpcomingView=function(){return a.state.todosEnabled?r.a.createElement(C,{appState:a.state,onComplete:a.onComplete}):null};var n=JSON.parse(localStorage.getItem("state"));return a.state=null!==n?n:{classNames:{"Period A":"Period A","Period B":"Period B","Period C":"Period C","Period D":"Period D","Period E":"Period E","Period F":"Period F","Period G":"Period G"},name:"Anonymous Cow",events:{},upcoming:[],message:"Supercalifragilisticexpialidocious",todosEnabled:!0},a.getEvents({calendarUrl:"https://www.googleapis.com/calendar/v3/calendars/u5mgb2vlddfj70d7frf3r015h0@group.calendar.google.com/events?key=AIzaSyDtCp1eV5JlY_Smx8wNbXKngun9HZ5J9Ik",recurringEvents:!0,timeMin:p.firstDay,timeMax:p.lastDay}),window.addEventListener("beforeunload",function(e){localStorage.setItem("state",JSON.stringify(a.state)),clearInterval()}),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"arrayRemove",value:function(e,t){return e.filter(function(e){return e!==t})}},{key:"getEvents",value:function(e){var t=this,a=e.calendarUrl;e.recurringEvents&&(a+="&singleEvents=true&orderBy=starttime"),e.timeMin&&(a=a+"&timeMin="+e.timeMin),e.timeMax&&(a=a+"&timeMax="+e.timeMax),fetch(a).then(function(e){return e.json()}).then(function(e){var a=function(e,t){return function(e){var t,a=[];for(t in e){var n=e[t],r={summary:n.summary,description:D(n.description),start:n.start,end:n.end};a[t]=r}return a}(e.items.filter(function(e){return e&&e.hasOwnProperty("status")&&"cancelled"!==e.status}).sort(P))}(e);t.setState({events:a})})}},{key:"copy",value:function(e){var t,a,n;for(n in t=Array.isArray(e)?[]:{},e)a=e[n],t[n]="object"===typeof a?this.copy(a):a;return t}},{key:"render",value:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=600?r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"bg-image"}),r.a.createElement("div",{className:"mobile-panel"},r.a.createElement(u,{userName:this.state.name}),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"switch-hr"},r.a.createElement("hr",{className:"horizontal-rule"})),r.a.createElement(N,{upcoming:this.state.upcoming,events:this.state.events,isMobile:!0}),r.a.createElement(g,{appState:this.state}),this.getUpcomingView()))),r.a.createElement(E,{appState:this.state,onSave:this.handleSave,isMobile:!0}),r.a.createElement(y,{onCreate:this.handleCreate})):r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"bg-image"}),r.a.createElement("div",{className:"holderFilter"}),r.a.createElement("h2",{className:"name-header m-3"},this.state.message),r.a.createElement("div",{className:"today-info"},r.a.createElement("h3",{className:"m-3"},"It's ",p.dayNames[(new Date).getDay()],", ",p.monthNames[(new Date).getMonth()]," ",(new Date).getDate()),r.a.createElement(N,{upcoming:this.state.upcoming,events:this.state.events,isMobile:!1})),r.a.createElement("div",{className:"hover-div"},r.a.createElement("div",{className:"movement-div"},r.a.createElement("div",{className:"schedule-panel"},r.a.createElement(u,{userName:this.state.name}),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"switch-hr"},r.a.createElement("hr",{className:"horizontal-rule"})),r.a.createElement(g,{appState:this.state}),this.getUpcomingView()))))),r.a.createElement(E,{appState:this.state,onSave:this.handleSave,isMobile:!1}),r.a.createElement(y,{onCreate:this.handleCreate}))}}]),t}(n.Component);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.989bf173.chunk.js.map