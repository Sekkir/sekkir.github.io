"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1575],{1575:(O,a,s)=>{s.r(a),s.d(a,{HomeDocentePage:()=>P});var u=s(177),d=s(4341),t=s(9299),g=s(5079),_=s(5873),o=s(4438),m=s(2678),D=s(1551),E=s(6766);function h(c,l){if(1&c){const i=o.RV6();o.j41(0,"ion-item",9)(1,"ion-label")(2,"ion-chip",10),o.nrm(3,"ion-icon",11),o.j41(4,"ion-label"),o.EFF(5),o.k0s()(),o.j41(6,"ion-chip",10),o.nrm(7,"ion-icon",11),o.j41(8,"ion-label"),o.EFF(9),o.k0s()()(),o.j41(10,"ion-button",12),o.bIt("click",function(){const e=o.eBV(i).$implicit,r=o.XpG();return o.Njj(r.toDocente(e.id_curso,e.id_seccion))}),o.nrm(11,"ion-icon",13),o.k0s()()}if(2&c){const i=l.$implicit;o.R7$(5),o.JRh(i.nombre_corto),o.R7$(4),o.JRh(i.nombre_curso)}}let P=(()=>{var c;class l{constructor(n,e,r){this.cursosService=n,this.authService=e,this.router=r,this.secciones=[],this.nombre=[],this.cursos=[],(0,g.a)({libraryOutline:_.O3J,enterOutline:_.b9o})}ngOnInit(){}ionViewWillEnter(){this.loadCursos()}getDocenteId(){const n=localStorage.getItem("authToken");if(n){const e=this.authService.decodeToken(n);return console.log("id capturado"),console.log("Decoded Token:",e),e.id_usuario}return 0}loadCursos(){const n=this.getDocenteId();this.cursosService.getCursosByDocente(n).subscribe(e=>{console.log("Respuesta de cursos:",e),console.log("Valor de response.success:",e.success),e.success?(this.cursos=e.cursos,console.log("Cursos asignados:",e.cursos)):console.error("No se encontraron secciones para este docente.")},e=>{console.error("Error al cargar las secciones",e)})}toDocente(n,e){this.router.navigate(["/docente",n,e])}logout(){this.authService.logout(),this.cursos=[]}}return(c=l).\u0275fac=function(n){return new(n||c)(o.rXU(m.$),o.rXU(D.u),o.rXU(E.Ix))},c.\u0275cmp=o.VBU({type:c,selectors:[["app-home-docente"]],standalone:!0,features:[o.aNF],decls:16,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"click"],[1,"ion-padding",3,"fullscreen"],["color","light",1,"card-custom"],["color","dark"],[1,"scrollable-list"],["size","12",4,"ngFor","ngForOf"],["expand","block","color","danger",1,"ion-margin-top",3,"click"],["size","12"],["color","primary"],["name","library-outline"],["color","success","fill","outline","slot","end",3,"click"],["slot","icon-only","name","enter-outline"]],template:function(n,e){1&n&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o.EFF(3,"Bienvenido "),o.k0s(),o.j41(4,"ion-buttons",1)(5,"ion-back-button",2),o.bIt("click",function(){return e.logout()}),o.k0s()()()(),o.j41(6,"ion-content",3)(7,"ion-card",4)(8,"ion-header")(9,"ion-toolbar",5)(10,"ion-title"),o.EFF(11,"Clases disponibles"),o.k0s()()(),o.j41(12,"ion-list",6),o.DNE(13,h,12,2,"ion-item",7),o.k0s()(),o.j41(14,"ion-button",8),o.bIt("click",function(){return e.logout()}),o.EFF(15," Cerrar sesion "),o.k0s()()),2&n&&(o.Y8G("translucent",!0),o.R7$(6),o.Y8G("fullscreen",!0),o.R7$(7),o.Y8G("ngForOf",e.cursos))},dependencies:[t.ZB,t.he,t.iq,t.uz,t.nf,t.Jm,t.el,t.QW,t.b_,t.W9,t.eU,t.BC,t.ai,u.MD,u.Sq,d.YN],styles:[".scrollable-list[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}"]}),l})()}}]);