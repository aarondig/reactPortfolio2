(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),i=s.n(a),n=s(28),r=s.n(n),l=(s(59),s(8));function o(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(a.useState)(e),s=Object(l.a)(t,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){function t(){i(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),c}s(60),s(61);var d=s(12),j=s.p+"static/media/me.120f84ea.jpg";var h=function(e){var t=e.scroll,s=e.size,i=1-Math.pow(t/s.height*1.2-1.4,2),n=100*(t/s.height-1.1),r=100-n,l=100*(s.height/t-1),o=500/s.width*100*(s.height/t),d=-t/s.height*50+150,h={fade:{opacity:i},reveal:{display:n<-100?"none":"block",maxWidth:n>40?n+"%":"40%",transform:s.width>700?"translateX(-".concat(l,"px)"):"translateY(".concat(l+40,"px)")},slideOut:{width:n>40?r+"%":"60%",marginLeft:n},slide:{marginLeft:1.7*n,opacity:.8*i},slide1:{marginLeft:.2*n},slide2:{marginLeft:.6*n},cardWidth:{transform:t/s.height>1.7?"rotateX(70deg) rotateZ(-60deg) translate3d(-120px, ".concat(o,"%, 70px) !important"):"rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px) !important",maxWidth:n>40?"".concat(d,"%"):"40%",minWidth:"400px"}},b=Object(a.useRef)();return Object(c.jsxs)("div",{id:"About",children:[Object(c.jsx)("div",{id:"foreground"}),Object(c.jsxs)("div",{className:"pageWrap",children:[Object(c.jsxs)("div",{className:"cardContainer",style:h.reveal,children:[Object(c.jsx)("div",{className:"card",style:h.cardWidth,ref:b,children:Object(c.jsxs)("div",{className:"cardFace",children:[Object(c.jsxs)("div",{className:"cardFront",style:{position:n<40?s.width>700&&"absolute":"relative"},children:[Object(c.jsx)("img",{id:"profilePic",src:j}),Object(c.jsx)("div",{className:"picOverlay",style:h.reveal})]}),Object(c.jsx)("div",{className:"cardBack",style:{position:n<40?s.width>700&&"absolute":"relative"},children:Object(c.jsx)("h1",{children:" hello"})})]})}),Object(c.jsx)("div",{id:"cardOverlay"})]}),i>0?Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"headerC container",children:[Object(c.jsx)("h1",{className:"header container",id:"freelance",style:h.fade,children:"Freelance Web Developer."}),s.width<700?Object(c.jsx)("h4",{className:"subHeader",style:h.fade,children:"Where creativity meets creation."}):Object(c.jsx)("div",{})]}),s.width>700?Object(c.jsx)("div",{className:"slideContent",style:h.slideOut,children:Object(c.jsxs)("div",{className:"slideWrap",style:h.slide,children:[Object(c.jsx)("h2",{className:"subHeader",style:h.slide1,children:Object(c.jsx)("span",{children:"Where creativity meets creation."})}),Object(c.jsx)("h3",{className:"title",style:h.slide2,children:"Specializing in:"}),Object(c.jsxs)("div",{className:"buttonC container",style:h.slide2,children:[Object(c.jsx)("div",{className:"button",onMouseOver:function(){n<40&&(b.current.style.transform="rotateX(0deg) rotateY(180deg) rotateZ(0deg) translate3d(0px, 0px, 0px)")},onMouseOut:function(){b.current.style.transform="rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px)"},children:Object(c.jsx)("div",{children:"HTML"})}),Object(c.jsx)("div",{className:"button"}),Object(c.jsx)("div",{className:"button"}),Object(c.jsx)("div",{className:"button"})]})]})}):Object(c.jsx)("div",{}),Object(c.jsx)("div",{className:"skills"})]}):Object(c.jsx)("div",{className:"headerC center",children:t>s.height?Object(c.jsx)("h1",{className:"header",children:"Let's stay in touch."}):Object(c.jsx)("div",{})})]})]})},b=s(9);s(62);var m=function(e){return Object(c.jsx)("main",Object(b.a)({className:"wrapper"},e))},p=(s(48),s(20),s(2),s(15)),u=s(83),x=s(40),O=(s(39),s(89),s(87),s(90),s(88),s(49)),v=s.p+"static/media/venus.3df63535.gltf";s(63);function f(e){var t=e.size,s=Object(p.f)(O.a,v),i=Object(u.c)((function(){return{args:.01,mass:1}})),n=Object(l.a)(i,2),r=n[0],o=(n[1],Object(a.useState)(!1)),d=Object(l.a)(o,2),j=d[0],h=(d[1],Object(a.useState)(!1)),b=Object(l.a)(h,2),m=b[0],f=b[1],N=Object(x.b)({scale:m?[1.5,1.5,1.5]:[1,1,1],color:j?"red":"white"});return Object(p.e)((function(e){r.current.rotation.set(0,8.5+e.mouse.x*e.viewport.width/50,0),r.current.rotation.y+=.001,r.current.position.set(t.width>600?18:0,-73,-50)})),Object(c.jsx)("group",{children:Object(c.jsx)(x.a.mesh,{ref:r,onClick:function(){return f(!m)},scale:N.scale,geometry:s.nodes["venus_mmGroup0-reduced1008"].geometry,children:Object(c.jsx)(x.a.meshStandardMaterial,{attach:"material",color:"#fdfdfd"})})})}var N=function(e){var t=e.size,s=e.scroll,a=(e.blurValue,{height:t.height,transform:"translate3d(0, ".concat(2*s,"px, 0)")});return Object(c.jsx)("div",{id:"scene",style:a,children:Object(c.jsxs)(p.a,{concurrent:!0,shadowMap:!0,camera:{position:[0,0,3],fov:70},children:[Object(c.jsx)("ambientLight",{intensity:.15}),Object(c.jsx)("pointLight",{position:[3,-4,-25],intensity:t.width>600?.4:.05}),Object(c.jsx)(u.a,{children:Object(c.jsx)(f,{size:t.width})})]})})};s(69);s(70);var g=function(e){var t=e.size,s=e.scroll,i=Object(d.f)().scrollYProgress,n=Object(a.useState)(0),r=Object(l.a)(n,2),o=r[0],j=r[1];i.onChange((function(e){return j(e)}));var h=10*o+"px",b=-6*o;return Math.pow(b,3),Object(c.jsxs)("div",{id:"landing",children:[Object(c.jsx)("div",{className:"center",children:Object(c.jsx)("div",{className:"outline"})}),Object(c.jsx)(N,{blurValue:h,size:t,scroll:s}),Object(c.jsx)("div",{className:"topHeader",children:Object(c.jsx)("h1",{id:"topHead",children:"aaron diggdon"})}),Object(c.jsx)("div",{className:"mainHeader",style:{fontSize:t.width>700?"50px":"30px"}})]})},w=(s(71),{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*e+200,"px at 110% -10%)"),transition:{type:"spring",stiffness:25,restDelta:1}}},closed:{clipPath:"circle(30px at 110vw -10%)",transition:{delay:.2,type:"spring",stiffness:300,damping:40}}}),y=function(e){return Object(c.jsx)(d.c.path,Object(b.a)({id:"path",fill:"white",strokeWidth:"1",stroke:"white"},e))};var k=function(e){var t=e.size,s=Object(d.d)(!1,!0),i=Object(l.a)(s,2),n=i[0],r=i[1],o=Object(a.useRef)(null);return Object(c.jsxs)("div",{id:"nav",children:[Object(c.jsx)(d.c.nav,{initial:!1,animate:n?"open":"closed",ref:o,children:Object(c.jsx)("div",{className:"leftNav",children:Object(c.jsx)("button",{className:"navButton",onClick:function(){return r()},style:{top:.05*t.height+"px"},children:Object(c.jsxs)("svg",{width:"70",height:"70",viewBox:"0 0 50 50",children:[Object(c.jsx)(y,{variants:{closed:{d:"M 2 2.5 L 25 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),Object(c.jsx)(y,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),Object(c.jsx)(y,{variants:{closed:{d:"M 2 16.346 L 15 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})})}),Object(c.jsx)(d.c.nav,{initial:!1,animate:n?"open":"closed",ref:o,children:Object(c.jsx)(d.c.div,{id:"navBackground",style:{height:t.height},variants:w})})]})},L=(s(72),s(25)),C=s(14);s(73);var S=function(){return Object(c.jsxs)("div",{id:"project",children:[Object(c.jsxs)("a",{className:"demoButton",href:"https://googlefactchecker.herokuapp.com",children:[Object(c.jsx)("div",{className:"buttonTextHidden",children:"DEMO"}),Object(c.jsx)("div",{className:"buttonContent",children:Object(c.jsx)("div",{className:"buttonText",children:"DEMO"})})]}),Object(c.jsxs)("div",{className:"projectWrap",children:[Object(c.jsx)("div",{className:"labelC",children:Object(c.jsx)("h1",{className:"label",children:"DESCRIPTION"})}),Object(c.jsx)("div",{className:"textC",children:Object(c.jsx)("p",{className:"description",children:"An application that allows you to search claims, terms and quotes, and returns fact checked articles reguarding the validitiy of the query."})}),Object(c.jsxs)("div",{className:"techUsed",children:[Object(c.jsxs)("div",{className:"listCol",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{class:"fab fa-html5 navicon"})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("p",{className:"listName",children:"HTML"})})]}),Object(c.jsxs)("div",{className:"row listRow",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{class:"fab fa-js navicon"})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("p",{className:"listName",children:"JAVASCRIPT"})})]}),Object(c.jsxs)("div",{className:"row listRow",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{class:"fab fa-css3-alt navicon"})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("p",{className:"listName",children:"CSS"})})]})]}),Object(c.jsx)("div",{className:"listExplain",children:Object(c.jsx)("p",{children:"This was valuble bc of this this and this"})})]}),Object(c.jsx)("div",{className:"labelC",children:Object(c.jsx)("h1",{className:"label",children:"Features"})}),Object(c.jsxs)("div",{className:"textC",children:[Object(c.jsx)("h2",{children:"Search"}),Object(c.jsxs)("p",{className:"description",children:["Using Google's ",Object(c.jsx)("a",{href:"https://developers.google.com/fact-check/tools/api",children:"Fact Check Tools API"}),", I created a user friendly interface that allows users to easily enter claims and recieve their articles. We used database archetecture with MySQL to save claims, with hopes of using the most-searched-for claims in a featured secton. The application was designed and developed using HTML, CSS and Javascript's JQuery."]}),Object(c.jsx)("h2",{children:"User Experience"}),Object(c.jsx)("p",{className:"description",children:"Creating a seamless user experience was my top priority. I tried to keep a minimalist aesthetic with aesthetic transitions to seamlessly move the user from one action to another."}),Object(c.jsx)("h2",{children:"Routes"}),Object(c.jsx)("p",{className:"description",children:"Search queries are recieved in the public directory, and passed into the api-routes.js file where the API is called, using axios.js, with the query name. All data is passed using express.js."}),Object(c.jsxs)("div",{className:"imgsContainer",children:[Object(c.jsx)("p",{children:"RECIEVED IN PUBLIC"}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{className:"descriptionImg",src:"https://github.com/aarondig/factCheck/blob/main/assets/recieve.png?raw=true"})}),Object(c.jsx)("p",{className:"description",children:"Search queries are recieved in the public directory, and passed into the api-routes.js file where the API is called, using axios.js, with the query name. All data is passed using express.js."}),Object(c.jsx)("p",{children:"API-ROUTES"}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{className:"descriptionImg",src:"https://github.com/aarondig/factCheck/blob/main/assets/passed.png?raw=true"})})]}),Object(c.jsx)("h2",{children:"Models"}),Object(c.jsx)("p",{className:"description",children:"Using express.js, and sequelize.js I created models for each type of data returned, so I could create HTML elements in Javascript with each specific data type."}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{className:"descriptionImg",src:"https://github.com/aarondig/factCheck/blob/main/assets/models.png?raw=true"})}),Object(c.jsx)("p",{className:"description",children:"Data from the API is passed into the models file from api-routes, using express.js. From there, they are stored in the MySQL database using Sequelize."})]})]})]})},I=(s(74),s.p+"static/media/getStarted.f92bf014.gif"),R=s.p+"static/media/newLogin.c676edcf.gif";var T=[{id:"FactCheck",category:"Journalism",title:"Google Fact Checker",banner:"https://github.com/aarondig/factCheck/blob/main/assets/banner.png?raw=true",component:S,icon:"fa-search",shadow:"#0073ff"},{id:"TravelPins",category:"Travel",title:"Travel Pins",component:function(){return Object(c.jsxs)("div",{id:"TravelPins",children:[Object(c.jsxs)("a",{className:"demoButton",href:"https://travel-pins.herokuapp.com",children:[Object(c.jsx)("div",{className:"buttonTextHidden",children:"DEMO"}),Object(c.jsx)("div",{className:"buttonContent",children:Object(c.jsx)("div",{className:"buttonText",children:"DEMO"})})]}),Object(c.jsxs)("div",{className:"projectWrap",children:[Object(c.jsx)("div",{className:"labelC",children:Object(c.jsx)("h1",{className:"label",children:"DESCRIPTION"})}),Object(c.jsxs)("div",{className:"textC",children:[Object(c.jsx)("p",{className:"description",children:"A social media application for world travelers that allows users to post photos, mark countries they've traveled to, and follow friends."}),Object(c.jsx)("p",{className:"description",children:"This project was conducted with two other team members."}),Object(c.jsx)("p",{className:"description",children:"Role: Frontend Developer/Designer"})]}),Object(c.jsxs)("div",{className:"techUsed",children:[Object(c.jsxs)("div",{className:"listCol",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{class:"fab fa-react navicon"})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("p",{className:"listName",children:"REACT"})})]}),Object(c.jsxs)("div",{className:"row listRow",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{class:"fab fa-js navicon"})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("p",{className:"listName",children:"JAVASCRIPT"})})]}),Object(c.jsxs)("div",{className:"row listRow",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{class:"fab fa-css3-alt navicon"})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("p",{className:"listName",children:"CSS"})})]})]}),Object(c.jsx)("div",{className:"listExplain",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("p",{className:"pTitle",children:"Frontend Dependencies"}),Object(c.jsx)("a",{className:"pListLink",href:"https://reactjs.org",children:"React.js"}),Object(c.jsx)("a",{className:"pListLink",href:"https://docs.mapbox.com/help/glossary/mapbox-gl/",children:"Mapbox-GL"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.react-spring.io",children:"React-Spring"}),Object(c.jsx)("a",{className:"pListLink",href:"https://react-icons.github.io/react-icons/",children:"React-Icons"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/react-dom",children:"React-Dom"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/web-vitals",children:"Web-Vitals"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/re-carousel",children:"Re-Carousel"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/react-scripts",children:"React-Scripts"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/react-swipeable",children:"React-Swipeable"}),Object(c.jsx)("a",{className:"pListLink",href:"https://reactrouter.com/web/guides/quick-start",children:"React-Router-Dom"}),Object(c.jsx)("a",{className:"pListLink",href:"react-transition-group",children:"React-Transition-Group"})]}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("p",{className:"pTitle",children:"Backend Dependencies"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/axios",children:"Axios"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/bcrypt",children:"Bcrypt.js"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/mysql2",children:"MySQL2"}),Object(c.jsx)("a",{className:"pListLink",href:"https://expressjs.com",children:"Express.js"}),Object(c.jsx)("a",{className:"pListLink",href:"https://cloudinary.com",children:"Cloudinary"}),Object(c.jsx)("a",{className:"pListLink",href:"http://www.passportjs.org",children:"Passport.js"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/passport-local",children:"Passport-Local"}),Object(c.jsx)("a",{className:"pListLink",href:"https://sequelize.org",children:"Sequelize ORM"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/express-session",children:"Express-Session"}),Object(c.jsx)("a",{className:"pListLink",href:"https://www.npmjs.com/package/if-env",children:"if-env"})]})]})})]}),Object(c.jsx)("div",{className:"labelC",children:Object(c.jsx)("h1",{className:"label",children:"Features"})}),Object(c.jsxs)("div",{className:"textC",children:[Object(c.jsx)("p",{className:"description",children:'Do you love to travel? This app is for you. In this app, you create your own personalized account. You can view all of the countries in the world with a click. If you have traveled to a country, you can mark the country as "traveled." The country will highlight blue to show that you have traveled to the country.'}),Object(c.jsx)("p",{className:"description",children:"You can upload your photos for each country as well! You simply click on the country you want to upload a photo to and then press the plus button to upload. This is an opportunity to keep a photo journal of your travels and share your pictures with others."}),Object(c.jsx)("p",{className:"description",children:"You can find other travelers as well on the app. You can search their username and follow them. Once you follow them, you can see photos about their travels on your newsfeed."}),Object(c.jsx)("p",{className:"description",children:"Lastly, you have your own profile account. You can see how many countries you have been to, how many followers you have, how many users follow you, and your photos."}),Object(c.jsx)("h1",{className:"label",children:"User Stories"}),Object(c.jsx)("h2",{children:"Get Started"}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{className:"descriptionImg",src:I})}),Object(c.jsx)("h2",{children:"Create an account or login."}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{className:"descriptionImg",src:R})}),Object(c.jsx)("h2",{children:"Find a country that has been visited."}),Object(c.jsx)("div",{className:"imgContainer",children:Object(c.jsx)("img",{className:"descriptionImg",src:"https://github.com/anusontarangkul/travel-pins/blob/main/images/findCountry.gif?raw=true"})})]})]})]})},icon:"fa-map-marker-alt",shadow:"#FBB034"}];s(42);function E(e){var t=e.id,s=e.handleClick,a=e.scroll,i=T.find((function(e){return e.id===t})),n=i.category,r=i.title,l=i.component,o=i.icon,j={transform:"translate3d(0, ".concat(2*a,"px, 0)")},h=l;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,delay:.1},style:{pointerEvents:"auto"},className:"overlay",children:Object(c.jsx)(L.b,{to:"/",onClick:function(){return s()}})}),Object(c.jsx)("div",{className:"project-content-container open",style:j,children:Object(c.jsxs)(d.c.div,{className:"project-content",layoutId:"project-container-".concat(t),children:[Object(c.jsx)(d.c.div,{className:"project-image-container",layoutId:"project-image-container-".concat(t),children:Object(c.jsx)(L.b,{to:"/",onClick:function(){return s()},children:Object(c.jsx)("div",{className:"project-thumbnail thumbnail-".concat(t),children:Object(c.jsx)("i",{class:"fas ".concat(o," coverIcon open")})})})}),Object(c.jsxs)(d.c.div,{className:"title-container",layoutId:"title-container-".concat(t),children:[Object(c.jsx)("span",{className:"category",children:n}),Object(c.jsx)("h2",{className:"projectTitle",children:r})]}),Object(c.jsx)(d.c.div,{className:"content-container",animate:!0,children:Object(c.jsx)(h,{})})]})})]})}function M(e){var t=e.id,s=e.title,a=e.category,i=(e.banner,e.icon),n=e.shadow,r=e.handleClick,l=e.click?{boxShadow:"none"}:{boxShadow:"0 10px 25px ".concat(n,"5e")};return Object(c.jsxs)("li",{className:"project",id:"project".concat(t),children:[Object(c.jsx)("div",{className:"project-content-container",style:l,children:Object(c.jsxs)(d.c.div,{className:"project-content",layoutId:"project-container-".concat(t),children:[Object(c.jsx)(d.c.div,{className:"project-image-container",layoutId:"project-image-container-".concat(t),children:Object(c.jsx)("div",{className:"project-thumbnail thumbnail-".concat(t),children:Object(c.jsx)("i",{class:"fas ".concat(i," coverIcon")})})}),Object(c.jsxs)(d.c.div,{className:"title-container",layoutId:"title-container-".concat(t),children:[Object(c.jsx)("span",{className:"category",children:a}),Object(c.jsx)("h2",{className:"projectTitle",children:s})]})]})}),Object(c.jsx)(L.b,{to:t,className:"project-open-link",onClick:function(){return r()}})]})}function z(e){var t=e.selectedId,s=e.handleClick,a=e.click;return Object(c.jsx)("ul",{className:"project-list",children:T.map((function(e){return Object(c.jsx)(M,Object(b.a)(Object(b.a)({},e),{},{isSelected:e.id===t,handleClick:s,click:a}),e.id)}))})}function A(){function e(){return{lock:function(){document.body.style.overflow="hidden"},unlock:function(){document.body.style.overflow="scroll"}}}var t=Object(a.useState)(e()),s=Object(l.a)(t,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){i(e())}),[]),c}window.webkitRequestAnimationFrame||window.requestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;function D(){var e=0,t=0,s=Object(a.useState)(),c=Object(l.a)(s,2),i=c[0],n=c[1];return Object(a.useEffect)((function(){function s(){e=window.scrollY,t+=.1*(e-t),Math.round(100*t)/100,n(e)}return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]),i}var F=function(e){var t=e.match,s=A(),i=Object(a.useState)(),n=Object(l.a)(i,2),r=n[0],o=n[1],j=function(){o(!r)};Object(a.useEffect)((function(){r&&s.lock(),!r&&s.unlock()}),[r]);var h=t.params.id;Object(a.useEffect)((function(){"#/aaronDiggdon/"+h===window.location.hash&&o(!0)}),[]);var b=D();return Object(c.jsxs)(d.b,{type:"crossfade",children:[Object(c.jsx)(z,{selectedId:h,handleClick:j,click:r}),Object(c.jsx)(d.a,{children:h&&Object(c.jsx)(E,{id:h,handleClick:j,scroll:b},"item")})]})};var H=function(e){var t=e.scroll,s=o();return Math.pow(t/s.height*2-.2,2),Object(c.jsxs)("div",{id:"projects",children:[Object(c.jsx)("div",{className:"c",children:Object(c.jsx)(L.a,{basename:"/aaronDiggdon",children:Object(c.jsx)(C.a,{exact:!0,path:["/:id","/"],component:F})})}),Object(c.jsx)("div",{className:"leftNav",children:Object(c.jsx)("a",{className:"githubLink",href:"https://github.com/aarondig",target:"_blank",children:Object(c.jsx)("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"85%",height:"85%",viewBox:"0 0 32 32",children:Object(c.jsx)("path",{className:"iconColor",fill:"#ebedee",d:"M6.368 15.671H3.715a.124.124 0 0 0-.124.124v1.296c0 .069.055.124.124.124H4.75v1.612s-.232.078-.874.078c-.758 0-1.817-.278-1.817-2.604 0-2.328 1.102-2.634 2.137-2.634.896 0 1.282.157 1.527.234.077.024.147-.053.147-.122l.296-1.253a.117.117 0 0 0-.047-.097c-.1-.07-.708-.411-2.245-.411-1.771 0-3.588.753-3.588 4.375s2.079 4.16 3.832 4.16c1.451 0 2.332-.62 2.332-.62.036-.02.04-.07.04-.093v-4.045a.125.125 0 0 0-.124-.124zm13.415-3.344H18.29a.124.124 0 0 0-.124.124v2.886h-2.328v-2.886a.124.124 0 0 0-.123-.124h-1.494a.124.124 0 0 0-.122.124v7.814c0 .069.055.125.122.125h1.494a.124.124 0 0 0 .123-.125v-3.342h2.328l-.005 3.342c0 .069.055.124.122.124h1.494a.122.122 0 0 0 .122-.124l.005-7.815a.122.122 0 0 0-.122-.124zm-11.631.177c-.532 0-.963.435-.963.972s.431.973.963.973.963-.435.963-.973a.967.967 0 0 0-.963-.972zm.857 2.507a.124.124 0 0 0-.122-.125H7.398c-.07 0-.129.07-.129.139v5.168c0 .151.094.197.217.197h1.342c.146 0 .185-.072.185-.2l-.001-1.572-.001-3.607zm16.555-.113h-1.482a.123.123 0 0 0-.122.125v3.831s-.376.277-.912.277c-.534 0-.677-.242-.677-.767v-3.342a.125.125 0 0 0-.123-.125h-1.503a.123.123 0 0 0-.123.125v3.595c0 1.555.866 1.935 2.057 1.935.977 0 1.767-.54 1.767-.54s.037.284.055.317c.016.034.06.068.108.068h.952a.124.124 0 0 0 .123-.125l.004-5.25a.13.13 0 0 0-.126-.124zm4.058-.176c-.842 0-1.414.376-1.414.376v-2.646a.124.124 0 0 0-.122-.124h-1.499a.124.124 0 0 0-.122.124l-.004 7.815c0 .069.056.124.123.124h1.044c.046 0 .081-.024.108-.066s.063-.361.063-.361.611.581 1.771.581c1.362 0 2.142-.691 2.142-3.101 0-2.407-1.247-2.722-2.089-2.722zm-.584 4.404c-.514-.016-.862-.249-.862-.249v-2.476s.344-.211.767-.249c.534-.047 1.05.114 1.05 1.387-.003 1.342-.235 1.607-.954 1.586zm-15.714-.029c-.066 0-.233.026-.405.026-.549 0-.737-.256-.737-.587v-2.198h1.121a.123.123 0 0 0 .123-.125v-1.204a.123.123 0 0 0-.123-.125h-1.121l-.002-1.48c0-.056-.03-.084-.094-.084H10.56c-.059 0-.092.026-.092.083v1.529s-.765.185-.817.2-.088.063-.088.119v.962c0 .069.056.125.123.125h.782v2.312c0 1.717 1.205 1.886 2.018 1.886.371 0 .815-.121.889-.147.045-.016.07-.062.07-.111l.001-1.057a.126.126 0 0 0-.122-.125z"})})})})]})};s(80);var P=function(e){return Object(c.jsx)("div",{id:"banner",children:Object(c.jsxs)("div",{className:"bannerC",children:[Object(c.jsx)("div",{className:"vertLine"}),Object(c.jsx)("h1",{className:"bannerTitle",children:"WELCOME"}),Object(c.jsx)("p",{className:"bannerTitle",children:"My name is Aaron. I'm a Freelance Web Developer"})]})})};var W=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),s=(t[0],t[1]),i=o(),n=Object(a.useRef)(),r=Object(a.useRef)(),d=Object(a.useRef)(),j=Object(a.useRef)();i.width,Object(a.useEffect)((function(){document.body.style.height="".concat(r.current.clientHeight,"px")}),[i.height]);var b=D();return console.log(b),Object(a.useEffect)((function(){var e=d.current.clientHeight;d.current.style.transform="translate3d(0, -".concat(b,"px, 0)"),b>e&&(d.current.style.transform="translate3d(0, -".concat(e,"px, 0)"),j.current.style.transform="translate3d(0, -".concat(b,"px, 0)")),b>e&&(j.current.style.transform="translate3d(0, -".concat(e,"px, 0) skewY(0deg)")),s(b-i.height-e)}),[b]),Object(c.jsx)("div",{ref:n,className:"App",children:Object(c.jsxs)(m,{children:[Object(c.jsxs)("div",{ref:r,className:"scroll",children:[Object(c.jsxs)("div",{id:"scrollable",ref:d,children:[Object(c.jsx)(g,{size:i,scroll:b}),Object(c.jsx)(P,{}),Object(c.jsx)(H,{size:i,scroll:b})]}),Object(c.jsx)("div",{className:"nothing"}),Object(c.jsx)("div",{id:"fixed",ref:j,children:Object(c.jsx)(h,{size:i,scroll:b})})]}),Object(c.jsx)(k,{size:i})]})})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.c21e78da.chunk.js.map