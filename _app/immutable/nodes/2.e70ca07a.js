import{s as st,n as nt,r as ot}from"../chunks/scheduler.e108d1fd.js";import{S as ft,i as vt,g as _,s as w,m as n,h as d,y as $e,c as b,j as V,n as s,f as l,k as J,a as u,x as o,z as I,A as K,B as F,o as P}from"../chunks/index.54605d54.js";function _t(p){let h,f=(p[10]/p[12]*100).toFixed(2)+"",m,v,a=(1/p[9]*100).toFixed(2)+"",y,k;return{c(){h=n("The next hour worked would increase your monthly gains by "),m=n(f),v=n("% vs the expected "),y=n(a),k=n("%")},l(i){h=s(i,"The next hour worked would increase your monthly gains by "),m=s(i,f),v=s(i,"% vs the expected "),y=s(i,a),k=s(i,"%")},m(i,r){u(i,h,r),u(i,m,r),u(i,v,r),u(i,y,r),u(i,k,r)},p(i,r){r&5120&&f!==(f=(i[10]/i[12]*100).toFixed(2)+"")&&P(m,f),r&512&&a!==(a=(1/i[9]*100).toFixed(2)+"")&&P(y,a)},d(i){i&&(l(h),l(m),l(v),l(y),l(k))}}}function dt(p){let h,f=(p[10]/p[12]*100).toFixed(2)+"",m,v,a=(1/p[9]*100).toFixed(2)+"",y,k;return{c(){h=n("The next hour worked would decrease your monthly losses by "),m=n(f),v=n("% vs the expected "),y=n(a),k=n("%")},l(i){h=s(i,"The next hour worked would decrease your monthly losses by "),m=s(i,f),v=s(i,"% vs the expected "),y=s(i,a),k=s(i,"%")},m(i,r){u(i,h,r),u(i,m,r),u(i,v,r),u(i,y,r),u(i,k,r)},p(i,r){r&5120&&f!==(f=(i[10]/i[12]*100).toFixed(2)+"")&&P(m,f),r&512&&a!==(a=(1/i[9]*100).toFixed(2)+"")&&P(y,a)},d(i){i&&(l(h),l(m),l(v),l(y),l(k))}}}function rt(p){var tt,lt,it,ut;let h,f="Money estimates",m,v,a,y,k,i=((tt=p[10])==null?void 0:tt.toFixed(2))+"",r,j,D,S,N,E,W,T,U,x,se,C,g,ee,te,R,re="Estimates (after tax):",ye,L,je,oe=((lt=p[8])==null?void 0:lt.toFixed(2))+"",he,me,O,Se,fe=((it=p[12])==null?void 0:it.toFixed(2))+"",ae,ke,Q,we,be,Ie,Fe,De,X,ce="Time estimates",Te,Y,We,q,Ee,Z,qe,z,Ve,$,ze,A,Me,c,Ae,B,Ce,H,Be,ve=((ut=p[11])==null?void 0:ut.toFixed(2))+"",He,Ge,_e=7*(24-p[4])+"",Pe,Je,Ne,G,Ke,de=(1/p[11]*100).toFixed(2)+"",Ue,Le,Oe,ge;function et(e,t){return e[12]<0?dt:_t}let xe=et(p),M=xe(p);return{c(){h=_("h4"),h.textContent=f,m=w(),v=_("div"),a=n("Hourly rate: "),y=_("input"),k=n(" ($"),r=n(i),j=n(` hourly after
	`),D=_("input"),S=n("% tax)"),N=w(),E=_("div"),W=n("Hours worked per week: "),T=_("input"),U=w(),x=_("div"),se=n("Monthly fixed costs: "),C=_("input"),g=w(),ee=_("hr"),te=w(),R=_("div"),R.textContent=re,ye=w(),L=_("div"),je=n("Monthly: $"),he=n(oe),me=w(),O=_("div"),Se=n("Margin: $"),ae=n(fe),ke=w(),Q=_("div"),M.c(),we=w(),be=_("hr"),Ie=w(),Fe=_("hr"),De=w(),X=_("h4"),X.textContent=ce,Te=w(),Y=_("div"),We=n("Daily fixed cost (sleeping): "),q=_("input"),Ee=w(),Z=_("div"),qe=n("Daily fixed cost (besides sleeping): "),z=_("input"),Ve=w(),$=_("div"),ze=n("Weekly fixed costs: "),A=_("input"),Me=w(),c=_("div"),Ae=n("Monthly fixed costs: "),B=_("input"),Ce=w(),H=_("div"),Be=n("Margin per week: "),He=n(ve),Ge=n("h (out of "),Pe=n(_e),Je=n(" hours awake)"),Ne=w(),G=_("div"),Ke=n("The next hour worked would reduce your weekly time left over by "),Ue=n(de),Le=n("%"),this.h()},l(e){h=d(e,"H4",{"data-svelte-h":!0}),$e(h)!=="svelte-anpxrv"&&(h.textContent=f),m=b(e),v=d(e,"DIV",{});var t=V(v);a=s(t,"Hourly rate: "),y=d(t,"INPUT",{type:!0}),k=s(t," ($"),r=s(t,i),j=s(t,` hourly after
	`),D=d(t,"INPUT",{type:!0}),S=s(t,"% tax)"),t.forEach(l),N=b(e),E=d(e,"DIV",{});var le=V(E);W=s(le,"Hours worked per week: "),T=d(le,"INPUT",{type:!0}),le.forEach(l),U=b(e),x=d(e,"DIV",{});var ie=V(x);se=s(ie,"Monthly fixed costs: "),C=d(ie,"INPUT",{type:!0}),ie.forEach(l),g=b(e),ee=d(e,"HR",{}),te=b(e),R=d(e,"DIV",{"data-svelte-h":!0}),$e(R)!=="svelte-6v4jw3"&&(R.textContent=re),ye=b(e),L=d(e,"DIV",{});var ue=V(L);je=s(ue,"Monthly: $"),he=s(ue,oe),ue.forEach(l),me=b(e),O=d(e,"DIV",{});var pe=V(O);Se=s(pe,"Margin: $"),ae=s(pe,fe),pe.forEach(l),ke=b(e),Q=d(e,"DIV",{});var pt=V(Q);M.l(pt),pt.forEach(l),we=b(e),be=d(e,"HR",{}),Ie=b(e),Fe=d(e,"HR",{}),De=b(e),X=d(e,"H4",{"data-svelte-h":!0}),$e(X)!=="svelte-89xt8o"&&(X.textContent=ce),Te=b(e),Y=d(e,"DIV",{});var Qe=V(Y);We=s(Qe,"Daily fixed cost (sleeping): "),q=d(Qe,"INPUT",{type:!0}),Qe.forEach(l),Ee=b(e),Z=d(e,"DIV",{});var Xe=V(Z);qe=s(Xe,"Daily fixed cost (besides sleeping): "),z=d(Xe,"INPUT",{type:!0}),Xe.forEach(l),Ve=b(e),$=d(e,"DIV",{});var Ye=V($);ze=s(Ye,"Weekly fixed costs: "),A=d(Ye,"INPUT",{type:!0}),Ye.forEach(l),Me=b(e),c=d(e,"DIV",{});var Ze=V(c);Ae=s(Ze,"Monthly fixed costs: "),B=d(Ze,"INPUT",{type:!0}),Ze.forEach(l),Ce=b(e),H=d(e,"DIV",{});var ne=V(H);Be=s(ne,"Margin per week: "),He=s(ne,ve),Ge=s(ne,"h (out of "),Pe=s(ne,_e),Je=s(ne," hours awake)"),ne.forEach(l),Ne=b(e),G=d(e,"DIV",{});var Re=V(G);Ke=s(Re,"The next hour worked would reduce your weekly time left over by "),Ue=s(Re,de),Le=s(Re,"%"),Re.forEach(l),this.h()},h(){J(y,"type","number"),J(D,"type","number"),J(T,"type","number"),J(C,"type","number"),J(q,"type","number"),J(z,"type","number"),J(A,"type","number"),J(B,"type","number")},m(e,t){u(e,h,t),u(e,m,t),u(e,v,t),o(v,a),o(v,y),I(y,p[0]),o(v,k),o(v,r),o(v,j),o(v,D),I(D,p[3]),o(v,S),u(e,N,t),u(e,E,t),o(E,W),o(E,T),I(T,p[1]),u(e,U,t),u(e,x,t),o(x,se),o(x,C),I(C,p[2]),u(e,g,t),u(e,ee,t),u(e,te,t),u(e,R,t),u(e,ye,t),u(e,L,t),o(L,je),o(L,he),u(e,me,t),u(e,O,t),o(O,Se),o(O,ae),u(e,ke,t),u(e,Q,t),M.m(Q,null),u(e,we,t),u(e,be,t),u(e,Ie,t),u(e,Fe,t),u(e,De,t),u(e,X,t),u(e,Te,t),u(e,Y,t),o(Y,We),o(Y,q),I(q,p[4]),u(e,Ee,t),u(e,Z,t),o(Z,qe),o(Z,z),I(z,p[5]),u(e,Ve,t),u(e,$,t),o($,ze),o($,A),I(A,p[6]),u(e,Me,t),u(e,c,t),o(c,Ae),o(c,B),I(B,p[7]),u(e,Ce,t),u(e,H,t),o(H,Be),o(H,He),o(H,Ge),o(H,Pe),o(H,Je),u(e,Ne,t),u(e,G,t),o(G,Ke),o(G,Ue),o(G,Le),Oe||(ge=[K(y,"input",p[15]),K(D,"input",p[16]),K(T,"input",p[17]),K(C,"input",p[18]),K(q,"input",p[19]),K(z,"input",p[20]),K(A,"input",p[21]),K(B,"input",p[22])],Oe=!0)},p(e,[t]){var le,ie,ue,pe;t&1&&F(y.value)!==e[0]&&I(y,e[0]),t&1024&&i!==(i=((le=e[10])==null?void 0:le.toFixed(2))+"")&&P(r,i),t&8&&F(D.value)!==e[3]&&I(D,e[3]),t&2&&F(T.value)!==e[1]&&I(T,e[1]),t&4&&F(C.value)!==e[2]&&I(C,e[2]),t&256&&oe!==(oe=((ie=e[8])==null?void 0:ie.toFixed(2))+"")&&P(he,oe),t&4096&&fe!==(fe=((ue=e[12])==null?void 0:ue.toFixed(2))+"")&&P(ae,fe),xe===(xe=et(e))&&M?M.p(e,t):(M.d(1),M=xe(e),M&&(M.c(),M.m(Q,null))),t&16&&F(q.value)!==e[4]&&I(q,e[4]),t&32&&F(z.value)!==e[5]&&I(z,e[5]),t&64&&F(A.value)!==e[6]&&I(A,e[6]),t&128&&F(B.value)!==e[7]&&I(B,e[7]),t&2048&&ve!==(ve=((pe=e[11])==null?void 0:pe.toFixed(2))+"")&&P(He,ve),t&16&&_e!==(_e=7*(24-e[4])+"")&&P(Pe,_e),t&2048&&de!==(de=(1/e[11]*100).toFixed(2)+"")&&P(Ue,de)},i:nt,o:nt,d(e){e&&(l(h),l(m),l(v),l(N),l(E),l(U),l(x),l(g),l(ee),l(te),l(R),l(ye),l(L),l(me),l(O),l(ke),l(Q),l(we),l(be),l(Ie),l(Fe),l(De),l(X),l(Te),l(Y),l(Ee),l(Z),l(Ve),l($),l(Me),l(c),l(Ce),l(H),l(Ne),l(G)),M.d(),Oe=!1,ot(ge)}}}function yt(p,h,f){let m,v,a,y,k,i,r,j=20,D=40,S=2e3,N=30,E=9,W=2,T=5+5+2,U=5;function x(){j=F(this.value),f(0,j)}function se(){N=F(this.value),f(3,N)}function C(){D=F(this.value),f(1,D)}function g(){S=F(this.value),f(2,S)}function ee(){E=F(this.value),f(4,E)}function te(){W=F(this.value),f(5,W)}function R(){T=F(this.value),f(6,T)}function re(){U=F(this.value),f(7,U)}return p.$$.update=()=>{p.$$.dirty&2&&f(9,m=52*D/12),p.$$.dirty&9&&f(10,v=j*(1-N/100)),p.$$.dirty&1536&&f(8,a=v*m),p.$$.dirty&260&&f(12,y=a-S),p.$$.dirty&48&&f(14,k=E+W),p.$$.dirty&66&&f(13,i=D+T),p.$$.dirty&24704&&f(11,r=(24-k-i/7-U/30)*7)},[j,D,S,N,E,W,T,U,a,m,v,r,y,i,k,x,se,C,g,ee,te,R,re]}class at extends ft{constructor(h){super(),vt(this,h,yt,rt,st,{})}}export{at as component};
