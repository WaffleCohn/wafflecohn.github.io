(this["webpackJsonpwafflecohn.github.io"]=this["webpackJsonpwafflecohn.github.io"]||[]).push([[0],{47:function(e,t,a){e.exports=a(69)},52:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),i=(a(52),a(13)),c=a(14),s=a(17),m=a(16),p=a(15),u=a(6),d=a(8),h=a(10),g=a(31),E=a(28),f=a(40),b=a(34),v=a(46);a(58);function w(e){return r.a.createElement(b.a.Item,null,r.a.createElement(p.b,{to:"/"+e.eventKey},r.a.createElement(b.a.Link,{as:"span",href:"/"+e.eventKey,eventKey:e.eventKey},e.title)))}var y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{bg:"white",className:"justify-content-end",expand:"lg",id:"header",variant:"header",fixed:"top"},r.a.createElement(b.a,{activeKey:this.props.activeKey||"about"},r.a.createElement(w,{eventKey:"about",title:"About Me"}),r.a.createElement(w,{eventKey:"resume",title:"Resume"}),r.a.createElement(w,{eventKey:"projects",title:"Projects"})))}}]),a}(r.a.Component),k=a(11);a(64);function j(e){return r.a.createElement("a",{className:"contact-button",href:e.href,target:"_blank",title:e.title,rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:e.icon}))}var N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"main-container"},r.a.createElement("link",{rel:"preload",href:"/img/headshot_front.jpg",as:"image"}),r.a.createElement("link",{rel:"preload",href:"/img/headshot_back.jpg",as:"image"}),r.a.createElement(y,null),r.a.createElement(h.a,{className:"background",fluid:!0},r.a.createElement(k.a,{className:"background-row"},r.a.createElement(d.a,{className:"background-strip",xs:12,lg:5}))),r.a.createElement("div",{className:"about-content"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(k.a,null,r.a.createElement(d.a,{className:"about-popout",xs:{span:10,offset:1},sm:{span:8,offset:2},lg:{span:2,offset:4}},r.a.createElement("div",{className:"profile-image"}),r.a.createElement("div",{id:"contactButtons"},r.a.createElement(j,{href:"mailto:ari.b.cohn@gmail.com",icon:E.a,title:"Email"}),r.a.createElement(j,{href:"/Resume.pdf",icon:E.c,title:"Resume (pdf)"}),r.a.createElement(j,{href:"https://github.com/WaffleCohn",icon:f.b,title:"Github"}),r.a.createElement(j,{href:"https://www.facebook.com/ari.cohn.7",icon:f.a,title:"Facebook"}))),r.a.createElement(d.a,{className:"about-text",xs:{span:12,offset:0},sm:{span:8,offset:2},lg:{span:5,offset:0}},r.a.createElement("h1",{className:"title"},"Ari Cohn"),r.a.createElement("p",null,"Hi, I\u2019m Ari! I\u2019m a senior studying Computer Science at Carnegie Mellon University with a minor in Economics. This fall, I will be co-teaching a course titled Introduction to Esoteric Programming Languages as well as TAing for 15-330 Introduction to Computer Security. Outside of school, I enjoy biking, soccer, and volleyball."),r.a.createElement("div",{id:"aboutButtons"},r.a.createElement(p.b,{to:"/resume"},r.a.createElement("button",{id:"resumeButton"},"Resume")),r.a.createElement(p.b,{to:"/projects"},r.a.createElement("button",{id:"projectsButton"},"Projects"))))))))}}]),a}(r.a.Component);function S(e){return r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},e))}a(65);var A=function(e){return r.a.createElement(d.a,{className:"resume-item",sm:12},r.a.createElement("h3",null,e.title,e.subtitle?" | ":"",e.subtitle?r.a.createElement("span",{className:"resume-item-subtitle"},e.subtitle):r.a.createElement(r.a.Fragment,null)),e.detail?r.a.createElement("span",{className:"resume-item-detail"},e.detail):r.a.createElement("div",null),e.content)},I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"resume",className:"main-container"},r.a.createElement(y,{activeKey:"resume"}),r.a.createElement(h.a,{className:"background",fluid:!0},r.a.createElement(k.a,{className:"background-strip"})),r.a.createElement(h.a,null,r.a.createElement(d.a,{sm:{span:10,offset:1}},r.a.createElement(k.a,{className:"resume-section"},r.a.createElement("p",{id:"resumePDFLink"},r.a.createElement("a",{href:"/Resume.pdf",target:"_blank",rel:"noopener noreferrer"},"PDF Version ",r.a.createElement(g.a,{icon:E.b}))),r.a.createElement("h1",null,"Education"),r.a.createElement(A,{title:"Carnegie Mellon University",detail:"Expected May 2021",content:r.a.createElement("div",null,r.a.createElement("p",null,"B.S. in Computer Science, Minor in Economics"),r.a.createElement("p",null,"4.0 GPA"))})),r.a.createElement(k.a,{className:"resume-section"},r.a.createElement("h1",null,"Experience"),r.a.createElement(A,{title:"Zillow Group",subtitle:"SWE Intern",detail:"May - Aug 2019",content:r.a.createElement("ul",null,r.a.createElement("li",null,"Implemented a redesign of the Zillow Android app\u2019s onboarding pages and changed font for the whole app."),r.a.createElement("li",null,"Fixed bugs across the Android app and contributed to implementing dark mode on iOS."),r.a.createElement("li",null,"Won first place in a Zillow-wide CTF (cybersecurity contest) during hackweek."))}),r.a.createElement(A,{title:"Aprima Medical Software",subtitle:"SWE Intern",detail:"May - Aug 2018, Jun - Jul 2017",content:r.a.createElement("ul",null,r.a.createElement("li",null,"Integrated 3rd party medical device software into the Aprima practice management application."),r.a.createElement("li",null,"Worked on creating and maintaining REST endpoints as well as building custom validation software for API testing."))}),r.a.createElement(A,{title:"Carnegie Mellon University",subtitle:"Teaching Assistant",detail:"Aug 2018 - Present",content:r.a.createElement("ul",null,r.a.createElement("li",null,"Teaching Assistant for ",r.a.createElement(S,{href:"http://www.cs.cmu.edu/~15122-archive/f18/"},"Principles of Imperative Computation (15-122)")," & ",r.a.createElement(S,{href:"https://www.cs.cmu.edu/~charlie/courses/17-214/2020-spring/index.html"},"Principles of Software Construction (17-214)"),"."),r.a.createElement("li",null,"Lead labs and recitations and provided office hours while assisting with grading and course infrastructure."))})))))}}]),a}(r.a.Component),O=a(45),P=(a(66),function(e){return r.a.createElement(p.b,{to:e.url},r.a.createElement(d.a,{className:"project-item",sm:12},r.a.createElement(k.a,null,r.a.createElement(d.a,{className:"project-icon",md:3,lg:2},r.a.createElement(O.a,{src:e.img,style:{background:e.imgBackground||"white"}})),r.a.createElement(d.a,{className:"project-description",md:9,lg:10},r.a.createElement("h3",null,e.title),e.content,r.a.createElement("div",{className:"more-info"},"find out more")))))}),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"main-container"},r.a.createElement(y,{activeKey:"projects"}),r.a.createElement(h.a,{className:"background",fluid:!0},r.a.createElement(k.a,{className:"background-strip"})),r.a.createElement(h.a,null,r.a.createElement(d.a,{sm:{span:10,offset:1}},r.a.createElement("h1",{id:"title"},"Projects"),r.a.createElement(P,{title:"Egenda",img:"/img/egenda-logo.png",content:"Egenda is a homework planner and organizer for iOS and Android devices. It has over\xa0500k\xa0downloads since August 2016.",url:"projects/egenda"}),r.a.createElement(P,{title:"Virtual Fence",img:"/img/fencing.png",content:"A virtual version of Carnegie Mellon's fence that anyone can come paint from their computer.",url:"projects/virtual-fence"}),r.a.createElement(P,{title:"Space Invaders 2018",img:"/img/SpaceInvadersLogo.png",imgBackground:"black",content:"Modernized version of the classic arcade game I made with my team at the Pennapps hackathon. It uses an iPhone as a controller with a website displaying the game.",url:"projects/space-invaders"}),r.a.createElement(P,{title:"PhotoSlide",img:"/img/photoslide-logo.png",content:"An app that transforms your iPad into a digital photo frame that can endlessly scroll through photos with several kinds of transitions.",url:"projects/photo-slide"}))))}}]),a}(r.a.Component),C={title:"Egenda",content:r.a.createElement("div",null,r.a.createElement("p",null,"Egenda is an app for iOS and Android that helps students quickly and easily manage all of their assignments, projects, quizzes, and tests. Since its release in August 2016, Egenda has been downloaded over 500,000 times and managed over 2 million assignments."),r.a.createElement("p",null,"Egenda has reached the Top 50 Education app on the US App Store and has been featured on KLIF News, Plano Star Courier, and the Texas Jewish Post."),r.a.createElement("div",{className:"scrolling-carousel"},r.a.createElement("img",{src:"/img/egenda/egenda_ad_post.png",alt:"Egenda introduction and explanation"}),r.a.createElement("img",{src:"/img/egenda/classes_view.png",alt:"screenshot of a student's classes in the app"}),r.a.createElement("img",{src:"/img/egenda/schedule_view.png",alt:"screenshot of a student's schedule in the app"}),r.a.createElement("img",{src:"/img/egenda/assignment_view.png",alt:"screenshot of a student's assignment in the app"})),r.a.createElement("div",{class:"appstore-logo-container"},r.a.createElement(S,{class:"appstore-logo",href:"https://itunes.apple.com/us/app/egenda-school-planner-assistant/id1142359153?mt=8"},r.a.createElement("img",{class:"appstore-logo",alt:"Get it on the App Store",src:"/img/AppStoreBadge.svg"})),r.a.createElement(S,{class:"appstore-logo",href:"https://play.google.com/store/apps/details?id=studios.gr8bit.schoolmanager&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},r.a.createElement("img",{class:"appstore-logo",alt:"Get it on Google Play",src:"/img/google-play-badge.png"}))))},x=a(19),M={title:"Virtual Fence",content:r.a.createElement("div",null,r.a.createElement("p",null,"When pandemic struck and Carnegie Mellon moved its classes online for the rest of the semester, many of the school's oldest traditions were put on hold, such as our 70-year tradition of painting ",r.a.createElement(S,{href:"https://www.amusingplanet.com/2014/09/the-fence-of-carnegie-mellon-university.html"},"The Fence"),". In order to help keep this tradition alive, I created ",r.a.createElement(S,{href:"http://www.paint-the-fence.com"},"paint-the-fence.com"),", a virtual fence that anyone can paint from the comfort of their home."),r.a.createElement("p",null,"Over 7,000 people visited the site within a week of publishing it, and CMU even shared the Virtual Fence on their official social media accounts."),r.a.createElement(x.a,null,r.a.createElement(x.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"/img/virtual-fence/fence_ad.png",alt:"First slide"})),r.a.createElement(x.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"/img/virtual-fence/cool_fence.png",alt:"First slide"})),r.a.createElement(x.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"/img/virtual-fence/landscape_fence.png",alt:"First slide"}))))},F={title:"Space Invaders 2018",content:r.a.createElement("div",null,r.a.createElement("p",null,'Space Invaders 2018 allows gamers to use their phone as a motion controller for the classic game. By visiting our website, players can link their phones to their computers. Through a combination of tilting the phone left and right and tapping the phone screen, the players can shoot at alien invaders while dodging incoming fire. As a bonus, defeated aliens periodically drop letters that can be collected to spell "PennApps" for extra points.'),r.a.createElement("p",null,"Check out our devpost page from the hackathon ",r.a.createElement(S,{href:"https://devpost.com/software/space-invaders-2018-heojki"},"here")),r.a.createElement(x.a,null,r.a.createElement(x.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"/img/space-invaders/connection_screenshot.png",alt:"First slide"})),r.a.createElement(x.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"/img/space-invaders/gameplay_with_phone.png",alt:"First slide"}))))},B=(a(67),{title:"PhotoSlide",content:r.a.createElement("div",null,r.a.createElement("p",null,"Save yourself the cost of an expensive digital photo frame by turning your iPad into one."),r.a.createElement("p",null,"PhotoSlide transforms your iPad into a viewer for all of your photos so you can watch a slideshow of your memories whenever you want. Simply select one or more albums and then watch as your iPad becomes a beautiful photo frame complete with a clock and transitions."),r.a.createElement("div",{className:"scrolling-carousel"},r.a.createElement("img",{src:"/img/photo-slide/ipad_with_photo.png",alt:"An iPad running a slideshow"}),r.a.createElement("img",{src:"/img/photo-slide/toby_screenshot.png",alt:"Screenshot of a slideshow in the app"}),r.a.createElement("img",{src:"/img/photo-slide/settings_screenshot.png",alt:"Screenshot of the settings page in the app"})),r.a.createElement("div",{class:"appstore-logo-container"},r.a.createElement(S,{class:"appstore-logo",href:"https://apps.apple.com/us/app/photoslide-digital-photo-frame/id1278754073?ls=1"},r.a.createElement("img",{class:"appstore-logo",alt:"Get it on the App Store",src:"/img/AppStoreBadge.svg"}))))});var K=function(){var e={egenda:C,"virtual-fence":M,"space-invaders":F,"photo-slide":B}[Object(u.f)().id];return e?r.a.createElement("div",{id:"project",className:"main-container"},r.a.createElement(y,{activeKey:"projects"}),r.a.createElement(h.a,{className:"background",fluid:!0},r.a.createElement(k.a,{className:"background-strip"})),r.a.createElement(h.a,null,r.a.createElement(d.a,{sm:{span:10,offset:1}},r.a.createElement("h1",{id:"title"},e.title),r.a.createElement("div",{id:"content"},e.content)))):r.a.createElement(u.a,{to:"/projects"})},T=(a(68),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/"},r.a.createElement(u.b,{exact:!0,path:"/",component:N}),r.a.createElement(u.b,{exact:!0,path:"/about",component:N}),r.a.createElement(u.b,{exact:!0,path:"/resume",component:I}),r.a.createElement(u.b,{exact:!0,path:"/projects",component:_}),r.a.createElement(u.b,{path:"/projects/:id",component:K}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.fce1a45d.chunk.js.map