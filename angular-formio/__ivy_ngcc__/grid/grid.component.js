/**
 * @fileoverview added by tsickle
 * Generated from: grid/grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridFooterPositions } from './types/grid-footer-positions';
import { ChangeDetectorRef, Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormioAlerts } from '../components/alerts/formio.alerts';
import { each } from 'lodash';
import { Formio } from 'formio-custom/formiojs';
import FormComponents from './form/index';
import SubmissionComponents from './submission/index';
import { FormioPromiseService } from '../formio-promise.service';
import { SortType } from './types/grid-header';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../components/alerts/formio.alerts.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../components/loader/formio.loader.component';

var _c0 = ["headerTemplate"];
var _c1 = ["bodyTemplate"];
var _c2 = ["footerTemplate"];
function FormioGridComponent_ng_template_0_Template(rf, ctx) { }
function FormioGridComponent_ng_template_2_Template(rf, ctx) { }
function FormioGridComponent_ng_template_4_Template(rf, ctx) { }
var _c3 = function (a0) { return { position: a0 }; };
function FormioGridComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footer.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r6.footerPositions.top));
} }
function FormioGridComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.header.template);
} }
function FormioGridComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.body.template);
} }
function FormioGridComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r9.footer.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r9.footerPositions.bottom));
} }
var _c4 = function (a0, a1) { return [a0, a1]; };
var FormioGridComponent = /** @class */ (function () {
    function FormioGridComponent(alerts, resolver, ref) {
        this.alerts = alerts;
        this.resolver = resolver;
        this.ref = ref;
        this.footerPosition = GridFooterPositions.bottom;
        this.page = 0;
        this.isLoading = false;
        this.initialized = false;
        this.footerPositions = GridFooterPositions;
        this.select = this.rowSelect = new EventEmitter();
        this.rowAction = new EventEmitter();
        this.createItem = new EventEmitter();
        this.error = new EventEmitter();
        this.isLoading = true;
    }
    /**
     * @param {?} property
     * @param {?} component
     * @return {?}
     */
    FormioGridComponent.prototype.createComponent = /**
     * @param {?} property
     * @param {?} component
     * @return {?}
     */
    function (property, component) {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = property.createComponent(factory);
        return componentRef.instance;
    };
    /**
     * @param {?=} src
     * @return {?}
     */
    FormioGridComponent.prototype.loadGrid = /**
     * @param {?=} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        // If no source is provided, then skip.
        if (!src && !this.formio) {
            return;
        }
        // Do not double load.
        if (this.formio && this.src && (src === this.src)) {
            return;
        }
        if (src) {
            this.src = src;
            this.formio = new FormioPromiseService(this.src, { formOnly: true });
        }
        // Load the header.
        this.header.load(this.formio, {}, this.columns)
            .then((/**
         * @return {?}
         */
        function () { return _this.setPage(0); }))
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.onError(error); }));
    };
    /**
     * @return {?}
     */
    FormioGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Create our components.
        /** @type {?} */
        var comps = this.components || ((this.gridType === 'form') ? FormComponents : SubmissionComponents);
        this.header = this.createComponent(this.headerElement, comps.header);
        this.header.actionAllowed = this.actionAllowed.bind(this);
        this.header.sort.subscribe((/**
         * @param {?} header
         * @return {?}
         */
        function (header) { return _this.sortColumn(header); }));
        this.body = this.createComponent(this.bodyElement, comps.body);
        this.body.header = this.header;
        this.body.actionAllowed = this.actionAllowed.bind(this);
        this.body.rowSelect.subscribe((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return _this.rowSelect.emit(row); }));
        this.body.rowAction.subscribe((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return _this.rowAction.emit(action); }));
        this.footer = this.createComponent(this.footerElement, comps.footer);
        this.footer.header = this.header;
        this.footer.body = this.body;
        this.footer.actionAllowed = this.actionAllowed.bind(this);
        this.footer.createText = this.createText;
        this.footer.size = this.size;
        this.footer.pageChanged.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return _this.pageChanged(page); }));
        this.footer.createItem.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.createItem.emit(item); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormioGridComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.initialized) {
            if ((changes.src && changes.src.currentValue) ||
                (changes.formio && changes.formio.currentValue)) {
                this.loadGrid(changes.src.currentValue);
            }
            if (changes.items && changes.items.currentValue) {
                this.refreshGrid();
            }
        }
        if (this.footer &&
            (changes.createText && changes.createText.currentValue)) {
            this.footer.createText = changes.createText.currentValue;
        }
    };
    /**
     * @return {?}
     */
    FormioGridComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alerts.setAlerts([]);
        this.query = this.query || {};
        if (this.refresh) {
            this.refresh.subscribe((/**
             * @param {?} query
             * @return {?}
             */
            function (query) { return _this.refreshGrid(query); }));
        }
        this.loadGrid(this.src);
        this.initialized = true;
        this.ref.detectChanges();
    };
    /**
     * @param {?} action
     * @return {?}
     */
    FormioGridComponent.prototype.actionAllowed = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        if (this.isActionAllowed) {
            return this.isActionAllowed(action);
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    FormioGridComponent.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.isLoading = false;
        this.error.emit(error);
        this.alerts.setAlert({
            type: 'danger',
            message: error
        });
    };
    /**
     * @param {?=} query
     * @return {?}
     */
    FormioGridComponent.prototype.refreshGrid = /**
     * @param {?=} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        this.alerts.setAlerts([]);
        this.query = query || this.query;
        if (!this.query.hasOwnProperty('limit')) {
            this.query.limit = 10;
        }
        if (!this.query.hasOwnProperty('skip')) {
            this.query.skip = 0;
        }
        this.isLoading = true;
        this.ref.detectChanges();
        Formio.cache = {};
        /** @type {?} */
        var loader = null;
        if (this.items) {
            loader = Promise.resolve(this.body.setRows(this.query, this.items));
        }
        else {
            loader = this.body.load(this.formio, this.query);
        }
        return loader.then((/**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            _this.isLoading = false;
            _this.initialized = true;
            _this.ref.detectChanges();
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.onError(error); }));
    };
    /**
     * @param {?=} num
     * @return {?}
     */
    FormioGridComponent.prototype.setPage = /**
     * @param {?=} num
     * @return {?}
     */
    function (num) {
        if (num === void 0) { num = -1; }
        this.page = num !== -1 ? num : this.page;
        if (!this.query.hasOwnProperty('limit')) {
            this.query.limit = 10;
        }
        if (!this.query.hasOwnProperty('skip')) {
            this.query.skip = 0;
        }
        this.query.skip = this.page * this.query.limit;
        this.refreshGrid();
    };
    /**
     * @param {?} header
     * @return {?}
     */
    FormioGridComponent.prototype.sortColumn = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        // Reset all other column sorts.
        each(this.header.headers, (/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            if (col.key !== header.key) {
                col.sort = '';
            }
        }));
        switch (header.sort) {
            case 'asc':
                header.sort = SortType.DESC;
                this.query.sort = '-' + header.key;
                break;
            case 'desc':
                header.sort = undefined;
                delete this.query.sort;
                break;
            case undefined:
                header.sort = SortType.ASC;
                this.query.sort = header.key;
                break;
        }
        this.refreshGrid();
    };
    /**
     * @param {?} page
     * @return {?}
     */
    FormioGridComponent.prototype.pageChanged = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.setPage(page.page - 1);
    };
    /** @nocollapse */
    FormioGridComponent.ctorParameters = function () { return [
        { type: FormioAlerts },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    FormioGridComponent.propDecorators = {
        footerPosition: [{ type: Input }],
        src: [{ type: Input }],
        items: [{ type: Input }],
        onForm: [{ type: Input }],
        query: [{ type: Input }],
        refresh: [{ type: Input }],
        columns: [{ type: Input }],
        gridType: [{ type: Input }],
        size: [{ type: Input }],
        components: [{ type: Input }],
        formio: [{ type: Input }],
        createText: [{ type: Input }],
        isActionAllowed: [{ type: Input }],
        select: [{ type: Output }],
        rowSelect: [{ type: Output }],
        rowAction: [{ type: Output }],
        createItem: [{ type: Output }],
        error: [{ type: Output }],
        headerElement: [{ type: ViewChild, args: ['headerTemplate', { read: ViewContainerRef, static: true },] }],
        bodyElement: [{ type: ViewChild, args: ['bodyTemplate', { read: ViewContainerRef, static: true },] }],
        footerElement: [{ type: ViewChild, args: ['footerTemplate', { read: ViewContainerRef, static: true },] }]
    };
FormioGridComponent.ɵfac = function FormioGridComponent_Factory(t) { return new (t || FormioGridComponent)(ɵngcc0.ɵɵdirectiveInject(FormioAlerts), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
FormioGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioGridComponent, selectors: [["formio-grid"]], viewQuery: function FormioGridComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ViewContainerRef);
        ɵngcc0.ɵɵstaticViewQuery(_c2, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.bodyElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerElement = _t.first);
    } }, inputs: { footerPosition: "footerPosition", src: "src", formio: "formio", query: "query", items: "items", onForm: "onForm", refresh: "refresh", columns: "columns", gridType: "gridType", size: "size", components: "components", createText: "createText", isActionAllowed: "isActionAllowed" }, outputs: { select: "select", rowSelect: "rowSelect", rowAction: "rowAction", createItem: "createItem", error: "error" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 14, vars: 12, consts: [["headerTemplate", ""], ["bodyTemplate", ""], ["footerTemplate", ""], [1, "formio-grid"], [3, "alerts"], [1, "table", "table-bordered", "table-striped", "table-hover"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "isLoading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"]], template: function FormioGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FormioGridComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, FormioGridComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, FormioGridComponent_ng_template_4_Template, 0, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(6, "div", 3);
        ɵngcc0.ɵɵelement(7, "formio-alerts", 4);
        ɵngcc0.ɵɵelementStart(8, "table", 5);
        ɵngcc0.ɵɵtemplate(9, FormioGridComponent_ng_container_9_Template, 1, 4, "ng-container", 6);
        ɵngcc0.ɵɵtemplate(10, FormioGridComponent_ng_container_10_Template, 1, 1, "ng-container", 7);
        ɵngcc0.ɵɵelement(11, "formio-loader", 8);
        ɵngcc0.ɵɵtemplate(12, FormioGridComponent_ng_container_12_Template, 1, 1, "ng-container", 7);
        ɵngcc0.ɵɵtemplate(13, FormioGridComponent_ng_container_13_Template, 1, 4, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("alerts", ctx.alerts);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.initialized && ɵngcc0.ɵɵpureFunction2(6, _c4, ctx.footerPositions.top, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== 0 - 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.initialized);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("isLoading", ctx.isLoading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.initialized);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.initialized && ɵngcc0.ɵɵpureFunction2(9, _c4, ctx.footerPositions.bottom, ctx.footerPositions.both).indexOf(ctx.footerPosition) !== 0 - 1);
    } }, directives: [ɵngcc1.FormioAlertsComponent, ɵngcc2.NgIf, ɵngcc3.FormioLoaderComponent, ɵngcc2.NgTemplateOutlet], styles: [".formio-grid[_ngcontent-%COMP%] { position: relative; width: 100%; } .grid-refresh[_ngcontent-%COMP%] { height: 400px; width: 100%; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioGridComponent, [{
        type: Component,
        args: [{
                selector: 'formio-grid',
                styles: [".formio-grid { position: relative; width: 100%; } .grid-refresh { height: 400px; width: 100%; } "],
                template: "<ng-template #headerTemplate></ng-template> <ng-template #bodyTemplate></ng-template> <ng-template #footerTemplate></ng-template> <div class=\"formio-grid\"> <formio-alerts [alerts]=\"alerts\"></formio-alerts> <table class=\"table table-bordered table-striped table-hover\"> <ng-container *ngIf=\"initialized && [footerPositions.top, footerPositions.both].indexOf(footerPosition) !== -1\" [ngTemplateOutlet]=\"footer.template\" [ngTemplateOutletContext]=\"{ position: footerPositions.top }\"> </ng-container> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"header.template\"></ng-container> <formio-loader [isLoading]=\"isLoading\"></formio-loader> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"body.template\"></ng-container> <ng-container *ngIf=\"initialized && [footerPositions.bottom, footerPositions.both].indexOf(footerPosition) !== -1\" [ngTemplateOutlet]=\"footer.template\" [ngTemplateOutletContext]=\"{ position: footerPositions.bottom }\"> </ng-container> </table> </div> "
            }]
    }], function () { return [{ type: FormioAlerts }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ChangeDetectorRef }]; }, { footerPosition: [{
            type: Input
        }], select: [{
            type: Output
        }], rowSelect: [{
            type: Output
        }], rowAction: [{
            type: Output
        }], createItem: [{
            type: Output
        }], error: [{
            type: Output
        }], src: [{
            type: Input
        }], formio: [{
            type: Input
        }], query: [{
            type: Input
        }], items: [{
            type: Input
        }], onForm: [{
            type: Input
        }], refresh: [{
            type: Input
        }], columns: [{
            type: Input
        }], gridType: [{
            type: Input
        }], size: [{
            type: Input
        }], components: [{
            type: Input
        }], createText: [{
            type: Input
        }], isActionAllowed: [{
            type: Input
        }], headerElement: [{
            type: ViewChild,
            args: ['headerTemplate', { read: ViewContainerRef, static: true }]
        }], bodyElement: [{
            type: ViewChild,
            args: ['bodyTemplate', { read: ViewContainerRef, static: true }]
        }], footerElement: [{
            type: ViewChild,
            args: ['footerTemplate', { read: ViewContainerRef, static: true }]
        }] }); })();
    return FormioGridComponent;
}());
export { FormioGridComponent };
if (false) {
    /** @type {?} */
    FormioGridComponent.prototype.footerPosition;
    /** @type {?} */
    FormioGridComponent.prototype.src;
    /** @type {?} */
    FormioGridComponent.prototype.items;
    /** @type {?} */
    FormioGridComponent.prototype.onForm;
    /** @type {?} */
    FormioGridComponent.prototype.query;
    /** @type {?} */
    FormioGridComponent.prototype.refresh;
    /** @type {?} */
    FormioGridComponent.prototype.columns;
    /** @type {?} */
    FormioGridComponent.prototype.gridType;
    /** @type {?} */
    FormioGridComponent.prototype.size;
    /** @type {?} */
    FormioGridComponent.prototype.components;
    /** @type {?} */
    FormioGridComponent.prototype.formio;
    /** @type {?} */
    FormioGridComponent.prototype.createText;
    /** @type {?} */
    FormioGridComponent.prototype.isActionAllowed;
    /** @type {?} */
    FormioGridComponent.prototype.select;
    /** @type {?} */
    FormioGridComponent.prototype.rowSelect;
    /** @type {?} */
    FormioGridComponent.prototype.rowAction;
    /** @type {?} */
    FormioGridComponent.prototype.createItem;
    /** @type {?} */
    FormioGridComponent.prototype.error;
    /** @type {?} */
    FormioGridComponent.prototype.headerElement;
    /** @type {?} */
    FormioGridComponent.prototype.bodyElement;
    /** @type {?} */
    FormioGridComponent.prototype.footerElement;
    /** @type {?} */
    FormioGridComponent.prototype.page;
    /** @type {?} */
    FormioGridComponent.prototype.isLoading;
    /** @type {?} */
    FormioGridComponent.prototype.initialized;
    /** @type {?} */
    FormioGridComponent.prototype.header;
    /** @type {?} */
    FormioGridComponent.prototype.body;
    /** @type {?} */
    FormioGridComponent.prototype.footer;
    /** @type {?} */
    FormioGridComponent.prototype.footerPositions;
    /** @type {?} */
    FormioGridComponent.prototype.alerts;
    /**
     * @type {?}
     * @private
     */
    FormioGridComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    FormioGridComponent.prototype.ref;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbImdyaWQuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BT007QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IGdyaWQvZ3JpZC5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgR3JpZEZvb3RlclBvc2l0aW9ucyB9IGZyb20gJy4vdHlwZXMvZ3JpZC1mb290ZXItcG9zaXRpb25zJztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1pb0FsZXJ0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnRzL2Zvcm1pby5hbGVydHMnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGb3JtaW8gfSBmcm9tICdmb3JtaW9qcyc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudHMgZnJvbSAnLi9mb3JtL2luZGV4JztcbmltcG9ydCBTdWJtaXNzaW9uQ29tcG9uZW50cyBmcm9tICcuL3N1Ym1pc3Npb24vaW5kZXgnO1xuaW1wb3J0IHsgRm9ybWlvUHJvbWlzZVNlcnZpY2UgfSBmcm9tICcuLi9mb3JtaW8tcHJvbWlzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi90eXBlcy9ncmlkLWhlYWRlcic7XG52YXIgRm9ybWlvR3JpZENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtaW9HcmlkQ29tcG9uZW50KGFsZXJ0cywgcmVzb2x2ZXIsIHJlZikge1xuICAgICAgICB0aGlzLmFsZXJ0cyA9IGFsZXJ0cztcbiAgICAgICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICAgICAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICAgICAgdGhpcy5mb290ZXJQb3NpdGlvbiA9IEdyaWRGb290ZXJQb3NpdGlvbnMuYm90dG9tO1xuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9vdGVyUG9zaXRpb25zID0gR3JpZEZvb3RlclBvc2l0aW9ucztcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0aGlzLnJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5yb3dBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHByb3BlcnR5XG4gICAgICogQHBhcmFtIHs/fSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUNvbXBvbmVudCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gez99IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHByb3BlcnR5LCBjb21wb25lbnQpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgY29tcG9uZW50UmVmID0gcHJvcGVydHkuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gc3JjXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5sb2FkR3JpZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IHNyY1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHNyYykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBJZiBubyBzb3VyY2UgaXMgcHJvdmlkZWQsIHRoZW4gc2tpcC5cbiAgICAgICAgaWYgKCFzcmMgJiYgIXRoaXMuZm9ybWlvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gbm90IGRvdWJsZSBsb2FkLlxuICAgICAgICBpZiAodGhpcy5mb3JtaW8gJiYgdGhpcy5zcmMgJiYgKHNyYyA9PT0gdGhpcy5zcmMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgICAgICAgICB0aGlzLmZvcm1pbyA9IG5ldyBGb3JtaW9Qcm9taXNlU2VydmljZSh0aGlzLnNyYywgeyBmb3JtT25seTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2FkIHRoZSBoZWFkZXIuXG4gICAgICAgIHRoaXMuaGVhZGVyLmxvYWQodGhpcy5mb3JtaW8sIHt9LCB0aGlzLmNvbHVtbnMpXG4gICAgICAgICAgICAudGhlbigoLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZXRQYWdlKDApOyB9KSlcbiAgICAgICAgICAgIC5jYXRjaCgoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gX3RoaXMub25FcnJvcihlcnJvcik7IH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gQ3JlYXRlIG91ciBjb21wb25lbnRzLlxuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBjb21wcyA9IHRoaXMuY29tcG9uZW50cyB8fCAoKHRoaXMuZ3JpZFR5cGUgPT09ICdmb3JtJykgPyBGb3JtQ29tcG9uZW50cyA6IFN1Ym1pc3Npb25Db21wb25lbnRzKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmhlYWRlckVsZW1lbnQsIGNvbXBzLmhlYWRlcik7XG4gICAgICAgIHRoaXMuaGVhZGVyLmFjdGlvbkFsbG93ZWQgPSB0aGlzLmFjdGlvbkFsbG93ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuc29ydC5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGhlYWRlclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGhlYWRlcikgeyByZXR1cm4gX3RoaXMuc29ydENvbHVtbihoZWFkZXIpOyB9KSk7XG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KHRoaXMuYm9keUVsZW1lbnQsIGNvbXBzLmJvZHkpO1xuICAgICAgICB0aGlzLmJvZHkuaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIHRoaXMuYm9keS5hY3Rpb25BbGxvd2VkID0gdGhpcy5hY3Rpb25BbGxvd2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm9keS5yb3dTZWxlY3Quc3Vic2NyaWJlKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSByb3dcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIF90aGlzLnJvd1NlbGVjdC5lbWl0KHJvdyk7IH0pKTtcbiAgICAgICAgdGhpcy5ib2R5LnJvd0FjdGlvbi5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gX3RoaXMucm93QWN0aW9uLmVtaXQoYWN0aW9uKTsgfSkpO1xuICAgICAgICB0aGlzLmZvb3RlciA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KHRoaXMuZm9vdGVyRWxlbWVudCwgY29tcHMuZm9vdGVyKTtcbiAgICAgICAgdGhpcy5mb290ZXIuaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIHRoaXMuZm9vdGVyLmJvZHkgPSB0aGlzLmJvZHk7XG4gICAgICAgIHRoaXMuZm9vdGVyLmFjdGlvbkFsbG93ZWQgPSB0aGlzLmFjdGlvbkFsbG93ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb290ZXIuY3JlYXRlVGV4dCA9IHRoaXMuY3JlYXRlVGV4dDtcbiAgICAgICAgdGhpcy5mb290ZXIuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgdGhpcy5mb290ZXIucGFnZUNoYW5nZWQuc3Vic2NyaWJlKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYWdlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAocGFnZSkgeyByZXR1cm4gX3RoaXMucGFnZUNoYW5nZWQocGFnZSk7IH0pKTtcbiAgICAgICAgdGhpcy5mb290ZXIuY3JlYXRlSXRlbS5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGl0ZW1cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBfdGhpcy5jcmVhdGVJdGVtLmVtaXQoaXRlbSk7IH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpZiAoKGNoYW5nZXMuc3JjICYmIGNoYW5nZXMuc3JjLmN1cnJlbnRWYWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAoY2hhbmdlcy5mb3JtaW8gJiYgY2hhbmdlcy5mb3JtaW8uY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEdyaWQoY2hhbmdlcy5zcmMuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zICYmIGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoR3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvb3RlciAmJlxuICAgICAgICAgICAgKGNoYW5nZXMuY3JlYXRlVGV4dCAmJiBjaGFuZ2VzLmNyZWF0ZVRleHQuY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5mb290ZXIuY3JlYXRlVGV4dCA9IGNoYW5nZXMuY3JlYXRlVGV4dC5jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWxlcnRzLnNldEFsZXJ0cyhbXSk7XG4gICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgICAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gcXVlcnlcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChxdWVyeSkgeyByZXR1cm4gX3RoaXMucmVmcmVzaEdyaWQocXVlcnkpOyB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkR3JpZCh0aGlzLnNyYyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFjdGlvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuYWN0aW9uQWxsb3dlZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gYWN0aW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3Rpb25BbGxvd2VkKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlcnJvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUub25FcnJvciA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyb3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyb3IpO1xuICAgICAgICB0aGlzLmFsZXJ0cy5zZXRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gcXVlcnlcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLnJlZnJlc2hHcmlkID0gLyoqXG4gICAgICogQHBhcmFtIHs/PX0gcXVlcnlcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFsZXJ0cy5zZXRBbGVydHMoW10pO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkgfHwgdGhpcy5xdWVyeTtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdsaW1pdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmxpbWl0ID0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdza2lwJykpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkuc2tpcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIEZvcm1pby5jYWNoZSA9IHt9O1xuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBsb2FkZXIgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pdGVtcykge1xuICAgICAgICAgICAgbG9hZGVyID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYm9keS5zZXRSb3dzKHRoaXMucXVlcnksIHRoaXMuaXRlbXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IHRoaXMuYm9keS5sb2FkKHRoaXMuZm9ybWlvLCB0aGlzLnF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGVyLnRoZW4oKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZm9cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBfdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pKS5jYXRjaCgoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gX3RoaXMub25FcnJvcihlcnJvcik7IH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IG51bVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuc2V0UGFnZSA9IC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IG51bVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG51bSkge1xuICAgICAgICBpZiAobnVtID09PSB2b2lkIDApIHsgbnVtID0gLTE7IH1cbiAgICAgICAgdGhpcy5wYWdlID0gbnVtICE9PSAtMSA/IG51bSA6IHRoaXMucGFnZTtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdsaW1pdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmxpbWl0ID0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdza2lwJykpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkuc2tpcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xdWVyeS5za2lwID0gdGhpcy5wYWdlICogdGhpcy5xdWVyeS5saW1pdDtcbiAgICAgICAgdGhpcy5yZWZyZXNoR3JpZCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBoZWFkZXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLnNvcnRDb2x1bW4gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGhlYWRlclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICAvLyBSZXNldCBhbGwgb3RoZXIgY29sdW1uIHNvcnRzLlxuICAgICAgICBlYWNoKHRoaXMuaGVhZGVyLmhlYWRlcnMsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIGlmIChjb2wua2V5ICE9PSBoZWFkZXIua2V5KSB7XG4gICAgICAgICAgICAgICAgY29sLnNvcnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBzd2l0Y2ggKGhlYWRlci5zb3J0KSB7XG4gICAgICAgICAgICBjYXNlICdhc2MnOlxuICAgICAgICAgICAgICAgIGhlYWRlci5zb3J0ID0gU29ydFR5cGUuREVTQztcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5LnNvcnQgPSAnLScgKyBoZWFkZXIua2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVzYyc6XG4gICAgICAgICAgICAgICAgaGVhZGVyLnNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcnkuc29ydDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgIGhlYWRlci5zb3J0ID0gU29ydFR5cGUuQVNDO1xuICAgICAgICAgICAgICAgIHRoaXMucXVlcnkuc29ydCA9IGhlYWRlci5rZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoR3JpZCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYWdlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5wYWdlQ2hhbmdlZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFnZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHBhZ2UucGFnZSAtIDEpO1xuICAgIH07XG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtaW8tZ3JpZCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogW1wiLmZvcm1pby1ncmlkIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTAwJTsgfSAuZ3JpZC1yZWZyZXNoIHsgaGVpZ2h0OiA0MDBweDsgd2lkdGg6IDEwMCU7IH0gXCJdLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8bmctdGVtcGxhdGUgI2hlYWRlclRlbXBsYXRlPjwvbmctdGVtcGxhdGU+IDxuZy10ZW1wbGF0ZSAjYm9keVRlbXBsYXRlPjwvbmctdGVtcGxhdGU+IDxuZy10ZW1wbGF0ZSAjZm9vdGVyVGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4gPGRpdiBjbGFzcz1cXFwiZm9ybWlvLWdyaWRcXFwiPiA8Zm9ybWlvLWFsZXJ0cyBbYWxlcnRzXT1cXFwiYWxlcnRzXFxcIj48L2Zvcm1pby1hbGVydHM+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclxcXCI+IDxuZy1jb250YWluZXIgKm5nSWY9XFxcImluaXRpYWxpemVkICYmIFtmb290ZXJQb3NpdGlvbnMudG9wLCBmb290ZXJQb3NpdGlvbnMuYm90aF0uaW5kZXhPZihmb290ZXJQb3NpdGlvbikgIT09IC0xXFxcIiBbbmdUZW1wbGF0ZU91dGxldF09XFxcImZvb3Rlci50ZW1wbGF0ZVxcXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwieyBwb3NpdGlvbjogZm9vdGVyUG9zaXRpb25zLnRvcCB9XFxcIj4gPC9uZy1jb250YWluZXI+IDxuZy1jb250YWluZXIgKm5nSWY9XFxcImluaXRpYWxpemVkXFxcIiBbbmdUZW1wbGF0ZU91dGxldF09XFxcImhlYWRlci50ZW1wbGF0ZVxcXCI+PC9uZy1jb250YWluZXI+IDxmb3JtaW8tbG9hZGVyIFtpc0xvYWRpbmddPVxcXCJpc0xvYWRpbmdcXFwiPjwvZm9ybWlvLWxvYWRlcj4gPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwiaW5pdGlhbGl6ZWRcXFwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiYm9keS50ZW1wbGF0ZVxcXCI+PC9uZy1jb250YWluZXI+IDxuZy1jb250YWluZXIgKm5nSWY9XFxcImluaXRpYWxpemVkICYmIFtmb290ZXJQb3NpdGlvbnMuYm90dG9tLCBmb290ZXJQb3NpdGlvbnMuYm90aF0uaW5kZXhPZihmb290ZXJQb3NpdGlvbikgIT09IC0xXFxcIiBbbmdUZW1wbGF0ZU91dGxldF09XFxcImZvb3Rlci50ZW1wbGF0ZVxcXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwieyBwb3NpdGlvbjogZm9vdGVyUG9zaXRpb25zLmJvdHRvbSB9XFxcIj4gPC9uZy1jb250YWluZXI+IDwvdGFibGU+IDwvZGl2PiBcIlxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9BbGVydHMgfSxcbiAgICAgICAgeyB0eXBlOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSxcbiAgICAgICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiB9XG4gICAgXTsgfTtcbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICBmb290ZXJQb3NpdGlvbjogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIHNyYzogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGl0ZW1zOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgb25Gb3JtOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgcXVlcnk6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICByZWZyZXNoOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgY29sdW1uczogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGdyaWRUeXBlOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgc2l6ZTogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGNvbXBvbmVudHM6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICBmb3JtaW86IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICBjcmVhdGVUZXh0OiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgaXNBY3Rpb25BbGxvd2VkOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgc2VsZWN0OiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIHJvd1NlbGVjdDogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICByb3dBY3Rpb246IFt7IHR5cGU6IE91dHB1dCB9XSxcbiAgICAgICAgY3JlYXRlSXRlbTogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICBlcnJvcjogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICBoZWFkZXJFbGVtZW50OiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFsnaGVhZGVyVGVtcGxhdGUnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9LF0gfV0sXG4gICAgICAgIGJvZHlFbGVtZW50OiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFsnYm9keVRlbXBsYXRlJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSxdIH1dLFxuICAgICAgICBmb290ZXJFbGVtZW50OiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFsnZm9vdGVyVGVtcGxhdGUnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9LF0gfV1cbiAgICB9O1xuICAgIHJldHVybiBGb3JtaW9HcmlkQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb0dyaWRDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5mb290ZXJQb3NpdGlvbjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuc3JjO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5pdGVtcztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUub25Gb3JtO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5xdWVyeTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUucmVmcmVzaDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuY29sdW1ucztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuZ3JpZFR5cGU7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLnNpemU7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudHM7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmZvcm1pbztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlVGV4dDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuaXNBY3Rpb25BbGxvd2VkO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3Q7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLnJvd1NlbGVjdDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUucm93QWN0aW9uO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5jcmVhdGVJdGVtO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5lcnJvcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuaGVhZGVyRWxlbWVudDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuYm9keUVsZW1lbnQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmZvb3RlckVsZW1lbnQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLnBhZ2U7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmlzTG9hZGluZztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZWQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmhlYWRlcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuYm9keTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUuZm9vdGVyO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9HcmlkQ29tcG9uZW50LnByb3RvdHlwZS5mb290ZXJQb3NpdGlvbnM7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLmFsZXJ0cztcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEZvcm1pb0dyaWRDb21wb25lbnQucHJvdG90eXBlLnJlc29sdmVyO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHs/fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgRm9ybWlvR3JpZENvbXBvbmVudC5wcm90b3R5cGUucmVmO1xufVxuIl19