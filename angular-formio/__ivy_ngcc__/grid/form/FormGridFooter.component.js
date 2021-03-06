import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ngx-bootstrap/pagination';
import * as ɵngcc3 from '@angular/forms';

function FormGridFooterComponent_ng_template_0_thead_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead", 3);
    ɵngcc0.ɵɵelementContainer(1, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function FormGridFooterComponent_ng_template_0_tfoot_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tfoot", 3);
    ɵngcc0.ɵɵelementContainer(1, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function FormGridFooterComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_thead_0_Template, 2, 1, "thead", 2);
    ɵngcc0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_0_tfoot_1_Template, 2, 1, "tfoot", 2);
} if (rf & 2) {
    var position_r4 = ctx.position;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.top);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", position_r4 === ctx_r1.footerPositions.bottom);
} }
function FormGridFooterComponent_ng_template_2_td_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function FormGridFooterComponent_ng_template_2_td_1_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(3); return ctx_r9.createItem.emit("form"); });
    ɵngcc0.ɵɵelement(1, "i", 12);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r8.createText, "");
} }
function FormGridFooterComponent_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 6);
    ɵngcc0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_button_1_Template, 3, 1, "button", 7);
    ɵngcc0.ɵɵelementStart(2, "span", 8);
    ɵngcc0.ɵɵelementStart(3, "span", 9);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "pagination", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_ngModelChange_6_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.body.skip = $event; })("pageChanged", function FormGridFooterComponent_ng_template_2_td_1_Template_pagination_pageChanged_6_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.pageChanged.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("colSpan", ctx_r7.header.numHeaders);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.actionAllowed("formCreate"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r7.body.firstItem, " - ", ctx_r7.body.lastItem, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" / ", ctx_r7.body.total, " total");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("totalItems", ctx_r7.body.total)("itemsPerPage", ctx_r7.body.limit)("ngModel", ctx_r7.body.skip)("maxSize", ctx_r7.size);
} }
function FormGridFooterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵtemplate(1, FormGridFooterComponent_ng_template_2_td_1_Template, 7, 9, "td", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.header);
} }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * Generated from: grid/form/FormGridFooter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { GridFooterComponent } from '../GridFooterComponent';
var FormGridFooterComponent = /** @class */ (function (_super) {
    __extends(FormGridFooterComponent, _super);
    function FormGridFooterComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    FormGridFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.createText) {
            this.createText = 'Create Form';
        }
        if (!this.size) {
            this.size = 7;
        }
    };
    /** @nocollapse */
    FormGridFooterComponent.ctorParameters = function () { return []; };
