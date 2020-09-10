/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, EventEmitter, Injectable, Optional } from '@angular/core';
import { FormioResourceConfig } from './resource.config';
import { FormioResources } from './resources.service';
import { FormioPromiseService } from '../formio-promise.service';
import { FormioAlerts } from '../components/alerts/formio.alerts';
import { FormioAppConfig } from '../formio.config';
import Promise from 'native-promise-only';
import { Formio, Utils } from 'formio-custom/formiojs';
import _ from 'lodash';
import * as ɵngcc0 from '@angular/core';
var FormioResourceService = /** @class */ (function () {
    function FormioResourceService(appConfig, config, resourcesService, appRef) {
        var _this = this;
        this.appConfig = appConfig;
        this.config = config;
        this.resourcesService = resourcesService;
        this.appRef = appRef;
        this.initialized = false;
        this.isLoading = true;
        this.alerts = new FormioAlerts();
        this.refresh = new EventEmitter();
        this.formLoaded = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.formResolve = resolve;
            _this.formReject = reject;
        }));
        this.init();
    }
    /**
     * @return {?}
     */
    FormioResourceService.prototype.initialize = /**
     * @return {?}
     */
    function () {
        console.warn('FormioResourceService.initialize() has been deprecated.');
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
            Formio.formOnly = this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        // Create the form url and load the resources.
        this.formUrl = this.appConfig.appUrl + '/' + this.config.form;
        this.resource = { data: {} };
        // Add this resource service to the list of all resources in context.
        if (this.resourcesService) {
            this.resources = this.resourcesService.resources;
            this.resources[this.config.name] = this;
        }
        return this.loadForm();
    };
    /**
     * @param {?} error
     * @return {?}
     */
    FormioResourceService.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.alerts.setAlert({
            type: 'danger',
            message: error.message || error
        });
        if (this.resourcesService) {
            this.resourcesService.error.emit(error);
        }
        throw error;
    };
    /**
     * @param {?} err
     * @return {?}
     */
    FormioResourceService.prototype.onFormError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.formReject(err);
        this.onError(err);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    FormioResourceService.prototype.setContext = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        this.resourceId = route.snapshot.params['id'];
        this.resource = { data: {} };
        this.resourceUrl = this.appConfig.appUrl + '/' + this.config.form;
        if (this.resourceId) {
            this.resourceUrl += '/submission/' + this.resourceId;
        }
        this.formio = new FormioPromiseService(this.resourceUrl);
        if (this.resourcesService) {
            this.resources[this.config.name] = this;
        }
        this.loadParents();
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.loadForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formFormio = new FormioPromiseService(this.formUrl);
        this.isLoading = true;
        this.formLoading = this.formFormio
            .loadForm()
            .then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            _this.form = form;
            _this.formResolve(form);
            _this.isLoading = false;
            _this.loadParents();
            return form;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onFormError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onFormError(err); }));
        return this.formLoading;
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.loadParents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.config.parents || !this.config.parents.length) {
            return Promise.resolve([]);
        }
        if (!this.resourcesService) {
            console.warn('You must provide the FormioResources within your application to use nested resources.');
            return Promise.resolve([]);
        }
        return this.formLoading.then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            // Iterate through the list of parents.
            /** @type {?} */
            var _parentsLoaded = [];
            _this.config.parents.forEach((/**
             * @param {?} parent
             * @return {?}
             */
            function (parent) {
                /** @type {?} */
                var resourceName = parent.resource || parent;
                /** @type {?} */
                var resourceField = parent.field || parent;
                /** @type {?} */
                var filterResource = parent.hasOwnProperty('filter') ? parent.filter : true;
                if (_this.resources.hasOwnProperty(resourceName) && _this.resources[resourceName].resourceLoaded) {
                    _parentsLoaded.push(_this.resources[resourceName].resourceLoaded.then((/**
                     * @param {?} resource
                     * @return {?}
                     */
                    function (resource) {
                        /** @type {?} */
                        var parentPath = '';
                        Utils.eachComponent(form.components, (/**
                         * @param {?} component
                         * @param {?} path
                         * @return {?}
                         */
                        function (component, path) {
                            if (component.key === resourceField) {
                                component.hidden = true;
                                component.clearOnHide = false;
                                _.set(_this.resource.data, path, resource);
                                parentPath = path;
                                return true;
                            }
                        }));
                        return {
                            name: parentPath,
                            filter: filterResource,
                            resource: resource
                        };
                    })));
                }
            }));
            // When all the parents have loaded, emit that to the onParents emitter.
            return Promise.all(_parentsLoaded).then((/**
             * @param {?} parents
             * @return {?}
             */
            function (parents) {
                _this.refresh.emit({
                    form: form,
                    submission: _this.resource
                });
                return parents;
            }));
        }));
    };
    /**
     * @param {?} err
     * @return {?}
     */
    FormioResourceService.prototype.onSubmissionError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.onError(err);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    FormioResourceService.prototype.loadResource = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        var _this = this;
        this.setContext(route);
        this.isLoading = true;
        this.resourceLoading = this.resourceLoaded = this.formio
            .loadSubmission(null, { ignoreCache: true })
            .then((/**
         * @param {?} resource
         * @return {?}
         */
        function (resource) {
            _this.resource = resource;
            _this.isLoading = false;
            _this.refresh.emit({
                property: 'submission',
                value: _this.resource
            });
            return resource;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onSubmissionError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onSubmissionError(err); }));
        return this.resourceLoading;
    };
    /**
     * @param {?} resource
     * @return {?}
     */
    FormioResourceService.prototype.save = /**
     * @param {?} resource
     * @return {?}
     */
    function (resource) {
        var _this = this;
        /** @type {?} */
        var formio = resource._id ? this.formio : this.formFormio;
        return formio
            .saveSubmission(resource)
            .then((/**
         * @param {?} saved
         * @return {?}
         */
        function (saved) {
            _this.resource = saved;
            return saved;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }));
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.remove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.formio
            .deleteSubmission()
            .then((/**
         * @return {?}
         */
        function () {
            _this.resource = null;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }));
    };
    /** @nocollapse */
    FormioResourceService.ctorParameters = function () { return [
        { type: FormioAppConfig },
        { type: FormioResourceConfig },
        { type: FormioResources, decorators: [{ type: Optional }] },
        { type: ApplicationRef }
    ]; };
