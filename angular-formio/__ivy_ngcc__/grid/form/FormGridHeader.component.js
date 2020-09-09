import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = function (a0, a1) { return { "glyphicon-triangle-top fa-caret-up": a0, "glyphicon-triangle-bottom fa-caret-down": a1 }; };
function FormGridHeaderComponent_ng_template_0_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, ctx_r1.header.sort === "asc", ctx_r1.header.sort === "desc"));
} }
function FormGridHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "thead");
    ɵngcc0.ɵɵelementStart(1, "tr");
    ɵngcc0.ɵɵelementStart(2, "th");
    ɵngcc0.ɵɵelementStart(3, "div", 0);
    ɵngcc0.ɵɵelementStart(4, "div", 1);
    ɵngcc0.ɵɵelementStart(5, "a", 2);
    ɵngcc0.ɵɵlistener("click", function FormGridHeaderComponent_ng_template_0_Template_a_click_5_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.sort.emit(ctx_r2.header); });
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵtemplate(7, FormGridHeaderComponent_ng_template_0_span_7_Template, 1, 4, "span", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 4);
    ɵngcc0.ɵɵtext(9, " Operations ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.header.label, "\u00A0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.header.sort);
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
 * Generated from: grid/form/FormGridHeader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GridHeaderComponent } from '../GridHeaderComponent';
import { SortType } from '../types/grid-header';
var FormGridHeaderComponent = /** @class */ (function (_super) {
    __extends(FormGridHeaderComponent, _super);
    function FormGridHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} formio
     * @return {?}
     */
    FormGridHeaderComponent.prototype.load = /**
     * @param {?=} formio
     * @return {?}
     */
    function (formio) {
        this.header = {
            label: 'Title',
            key: 'title',
            sort: SortType.ASC
        };
        this.headers = [this.header];
        return Promise.resolve(this.headers);
    };
    Object.defineProperty(FormGridHeaderComponent.prototype, "numHeaders", {
        get: /**
         * @return {?}
         */
        function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
FormGridHeaderComponent.ɵfac = function FormGridHeaderComponent_Factory(t) { return ɵFormGridHeaderComponent_BaseFactory(t || FormGridHeaderComponent); };
FormGridHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormGridHeaderComponent, selectors: [["form-grid-header"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "row"], [1, "col-sm-8"], [3, "click"], ["class", "glyphicon fa", 3, "ngClass", 4, "ngIf"], [1, "col-sm-4"], [1, "glyphicon", "fa", 3, "ngClass"]], template: function FormGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FormGridHeaderComponent_ng_template_0_Template, 10, 2, "ng-template");
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2 });
var ɵFormGridHeaderComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(FormGridHeaderComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormGridHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'form-grid-header',
                template: "<ng-template> <thead> <tr> <th> <div class=\"row\"> <div class=\"col-sm-8\"> <a (click)=\"sort.emit(header)\"> {{ header.label }}&nbsp;<span [ngClass]=\"{'glyphicon-triangle-top fa-caret-up': (header.sort === 'asc'), 'glyphicon-triangle-bottom fa-caret-down': (header.sort === 'desc')}\" class=\"glyphicon fa\" *ngIf=\"header.sort\"></span> </a> </div> <div class=\"col-sm-4\"> Operations </div> </div> </th> </tr> </thead> </ng-template> "
            }]
    }], null, null); })();
    return FormGridHeaderComponent;
}(GridHeaderComponent));
export { FormGridHeaderComponent };
if (false) {
    /** @type {?} */
    FormGridHeaderComponent.prototype.header;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyaWRIZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJGb3JtR3JpZEhlYWRlci5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OzswQkFNTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IGdyaWQvZm9ybS9Gb3JtR3JpZEhlYWRlci5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmlkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vR3JpZEhlYWRlckNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3J0VHlwZSB9IGZyb20gJy4uL3R5cGVzL2dyaWQtaGVhZGVyJztcbnZhciBGb3JtR3JpZEhlYWRlckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9ybUdyaWRIZWFkZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybUdyaWRIZWFkZXJDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gZm9ybWlvXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUubG9hZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IGZvcm1pb1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGZvcm1pbykge1xuICAgICAgICB0aGlzLmhlYWRlciA9IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgICAgc29ydDogU29ydFR5cGUuQVNDXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IFt0aGlzLmhlYWRlcl07XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5oZWFkZXJzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUsIFwibnVtSGVhZGVyc1wiLCB7XG4gICAgICAgIGdldDogLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRm9ybUdyaWRIZWFkZXJDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybS1ncmlkLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxuZy10ZW1wbGF0ZT4gPHRoZWFkPiA8dHI+IDx0aD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPiA8YSAoY2xpY2spPVxcXCJzb3J0LmVtaXQoaGVhZGVyKVxcXCI+IHt7IGhlYWRlci5sYWJlbCB9fSZuYnNwOzxzcGFuIFtuZ0NsYXNzXT1cXFwieydnbHlwaGljb24tdHJpYW5nbGUtdG9wIGZhLWNhcmV0LXVwJzogKGhlYWRlci5zb3J0ID09PSAnYXNjJyksICdnbHlwaGljb24tdHJpYW5nbGUtYm90dG9tIGZhLWNhcmV0LWRvd24nOiAoaGVhZGVyLnNvcnQgPT09ICdkZXNjJyl9XFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGZhXFxcIiAqbmdJZj1cXFwiaGVhZGVyLnNvcnRcXFwiPjwvc3Bhbj4gPC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPiBPcGVyYXRpb25zIDwvZGl2PiA8L2Rpdj4gPC90aD4gPC90cj4gPC90aGVhZD4gPC9uZy10ZW1wbGF0ZT4gXCJcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIHJldHVybiBGb3JtR3JpZEhlYWRlckNvbXBvbmVudDtcbn0oR3JpZEhlYWRlckNvbXBvbmVudCkpO1xuZXhwb3J0IHsgRm9ybUdyaWRIZWFkZXJDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUuaGVhZGVyO1xufVxuIl19