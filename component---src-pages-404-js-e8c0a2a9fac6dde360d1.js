(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(147);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Formare"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(154),s=a.n(c),u=function(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description,d=[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}];return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:d.concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})};u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Formare",description:"A modern, lightweight and simple CSS Framework for building web interfaces hassle-free.",author:"David Kurnia Kristiadi @dkk94"}}}}},152:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(146),s=function(e){e.siteTitle;return i.a.createElement("header",{className:"MainHeader"},i.a.createElement("div",{className:"Navbar Navbar--primary"},i.a.createElement("div",{className:"Container u-Flex u-Flex-row"},i.a.createElement(u,null),i.a.createElement(d,null))))},u=function(){return i.a.createElement("div",{className:"Navbar-block"},i.a.createElement(c.a,{to:"/",className:"u-FontSize-xlarge u-FontWeight-semibold u-Color-light"},"Formare"))},d=function(){return i.a.createElement("div",{className:"Navbar-block"},i.a.createElement("nav",{className:"Nav"}))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var m=s,p=function(){return i.a.createElement("footer",{className:"MainFooter"},"© ",(new Date).getFullYear(),", Built with love.. and lots of coffee.")},f=(a(153),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement("main",null,t),i.a.createElement(p,null))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-e8c0a2a9fac6dde360d1.js.map