FormGridFooterComponent.ɵfac = function FormGridFooterComponent_Factory(t) { return new (t || FormGridFooterComponent)(); };
FormGridFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormGridFooterComponent, selectors: [["ng-component"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["footer", ""], ["defaultFooterTemplate", ""], ["class", "formio-grid-footer", 4, "ngIf"], [1, "formio-grid-footer"], [3, "ngTemplateOutlet"], [3, "colSpan", 4, "ngIf"], [3, "colSpan"], ["class", "btn btn-primary pull-left float-left", 3, "click", 4, "ngIf"], [1, "pull-right", "float-right", "item-counter"], [1, "page-num"], [1, "justify-content-center", "pagination-sm", 3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "ngModelChange", "pageChanged"], [1, "btn", "btn-primary", "pull-left", "float-left", 3, "click"], [1, "glyphicon", "glyphicon-plus", "fa", "fa-plus"]], template: function FormGridFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FormGridFooterComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, FormGridFooterComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.PaginationComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel], styles: ["tfoot.formio-grid-footer td { padding: 0.3rem; } tfoot.formio-grid-footer .page-num { font-size: 1.4em; } tfoot.formio-grid-footer ul.pagination { margin-top: 5px; margin-bottom: 0; } "], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormGridFooterComponent, [{
        type: Component,
        args: [{
                template: "<ng-template #footer let-position=\"position\"> <thead class=\"formio-grid-footer\" *ngIf=\"position === footerPositions.top\"> <ng-container [ngTemplateOutlet]=\"defaultFooterTemplate\"></ng-container> </thead> <tfoot class=\"formio-grid-footer\" *ngIf=\"position === footerPositions.bottom\"> <ng-container [ngTemplateOutlet]=\"defaultFooterTemplate\"></ng-container> </tfoot> </ng-template> <ng-template #defaultFooterTemplate> <tr> <td *ngIf=\"header\" [colSpan]=\"header.numHeaders\"> <button *ngIf=\"actionAllowed('formCreate')\" class=\"btn btn-primary pull-left float-left\" (click)=\"createItem.emit('form')\"><i class=\"glyphicon glyphicon-plus fa fa-plus\"></i> {{ createText }}</button> <span class=\"pull-right float-right item-counter\"><span class=\"page-num\">{{ body.firstItem }} - {{ body.lastItem }}</span> / {{ body.total }} total</span> <pagination [totalItems]=\"body.total\" [itemsPerPage]=\"body.limit\" [(ngModel)]=\"body.skip\" (pageChanged)=\"pageChanged.emit($event)\" [maxSize]=\"size\" class=\"justify-content-center pagination-sm\"> </pagination> </td> </tr> </ng-template> ",
                styles: ["tfoot.formio-grid-footer td { padding: 0.3rem; } tfoot.formio-grid-footer .page-num { font-size: 1.4em; } tfoot.formio-grid-footer ul.pagination { margin-top: 5px; margin-bottom: 0; } "],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();
    return FormGridFooterComponent;
}(GridFooterComponent));
export { FormGridFooterComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyaWRGb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJGb3JtR3JpZEZvb3Rlci5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQU9NO0FBQ047QUFDQTs7Ozs7Ozs7Ozs7OztnREFBd0U7QUFDeEU7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IGdyaWQvZm9ybS9Gb3JtR3JpZEZvb3Rlci5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JpZEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uL0dyaWRGb290ZXJDb21wb25lbnQnO1xudmFyIEZvcm1HcmlkRm9vdGVyQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtR3JpZEZvb3RlckNvbXBvbmVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtR3JpZEZvb3RlckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybUdyaWRGb290ZXJDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jcmVhdGVUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHQgPSAnQ3JlYXRlIEZvcm0nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSA3O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGb3JtR3JpZEZvb3RlckNvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiPG5nLXRlbXBsYXRlICNmb290ZXIgbGV0LXBvc2l0aW9uPVxcXCJwb3NpdGlvblxcXCI+IDx0aGVhZCBjbGFzcz1cXFwiZm9ybWlvLWdyaWQtZm9vdGVyXFxcIiAqbmdJZj1cXFwicG9zaXRpb24gPT09IGZvb3RlclBvc2l0aW9ucy50b3BcXFwiPiA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZGVmYXVsdEZvb3RlclRlbXBsYXRlXFxcIj48L25nLWNvbnRhaW5lcj4gPC90aGVhZD4gPHRmb290IGNsYXNzPVxcXCJmb3JtaW8tZ3JpZC1mb290ZXJcXFwiICpuZ0lmPVxcXCJwb3NpdGlvbiA9PT0gZm9vdGVyUG9zaXRpb25zLmJvdHRvbVxcXCI+IDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJkZWZhdWx0Rm9vdGVyVGVtcGxhdGVcXFwiPjwvbmctY29udGFpbmVyPiA8L3Rmb290PiA8L25nLXRlbXBsYXRlPiA8bmctdGVtcGxhdGUgI2RlZmF1bHRGb290ZXJUZW1wbGF0ZT4gPHRyPiA8dGQgKm5nSWY9XFxcImhlYWRlclxcXCIgW2NvbFNwYW5dPVxcXCJoZWFkZXIubnVtSGVhZGVyc1xcXCI+IDxidXR0b24gKm5nSWY9XFxcImFjdGlvbkFsbG93ZWQoJ2Zvcm1DcmVhdGUnKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBwdWxsLWxlZnQgZmxvYXQtbGVmdFxcXCIgKGNsaWNrKT1cXFwiY3JlYXRlSXRlbS5lbWl0KCdmb3JtJylcXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgZmEgZmEtcGx1c1xcXCI+PC9pPiB7eyBjcmVhdGVUZXh0IH19PC9idXR0b24+IDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0IGl0ZW0tY291bnRlclxcXCI+PHNwYW4gY2xhc3M9XFxcInBhZ2UtbnVtXFxcIj57eyBib2R5LmZpcnN0SXRlbSB9fSAtIHt7IGJvZHkubGFzdEl0ZW0gfX08L3NwYW4+IC8ge3sgYm9keS50b3RhbCB9fSB0b3RhbDwvc3Bhbj4gPHBhZ2luYXRpb24gW3RvdGFsSXRlbXNdPVxcXCJib2R5LnRvdGFsXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiYm9keS5saW1pdFxcXCIgWyhuZ01vZGVsKV09XFxcImJvZHkuc2tpcFxcXCIgKHBhZ2VDaGFuZ2VkKT1cXFwicGFnZUNoYW5nZWQuZW1pdCgkZXZlbnQpXFxcIiBbbWF4U2l6ZV09XFxcInNpemVcXFwiIGNsYXNzPVxcXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhZ2luYXRpb24tc21cXFwiPiA8L3BhZ2luYXRpb24+IDwvdGQ+IDwvdHI+IDwvbmctdGVtcGxhdGU+IFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IFtcInRmb290LmZvcm1pby1ncmlkLWZvb3RlciB0ZCB7IHBhZGRpbmc6IDAuM3JlbTsgfSB0Zm9vdC5mb3JtaW8tZ3JpZC1mb290ZXIgLnBhZ2UtbnVtIHsgZm9udC1zaXplOiAxLjRlbTsgfSB0Zm9vdC5mb3JtaW8tZ3JpZC1mb290ZXIgdWwucGFnaW5hdGlvbiB7IG1hcmdpbi10b3A6IDVweDsgbWFyZ2luLWJvdHRvbTogMDsgfSBcIl0sXG4gICAgICAgICAgICAgICAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEZvcm1HcmlkRm9vdGVyQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEZvcm1HcmlkRm9vdGVyQ29tcG9uZW50O1xufShHcmlkRm9vdGVyQ29tcG9uZW50KSk7XG5leHBvcnQgeyBGb3JtR3JpZEZvb3RlckNvbXBvbmVudCB9O1xuIl19