"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9777],{9777:(F,m,i)=>{i.r(m),i.d(m,{CrearTareaPage:()=>T});var o=i(4341),a=i(9299),u=i(177),e=i(4438),f=i(3804),d=i(6766);function h(t,s){1&t&&e.nrm(0,"ion-spinner",11)}let g=(()=>{var t;class s{constructor(r,n,c,p){this.fb=r,this.tareasService=n,this.router=c,this.route=p}ngOnInit(){this.route.queryParams.subscribe(r=>{this.id_curso=r.id_curso,this.id_seccion=r.id_seccion}),this.tareaForm=this.fb.group({tituloTarea:["",o.k0.required],descripcionTarea:["",o.k0.required],puntaje:["",[o.k0.required,o.k0.pattern(/^\d*\.?\d+$/)]],fechaLimite:["",o.k0.required]})}crearTarea(){if(this.tareaForm.invalid)return;let r=this.tareaForm.value;r.id_curso=this.id_curso,r.id_seccion=this.id_seccion,r.fechaLimite&&(r.fechaLimite=r.fechaLimite.replace("T"," "),console.log("Fecha convertida:",r.fechaLimite),console.log(this.tareaForm.value)),this.tareasService.crearTarea(r).subscribe(n=>{console.log("Tarea creada:",n),this.router.navigate([`/docente/${this.id_curso}/${this.id_seccion}`])},n=>{console.error("Error al crear tarea:",n)})}}return(t=s).\u0275fac=function(r){return new(r||t)(e.rXU(o.ok),e.rXU(f.k),e.rXU(d.Ix),e.rXU(d.nX))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-crear-tarea-form"]],standalone:!0,features:[e.aNF],decls:29,vars:2,consts:[["loading",""],[3,"ngSubmit","formGroup"],["color","light",1,"card-custom"],["color","dark"],["type","text","formControlName","tituloTarea","label","T\xedtulo de la tarea","labelPlacement","floating","placeholder","Ingrese el titulo","errorText","* El titulo de la tarea es obligatorio."],["type","text","formControlName","descripcionTarea","label","Descripci\xf3n","labelPlacement","floating","placeholder","Ingrese descripcion","errorText","* La descripcion es obligatoria."],["formControlName","puntaje","label","Puntaje","type","number","step","any","placeholder","Ingrese puntaje","errorText","* El puntaje es obligatorio."],["formControlName","fechaLimite","type","date","value","2024-12-31","display-format","DD-MM-YYYY"],[2,"margin-top","20px"],[1,"ion-justify-content-around",2,"margin-top","20px"],["type","submit","expand","full","color","primary","shape","round",3,"disabled"],["name","dots"]],template:function(r,n){if(1&r){const c=e.RV6();e.j41(0,"ion-content")(1,"form",1),e.bIt("ngSubmit",function(){return e.eBV(c),e.Njj(n.crearTarea())}),e.j41(2,"ion-card",2)(3,"ion-header")(4,"ion-toolbar",3)(5,"ion-title"),e.EFF(6,"Detalles de la Tarea"),e.k0s()()(),e.j41(7,"ion-list")(8,"ion-item"),e.nrm(9,"ion-input",4),e.k0s(),e.j41(10,"ion-item"),e.nrm(11,"ion-input",5),e.k0s(),e.j41(12,"ion-item"),e.nrm(13,"ion-input",6),e.k0s()()(),e.j41(14,"ion-card",2)(15,"ion-header")(16,"ion-toolbar",3)(17,"ion-title"),e.EFF(18,"Fecha de Entrega"),e.k0s()()(),e.j41(19,"ion-list"),e.nrm(20,"ion-datetime",7),e.k0s()(),e.nrm(21,"div",8),e.j41(22,"ion-row",9)(23,"ion-col")(24,"ion-button",10),e.qex(25),e.EFF(26," Guardar "),e.bVm(),e.DNE(27,h,1,0,"ng-template",null,0,e.C5r),e.k0s()()()()()}2&r&&(e.R7$(),e.Y8G("formGroup",n.tareaForm),e.R7$(23),e.Y8G("disabled",n.tareaForm.invalid))},dependencies:[u.MD,a.A9,a.w2,a.hU,a.ln,a.nf,a.BC,a.ai,a.eU,a.b_,o.X1,o.qT,o.BC,o.cb,o.j4,o.JD,a.W9,a.uz,a.Jm,a.$w]}),s})();const C=()=>["/docente"];let T=(()=>{var t;class s{constructor(){}ngOnInit(){}}return(t=s).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-crear-tarea"]],standalone:!0,features:[e.aNF],decls:8,vars:4,consts:[[3,"translucent"],["slot","start"],[3,"defaultHref"],[1,"ion-padding",3,"fullscreen"]],template:function(r,n){1&r&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Crear Tarea"),e.k0s(),e.j41(4,"ion-buttons",1),e.nrm(5,"ion-back-button",2),e.k0s()()(),e.j41(6,"ion-content",3),e.nrm(7,"app-crear-tarea-form"),e.k0s()),2&r&&(e.Y8G("translucent",!0),e.R7$(5),e.Y8G("defaultHref",e.lJ4(3,C)),e.R7$(),e.Y8G("fullscreen",!0))},dependencies:[a.el,a.QW,a.W9,a.eU,a.BC,a.ai,u.MD,g],styles:[".custom-datetime[_ngcontent-%COMP%]{max-width:100%;width:100%}ion-item[_ngcontent-%COMP%]{--inner-padding-start: 10px;--inner-padding-end: 10px}"]}),s})()}}]);