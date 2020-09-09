/**
 * @fileoverview added by tsickle
 * Generated from: resource/index/index.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import { each } from 'lodash';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '../../components/alerts/formio.alerts.component';
import * as ɵngcc3 from '../../grid/grid.component';
var FormioResourceIndexComponent = /** @class */ (function () {
    function FormioResourceIndexComponent(service, route, router, config, cdr, ngZone) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.cdr = cdr;
        this.ngZone = ngZone;
    }
    /**
     * @return {?}
     */
    FormioResourceIndexComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.gridQuery = {};
        this.service.setContext(this.route);
        this.service.formLoaded.then((/**
         * @return {?}
         */
        function () {
            if (_this.service &&
                _this.config.parents &&
                _this.config.parents.length) {
                _this.service.loadParents().then((/**
                 * @param {?} parents
                 * @return {?}
                 */
                function (parents) {
                    each(parents, (/**
                     * @param {?} parent
                     * @return {?}
                     */
                    function (parent) {
                        if (parent && parent.filter) {
                            _this.gridQuery['data.' + parent.name + '._id'] =
                                parent.resource._id;
                        }
                    }));
                    // Set the source to load the grid.
                    _this.gridSrc = _this.service.formUrl;
                    _this.createText = "New " + _this.service.form.title;
                }));
            }
            else if (_this.service.formUrl) {
                _this.gridSrc = _this.service.formUrl;
                _this.createText = "New " + _this.service.form.title;
            }
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    FormioResourceIndexComponent.prototype.onSelect = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.router.navigate([row._id, 'view'], { relativeTo: _this.route });
        }));
    };
    /**
     * @return {?}
     */
    FormioResourceIndexComponent.prototype.onCreateItem = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['new'], { relativeTo: _this.route });
        }));
    };
    /** @nocollapse */
    FormioResourceIndexComponent.ctorParameters = function () { return [
        { type: FormioResourceService },
        { type: ActivatedRoute },
        { type: Router },
        { type: FormioResourceConfig },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
FormioResourceIndexComponent.ɵfac = function FormioResourceIndexComponent_Factory(t) { return new (t || FormioResourceIndexComponent)(ɵngcc0.ɵɵdirectiveInject(FormioResourceService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router), ɵngcc0.ɵɵdirectiveInject(FormioResourceConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
FormioResourceIndexComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioResourceIndexComponent, selectors: [["ng-component"]], decls: 2, vars: 5, consts: [[3, "alerts"], [3, "src", "query", "onForm", "createText", "rowSelect", "error", "createItem"]], template: function FormioResourceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "formio-alerts", 0);
        ɵngcc0.ɵɵelementStart(1, "formio-grid", 1);
        ɵngcc0.ɵɵlistener("rowSelect", function FormioResourceIndexComponent_Template_formio_grid_rowSelect_1_listener($event) { return ctx.onSelect($event); })("error", function FormioResourceIndexComponent_Template_formio_grid_error_1_listener($event) { return ctx.service.onError($event); })("createItem", function FormioResourceIndexComponent_Template_formio_grid_createItem_1_listener() { return ctx.onCreateItem(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("alerts", ctx.service.alerts);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.gridSrc)("query", ctx.gridQuery)("onForm", ctx.service.formLoaded)("createText", ctx.createText);
    } }, directives: [ɵngcc2.FormioAlertsComponent, ɵngcc3.FormioGridComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceIndexComponent, [{
        type: Component,
        args: [{
                template: "<formio-alerts [alerts]=\"service.alerts\"></formio-alerts> <formio-grid [src]=\"gridSrc\" [query]=\"gridQuery\" [onForm]=\"service.formLoaded\" (rowSelect)=\"onSelect($event)\" (error)=\"service.onError($event)\" (createItem)=\"onCreateItem()\" [createText]=\"createText\" ></formio-grid> "
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ɵngcc1.ActivatedRoute }, { type: ɵngcc1.Router }, { type: FormioResourceConfig }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, null); })();
    return FormioResourceIndexComponent;
}());
export { FormioResourceIndexComponent };
if (false) {
    /** @type {?} */
    FormioResourceIndexComponent.prototype.gridSrc;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.gridQuery;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.createText;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.service;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.route;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.router;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.config;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.cdr;
    /** @type {?} */
    FormioResourceIndexComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJpbmRleC5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFLTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7c09BQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiByZXNvdXJjZS9pbmRleC9pbmRleC5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3Jlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VDb25maWcgfSBmcm9tICcuLi9yZXNvdXJjZS5jb25maWcnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCc7XG52YXIgRm9ybWlvUmVzb3VyY2VJbmRleENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50KHNlcnZpY2UsIHJvdXRlLCByb3V0ZXIsIGNvbmZpZywgY2RyLCBuZ1pvbmUpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY2RyID0gY2RyO1xuICAgICAgICB0aGlzLm5nWm9uZSA9IG5nWm9uZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdyaWRRdWVyeSA9IHt9O1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0Q29udGV4dCh0aGlzLnJvdXRlKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZvcm1Mb2FkZWQudGhlbigoLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc2VydmljZSAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZy5wYXJlbnRzICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuY29uZmlnLnBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VydmljZS5sb2FkUGFyZW50cygpLnRoZW4oKC8qKlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50c1xuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWFjaChwYXJlbnRzLCAoLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ncmlkUXVlcnlbJ2RhdGEuJyArIHBhcmVudC5uYW1lICsgJy5faWQnXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZXNvdXJjZS5faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBzb3VyY2UgdG8gbG9hZCB0aGUgZ3JpZC5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JpZFNyYyA9IF90aGlzLnNlcnZpY2UuZm9ybVVybDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRlVGV4dCA9IFwiTmV3IFwiICsgX3RoaXMuc2VydmljZS5mb3JtLnRpdGxlO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLnNlcnZpY2UuZm9ybVVybCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdyaWRTcmMgPSBfdGhpcy5zZXJ2aWNlLmZvcm1Vcmw7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRlVGV4dCA9IFwiTmV3IFwiICsgX3RoaXMuc2VydmljZS5mb3JtLnRpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByb3dcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQucHJvdG90eXBlLm9uU2VsZWN0ID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSByb3dcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm93Ll9pZCwgJ3ZpZXcnXSwgeyByZWxhdGl2ZVRvOiBfdGhpcy5yb3V0ZSB9KTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LnByb3RvdHlwZS5vbkNyZWF0ZUl0ZW0gPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25ldyddLCB7IHJlbGF0aXZlVG86IF90aGlzLnJvdXRlIH0pO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8Zm9ybWlvLWFsZXJ0cyBbYWxlcnRzXT1cXFwic2VydmljZS5hbGVydHNcXFwiPjwvZm9ybWlvLWFsZXJ0cz4gPGZvcm1pby1ncmlkIFtzcmNdPVxcXCJncmlkU3JjXFxcIiBbcXVlcnldPVxcXCJncmlkUXVlcnlcXFwiIFtvbkZvcm1dPVxcXCJzZXJ2aWNlLmZvcm1Mb2FkZWRcXFwiIChyb3dTZWxlY3QpPVxcXCJvblNlbGVjdCgkZXZlbnQpXFxcIiAoZXJyb3IpPVxcXCJzZXJ2aWNlLm9uRXJyb3IoJGV2ZW50KVxcXCIgKGNyZWF0ZUl0ZW0pPVxcXCJvbkNyZWF0ZUl0ZW0oKVxcXCIgW2NyZWF0ZVRleHRdPVxcXCJjcmVhdGVUZXh0XFxcIiA+PC9mb3JtaW8tZ3JpZD4gXCJcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogRm9ybWlvUmVzb3VyY2VTZXJ2aWNlIH0sXG4gICAgICAgIHsgdHlwZTogQWN0aXZhdGVkUm91dGUgfSxcbiAgICAgICAgeyB0eXBlOiBSb3V0ZXIgfSxcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9SZXNvdXJjZUNvbmZpZyB9LFxuICAgICAgICB7IHR5cGU6IENoYW5nZURldGVjdG9yUmVmIH0sXG4gICAgICAgIHsgdHlwZTogTmdab25lIH1cbiAgICBdOyB9O1xuICAgIHJldHVybiBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LnByb3RvdHlwZS5ncmlkU3JjO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LnByb3RvdHlwZS5ncmlkUXVlcnk7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZVRleHQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQucHJvdG90eXBlLnNlcnZpY2U7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQucHJvdG90eXBlLnJvdXRlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LnByb3RvdHlwZS5yb3V0ZXI7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQucHJvdG90eXBlLmNvbmZpZztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VJbmRleENvbXBvbmVudC5wcm90b3R5cGUuY2RyO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUluZGV4Q29tcG9uZW50LnByb3RvdHlwZS5uZ1pvbmU7XG59XG4iXX0=