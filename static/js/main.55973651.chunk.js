(this["webpackJsonpelschool-vk-diary"]=this["webpackJsonpelschool-vk-diary"]||[]).push([[0],{162:function(e,t,a){e.exports=a(251)},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);a(163),a(189),a(191),a(192),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231);var n=a(0),s=a.n(n),r=a(84),i=a.n(r),l=a(35),o=a.n(l),c=a(28),m=a(29),d=a(31),h=a(30),u=a(9),g=(a(249),a(39)),k=a(94),_=a.n(k),y=a(95),v=a.n(y),p=a(96),f=a.n(p),D=a(93),E=a.n(D),w=a(92),b=a.n(w),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).formatStages=function(e){var t=[];t.push(s.a.createElement("span",{key:0},e.substring(0,e.indexOf('"materials_json_format')))),e=(e=e.substring(e.indexOf('"materials_json_format":[')+26,e.length-2)).split("},{");var a=0;return e.map((function(e){a++;var n=e.substring(8,e.indexOf('","link"')),r=e.substring(e.indexOf('"link"')+8,e.length-1);t.push(s.a.createElement("div",{key:a},n,": ",s.a.createElement("a",{href:r},r)))})),t},n}return Object(m.a)(a,[{key:"getMarkBlockColor",value:function(e){var t="";if(e.indexOf("/")>0){t="linear-gradient(90deg, ";var a=e.substring(0,e.indexOf("/")),n=e.substring(e.indexOf("/")+1);t+=this.getMarkColor(a)+","+this.getMarkColor(n),t+=")"}else t=this.getMarkColor(e);return t}},{key:"getMarkColor",value:function(e){switch(e=parseInt(e)){case 1:case 2:return"#ffb6c1";case 3:return"#f0e68c";case 4:return"#87ceeb";case 5:return"#98fb98";default:return"#d3d3d3"}}},{key:"render",value:function(){var e=this.props.lesson;return s.a.createElement("div",{className:"lesson d-flex"},s.a.createElement("div",{className:"lesson__timeline"}),s.a.createElement("div",{className:"lesson__times d-flex flex-column"},s.a.createElement("div",{className:"lesson__start"},e.start),s.a.createElement("div",{className:"lesson__number"},e.number),s.a.createElement("div",{className:"lesson__end"},e.end)),s.a.createElement("div",{className:"lesson__card flex-grow-1"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{className:"lesson__title flex-grow-1"},e.title),null!=e.mark&&s.a.createElement("div",{className:"lesson__mark-wrapper",style:{background:this.getMarkBlockColor(e.mark)}},s.a.createElement("div",{className:"lesson__mark"},e.mark),s.a.createElement("div",null,"\u041e\u0446\u0435\u043d\u043a\u0430"))),s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{className:"lesson__number-room flex-grow-1"},e.number," \u0443\u0440\u043e\u043a, \u043a\u0430\u0431. ",e.room),s.a.createElement("div",{className:"lesson__kind"},e.kind)),null!=e.videoconfTime&&s.a.createElement("div",{className:"lesson__videoconf d-flex"},s.a.createElement(b.a,null),s.a.createElement("div",{style:{margin:"4px 0 0 5px"}},"\u0412\u0438\u0434\u0435\u043e\u0443\u0440\u043e\u043a \u0432 ",e.videoconfTime)),null!=e.stages&&s.a.createElement("div",{className:"lesson__stages"},this.formatStages(e.stages)),s.a.createElement("div",{className:"lesson__homework"},e.homework),e.yaklass?s.a.createElement("div",{className:"lesson__yaklass"},"\u041d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u042f\u041a\u043b\u0430\u0441\u0441"):null))}}]),a}(s.a.Component),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadLessons=function(e){var t=Object(g.a)(n),a=e;setTimeout((function(){a==t.state.chosenDay&&t.setState({lessonsLoading:!1,lessons:[{id:1,title:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0432\u0435\u0440\u0441\u0438\u044f 08.12.2020",start:"08:00",end:"08:40",number:1,room:"204",kind:"\u0414\u041e-\u043e\u043d\u043b\u0430\u0439\u043d",videoconfTime:"08:15",stages:'T\u0435\u043a\u0441\u0442"materials_json_format":[{"desc":"\u0437\u0430\u0434\u0430\u043d\u0438\u04351","link":"\u0441\u0441\u044b\u043b\u043a\u0430"},{"desc":"\u0437\u0430\u0434\u0430\u043d\u0438\u04352","link":"\u0441\u0441\u044b\u043b\u043a\u04302"}]',homework:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435 123\n456",yaklass:!0,mark:null},{id:2,title:"\u0412\u0441\u0435\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u0441\u0451\u043e\u0431\u044a\u0435\u043c\u043b\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u043a",start:"08:45",end:"09:25",number:2,room:"204",kind:"\u0414\u041e-\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043a\u0435\u0439\u0441",videoconfTime:"08:15",stages:'"materials_json_format":[{"desc":"\u0437\u0430\u0434\u0430\u043d\u0438\u04351","link":"https://youtu.be/kFz9afj8lu0"}]',homework:"123",yaklass:!1,mark:"4/5"},{id:3,title:"\u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430",start:"09:35",end:"10:15",number:3,room:"\u0444\u0438\u0437. \u0437\u0430\u043b",kind:"\u041e\u0447\u043d\u044b\u0439",videoconfTime:null,stages:null,homework:null,yaklass:!1,mark:null},{id:4,title:"\u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430",start:"10:20",end:"11:00",number:4,room:"\u0444\u0438\u0437. \u0437\u0430\u043b",kind:"\u041e\u0447\u043d\u044b\u0439",videoconfTime:null,stages:null,homework:null,yaklass:!1,mark:"2"},{id:5,title:"\u0424\u0438\u0437\u0438\u043a\u0430",start:"11:05",end:"11:45",number:5,room:"3",kind:"\u041e\u0447\u043d\u044b\u0439",videoconfTime:null,stages:null,homework:null,yaklass:!1,mark:"\u041d"}]})}),500)},n.getRuMonth=function(e){switch(e){case 1:return"\u042f\u043d\u0432\u0430\u0440\u044c";case 2:return"\u0424\u0435\u0432\u0440\u0430\u043b\u044c";case 3:return"\u041c\u0430\u0440\u0442";case 4:return"\u0410\u043f\u0440\u0435\u043b\u044c";case 5:return"\u041c\u0430\u0439";case 6:return"\u0418\u044e\u043d\u044c";case 7:return"\u0418\u044e\u043b\u044c";case 8:return"\u0410\u0432\u0433\u0443\u0441\u0442";case 9:return"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c";case 10:return"\u041e\u043a\u0442\u044f\u0431\u0440\u044c";case 11:return"\u041d\u043e\u044f\u0431\u0440\u044c";case 12:return"\u0414\u0435\u043a\u0430\u0431\u0440\u044c"}},n.chooseDay=function(e){n.setState({showndatepicker:!1,chosenDay:e,chosenWeek:n.getWeekNumber(e),month:n.getMonth(e),lessonsLoading:!0}),n.loadLessons(e)},n.getWeekNumber=function(e){var t=new Date(e.getTime()),a=t.getDate(),n=new Date(t.setDate(1)),s=(0==n.getDay()?7:n.getDay())+a-2;return(s-s%7)/7+1},n.state={showndatepicker:!1,chosenDay:new Date,chosenWeek:n.getWeekNumber(new Date),month:n.getMonth(new Date),lessons:[],lessonsLoading:!0,animateDatepicker:!0},n.getMonthString=n.getMonthString.bind(Object(g.a)(n)),n.getYearString=n.getYearString.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadLessons(this.state.chosenDay)}},{key:"getWeek",value:function(e){for(var t=e,a=t.setDate(t.getDate()-t.getDay()+1),n=[],s=0;s<7;s++)n.push(new Date(new Date(a).setDate(new Date(a).getDate()+s)));return n}},{key:"getMonth",value:function(e){var t=new Date(e.getTime()),a=new Date(t.setDate(1)),n=new Date(t.setMonth(t.getMonth()+1));n.setDate(n.getDate()-1);for(var s=[],r=1;r<=n.getDate();r++)s.push(new Date(a.setDate(r)));return s}},{key:"getMonthString",value:function(e){var t=new Date(e.getTime()),a="",n=new Date(t.setDate(t.getDate()-(0==t.getDay()?7:t.getDay())+1));a+=this.getRuMonth(n.getMonth()+1);var s=new Date(t.setDate(t.getDate()+6));return n.getMonth()!=s.getMonth()&&(a+=" - "+this.getRuMonth(s.getMonth()+1)),a}},{key:"getYearString",value:function(e){var t=new Date(e.getTime()),a="",n=new Date(t.setDate(t.getDate()-(0==t.getDay()?7:t.getDay())+1));a+=n.getFullYear();var s=new Date(t.setDate(t.getDate()+6));return n.getFullYear()!=s.getFullYear()&&(a+=" - "+s.getFullYear()),a}},{key:"render",value:function(){for(var e=this,t=[],a=[],n=1;n<(0==this.state.month[0].getDay()?7:this.state.month[0].getDay());n++)t.unshift(s.a.createElement("div",{key:n,className:"col-1-of-7 text-center datepicker__day-wrapper"},s.a.createElement("div",{className:"datepicker__day datepicker__day_previous-month"},new Date(new Date(this.state.month[0].getTime()).setDate(1-n)).getDate())));if(this.state.month[this.state.month.length-1].getDay())for(n=1;n<8-this.state.month[this.state.month.length-1].getDay();n++)a.push(s.a.createElement("div",{key:n,className:"col-1-of-7 text-center datepicker__day-wrapper"},s.a.createElement("div",{className:"datepicker__day datepicker__day_next-month"},n)));return s.a.createElement("div",{className:"diary"},s.a.createElement("div",{className:"diary__header d-flex"},s.a.createElement("div",{className:"diary__header-month"},this.getMonthString(this.state.chosenDay)),s.a.createElement("div",{className:"diary__header-year"},this.getYearString(this.state.chosenDay)),s.a.createElement(u.b,{className:"ml-auto diary__header-btn"+(this.state.showndatepicker?" diary__header-btn-cancel":" diary__header-btn-calendar"),onClick:function(){e.state.showndatepicker?e.setState({showndatepicker:!e.state.showndatepicker,month:e.getMonth(e.state.chosenDay)}):e.setState({showndatepicker:!e.state.showndatepicker})}},this.state.showndatepicker?s.a.createElement(E.a,null):s.a.createElement(_.a,null))),s.a.createElement("div",{className:"diary__block-wrapper"},s.a.createElement("div",{className:"diary__block"},s.a.createElement("div",{className:"diary__month-wrapper"+(this.state.animateDatepicker?"":" datepicker_no-animation")},s.a.createElement("div",{className:"diary__month"+(this.state.showndatepicker?"":" diary__month_collapsed")},s.a.createElement("div",{className:"d-flex diary__weekdays"},[{id:1,name:"\u041f\u041d"},{id:2,name:"\u0412\u0422"},{id:3,name:"\u0421\u0420"},{id:4,name:"\u0427\u0422"},{id:5,name:"\u041f\u0422"},{id:6,name:"\u0421\u0411"},{id:0,name:"\u0412\u0421"}].map((function(t,a){return s.a.createElement("div",{key:a,className:"diary__weekday text-center col-1-of-7"+(e.state.chosenDay.getDay()==t.id?" diary__weekday_active":""),onClick:e.state.showndatepicker?null:function(){var a=new Date(e.state.chosenDay);a.getDay()!=t.id&&(e.setState({animateDatepicker:!1}),e.chooseDay(new Date(a.setDate(a.getDate()+(0==t.id?7:t.id)-(0==a.getDay()?7:a.getDay()))))),setTimeout((function(){e.setState({animateDatepicker:!0})}),250)}},t.name)}))),s.a.createElement(u.b,{className:"diary__change-week-btn",style:{left:0},onClick:function(){var t;e.state.showndatepicker?((t=new Date(e.state.month[0])).setMonth(t.getMonth()-1),e.setState({month:e.getMonth(t)})):(e.setState({animateDatepicker:!1}),(t=new Date(e.state.chosenDay)).setDate(t.getDate()-(0==t.getDay()?7:t.getDay())),e.chooseDay(t),setTimeout((function(){e.setState({animateDatepicker:!0})}),250))}},s.a.createElement(v.a,null)),s.a.createElement(u.b,{className:"diary__change-week-btn",style:{right:0},onClick:function(){var t;e.state.showndatepicker?((t=new Date(e.state.month[0])).setMonth(t.getMonth()+1),e.setState({month:e.getMonth(t)})):(e.setState({animateDatepicker:!1}),(t=new Date(e.state.chosenDay)).setDate(t.getDate()+(8-(0==t.getDay()?7:t.getDay()))),e.chooseDay(t,!0),setTimeout((function(){e.setState({animateDatepicker:!0})}),250))}},s.a.createElement(f.a,null)),s.a.createElement("div",{className:"diary__datepicker datepicker d-flex flex-wrap",style:{"--chosen-week":"calc(".concat(this.state.chosenWeek-1,")")}},t,this.state.month.map((function(t,a){return s.a.createElement("div",{key:a,className:"col-1-of-7 text-center datepicker__day-wrapper"},s.a.createElement("div",{className:"datepicker__day"+(t.getTime()==e.state.chosenDay.getTime()?" datepicker__day_active":""),onClick:function(){t.getTime()!=e.state.chosenDay.getTime()&&(e.state.showndatepicker||(e.setState({animateDatepicker:!1}),setTimeout((function(){e.setState({animateDatepicker:!0})}),250)),e.chooseDay(t))}},t.getDate()))})),a),s.a.createElement("div",{className:"diary__datepicker-month"},this.getRuMonth(this.state.month[0].getMonth()+1)),s.a.createElement("div",{className:"diary__datepicker-year"},this.state.month[0].getFullYear()))),s.a.createElement("div",{className:"diary__lessons lessons"+(this.state.showndatepicker?" diary__lessons_showndatepicker":"")},!this.state.lessonsLoading&&this.state.lessons.length>0&&s.a.createElement("div",{className:"diary__lessons-title"},"\u0423\u0440\u043e\u043a\u0438"),!this.state.lessonsLoading&&this.state.lessons.map((function(e){return s.a.createElement(N,{key:e.id,lesson:e})})),!this.state.lessonsLoading&&0==this.state.lessons.length&&s.a.createElement("div",{class:"text-center",style:{marginTop:"50vh"}},"\u0423\u0440\u043e\u043a\u043e\u0432 \u043d\u0435\u0442!"),this.state.lessonsLoading&&s.a.createElement(u.l,{size:"large",style:{marginTop:"50%"}})))))}}]),a}(s.a.Component),x=(s.a.Component,a(250),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,"456")}}]),a}(s.a.Component)),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getToken=function(){try{o.a.send("VKWebAppGetAuthToken",{app_id:7475417,scope:""}).then((function(e){console.log(e),n.setState({apiToken:e.access_token,userPicUrl:e.photo_200})}),(function(e){console.log(e)}))}catch(e){console.log(e)}},n.hideMenu=function(){n.setState({activePanel:"home"})},n.state={activeView:"logon",activePanel:"home",apiToken:null,userPicUrl:""},n.getToken(),n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(u.k,{activeView:this.state.activeView},s.a.createElement(u.m,{id:"logon",activePanel:"logon_panel"},s.a.createElement(u.g,{id:"logon_panel"},s.a.createElement(u.h,null,"\u0414\u043d\u0435\u0432\u043d\u0438\u043a"),s.a.createElement(u.c,null,s.a.createElement(u.d,{top:"\u041b\u043e\u0433\u0438\u043d"},s.a.createElement(u.f,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"})),s.a.createElement(u.d,{top:"\u041f\u0430\u0440\u043e\u043b\u044c"},s.a.createElement(u.f,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})),s.a.createElement(u.d,null,s.a.createElement(u.b,{className:"mx-auto d-block",onClick:function(){}},"\u0412\u043e\u0439\u0442\u0438")),s.a.createElement(u.e,{header:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",mode:"error"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c.")))),s.a.createElement(u.m,{id:"app",activePanel:this.state.activePanel},s.a.createElement(u.g,{id:"home"},s.a.createElement(u.h,{separator:!1,left:s.a.createElement(u.j,{className:"menu-button",onClick:function(){e.setState({activePanel:"menu"})}},s.a.createElement(u.a,{size:36,src:this.state.userPicUrl}))}),s.a.createElement(M,null)),s.a.createElement(u.g,{id:"menu"},s.a.createElement(u.h,{left:s.a.createElement(u.i,{onClick:this.hideMenu})},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),s.a.createElement(x,null))))}}]),a}(s.a.Component);o.a.send("VKWebAppInit"),i.a.render(s.a.createElement(T,null),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.55973651.chunk.js.map