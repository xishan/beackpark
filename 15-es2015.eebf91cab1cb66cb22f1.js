(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JLuJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var b=u("pMnS"),r=u("oBZk"),o=u("ZZ/e"),c=u("iInd"),a=u("SVse"),e=u("TSSN"),s=u("H+bZ"),p=u("kyOO");class g{constructor(l,n,u){this.api=l,this.http=n,this.languageService=u}ngOnInit(){console.log(this.getMenuData(0))}getMenuData(l){this.http.get(this.api.apiMenu+l).subscribe(l=>{this.cats=l.cats,this.items=l.items},l=>{console.log(l)})}}var m=u("IheW"),h=t.pb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"img",[["src","../../assets/imgs/na.jpg"]],null,null,null,null,null))],null,null)}function k(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.vb(2,"",n.component.api.apiStor,"",n.parent.context.$implicit.cat_image,""))}))}function q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Ib(1,null,[" "," "])),t.Fb(2,1)],null,(function(l,n){var u=t.Jb(n,1,0,l(n,2,0,t.Db(n.parent.parent,0),n.parent.context.$implicit.caption_en));l(n,1,0,u)}))}function x(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(1,null,[" ",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.caption_ar)}))}function B(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,18,"ion-col",[["size-lg","4"],["size-md","6"],["size-sm","12"],["size-xs","12"]],null,null,null,r.D,r.h)),t.qb(1,49152,null,0,o.s,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,16,"ion-card",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Db(l,4).onClick()&&i),"click"===n&&(i=!1!==t.Db(l,5).onClick(u)&&i),i}),r.C,r.d)),t.qb(3,49152,null,0,o.l,[t.h,t.k,t.x],{color:[0,"color"]},null),t.qb(4,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.qb(5,737280,null,0,o.Jb,[a.g,o.Gb,t.k,c.m,[2,c.n]],null,null),(l()(),t.gb(16777216,null,0,1,null,f)),t.qb(7,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,k)),t.qb(9,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,0,8,"ion-card-content",[["class","ion-text-center"],["style","margin: 0px; padding: 5px;"]],null,null,null,r.z,r.e)),t.qb(11,49152,null,0,o.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(12,0,null,0,6,"h1",[],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,5,"span",[],null,null,null,null,null)),t.qb(14,16384,null,0,a.l,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.gb(16777216,null,null,1,null,q)),t.qb(16,278528,null,0,a.m,[t.M,t.J,a.l],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(18,278528,null,0,a.m,[t.M,t.J,a.l],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,4,0,t.vb(1,"/tabs/tab1/",n.context.$implicit.id,"")),l(n,5,0),l(n,7,0,null==n.context.$implicit.cat_image),l(n,9,0,null!=n.context.$implicit.cat_image),l(n,14,0,u.languageService.selected),l(n,16,0,"en"),l(n,18,0,"ar")}),null)}function d(l){return t.Kb(0,[t.Eb(0,a.p,[]),(l()(),t.rb(1,0,null,null,7,"ion-header",[],null,null,null,r.G,r.k)),t.qb(2,49152,null,0,o.A,[t.h,t.k,t.x],null,null),(l()(),t.rb(3,0,null,0,5,"ion-toolbar",[["color","primary"]],null,null,null,r.R,r.v)),t.qb(4,49152,null,0,o.Bb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(5,0,null,0,3,"ion-title",[],null,null,null,r.Q,r.u)),t.qb(6,49152,null,0,o.zb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(7,0,[" "," "])),t.Eb(131072,e.i,[e.j,t.h]),(l()(),t.rb(9,0,null,null,5,"ion-content",[["color","dark"]],null,null,null,r.E,r.i)),t.qb(10,49152,null,0,o.t,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(11,0,null,0,3,"ion-row",[],null,null,null,r.M,r.q)),t.qb(12,49152,null,0,o.ib,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,B)),t.qb(14,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,10,0,"dark"),l(n,14,0,u.cats)}),(function(l,n){l(n,7,0,t.Jb(n,7,0,t.Db(n,8).transform("TABS.menu")))}))}function v(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-tab1",[],null,null,null,d,h)),t.qb(1,114688,null,0,g,[s.a,m.c,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=t.nb("app-tab1",g,v,{},{},[]),w=u("s7LF");u.d(n,"Tab1PageModuleNgFactory",(function(){return J}));var J=t.ob(i,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[b.a,S]],[3,t.j],t.v]),t.Bb(4608,a.k,a.j,[t.s,[2,a.u]]),t.Bb(4608,o.b,o.b,[t.x,t.g]),t.Bb(4608,o.Fb,o.Fb,[o.b,t.j,t.p]),t.Bb(4608,o.Ib,o.Ib,[o.b,t.j,t.p]),t.Bb(4608,w.c,w.c,[]),t.Bb(1073742336,a.b,a.b,[]),t.Bb(1073742336,o.Db,o.Db,[]),t.Bb(1073742336,w.b,w.b,[]),t.Bb(1073742336,w.a,w.a,[]),t.Bb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Bb(1073742336,e.g,e.g,[]),t.Bb(1073742336,i,i,[]),t.Bb(1024,c.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);