(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0EQZ":function(e,t,i){"use strict";i.d(t,"a",function(){return l}),i.d(t,"b",function(){return c}),i.d(t,"c",function(){return h}),i.d(t,"d",function(){return d}),i.d(t,"e",function(){return u}),i.d(t,"f",function(){return b}),i.d(t,"g",function(){return a});var n=i("BBcS"),s=i("4krO"),r=i("oXA7"),o=i("fXoL");class c{}function a(e){return e&&"function"==typeof e.connect}class l extends c{constructor(e){super(),this._data=e}connect(){return Object(n.a)(this._data)?this._data:Object(s.a)(this._data)}disconnect(){}}class d{applyChanges(e,t,i,n,s){e.forEachOperation((e,n,r)=>{let o,c;if(null==e.previousIndex){const s=i(e,n,r);o=t.createEmbeddedView(s.templateRef,s.context,s.index),c=1}else null==r?(t.remove(n),c=3):(o=t.get(n),t.move(o,r),c=2);s&&s({context:null==o?void 0:o.context,operation:c,record:e})})}detach(){}}class u{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,t,i,n,s){e.forEachOperation((e,r,o)=>{let c,a;null==e.previousIndex?(c=this._insertView(()=>i(e,r,o),o,t,n(e)),a=c?1:0):null==o?(this._detachAndCacheView(r,t),a=3):(c=this._moveView(r,o,t,n(e)),a=2),s&&s({context:null==c?void 0:c.context,operation:a,record:e})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,i,n){const s=this._insertViewFromCache(t,i);if(s)return void(s.context.$implicit=n);const r=e();return i.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(e,t){const i=t.detach(e);this._maybeCacheView(i,t)}_moveView(e,t,i,n){const s=i.get(e);return i.move(s,t),s.context.$implicit=n,s}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const i=t.indexOf(e);-1===i?e.destroy():t.remove(i)}}_insertViewFromCache(e,t){const i=this._viewCache.pop();return i&&t.insert(i,e),i||null}}class h{constructor(e=!1,t,i=!0){this._multiple=e,this._emitChanges=i,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new r.a,t&&t.length&&(e?t.forEach(e=>this._markSelected(e)):this._markSelected(t[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...e){this._verifyValueAssignment(e),e.forEach(e=>this._markSelected(e)),this._emitChangeEvent()}deselect(...e){this._verifyValueAssignment(e),e.forEach(e=>this._unmarkSelected(e)),this._emitChangeEvent()}toggle(e){this.isSelected(e)?this.deselect(e):this.select(e)}clear(){this._unmarkAll(),this._emitChangeEvent()}isSelected(e){return this._selection.has(e)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){this.isSelected(e)||(this._multiple||this._unmarkAll(),this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}}const b=new o.s("_ViewRepeater")},"8iEs":function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("Jlqm"),s=i("EPzc"),r=i("g/MW"),o=i("xt23"),c=i("QoT1");function a(e,t=n.a){return i=()=>Object(c.a)(e,t),Object(s.b)((e,t)=>{let n=!1,s=null,c=null,a=!1;const l=()=>{if(null==c||c.unsubscribe(),c=null,n){n=!1;const e=s;s=null,t.next(e)}a&&t.complete()},d=()=>{c=null,a&&t.complete()};e.subscribe(new o.a(t,e=>{n=!0,s=e,c||Object(r.c)(i()).subscribe(c=new o.a(t,l,d))},()=>{a=!0,(!n||!c||c.closed)&&t.complete()}))});var i}},BBcS:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i("SIQg"),s=i("2QHy");function r(e){return!!e&&(e instanceof n.a||Object(s.a)(e.lift)&&Object(s.a)(e.subscribe))}},RNGU:function(e,t,i){"use strict";i.r(t),i.d(t,"RxdbdemoService",function(){return s}),i.d(t,"RxdbdemoComponent",function(){return D}),i.d(t,"RxdbdemoModule",function(){return X});var n=i("fXoL");let s=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=i("ofXK"),o=i("Wp6s"),c=i("bsgM"),a=i("MutI");function l(e,t){if(1&e){const e=n.Ub();n.Tb(0,"mat-list-item",2),n.Ob(1,"div",3),n.Tb(2,"div",4),n.xc(3),n.Tb(4,"div",5),n.Ob(5,"div",6),n.Sb(),n.Sb(),n.Tb(6,"div",7),n.Tb(7,"i",8),n.ac("click",function(){n.pc(e);const i=t.$implicit;return n.ec().editHero(i)}),n.Sb(),n.Tb(8,"i",9),n.ac("click",function(){n.pc(e);const i=t.$implicit;return n.ec().deleteHero(i)}),n.Sb(),n.Sb(),n.Sb()}if(2&e){const e=t.$implicit;n.Cb(1),n.sc("background-color",e.color),n.Cb(2),n.zc(" ",e.name," "),n.Cb(2),n.sc("width",e.hpPercent()+"%")}}let d=(()=>{class e{constructor(e){this.herodbService=e,this.emittedFirst=!1,this.editChange=new n.o,this.heroes$=this.herodbService.getHeroes()}set edit(e){console.log("editHero: "+e.name),this.editChange.emit(e)}editHero(e){this.edit=e}deleteHero(e){e.remove()}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(c.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["heroes-list"]],outputs:{editChange:"edit"},decls:3,vars:3,consts:[[1,"hero-list-component"],["class","listHero",4,"ngFor","ngForOf"],[1,"listHero"],[1,"color-box"],[1,"name"],[1,"life"],[1,"currentPercent"],[1,"actions"],["aria-hidden","true",1,"icon","ti-pencil","mr-2",3,"click"],["aria-hidden","true",1,"icon","ti-trash",3,"click"]],template:function(e,t){1&e&&(n.Tb(0,"mat-list",0),n.vc(1,l,9,5,"mat-list-item",1),n.fc(2,"async"),n.Sb()),2&e&&(n.Cb(1),n.jc("ngForOf",n.gc(2,1,t.heroes$)))},directives:[a.a,r.k,a.b],pipes:[r.b],styles:[".listHero[_ngcontent-%COMP%]{width:100%}.listHero[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%]{width:20px;height:20px;float:left;margin-right:11px;border-radius:2px;border:1px solid grey}.listHero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex:1}.listHero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .life[_ngcontent-%COMP%]{width:85%;height:4px;background-color:#e4e4e4}.listHero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .life[_ngcontent-%COMP%]   .currentPercent[_ngcontent-%COMP%]{height:100%;background-color:green}.listHero[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0}),e})();var u=i("mrSG"),h=i("3Pt+"),b=i("kmnG"),m=i("nLfN"),f=i("8LU1"),p=i("eX4W"),_=i("oXA7");i("KOvq"),i("8iEs"),i("bk9D");const g=Object(m.f)({passive:!0});let v=(()=>{class e{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return p.a;const t=Object(f.e)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const n=new _.a,s="cdk-text-field-autofilled",r=e=>{"cdk-text-field-autofill-start"!==e.animationName||t.classList.contains(s)?"cdk-text-field-autofill-end"===e.animationName&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>n.next({target:e.target,isAutofilled:!1}))):(t.classList.add(s),this._ngZone.run(()=>n.next({target:e.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",r,g),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:n,unlisten:()=>{t.removeEventListener("animationstart",r,g)}}),n}stopMonitoring(e){const t=Object(f.e)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return e.\u0275fac=function(t){return new(t||e)(n.Xb(m.a),n.Xb(n.B))},e.\u0275prov=Object(n.Jb)({factory:function(){return new e(Object(n.Xb)(m.a),Object(n.Xb)(n.B))},token:e,providedIn:"root"}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[m.b]]}),e})();var C=i("FKr1");const x=new n.s("MAT_INPUT_VALUE_ACCESSOR"),S=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let O=0;class w{constructor(e,t,i,n){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=i,this.ngControl=n}}const E=Object(C.t)(w);let T=(()=>{class e extends E{constructor(e,t,i,n,s,r,o,c,a,l){super(r,n,s,i),this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=c,this._formField=l,this._uid="mat-input-"+O++,this.focused=!1,this.stateChanges=new _.a,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Object(m.e)().has(e));const d=this._elementRef.nativeElement,u=d.nodeName.toLowerCase();this._inputValueAccessor=o||d,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&a.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",e=>{let t=e.target;t.value||t.selectionStart||t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===u,this._isTextarea="textarea"===u,this._isNativeSelect&&(this.controlType=d.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=Object(f.c)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=Object(f.c)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Object(m.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Object(f.c)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,t;const i=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(i!==this._previousPlaceholder){const e=this._elementRef.nativeElement;this._previousPlaceholder=i,i?e.setAttribute("placeholder",i):e.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){S.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.l),n.Nb(m.a),n.Nb(h.f,10),n.Nb(h.i,8),n.Nb(h.c,8),n.Nb(C.c),n.Nb(x,10),n.Nb(v),n.Nb(n.B),n.Nb(b.a,8))},e.\u0275dir=n.Ib({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(e,t){1&e&&n.ac("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(n.Wb("disabled",t.disabled)("required",t.required),n.Db("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.errorState&&!t.empty)("aria-required",t.required),n.Fb("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[n.Bb([{provide:b.c,useExisting:e}]),n.zb,n.Ab]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({providers:[C.c],imports:[[y,b.d,C.f],y,b.d]}),e})();var M=i("bTqV");const j=["input"];function I(e,t){if(1&e){const e=n.Ub();n.Tb(0,"form",1,2),n.ac("submit",function(){n.pc(e);const t=n.nc(1);return n.ec().submit(t.value)}),n.Tb(2,"mat-form-field"),n.Ob(3,"input",3,4),n.Sb(),n.Ob(5,"br"),n.Tb(6,"mat-form-field"),n.Ob(7,"input",5),n.Sb(),n.Ob(8,"br"),n.Tb(9,"button",6),n.xc(10,"insert"),n.Sb(),n.Sb()}if(2&e){const e=n.ec();n.Cb(3),n.jc("ngModel",e.tempDoc.name)("autofocus",!0),n.Cb(4),n.jc("ngModel",e.tempDoc.color)}}let P=(()=>{class e{constructor(e){this.herodbService=e,this.reset()}reset(){this.tempDoc=this.herodbService.heroCollection.newDocument({maxHP:900*Math.random()+100})}submit(e){return Object(u.a)(this,void 0,void 0,function*(){this.tempDoc.name=e.name,this.tempDoc.color=e.color;try{yield this.tempDoc.save(),this.reset()}catch(t){throw alert("Error: Please check console"),console.error("hero-insert.submit(): error:"),t}this.inputfield.nativeElement.focus()})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(c.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["hero-insert"]],viewQuery:function(e,t){if(1&e&&n.Bc(j,1),2&e){let e;n.mc(e=n.bc())&&(t.inputfield=e.first)}},decls:1,vars:1,consts:[["autocomplete","off","class","hero-insert-component",3,"submit",4,"ngIf"],["autocomplete","off",1,"hero-insert-component",3,"submit"],["form","ngForm"],["matInput","","name","name","placeholder","Name",3,"ngModel","autofocus"],["input",""],["matInput","","name","color","placeholder","Color",3,"ngModel"],["mat-raised-button","","color","primary"]],template:function(e,t){1&e&&n.vc(0,I,11,3,"form",0),2&e&&n.jc("ngIf",t.tempDoc)},directives:[r.l,h.l,h.h,h.i,b.b,T,h.b,h.g,h.j,M.a],styles:["hero-insert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], hero-insert[_ngcontent-%COMP%]   mat-input[_ngcontent-%COMP%]{border-radius:4px;width:100%}hero-insert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px!important}"],changeDetection:0}),e})();var N=i("r9Bt");function V(e,t){if(1&e){const e=n.Ub();n.Tb(0,"div",8),n.Tb(1,"h4"),n.xc(2,"Warning:"),n.Sb(),n.Tb(3,"p"),n.xc(4," Someone else has "),n.Tb(5,"b"),n.xc(6,"changed"),n.Sb(),n.xc(7," this document. If you click save, you will overwrite the changes. "),n.Sb(),n.Tb(8,"button",9),n.ac("click",function(){return n.pc(e),n.ec(2).resync()}),n.xc(9,"resync"),n.Sb(),n.Sb()}}function A(e,t){1&e&&(n.Tb(0,"div",10),n.Tb(1,"h4"),n.xc(2,"Error:"),n.Sb(),n.Tb(3,"p"),n.xc(4," Someone else has "),n.Tb(5,"b"),n.xc(6,"deleted"),n.Sb(),n.xc(7," this document. You can not save anymore. "),n.Sb(),n.Sb())}function H(e,t){if(1&e){const e=n.Ub();n.Tb(0,"button",11),n.ac("click",function(){return n.pc(e),n.ec(2).submit()}),n.xc(1," submit "),n.Sb()}}function R(e,t){if(1&e){const e=n.Ub();n.Tb(0,"mat-card",1),n.Tb(1,"mat-card-subtitle"),n.xc(2,"Edit"),n.Sb(),n.vc(3,V,10,0,"div",2),n.vc(4,A,8,0,"div",3),n.fc(5,"async"),n.Tb(6,"h5"),n.Ob(7,"div",4),n.xc(8),n.Sb(),n.Tb(9,"mat-form-field"),n.xc(10," HP: "),n.Tb(11,"input",5),n.ac("ngModelChange",function(t){return n.pc(e),n.ec().formValue=t}),n.Sb(),n.Sb(),n.Ob(12,"br"),n.Tb(13,"button",6),n.ac("click",function(){return n.pc(e),n.ec().cancel()}),n.xc(14," cancel "),n.Sb(),n.vc(15,H,2,0,"button",7),n.fc(16,"async"),n.Sb()}if(2&e){const e=n.ec();n.Cb(3),n.jc("ngIf",!e.synced),n.Cb(1),n.jc("ngIf",n.gc(5,8,e.hero.deleted$)),n.Cb(3),n.sc("background-color",e.hero.color),n.Cb(1),n.zc(" ",e.hero.name," "),n.Cb(3),n.jc("ngModel",e.formValue)("max",e.hero.maxHP),n.Cb(4),n.jc("ngIf",!n.gc(16,10,e.hero.deleted$))}}let B=(()=>{class e{constructor(e){this._cdr=e,this.done=new n.o,this.synced=!0,this.formValue=0,this.subs=[],this.synced=!0}ngOnInit(){this.formValue=this.hero.hp,this.subs.push(this.hero.$.pipe(Object(N.a)(1)).subscribe(()=>{this.synced=!1,this._cdr.detectChanges()}))}submit(){return Object(u.a)(this,void 0,void 0,function*(){yield this.hero.atomicSet("hp",this.formValue),this.done.emit(!0)})}resync(){this.formValue=this.hero.hp,this.synced=!0,this._cdr.detectChanges()}cancel(){return Object(u.a)(this,void 0,void 0,function*(){this.done.emit(!1)})}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.h))},e.\u0275cmp=n.Hb({type:e,selectors:[["hero-edit"]],inputs:{hero:"hero"},outputs:{done:"done"},features:[n.Bb([])],decls:1,vars:1,consts:[["class","hero-edit-component",4,"ngIf"],[1,"hero-edit-component"],["class","alert alert-warning",4,"ngIf"],["class","alert deleted",4,"ngIf"],[1,"color-box"],["matInput","","type","number","min","0","name","hp",3,"ngModel","max","ngModelChange"],["mat-raised-button","","color","warn",1,"mr-2",3,"click"],["class","submitButton","mat-raised-button","","color","primary",3,"click",4,"ngIf"],[1,"alert","alert-warning"],["mat-raised-button","","color","primary",3,"click"],[1,"alert","deleted"],["mat-raised-button","","color","primary",1,"submitButton",3,"click"]],template:function(e,t){1&e&&n.vc(0,R,17,12,"mat-card",0),2&e&&n.jc("ngIf",t.hero)},directives:[r.l,o.a,o.d,b.b,T,h.k,h.b,h.g,h.j,M.a],pipes:[r.b],styles:["hero-edit[_ngcontent-%COMP%]{position:fixed;z-index:10;width:70%;margin-left:10%;min-height:200px;margin-top:-5px}hero-edit[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%]{width:20px;height:20px;float:left;margin-right:11px;border-radius:2px;border:1px solid grey}"]}),e})();function L(e,t){if(1&e){const e=n.Ub();n.Tb(0,"hero-edit",5),n.ac("heroChange",function(t){return n.pc(e),n.ec().editedHero=t})("done",function(){return n.pc(e),n.ec().editedHero=void 0}),n.Sb()}if(2&e){const e=n.ec();n.jc("hero",e.editedHero)}}let D=(()=>{class e{constructor(){}ngOnInit(){}editHero(e){this.editedHero=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Hb({type:e,selectors:[["lib-rxdbdemo"]],decls:15,vars:1,consts:[[1,"container"],["id","top-line"],[1,"content"],[3,"hero","heroChange","done",4,"ngIf"],[3,"edit"],[3,"hero","heroChange","done"]],template:function(e,t){1&e&&(n.Tb(0,"div",0),n.Ob(1,"div",1),n.Tb(2,"div",2),n.Tb(3,"h3"),n.xc(4,"Demo"),n.Sb(),n.vc(5,L,1,1,"hero-edit",3),n.Tb(6,"mat-card"),n.Tb(7,"mat-card-subtitle"),n.xc(8,"Heroes"),n.Sb(),n.Tb(9,"heroes-list",4),n.ac("edit",function(e){return t.editHero(e)}),n.Sb(),n.Sb(),n.Ob(10,"br"),n.Tb(11,"mat-card"),n.Tb(12,"mat-card-subtitle"),n.xc(13,"Add Hero"),n.Sb(),n.Ob(14,"hero-insert"),n.Sb(),n.Sb(),n.Sb()),2&e&&(n.Cb(5),n.jc("ngIf",t.editedHero))},directives:[r.l,o.a,o.d,d,P,B],encapsulation:2}),e})();i("R1ws");let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[C.f,r.c],C.f]}),e})();var F=i("tyNb");const U=[{path:"",component:D}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[r.c,F.h.forChild(U),h.d,M.b,o.c,a.c,b.d,k,q]]}),e})()},bk9D:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var n=i("EPzc"),s=i("xt23"),r=i("g/MW"),o=i("MRCm");function c(e){return Object(n.b)((t,i)=>{Object(r.c)(e).subscribe(new s.a(i,()=>i.complete(),o.a)),!i.closed&&t.subscribe(i)})}},r9Bt:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("dLTe");function s(e){return Object(n.a)((t,i)=>e<=i)}}}]);