(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{46:function(e,t,a){e.exports=a(60)},51:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(9),c=a.n(n),l=(a(51),a(80)),i=a(85),s=["#419ed5","#28BDD7","#003399","#00308F","#000080","#084890","#082567","#1d1160","#002244"],m=["#F08080","#F05361","#D03058","#E25822","#800000","#FF4500","#c80815","#800000","#660000"],u=["#4FFFB0","#32de84","#66FF00","#7FFF00","#00563B","#1B4D3E","#556B2F","#004526","#006241"],F=["#F0E68C","#FFD700","#FFC72C","#FFFF00","#FF7F50","#FEBE10","#FFFDA1","#F4C430","#FF9933"],d=["#414345","#232526","#2e242c","#110c11","#0f0f0f","#050505","#28243A ","#342e2e","#131313"],p=["#df73ff","#9400d3","#9966cc","#8a2be2","#bf00ff","#8a2be2","#6f4685","#563c5c","#7851a9"],E=["red","blue","green","orange","pink","black","yellow","skyblue","purple"],f=a(81),g=a(82),b=Object(l.a)((function(e){return{root:{flexGrow:1},title:{display:"block",margin:"auto",background:"-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}})),h=o.a.memo((function(e){var t=b();return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,{style:{backgroundColor:"#121212",color:"#FFF"}},o.a.createElement(g.a,{className:t.title,variant:"h4",noWrap:!0},"UI Color Picker")))})),v=a(39),k=a(86),x=a(83),C=a(88),y=a(87),B=a(38);function w(e){return o.a.createElement(y.a,Object.assign({elevation:6,variant:"filled"},e))}var G=Object(l.a)({root:{margin:"1rem"},card:{height:"170px",backgroundColor:"transparent",width:150,borderRadius:"10px",border:"1px solid #FFF"},fontColor:{color:"#FFF",fontWeight:600,textAlign:"center",marginTop:"0.5rem"}}),N=o.a.memo((function(e){var t=e.color,a=Object(r.useState)(!1),n=Object(v.a)(a,2),c=n[0],l=n[1],i=G();return o.a.createElement(k.a,{className:i.root},o.a.createElement(B.CopyToClipboard,{text:t,onCopy:function(e){l(!0)}},o.a.createElement(x.a,{className:i.card,style:{backgroundColor:t}})),o.a.createElement("div",{className:i.fontColor},t.toUpperCase()),o.a.createElement(C.a,{open:c,autoHideDuration:500,onClose:function(e,t){"clickaway"!==t&&l(!1)}},o.a.createElement(w,{severity:"success"},"Copied! ",t.toUpperCase())))})),j=a(84),O=a(89),A=Object(l.a)({section:{padding:"3rem 1rem",margin:"auto"},headerText:{color:"#FFF",fontWeight:600}});var D=function(e){var t=e.colorGroup,a=e.colors,r=A();return o.a.createElement("div",{className:r.section},o.a.createElement(g.a,{variant:"h5",display:"block",className:r.headerText},"Something ".concat(t,"?")),o.a.createElement(j.a,{container:!0},a.map((function(e){return o.a.createElement(N,{key:Object(O.a)(),color:e})}))))},S=(a(59),Object(l.a)({root:{color:"#FFF",textAlign:"center",padding:"2rem"}}));var T=function(){var e=S();return o.a.createElement("footer",{className:e.root},o.a.createElement(g.a,{style:{textAlign:"center",fontSize:"16px",marginTop:"1rem"}},"All Rights Reserved"),o.a.createElement(g.a,{style:{textAlign:"center",fontSize:"16px"}},"Copyright \xa9 ",o.a.createElement("span",{style:{color:"orange"}}," Achal Shah")))},W=Object(l.a)({root:{minHeight:"100vh",minWidth:"100%"},divline:{height:"64px"},headerText:{color:"#FFF",fontWeight:600}});var R=function(){var e=W();return o.a.createElement("div",{className:e.root,style:{backgroundColor:"#121212"}},o.a.createElement(h,null),o.a.createElement(i.a,{maxWidth:"lg"},o.a.createElement("div",{className:e.divline}),o.a.createElement(D,{colorGroup:"Red",colors:m}),o.a.createElement(D,{colorGroup:"Blue",colors:s}),o.a.createElement(D,{colorGroup:"Green",colors:u}),o.a.createElement(D,{colorGroup:"Yellow",colors:F}),o.a.createElement(D,{colorGroup:"Purple",colors:p}),o.a.createElement(D,{colorGroup:"Black",colors:d}),o.a.createElement(D,{colorGroup:"Defaults",colors:E})),o.a.createElement(T,null))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ae1ba450.chunk.js.map