FormioResourceService.ɵfac = function FormioResourceService_Factory(t) { return new (t || FormioResourceService)(ɵngcc0.ɵɵinject(FormioAppConfig), ɵngcc0.ɵɵinject(FormioResourceConfig), ɵngcc0.ɵɵinject(FormioResources, 8), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef)); };
FormioResourceService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FormioResourceService, factory: function (t) { return FormioResourceService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceService, [{
        type: Injectable
    }], function () { return [{ type: FormioAppConfig }, { type: FormioResourceConfig }, { type: FormioResources, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ApplicationRef }]; }, null); })();
    return FormioResourceService;
}());
export { FormioResourceService };
if (false) {
    /** @type {?} */
    FormioResourceService.prototype.initialized;
    /** @type {?} */
    FormioResourceService.prototype.form;
    /** @type {?} */
    FormioResourceService.prototype.alerts;
    /** @type {?} */
    FormioResourceService.prototype.resource;
    /** @type {?} */
    FormioResourceService.prototype.resourceUrl;
    /** @type {?} */
    FormioResourceService.prototype.formUrl;
    /** @type {?} */
    FormioResourceService.prototype.formFormio;
    /** @type {?} */
    FormioResourceService.prototype.formio;
    /** @type {?} */
    FormioResourceService.prototype.refresh;
    /** @type {?} */
    FormioResourceService.prototype.resourceLoading;
    /** @type {?} */
    FormioResourceService.prototype.resourceLoaded;
    /** @type {?} */
    FormioResourceService.prototype.resourceId;
    /** @type {?} */
    FormioResourceService.prototype.resources;
    /** @type {?} */
    FormioResourceService.prototype.formLoading;
    /** @type {?} */
    FormioResourceService.prototype.formLoaded;
    /** @type {?} */
    FormioResourceService.prototype.formResolve;
    /** @type {?} */
    FormioResourceService.prototype.formReject;
    /** @type {?} */
    FormioResourceService.prototype.isLoading;
    /** @type {?} */
    FormioResourceService.prototype.appConfig;
    /** @type {?} */
    FormioResourceService.prototype.config;
    /** @type {?} */
    FormioResourceService.prototype.resourcesService;
    /** @type {?} */
    FormioResourceService.prototype.appRef;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZXMiOlsicmVzb3VyY2Uuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUdNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7bUVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogcmVzb3VyY2UvcmVzb3VyY2Uuc2VydmljZS50c1xuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VDb25maWcgfSBmcm9tICcuL3Jlc291cmNlLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb1Byb21pc2VTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybWlvLXByb21pc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0cy9mb3JtaW8uYWxlcnRzJztcbmltcG9ydCB7IEZvcm1pb0FwcENvbmZpZyB9IGZyb20gJy4uL2Zvcm1pby5jb25maWcnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnbmF0aXZlLXByb21pc2Utb25seSc7XG5pbXBvcnQgeyBGb3JtaW8sIFV0aWxzIH0gZnJvbSAnZm9ybWlvanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbnZhciBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9ybWlvUmVzb3VyY2VTZXJ2aWNlKGFwcENvbmZpZywgY29uZmlnLCByZXNvdXJjZXNTZXJ2aWNlLCBhcHBSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hcHBDb25maWcgPSBhcHBDb25maWc7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnJlc291cmNlc1NlcnZpY2UgPSByZXNvdXJjZXNTZXJ2aWNlO1xuICAgICAgICB0aGlzLmFwcFJlZiA9IGFwcFJlZjtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gbmV3IEZvcm1pb0FsZXJ0cygpO1xuICAgICAgICB0aGlzLnJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuZm9ybUxvYWRlZCA9IG5ldyBQcm9taXNlKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSByZXNvbHZlXG4gICAgICAgICAqIEBwYXJhbSB7P30gcmVqZWN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5mb3JtUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBfdGhpcy5mb3JtUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Zvcm1pb1Jlc291cmNlU2VydmljZS5pbml0aWFsaXplKCkgaGFzIGJlZW4gZGVwcmVjYXRlZC4nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5pbml0ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFwcENvbmZpZyAmJiB0aGlzLmFwcENvbmZpZy5hcHBVcmwpIHtcbiAgICAgICAgICAgIEZvcm1pby5zZXRCYXNlVXJsKHRoaXMuYXBwQ29uZmlnLmFwaVVybCk7XG4gICAgICAgICAgICBGb3JtaW8uc2V0UHJvamVjdFVybCh0aGlzLmFwcENvbmZpZy5hcHBVcmwpO1xuICAgICAgICAgICAgRm9ybWlvLmZvcm1Pbmx5ID0gdGhpcy5hcHBDb25maWcuZm9ybU9ubHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGFuIEFwcENvbmZpZyB3aXRoaW4geW91ciBhcHBsaWNhdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvcm0gdXJsIGFuZCBsb2FkIHRoZSByZXNvdXJjZXMuXG4gICAgICAgIHRoaXMuZm9ybVVybCA9IHRoaXMuYXBwQ29uZmlnLmFwcFVybCArICcvJyArIHRoaXMuY29uZmlnLmZvcm07XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSB7IGRhdGE6IHt9IH07XG4gICAgICAgIC8vIEFkZCB0aGlzIHJlc291cmNlIHNlcnZpY2UgdG8gdGhlIGxpc3Qgb2YgYWxsIHJlc291cmNlcyBpbiBjb250ZXh0LlxuICAgICAgICBpZiAodGhpcy5yZXNvdXJjZXNTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcyA9IHRoaXMucmVzb3VyY2VzU2VydmljZS5yZXNvdXJjZXM7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEZvcm0oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyb3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUub25FcnJvciA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyb3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0cy5zZXRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzU2VydmljZS5lcnJvci5lbWl0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLm9uRm9ybUVycm9yID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5mb3JtUmVqZWN0KGVycik7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByb3V0ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSByb3V0ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VJZCA9IHJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHsgZGF0YToge30gfTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVVybCA9IHRoaXMuYXBwQ29uZmlnLmFwcFVybCArICcvJyArIHRoaXMuY29uZmlnLmZvcm07XG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VVcmwgKz0gJy9zdWJtaXNzaW9uLycgKyB0aGlzLnJlc291cmNlSWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtaW8gPSBuZXcgRm9ybWlvUHJvbWlzZVNlcnZpY2UodGhpcy5yZXNvdXJjZVVybCk7XG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMuY29uZmlnLm5hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRQYXJlbnRzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUubG9hZEZvcm0gPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mb3JtRm9ybWlvID0gbmV3IEZvcm1pb1Byb21pc2VTZXJ2aWNlKHRoaXMuZm9ybVVybCk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb3JtTG9hZGluZyA9IHRoaXMuZm9ybUZvcm1pb1xuICAgICAgICAgICAgLmxvYWRGb3JtKClcbiAgICAgICAgICAgIC50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgX3RoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgICAgICBfdGhpcy5mb3JtUmVzb2x2ZShmb3JtKTtcbiAgICAgICAgICAgIF90aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMubG9hZFBhcmVudHMoKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtO1xuICAgICAgICB9KSwgKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVyclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMub25Gb3JtRXJyb3IoZXJyKTsgfSkpXG4gICAgICAgICAgICAuY2F0Y2goKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVyclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMub25Gb3JtRXJyb3IoZXJyKTsgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtTG9hZGluZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5sb2FkUGFyZW50cyA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnBhcmVudHMgfHwgIXRoaXMuY29uZmlnLnBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVzb3VyY2VzU2VydmljZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBwcm92aWRlIHRoZSBGb3JtaW9SZXNvdXJjZXMgd2l0aGluIHlvdXIgYXBwbGljYXRpb24gdG8gdXNlIG5lc3RlZCByZXNvdXJjZXMuJyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtTG9hZGluZy50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBsaXN0IG9mIHBhcmVudHMuXG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgX3BhcmVudHNMb2FkZWQgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmNvbmZpZy5wYXJlbnRzLmZvckVhY2goKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlTmFtZSA9IHBhcmVudC5yZXNvdXJjZSB8fCBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZUZpZWxkID0gcGFyZW50LmZpZWxkIHx8IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlclJlc291cmNlID0gcGFyZW50Lmhhc093blByb3BlcnR5KCdmaWx0ZXInKSA/IHBhcmVudC5maWx0ZXIgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZXNvdXJjZXMuaGFzT3duUHJvcGVydHkocmVzb3VyY2VOYW1lKSAmJiBfdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2VOYW1lXS5yZXNvdXJjZUxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50c0xvYWRlZC5wdXNoKF90aGlzLnJlc291cmNlc1tyZXNvdXJjZU5hbWVdLnJlc291cmNlTG9hZGVkLnRoZW4oKC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0gez99IHJlc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRQYXRoID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5lYWNoQ29tcG9uZW50KGZvcm0uY29tcG9uZW50cywgKC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNvbXBvbmVudCwgcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQua2V5ID09PSByZXNvdXJjZUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuY2xlYXJPbkhpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5zZXQoX3RoaXMucmVzb3VyY2UuZGF0YSwgcGF0aCwgcmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRQYXRoID0gcGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyUmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHJlc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIFdoZW4gYWxsIHRoZSBwYXJlbnRzIGhhdmUgbG9hZGVkLCBlbWl0IHRoYXQgdG8gdGhlIG9uUGFyZW50cyBlbWl0dGVyLlxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF9wYXJlbnRzTG9hZGVkKS50aGVuKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50c1xuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKHBhcmVudHMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgICAgICAgICAgICBzdWJtaXNzaW9uOiBfdGhpcy5yZXNvdXJjZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVyclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5vblN1Ym1pc3Npb25FcnJvciA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByb3V0ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5sb2FkUmVzb3VyY2UgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHJvdXRlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KHJvdXRlKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc291cmNlTG9hZGluZyA9IHRoaXMucmVzb3VyY2VMb2FkZWQgPSB0aGlzLmZvcm1pb1xuICAgICAgICAgICAgLmxvYWRTdWJtaXNzaW9uKG51bGwsIHsgaWdub3JlQ2FjaGU6IHRydWUgfSlcbiAgICAgICAgICAgIC50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSByZXNvdXJjZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICAgICAgICAgICAgX3RoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnc3VibWlzc2lvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLnJlc291cmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgfSksICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLm9uU3VibWlzc2lvbkVycm9yKGVycik7IH0pKVxuICAgICAgICAgICAgLmNhdGNoKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLm9uU3VibWlzc2lvbkVycm9yKGVycik7IH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VMb2FkaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXNvdXJjZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5zYXZlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXNvdXJjZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGZvcm1pbyA9IHJlc291cmNlLl9pZCA/IHRoaXMuZm9ybWlvIDogdGhpcy5mb3JtRm9ybWlvO1xuICAgICAgICByZXR1cm4gZm9ybWlvXG4gICAgICAgICAgICAuc2F2ZVN1Ym1pc3Npb24ocmVzb3VyY2UpXG4gICAgICAgICAgICAudGhlbigoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gc2F2ZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChzYXZlZCkge1xuICAgICAgICAgICAgX3RoaXMucmVzb3VyY2UgPSBzYXZlZDtcbiAgICAgICAgICAgIHJldHVybiBzYXZlZDtcbiAgICAgICAgfSksICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLm9uRXJyb3IoZXJyKTsgfSkpXG4gICAgICAgICAgICAuY2F0Y2goKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVyclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMub25FcnJvcihlcnIpOyB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUucmVtb3ZlID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1pb1xuICAgICAgICAgICAgLmRlbGV0ZVN1Ym1pc3Npb24oKVxuICAgICAgICAgICAgLnRoZW4oKC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVzb3VyY2UgPSBudWxsO1xuICAgICAgICB9KSwgKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVyclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMub25FcnJvcihlcnIpOyB9KSlcbiAgICAgICAgICAgIC5jYXRjaCgoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBfdGhpcy5vbkVycm9yKGVycik7IH0pKTtcbiAgICB9O1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9BcHBDb25maWcgfSxcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9SZXNvdXJjZUNvbmZpZyB9LFxuICAgICAgICB7IHR5cGU6IEZvcm1pb1Jlc291cmNlcywgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfV0gfSxcbiAgICAgICAgeyB0eXBlOiBBcHBsaWNhdGlvblJlZiB9XG4gICAgXTsgfTtcbiAgICByZXR1cm4gRm9ybWlvUmVzb3VyY2VTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb1Jlc291cmNlU2VydmljZSB9O1xuaWYgKGZhbHNlKSB7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUuaW5pdGlhbGl6ZWQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUuZm9ybTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5hbGVydHM7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUucmVzb3VyY2U7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUucmVzb3VyY2VVcmw7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUuZm9ybVVybDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5mb3JtRm9ybWlvO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLmZvcm1pbztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5yZWZyZXNoO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLnJlc291cmNlTG9hZGluZztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5yZXNvdXJjZUxvYWRlZDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5yZXNvdXJjZUlkO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLnJlc291cmNlcztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5mb3JtTG9hZGluZztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5mb3JtTG9hZGVkO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLmZvcm1SZXNvbHZlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLmZvcm1SZWplY3Q7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUuaXNMb2FkaW5nO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVNlcnZpY2UucHJvdG90eXBlLmFwcENvbmZpZztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5jb25maWc7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlU2VydmljZS5wcm90b3R5cGUucmVzb3VyY2VzU2VydmljZTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlLnByb3RvdHlwZS5hcHBSZWY7XG59XG4iXX0=