import{Ca as D,Ha as M,Ja as ee,K as k,L as G,La as v,N as Y,Na as F,P as V,Ra as o,Sa as s,Ta as u,U as S,V as g,Va as x,W as J,X as f,_a as a,ab as te,ca as K,cb as T,db as _,ha as ce,i as le,jb as he,la as X,ma as I,n as ue,qb as ie,t as de,wa as c,xa as d,yb as y,za as Q}from"./chunk-2VK2SVQV.js";import{a as m,b}from"./chunk-VHCA6YAO.js";var Ce=(()=>{class t{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}static{this.\u0275fac=function(n){return new(n||t)(d(Q),d(X))}}static{this.\u0275dir=f({type:t})}}return t})(),Je=(()=>{class t extends Ce{static{this.\u0275fac=(()=>{let i;return function(r){return(i||(i=ce(t)))(r||t)}})()}static{this.\u0275dir=f({type:t,features:[D]})}}return t})(),Ve=new V("");var Ke={provide:Ve,useExisting:G(()=>z),multi:!0};function Xe(){let t=ie()?ie().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Qe=new V(""),z=(()=>{class t extends Ce{constructor(i,n,r){super(i,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Xe())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}static{this.\u0275fac=function(n){return new(n||t)(d(Q),d(X),d(Qe,8))}}static{this.\u0275dir=f({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&x("input",function(h){return r._handleInput(h.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(h){return r._compositionEnd(h.target.value)})},features:[T([Ke]),D]})}}return t})();function C(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function De(t){return t!=null&&typeof t.length=="number"}var be=new V(""),Me=new V(""),et=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,p=class{static min(e){return tt(e)}static max(e){return it(e)}static required(e){return nt(e)}static requiredTrue(e){return rt(e)}static email(e){return ot(e)}static minLength(e){return st(e)}static maxLength(e){return at(e)}static pattern(e){return lt(e)}static nullValidator(e){return Fe(e)}static compose(e){return xe(e)}static composeAsync(e){return Oe(e)}};function tt(t){return e=>{if(C(e.value)||C(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function it(t){return e=>{if(C(e.value)||C(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function nt(t){return C(t.value)?{required:!0}:null}function rt(t){return t.value===!0?null:{required:!0}}function ot(t){return C(t.value)||et.test(t.value)?null:{email:!0}}function st(t){return e=>C(e.value)||!De(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function at(t){return e=>De(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function lt(t){if(!t)return Fe;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(C(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function Fe(t){return null}function Ae(t){return t!=null}function Ee(t){return he(t)?le(t):t}function we(t){let e={};return t.forEach(i=>{e=i!=null?m(m({},e),i):e}),Object.keys(e).length===0?null:e}function Se(t,e){return e.map(i=>i(t))}function ut(t){return!t.validate}function Ie(t){return t.map(e=>ut(e)?e:i=>e.validate(i))}function xe(t){if(!t)return null;let e=t.filter(Ae);return e.length==0?null:function(i){return we(Se(i,e))}}function Ne(t){return t!=null?xe(Ie(t)):null}function Oe(t){if(!t)return null;let e=t.filter(Ae);return e.length==0?null:function(i){let n=Se(i,e).map(Ee);return de(n).pipe(ue(we))}}function Pe(t){return t!=null?Oe(Ie(t)):null}function fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ke(t){return t._rawValidators}function Ge(t){return t._rawAsyncValidators}function ne(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function pe(t,e){let i=ne(e);return ne(t).forEach(r=>{B(i,r)||i.push(r)}),i}function me(t,e){return ne(e).filter(i=>!B(t,i))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Pe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},E=class extends R{get formDirective(){return null}get path(){return null}},P=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},U=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},si=b(m({},dt),{"[class.ng-submitted]":"isSubmitted"}),Te=(()=>{class t extends U{constructor(i){super(i)}static{this.\u0275fac=function(n){return new(n||t)(d(P,2))}}static{this.\u0275dir=f({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&v("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[D]})}}return t})(),je=(()=>{class t extends U{constructor(i){super(i)}static{this.\u0275fac=function(n){return new(n||t)(d(E,10))}}static{this.\u0275dir=f({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&v("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[D]})}}return t})();var N="VALID",j="INVALID",A="PENDING",O="DISABLED";function Be(t){return(Z(t)?t.validators:t)||null}function ct(t){return Array.isArray(t)?Ne(t):t||null}function Re(t,e){return(Z(e)?e.asyncValidators:t)||null}function ht(t){return Array.isArray(t)?Pe(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ft(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new k(1e3,"");if(!n[i])throw new k(1001,"")}function pt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new k(1002,"")})}var H=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===N}get invalid(){return this.status===j}get pending(){return this.status==A}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(me(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(n=>{n.disable(b(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(m({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(n=>{n.enable(b(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(m({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let i=Ee(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(j)?j:N}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}},L=class extends H{constructor(e,i,n){super(Be(i),Re(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){pt(this,!0,e),Object.keys(e).forEach(n=>{ft(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,l)=>{n=i(n,r,l)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Ue=new V("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function mt(t,e){return[...e.path,t]}function ge(t,e,i=re){oe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),vt(t,e),yt(t,e),_t(t,e),gt(t,e)}function ve(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function W(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function gt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function oe(t,e){let i=ke(t);e.validator!==null?t.setValidators(fe(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Ge(t);e.asyncValidator!==null?t.setAsyncValidators(fe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();W(e._rawValidators,r),W(e._rawAsyncValidators,r)}function $(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=ke(t);if(Array.isArray(r)&&r.length>0){let l=r.filter(h=>h!==e.validator);l.length!==r.length&&(i=!0,t.setValidators(l))}}if(e.asyncValidator!==null){let r=Ge(t);if(Array.isArray(r)&&r.length>0){let l=r.filter(h=>h!==e.asyncValidator);l.length!==r.length&&(i=!0,t.setAsyncValidators(l))}}}let n=()=>{};return W(e._rawValidators,n),W(e._rawAsyncValidators,n),i}function vt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&He(t,e)})}function _t(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&He(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function He(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function yt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Ct(t,e){t==null,oe(t,e)}function Vt(t,e){return $(t,e)}function Dt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function bt(t){return Object.getPrototypeOf(t.constructor)===Je}function Mt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Ft(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(l=>{l.constructor===z?i=l:bt(l)?n=l:r=l}),r||n||i||null}function At(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function _e(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ye(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var w=class extends H{constructor(e=null,i,n){super(Be(i),Re(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(i)&&(i.nonNullable||i.initialValueIsDefault)&&(ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){_e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){_e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et=t=>t instanceof w;var Le=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=f({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return t})();var We=new V("");var wt={provide:E,useExisting:G(()=>se)},se=(()=>{class t extends E{constructor(i,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new I,this._setValidators(i),this._setAsyncValidators(n)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let n=this.form.get(i.path);return ge(n,i,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),n}getControl(i){return this.form.get(i.path)}removeControl(i){ve(i.control||null,i,!1),At(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,n){this.form.get(i.path).setValue(n)}onSubmit(i){return this.submitted=!0,Mt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let n=i.control,r=this.form.get(i.path);n!==r&&(ve(n||null,i),Et(r)&&(ge(r,i,this.callSetDisabledState),i.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let n=this.form.get(i.path);Ct(n,i),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let n=this.form.get(i.path);n&&Vt(n,i)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||t)(d(be,10),d(Me,10),d(Ue,8))}}static{this.\u0275dir=f({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&x("submit",function(h){return r.onSubmit(h)})("reset",function(){return r.onReset()})},inputs:{form:[S.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([wt]),D,K]})}}return t})();var St={provide:P,useExisting:G(()=>ae)},ae=(()=>{class t extends P{set isDisabled(i){}static{this._ngModelWarningSentOnce=!1}constructor(i,n,r,l,h){super(),this._ngModelWarningConfig=h,this._added=!1,this.name=null,this.update=new I,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ft(this,l)}ngOnChanges(i){this._added||this._setUpControl(),Dt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return mt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||t)(d(E,13),d(be,10),d(Me,10),d(Ve,10),d(We,8))}}static{this.\u0275dir=f({type:t,selectors:[["","formControlName",""]],inputs:{name:[S.None,"formControlName","name"],isDisabled:[S.None,"disabled","isDisabled"],model:[S.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[T([St]),D,K]})}}return t})();var It=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=J({type:t})}static{this.\u0275inj=Y({})}}return t})();var $e=(()=>{class t{static withConfig(i){return{ngModule:t,providers:[{provide:We,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:Ue,useValue:i.callSetDisabledState??re}]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=J({type:t})}static{this.\u0275inj=Y({imports:[It]})}}return t})();function Nt(t,e){t&1&&(o(0,"p",7),a(1,"Please enter your name"),s())}function Ot(t,e){t&1&&(o(0,"p",7),a(1,"Please enter a valid email address"),s())}function Pt(t,e){t&1&&(o(0,"p",7),a(1,"Please enter your phone number"),s())}function kt(t,e){t&1&&(o(0,"p",7),a(1,"Please enter your message (min. 10 characters)"),s())}function Gt(t,e){t&1&&(u(0,"i",18),a(1," Sending... "))}function Tt(t,e){t&1&&(u(0,"i",19),a(1," Send Message "))}var qe=(()=>{class t{constructor(){this.contactForm=new L({name:new w("",[p.required]),email:new w("",[p.required,p.email]),phone:new w("",[p.required]),message:new w("",[p.required,p.minLength(10)])}),this.submitting=!1}isFieldInvalid(i){let n=this.contactForm.get(i);return!!n&&n.invalid&&(n.dirty||n.touched)}onSubmit(){this.contactForm.valid&&(this.submitting=!0,setTimeout(()=>{console.log("Form submitted:",this.contactForm.value),this.contactForm.reset(),this.submitting=!1},1500))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-contact-form"]],standalone:!0,features:[_],decls:38,vars:15,consts:[[1,"space-y-6",3,"ngSubmit","formGroup"],[1,"group"],[1,"block","text-sm","font-medium","text-gray-700","mb-1"],[1,"relative"],["type","text","formControlName","name","placeholder","John Doe",1,"w-full","px-4","py-3","rounded-lg","border","border-gray-300","focus:border-accent","focus:ring","focus:ring-accent/20","transition-all"],[1,"absolute","right-3","top-1/2","-translate-y-1/2","text-accent","opacity-0","transition-opacity","group-focus-within:opacity-100"],[1,"fas","fa-user"],[1,"mt-1","text-sm","text-red-500"],["type","email","formControlName","email","placeholder","john@example.com",1,"w-full","px-4","py-3","rounded-lg","border","border-gray-300","focus:border-accent","focus:ring","focus:ring-accent/20","transition-all"],[1,"fas","fa-envelope"],["type","tel","formControlName","phone","placeholder","+1 234 567 8900",1,"w-full","px-4","py-3","rounded-lg","border","border-gray-300","focus:border-accent","focus:ring","focus:ring-accent/20","transition-all"],[1,"fas","fa-phone"],["formControlName","message","rows","4","placeholder","Tell us about your project...",1,"w-full","px-4","py-3","rounded-lg","border","border-gray-300","focus:border-accent","focus:ring","focus:ring-accent/20","transition-all","resize-none"],[1,"absolute","right-3","top-4","text-accent","opacity-0","transition-opacity","group-focus-within:opacity-100"],[1,"fas","fa-message"],["type","submit",1,"w-full","bg-accent","hover:bg-accent-dark","text-white","py-4","px-6","rounded-lg","font-semibold","transition-all","duration-300","transform","hover:scale-[1.02]","disabled:opacity-50","disabled:hover:scale-100","relative","group","overflow-hidden",3,"disabled"],[1,"relative","z-10","flex","items-center","justify-center"],[1,"absolute","inset-0","bg-gradient-to-r","from-accent-dark","to-accent","opacity-0","group-hover:opacity-100","transition-opacity"],[1,"fas","fa-circle-notch","fa-spin","mr-2"],[1,"fas","fa-paper-plane","mr-2","group-hover:translate-x-1","transition-transform"]],template:function(n,r){n&1&&(o(0,"form",0),x("ngSubmit",function(){return r.onSubmit()}),o(1,"div",1)(2,"label",2),a(3,"Full Name"),s(),o(4,"div",3),u(5,"input",4),o(6,"div",5),u(7,"i",6),s()(),M(8,Nt,2,0,"p",7),s(),o(9,"div",1)(10,"label",2),a(11,"Email Address"),s(),o(12,"div",3),u(13,"input",8),o(14,"div",5),u(15,"i",9),s()(),M(16,Ot,2,0,"p",7),s(),o(17,"div",1)(18,"label",2),a(19,"Phone Number"),s(),o(20,"div",3),u(21,"input",10),o(22,"div",5),u(23,"i",11),s()(),M(24,Pt,2,0,"p",7),s(),o(25,"div",1)(26,"label",2),a(27,"Message"),s(),o(28,"div",3),u(29,"textarea",12),o(30,"div",13),u(31,"i",14),s()(),M(32,kt,2,0,"p",7),s(),o(33,"button",15)(34,"span",16),M(35,Gt,2,0)(36,Tt,2,0),s(),u(37,"div",17),s()()),n&2&&(ee("formGroup",r.contactForm),c(5),v("border-red-300",r.isFieldInvalid("name")),c(3),F(8,r.isFieldInvalid("name")?8:-1),c(5),v("border-red-300",r.isFieldInvalid("email")),c(3),F(16,r.isFieldInvalid("email")?16:-1),c(5),v("border-red-300",r.isFieldInvalid("phone")),c(3),F(24,r.isFieldInvalid("phone")?24:-1),c(5),v("border-red-300",r.isFieldInvalid("message")),c(3),F(32,r.isFieldInvalid("message")?32:-1),c(),ee("disabled",!r.contactForm.valid||r.submitting),c(2),F(35,r.submitting?35:36))},dependencies:[y,$e,Le,z,Te,je,se,ae],encapsulation:2})}}return t})();var ze={email:"info&#64;redseaconstruction.com",phone:"(555) 123-4567"};var Ze=(()=>{class t{constructor(){this.contactInfo=ze}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-contact-info"]],standalone:!0,features:[_],decls:36,vars:2,consts:[[1,"bg-white","rounded-2xl","shadow-xl","p-8","md:p-12","mb-8"],[1,"text-2xl","font-bold","mb-8"],[1,"space-y-8"],[1,"flex","items-start","space-x-4"],[1,"w-12","h-12","bg-accent/10","rounded-xl","flex","items-center","justify-center","text-accent"],[1,"fas","fa-location-dot","text-xl"],[1,"font-semibold","mb-1"],[1,"text-gray-600"],[1,"fas","fa-phone","text-xl"],[1,"fas","fa-clock","text-xl"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"h2",1),a(2,"Contact Information"),s(),o(3,"div",2)(4,"div",3)(5,"div",4),u(6,"i",5),s(),o(7,"div")(8,"h3",6),a(9,"Office Location"),s(),o(10,"p",7),a(11,"123 Business District"),s(),o(12,"p",7),a(13,"Jeddah, Saudi Arabia"),s()()(),o(14,"div",3)(15,"div",4),u(16,"i",8),s(),o(17,"div")(18,"h3",6),a(19,"Contact Details"),s(),o(20,"p",7),a(21),s(),o(22,"p",7),a(23),s()()(),o(24,"div",3)(25,"div",4),u(26,"i",9),s(),o(27,"div")(28,"h3",6),a(29,"Business Hours"),s(),o(30,"p",7),a(31,"Monday - Friday: 9:00 AM - 6:00 PM"),s(),o(32,"p",7),a(33,"Saturday: 10:00 AM - 2:00 PM"),s(),o(34,"p",7),a(35,"Sunday: Closed"),s()()()()()),n&2&&(c(21),te("Phone: ",r.contactInfo.phone,""),c(2),te("Email: ",r.contactInfo.email,""))},dependencies:[y],encapsulation:2})}}return t})();var Ye=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-contact-map"]],standalone:!0,features:[_],decls:7,vars:0,consts:[[1,"bg-white","rounded-2xl","shadow-xl","overflow-hidden"],[1,"aspect-video"],["src","https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1","alt","Office Location Map",1,"w-full","h-full","object-cover"],[1,"p-4","bg-gradient-to-r","from-accent","to-primary","text-white"],[1,"text-sm","font-medium"],[1,"fas","fa-map-marker-alt","mr-2"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"div",1),u(2,"img",2),s(),o(3,"div",3)(4,"p",4),u(5,"i",5),a(6," Find us in the heart of Jeddah's Business District "),s()()())},dependencies:[y],encapsulation:2})}}return t})();var Di=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-contact"]],standalone:!0,features:[_],decls:13,vars:0,consts:[[1,"min-h-screen","bg-gradient-to-b","from-gray-50","to-white","py-16"],[1,"container","mx-auto","px-4"],["data-aos","fade-up",1,"text-center","mb-16"],[1,"text-4xl","md:text-5xl","font-bold","mb-4"],[1,"text-xl","text-gray-600","max-w-2xl","mx-auto"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-12","max-w-6xl","mx-auto"],["data-aos","fade-right",1,"bg-white","rounded-2xl","shadow-xl","p-8","md:p-12"],["data-aos","fade-left"]],template:function(n,r){n&1&&(o(0,"main",0)(1,"div",1)(2,"header",2)(3,"h1",3),a(4,"Get in Touch"),s(),o(5,"p",4),a(6," Have a project in mind? We'd love to hear from you. Let's discuss how we can bring your vision to life. "),s()(),o(7,"div",5)(8,"div",6),u(9,"app-contact-form"),s(),o(10,"div",7),u(11,"app-contact-info")(12,"app-contact-map"),s()()()())},dependencies:[y,qe,Ze,Ye],encapsulation:2})}}return t})();export{Di as ContactComponent};
