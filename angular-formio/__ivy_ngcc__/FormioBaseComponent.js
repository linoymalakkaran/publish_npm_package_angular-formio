/**
 * @fileoverview added by tsickle
 * Generated from: FormioBaseComponent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, Input, NgZone, Optional, Output, ViewChild } from '@angular/core';
import { FormioService } from './formio.service';
import { FormioAlerts } from './components/alerts/formio.alerts';
import { FormioAppConfig } from './formio.config';
import { assign, get, isEmpty } from 'lodash';
import { CustomTagsService } from './custom-component/custom-tags.service';
import Evaluator from 'formio-custom/formiojs/utils/Evaluator';
import { AlertsPosition } from './types/alerts-position';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["formio"];
var FormioBaseComponent = /** @class */ (function () {
    function FormioBaseComponent(ngZone, config, customTags) {
        var _this = this;
        this.ngZone = ngZone;
        this.config = config;
        this.customTags = customTags;
        this.submission = {};
        this.noeval = false;
        this.readOnly = false;
        this.viewOnly = false;
        this.hooks = {};
        this.watchSubmissionErrors = false;
        this.render = new EventEmitter();
        this.customEvent = new EventEmitter();
        this.submit = new EventEmitter();
        this.prevPage = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.beforeSubmit = new EventEmitter();
        this.change = new EventEmitter();
        this.invalid = new EventEmitter();
        this.errorChange = new EventEmitter();
        this.formLoad = new EventEmitter();
        this.submissionLoad = new EventEmitter();
        this.ready = new EventEmitter();
        this.AlertsPosition = AlertsPosition;
        this.initialized = false;
        this.alerts = new FormioAlerts();
        this.submitting = false;
        this.submissionSuccess = false;
        this.isLoading = true;
        this.formioReady = new Promise((/**
         * @param {?} ready
         * @return {?}
         */
        function (ready) {
            _this.formioReadyResolve = ready;
        }));
    }
    /**
     * @return {?}
     */
    FormioBaseComponent.prototype.getRenderer = /**
     * @return {?}
     */
    function () {
        return this.renderer;
    };
    /**
     * @return {?}
     */
    FormioBaseComponent.prototype.getRendererOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var extraTags = this.customTags ? this.customTags.tags : [];
        return assign({}, {
            icons: get(this.config, 'icons', 'fontawesome'),
            noAlerts: get(this.options, 'noAlerts', true),
            readOnly: this.readOnly,
            viewAsHtml: this.viewOnly,
            i18n: get(this.options, 'i18n', null),
            fileService: get(this.options, 'fileService', null),
            hooks: this.hooks,
            sanitizeConfig: {
                addTags: extraTags
            }
        }, this.renderOptions || {});
    };
    /**
     * @return {?}
     */
    FormioBaseComponent.prototype.createRenderer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var Renderer = this.getRenderer();
        /** @type {?} */
        var form = (new Renderer(this.formioElement ? this.formioElement.nativeElement : null, this.form, this.getRendererOptions()));
        return form.instance;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FormioBaseComponent.prototype.setForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        this.form = form;
        if (this.formio) {
            this.formio.destroy();
        }
        // Clear out the element to render the new form.
        if (this.formioElement && this.formioElement.nativeElement) {
            this.formioElement.nativeElement.innerHTML = '';
        }
        this.formio = this.createRenderer();
        this.formio.submission = this.submission;
        if (this.renderOptions && this.renderOptions.validateOnInit) {
            this.formio.setValue(this.submission, { validateOnInit: true });
        }
        if (this.url) {
            this.formio.setUrl(this.url, this.formioOptions || {});
        }
        if (this.src) {
            this.formio.setUrl(this.src, this.formioOptions || {});
        }
        this.formio.nosubmit = true;
        this.formio.on('prevPage', (/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.onPrevPage(data); })); }));
        this.formio.on('nextPage', (/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.onNextPage(data); })); }));
        this.formio.on('change', (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.onChange(value); })); }));
        this.formio.on('customEvent', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.customEvent.emit(event); }));
        }));
        this.formio.on('submit', (/**
         * @param {?} submission
         * @return {?}
         */
        function (submission) {
            return _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.submitForm(submission); }));
        }));
        this.formio.on('error', (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.submissionSuccess = false;
            return _this.onError(err);
        })); }));
        this.formio.on('render', (/**
         * @return {?}
         */
        function () { return _this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.render.emit(); })); }));
        this.formio.on('formLoad', (/**
         * @param {?} loadedForm
         * @return {?}
         */
        function (loadedForm) {
            return _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.formLoad.emit(loadedForm); }));
        }));
        return this.formio.ready.then((/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.isLoading = false;
                _this.ready.emit(_this);
                _this.formioReadyResolve(_this.formio);
                if (_this.formio.submissionReady) {
                    _this.formio.submissionReady.then((/**
                     * @param {?} submission
                     * @return {?}
                     */
                    function (submission) {
                        _this.submissionLoad.emit(submission);
                    }));
                }
            }));
            return _this.formio;
        }));
    };
    /**
     * @return {?}
     */
    FormioBaseComponent.prototype.initialize = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return;
        }
        /** @type {?} */
        var extraTags = this.customTags ? this.customTags.tags : [];
        /** @type {?} */
        var defaultOptions = {
            errors: {
                message: 'Please fix the following errors before submitting.'
            },
            alerts: {
                submitMessage: 'Submission Complete.'
            },
            disableAlerts: false,
            hooks: {
                beforeSubmit: null
            },
            sanitizeConfig: {
                addTags: extraTags
            },
            alertsPosition: AlertsPosition.top,
        };
        this.options = Object.assign(defaultOptions, this.options);
        if (this.options.disableAlerts) {
            this.options.alertsPosition = AlertsPosition.none;
        }
        this.initialized = true;
    };
    /**
     * @return {?}
     */
    FormioBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Evaluator.noeval = this.noeval;
        this.initialize();
        if (this.language) {
            this.language.subscribe((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) {
                _this.formio.language = lang;
            }));
        }
        if (this.refresh) {
            this.refresh.subscribe((/**
             * @param {?} refresh
             * @return {?}
             */
            function (refresh) {
                return _this.onRefresh(refresh);
            }));
        }
        if (this.error) {
            this.error.subscribe((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.onError(err); }));
        }
        if (this.success) {
            this.success.subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
                _this.alerts.setAlert({
                    type: 'success',
                    message: message || get(_this.options, 'alerts.submitMessage')
                });
            }));
        }
        if (this.src) {
            if (!this.service) {
                this.service = new FormioService(this.src);
            }
            this.isLoading = true;
            this.service.loadForm({ params: { live: 1 } }).subscribe((/**
             * @param {?} form
             * @return {?}
             */
            function (form) {
                if (form && form.components) {
                    _this.ngZone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.setForm(form);
                    }));
                }
                // if a submission is also provided.
                if (isEmpty(_this.submission) &&
                    _this.service &&
                    _this.service.formio.submissionId) {
                    _this.service.loadSubmission().subscribe((/**
                     * @param {?} submission
                     * @return {?}
                     */
                    function (submission) {
                        if (_this.readOnly) {
                            _this.formio.options.readOnly = true;
                        }
                        _this.submission = _this.formio.submission = submission;
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return _this.onError(err); }));
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.onError(err); }));
        }
        if (this.url && !this.service) {
            this.service = new FormioService(this.url);
        }
    };
    /**
     * @return {?}
     */
    FormioBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.formio) {
            this.formio.destroy();
        }
    };
    /**
     * @param {?} refresh
     * @return {?}
     */
    FormioBaseComponent.prototype.onRefresh = /**
     * @param {?} refresh
     * @return {?}
     */
    function (refresh) {
        var _this = this;
        this.formioReady.then((/**
         * @return {?}
         */
        function () {
            if (refresh.form) {
                _this.formio.setForm(refresh.form).then((/**
                 * @return {?}
                 */
                function () {
                    if (refresh.submission) {
                        _this.formio.setSubmission(refresh.submission);
                    }
                }));
            }
            else if (refresh.submission) {
                _this.formio.setSubmission(refresh.submission);
            }
            else {
                switch (refresh.property) {
                    case 'submission':
                        _this.formio.submission = refresh.value;
                        break;
                    case 'form':
                        _this.formio.form = refresh.value;
                        break;
                }
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormioBaseComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        Evaluator.noeval = this.noeval;
        this.initialize();
        if (changes.form && changes.form.currentValue) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.setForm(changes.form.currentValue);
            }));
        }
        this.formioReady.then((/**
         * @return {?}
         */
        function () {
            if (changes.submission && changes.submission.currentValue) {
                _this.formio.setSubmission(changes.submission.currentValue, {
                    fromSubmission: false,
                });
            }
            if (changes.hideComponents && changes.hideComponents.currentValue) {
                /** @type {?} */
                var hiddenComponents_1 = changes.hideComponents.currentValue;
                _this.formio.options.hide = hiddenComponents_1;
                _this.formio.everyComponent((/**
                 * @param {?} component
                 * @return {?}
                 */
                function (component) {
                    component.options.hide = hiddenComponents_1;
                    if (hiddenComponents_1.includes(component.component.key)) {
                        component.visible = false;
                    }
                }));
            }
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormioBaseComponent.prototype.onPrevPage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.alerts.setAlerts([]);
        this.prevPage.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormioBaseComponent.prototype.onNextPage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.alerts.setAlerts([]);
        this.nextPage.emit(data);
    };
    /**
     * @param {?} submission
     * @param {?} saved
     * @param {?=} noemit
     * @return {?}
     */
    FormioBaseComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @param {?} saved
     * @param {?=} noemit
     * @return {?}
     */
    function (submission, saved, noemit) {
        this.submitting = false;
        this.submissionSuccess = true;
        if (saved) {
            this.formio.emit('submitDone', submission);
        }
        if (!noemit) {
            this.submit.emit(submission);
        }
        if (!this.success) {
            this.alerts.setAlert({
                type: 'success',
                message: get(this.options, 'alerts.submitMessage')
            });
        }
    };
    /**
     * @param {?} err
     * @return {?}
     */
    FormioBaseComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        var _this = this;
        this.alerts.setAlerts([]);
        this.submitting = false;
        this.isLoading = false;
        if (!err) {
            return;
        }
        // Make sure it is an array.
        /** @type {?} */
        var errors = Array.isArray(err) ? err : [err];
        // Emit these errors again.
        this.errorChange.emit(errors);
        if (err.silent) {
            return;
        }
        if (this.formio && errors.length) {
            this.formio.emit('submitError', errors);
        }
        // Iterate through each one and set the alerts array.
        errors.forEach((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            var _a = error
                ? error.details
                    ? {
                        message: error.details.map((/**
                         * @param {?} detail
                         * @return {?}
                         */
                        function (detail) { return detail.message; })).join(' '),
                        paths: error.details.map((/**
                         * @param {?} detail
                         * @return {?}
                         */
                        function (detail) { return detail.path; })),
                    }
                    : {
                        message: error.message || error.toString(),
                        paths: error.path ? [error.path] : [],
                    }
                : {
                    message: '',
                    paths: [],
                }, message = _a.message, paths = _a.paths;
            _this.alerts.addAlert({
                type: 'danger',
                message: message,
                component: error.component,
            });
            if (_this.formio) {
                paths.forEach((/**
                 * @param {?} path
                 * @return {?}
                 */
                function (path) {
                    /** @type {?} */
                    var component = _this.formio.getComponent(path);
                    if (component) {
                        /** @type {?} */
                        var components = Array.isArray(component) ? component : [component];
                        components.forEach((/**
                         * @param {?} comp
                         * @return {?}
                         */
                        function (comp) { return comp.setCustomValidity(message, true); }));
                    }
                }));
            }
        }));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FormioBaseComponent.prototype.focusOnComponet = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.formio) {
            this.formio.focusOnComponent(key);
        }
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioBaseComponent.prototype.submitExecute = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        if (this.service && !this.url) {
            this.service
                .saveSubmission(submission)
                .subscribe((/**
             * @param {?} sub
             * @return {?}
             */
            function (sub) { return _this.onSubmit(sub, true); }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.onError(err); }));
        }
        else {
            this.onSubmit(submission, false);
        }
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioBaseComponent.prototype.submitForm = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        // Keep double submits from occurring...
        if (this.submitting) {
            return;
        }
        this.submissionSuccess = false;
        this.submitting = true;
        this.beforeSubmit.emit(submission);
        // if they provide a beforeSubmit hook, then allow them to alter the submission asynchronously
        // or even provide a custom Error method.
        /** @type {?} */
        var beforeSubmit = get(this.options, 'hooks.beforeSubmit');
        if (beforeSubmit) {
            beforeSubmit(submission, (/**
             * @param {?} err
             * @param {?} sub
             * @return {?}
             */
            function (err, sub) {
                if (err) {
                    _this.onError(err);
                    return;
                }
                _this.submitExecute(sub);
            }));
        }
        else {
            this.submitExecute(submission);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FormioBaseComponent.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.watchSubmissionErrors && !this.submissionSuccess) {
            /** @type {?} */
            var errors = get(this, 'formio.errors', []);
            /** @type {?} */
            var alerts = get(this, 'alerts.alerts', []);
            /** @type {?} */
            var submitted = get(this, 'formio.submitted', false);
            if (submitted && (errors.length || alerts.length)) {
                this.onError(errors);
            }
        }
        return this.change.emit(value);
    };
    /** @nocollapse */
    FormioBaseComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: FormioAppConfig, decorators: [{ type: Optional }] },
        { type: CustomTagsService, decorators: [{ type: Optional }] }
    ]; };
    FormioBaseComponent.propDecorators = {
        form: [{ type: Input }],
        submission: [{ type: Input }],
        src: [{ type: Input }],
        url: [{ type: Input }],
        service: [{ type: Input }],
        options: [{ type: Input }],
        noeval: [{ type: Input }],
        formioOptions: [{ type: Input }],
        renderOptions: [{ type: Input }],
        readOnly: [{ type: Input }],
        viewOnly: [{ type: Input }],
        hideComponents: [{ type: Input }],
        refresh: [{ type: Input }],
        error: [{ type: Input }],
        success: [{ type: Input }],
        language: [{ type: Input }],
        hooks: [{ type: Input }],
        renderer: [{ type: Input }],
        watchSubmissionErrors: [{ type: Input }],
        render: [{ type: Output }],
        customEvent: [{ type: Output }],
        submit: [{ type: Output }],
        prevPage: [{ type: Output }],
        nextPage: [{ type: Output }],
        beforeSubmit: [{ type: Output }],
        change: [{ type: Output }],
        invalid: [{ type: Output }],
        errorChange: [{ type: Output }],
        formLoad: [{ type: Output }],
        submissionLoad: [{ type: Output }],
        ready: [{ type: Output }],
        formioElement: [{ type: ViewChild, args: ['formio', { static: true },] }]
    };
FormioBaseComponent.ɵfac = function FormioBaseComponent_Factory(t) { return new (t || FormioBaseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(FormioAppConfig, 8), ɵngcc0.ɵɵdirectiveInject(CustomTagsService, 8)); };
FormioBaseComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FormioBaseComponent, viewQuery: function FormioBaseComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.formioElement = _t.first);
    } }, inputs: { submission: "submission", noeval: "noeval", readOnly: "readOnly", viewOnly: "viewOnly", hooks: "hooks", watchSubmissionErrors: "watchSubmissionErrors", form: "form", options: "options", service: "service", src: "src", url: "url", formioOptions: "formioOptions", renderOptions: "renderOptions", hideComponents: "hideComponents", refresh: "refresh", error: "error", success: "success", language: "language", renderer: "renderer" }, outputs: { render: "render", customEvent: "customEvent", submit: "submit", prevPage: "prevPage", nextPage: "nextPage", beforeSubmit: "beforeSubmit", change: "change", invalid: "invalid", errorChange: "errorChange", formLoad: "formLoad", submissionLoad: "submissionLoad", ready: "ready" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });

    return FormioBaseComponent;
}());
export { FormioBaseComponent };
if (false) {
    /** @type {?} */
    FormioBaseComponent.prototype.form;
    /** @type {?} */
    FormioBaseComponent.prototype.submission;
    /** @type {?} */
    FormioBaseComponent.prototype.src;
    /** @type {?} */
    FormioBaseComponent.prototype.url;
    /** @type {?} */
    FormioBaseComponent.prototype.service;
    /** @type {?} */
    FormioBaseComponent.prototype.options;
    /** @type {?} */
    FormioBaseComponent.prototype.noeval;
    /** @type {?} */
    FormioBaseComponent.prototype.formioOptions;
    /** @type {?} */
    FormioBaseComponent.prototype.renderOptions;
    /** @type {?} */
    FormioBaseComponent.prototype.readOnly;
    /** @type {?} */
    FormioBaseComponent.prototype.viewOnly;
    /** @type {?} */
    FormioBaseComponent.prototype.hideComponents;
    /** @type {?} */
    FormioBaseComponent.prototype.refresh;
    /** @type {?} */
    FormioBaseComponent.prototype.error;
    /** @type {?} */
    FormioBaseComponent.prototype.success;
    /** @type {?} */
    FormioBaseComponent.prototype.language;
    /** @type {?} */
    FormioBaseComponent.prototype.hooks;
    /** @type {?} */
    FormioBaseComponent.prototype.renderer;
    /** @type {?} */
    FormioBaseComponent.prototype.watchSubmissionErrors;
    /** @type {?} */
    FormioBaseComponent.prototype.render;
    /** @type {?} */
    FormioBaseComponent.prototype.customEvent;
    /** @type {?} */
    FormioBaseComponent.prototype.submit;
    /** @type {?} */
    FormioBaseComponent.prototype.prevPage;
    /** @type {?} */
    FormioBaseComponent.prototype.nextPage;
    /** @type {?} */
    FormioBaseComponent.prototype.beforeSubmit;
    /** @type {?} */
    FormioBaseComponent.prototype.change;
    /** @type {?} */
    FormioBaseComponent.prototype.invalid;
    /** @type {?} */
    FormioBaseComponent.prototype.errorChange;
    /** @type {?} */
    FormioBaseComponent.prototype.formLoad;
    /** @type {?} */
    FormioBaseComponent.prototype.submissionLoad;
    /** @type {?} */
    FormioBaseComponent.prototype.ready;
    /** @type {?} */
    FormioBaseComponent.prototype.formioElement;
    /** @type {?} */
    FormioBaseComponent.prototype.AlertsPosition;
    /** @type {?} */
    FormioBaseComponent.prototype.formio;
    /** @type {?} */
    FormioBaseComponent.prototype.initialized;
    /** @type {?} */
    FormioBaseComponent.prototype.alerts;
    /** @type {?} */
    FormioBaseComponent.prototype.formioReady;
    /**
     * @type {?}
     * @private
     */
    FormioBaseComponent.prototype.formioReadyResolve;
    /**
     * @type {?}
     * @private
     */
    FormioBaseComponent.prototype.submitting;
    /**
     * @type {?}
     * @private
     */
    FormioBaseComponent.prototype.submissionSuccess;
    /** @type {?} */
    FormioBaseComponent.prototype.isLoading;
    /** @type {?} */
    FormioBaseComponent.prototype.ngZone;
    /** @type {?} */
    FormioBaseComponent.prototype.config;
    /** @type {?} */
    FormioBaseComponent.prototype.customTags;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWlvQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiRm9ybWlvQmFzZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IEZvcm1pb0Jhc2VDb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPcHRpb25hbCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuL2Zvcm1pby5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb0FsZXJ0cyB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydHMvZm9ybWlvLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICcuL2Zvcm1pby5jb25maWcnO1xuaW1wb3J0IHsgYXNzaWduLCBnZXQsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ3VzdG9tVGFnc1NlcnZpY2UgfSBmcm9tICcuL2N1c3RvbS1jb21wb25lbnQvY3VzdG9tLXRhZ3Muc2VydmljZSc7XG5pbXBvcnQgRXZhbHVhdG9yIGZyb20gJ2Zvcm1pb2pzL3V0aWxzL0V2YWx1YXRvcic7XG5pbXBvcnQgeyBBbGVydHNQb3NpdGlvbiB9IGZyb20gJy4vdHlwZXMvYWxlcnRzLXBvc2l0aW9uJztcbnZhciBGb3JtaW9CYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb0Jhc2VDb21wb25lbnQobmdab25lLCBjb25maWcsIGN1c3RvbVRhZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmN1c3RvbVRhZ3MgPSBjdXN0b21UYWdzO1xuICAgICAgICB0aGlzLnN1Ym1pc3Npb24gPSB7fTtcbiAgICAgICAgdGhpcy5ub2V2YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpZXdPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaG9va3MgPSB7fTtcbiAgICAgICAgdGhpcy53YXRjaFN1Ym1pc3Npb25FcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuc3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnByZXZQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm5leHRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLmJlZm9yZVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuaW52YWxpZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5lcnJvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5mb3JtTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5zdWJtaXNzaW9uTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5BbGVydHNQb3NpdGlvbiA9IEFsZXJ0c1Bvc2l0aW9uO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gbmV3IEZvcm1pb0FsZXJ0cygpO1xuICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJtaXNzaW9uU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9ybWlvUmVhZHkgPSBuZXcgUHJvbWlzZSgoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcmVhZHlcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChyZWFkeSkge1xuICAgICAgICAgICAgX3RoaXMuZm9ybWlvUmVhZHlSZXNvbHZlID0gcmVhZHk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5nZXRSZW5kZXJlciA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuZ2V0UmVuZGVyZXJPcHRpb25zID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGV4dHJhVGFncyA9IHRoaXMuY3VzdG9tVGFncyA/IHRoaXMuY3VzdG9tVGFncy50YWdzIDogW107XG4gICAgICAgIHJldHVybiBhc3NpZ24oe30sIHtcbiAgICAgICAgICAgIGljb25zOiBnZXQodGhpcy5jb25maWcsICdpY29ucycsICdmb250YXdlc29tZScpLFxuICAgICAgICAgICAgbm9BbGVydHM6IGdldCh0aGlzLm9wdGlvbnMsICdub0FsZXJ0cycsIHRydWUpLFxuICAgICAgICAgICAgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksXG4gICAgICAgICAgICB2aWV3QXNIdG1sOiB0aGlzLnZpZXdPbmx5LFxuICAgICAgICAgICAgaTE4bjogZ2V0KHRoaXMub3B0aW9ucywgJ2kxOG4nLCBudWxsKSxcbiAgICAgICAgICAgIGZpbGVTZXJ2aWNlOiBnZXQodGhpcy5vcHRpb25zLCAnZmlsZVNlcnZpY2UnLCBudWxsKSxcbiAgICAgICAgICAgIGhvb2tzOiB0aGlzLmhvb2tzLFxuICAgICAgICAgICAgc2FuaXRpemVDb25maWc6IHtcbiAgICAgICAgICAgICAgICBhZGRUYWdzOiBleHRyYVRhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5yZW5kZXJPcHRpb25zIHx8IHt9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlUmVuZGVyZXIgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgUmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKCk7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGZvcm0gPSAobmV3IFJlbmRlcmVyKHRoaXMuZm9ybWlvRWxlbWVudCA/IHRoaXMuZm9ybWlvRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbnVsbCwgdGhpcy5mb3JtLCB0aGlzLmdldFJlbmRlcmVyT3B0aW9ucygpKSk7XG4gICAgICAgIHJldHVybiBmb3JtLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmb3JtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRGb3JtID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBmb3JtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICBpZiAodGhpcy5mb3JtaW8pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWlvLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBuZXcgZm9ybS5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWlvRWxlbWVudCAmJiB0aGlzLmZvcm1pb0VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtaW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtaW8gPSB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG4gICAgICAgIHRoaXMuZm9ybWlvLnN1Ym1pc3Npb24gPSB0aGlzLnN1Ym1pc3Npb247XG4gICAgICAgIGlmICh0aGlzLnJlbmRlck9wdGlvbnMgJiYgdGhpcy5yZW5kZXJPcHRpb25zLnZhbGlkYXRlT25Jbml0KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1pby5zZXRWYWx1ZSh0aGlzLnN1Ym1pc3Npb24sIHsgdmFsaWRhdGVPbkluaXQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1pby5zZXRVcmwodGhpcy51cmwsIHRoaXMuZm9ybWlvT3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1pby5zZXRVcmwodGhpcy5zcmMsIHRoaXMuZm9ybWlvT3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtaW8ubm9zdWJtaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvcm1pby5vbigncHJldlBhZ2UnLCAoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGF0YVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLm5nWm9uZS5ydW4oKC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25QcmV2UGFnZShkYXRhKTsgfSkpOyB9KSk7XG4gICAgICAgIHRoaXMuZm9ybWlvLm9uKCduZXh0UGFnZScsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkYXRhXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX3RoaXMubmdab25lLnJ1bigoLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vbk5leHRQYWdlKGRhdGEpOyB9KSk7IH0pKTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub24oJ2NoYW5nZScsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5uZ1pvbmUucnVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uQ2hhbmdlKHZhbHVlKTsgfSkpOyB9KSk7XG4gICAgICAgIHRoaXMuZm9ybWlvLm9uKCdjdXN0b21FdmVudCcsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubmdab25lLnJ1bigoLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jdXN0b21FdmVudC5lbWl0KGV2ZW50KTsgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZm9ybWlvLm9uKCdzdWJtaXQnLCAoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKHN1Ym1pc3Npb24pIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5uZ1pvbmUucnVuKCgvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnN1Ym1pdEZvcm0oc3VibWlzc2lvbik7IH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmZvcm1pby5vbignZXJyb3InLCAoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBfdGhpcy5uZ1pvbmUucnVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN1Ym1pc3Npb25TdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25FcnJvcihlcnIpO1xuICAgICAgICB9KSk7IH0pKTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub24oJ3JlbmRlcicsICgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm5nWm9uZS5ydW4oKC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVuZGVyLmVtaXQoKTsgfSkpOyB9KSk7XG4gICAgICAgIHRoaXMuZm9ybWlvLm9uKCdmb3JtTG9hZCcsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBsb2FkZWRGb3JtXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAobG9hZGVkRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm5nWm9uZS5ydW4oKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm9ybUxvYWQuZW1pdChsb2FkZWRGb3JtKTsgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1pby5yZWFkeS50aGVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm5nWm9uZS5ydW4oKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlYWR5LmVtaXQoX3RoaXMpO1xuICAgICAgICAgICAgICAgIF90aGlzLmZvcm1pb1JlYWR5UmVzb2x2ZShfdGhpcy5mb3JtaW8pO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5mb3JtaW8uc3VibWlzc2lvblJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZvcm1pby5zdWJtaXNzaW9uUmVhZHkudGhlbigoLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHN1Ym1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pc3Npb25Mb2FkLmVtaXQoc3VibWlzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWlvO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBleHRyYVRhZ3MgPSB0aGlzLmN1c3RvbVRhZ3MgPyB0aGlzLmN1c3RvbVRhZ3MudGFncyA6IFtdO1xuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgZml4IHRoZSBmb2xsb3dpbmcgZXJyb3JzIGJlZm9yZSBzdWJtaXR0aW5nLidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGVydHM6IHtcbiAgICAgICAgICAgICAgICBzdWJtaXRNZXNzYWdlOiAnU3VibWlzc2lvbiBDb21wbGV0ZS4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZUFsZXJ0czogZmFsc2UsXG4gICAgICAgICAgICBob29rczoge1xuICAgICAgICAgICAgICAgIGJlZm9yZVN1Ym1pdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhbml0aXplQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgYWRkVGFnczogZXh0cmFUYWdzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxlcnRzUG9zaXRpb246IEFsZXJ0c1Bvc2l0aW9uLnRvcCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlQWxlcnRzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWxlcnRzUG9zaXRpb24gPSBBbGVydHNQb3NpdGlvbi5ub25lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBFdmFsdWF0b3Iubm9ldmFsID0gdGhpcy5ub2V2YWw7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBpZiAodGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZS5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICAgICAgICAgIF90aGlzLmZvcm1pby5sYW5ndWFnZSA9IGxhbmc7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoLnN1YnNjcmliZSgoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHJlZnJlc2hcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uUmVmcmVzaChyZWZyZXNoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLm9uRXJyb3IoZXJyKTsgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzcy5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBtZXNzYWdlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFsZXJ0cy5zZXRBbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXQoX3RoaXMub3B0aW9ucywgJ2FsZXJ0cy5zdWJtaXRNZXNzYWdlJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IEZvcm1pb1NlcnZpY2UodGhpcy5zcmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmxvYWRGb3JtKHsgcGFyYW1zOiB7IGxpdmU6IDEgfSB9KS5zdWJzY3JpYmUoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtICYmIGZvcm0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0Rm9ybShmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiBhIHN1Ym1pc3Npb24gaXMgYWxzbyBwcm92aWRlZC5cbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShfdGhpcy5zdWJtaXNzaW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXJ2aWNlICYmXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlcnZpY2UuZm9ybWlvLnN1Ym1pc3Npb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXJ2aWNlLmxvYWRTdWJtaXNzaW9uKCkuc3Vic2NyaWJlKCgvKipcbiAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc3VibWlzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZm9ybWlvLm9wdGlvbnMucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3VibWlzc2lvbiA9IF90aGlzLmZvcm1pby5zdWJtaXNzaW9uID0gc3VibWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgfSksICgvKipcbiAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLm9uRXJyb3IoZXJyKTsgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCAoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGVyclxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMub25FcnJvcihlcnIpOyB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXJsICYmICF0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBGb3JtaW9TZXJ2aWNlKHRoaXMudXJsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtaW8pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWlvLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByZWZyZXNoXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5vblJlZnJlc2ggPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlZnJlc2hcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChyZWZyZXNoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZm9ybWlvUmVhZHkudGhlbigoLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVmcmVzaC5mb3JtKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZm9ybWlvLnNldEZvcm0ocmVmcmVzaC5mb3JtKS50aGVuKCgvKipcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2guc3VibWlzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZm9ybWlvLnNldFN1Ym1pc3Npb24ocmVmcmVzaC5zdWJtaXNzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZnJlc2guc3VibWlzc2lvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmZvcm1pby5zZXRTdWJtaXNzaW9uKHJlZnJlc2guc3VibWlzc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlZnJlc2gucHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3VibWlzc2lvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5mb3JtaW8uc3VibWlzc2lvbiA9IHJlZnJlc2gudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5mb3JtaW8uZm9ybSA9IHJlZnJlc2gudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEV2YWx1YXRvci5ub2V2YWwgPSB0aGlzLm5vZXZhbDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIGlmIChjaGFuZ2VzLmZvcm0gJiYgY2hhbmdlcy5mb3JtLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEZvcm0oY2hhbmdlcy5mb3JtLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtaW9SZWFkeS50aGVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLnN1Ym1pc3Npb24gJiYgY2hhbmdlcy5zdWJtaXNzaW9uLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmZvcm1pby5zZXRTdWJtaXNzaW9uKGNoYW5nZXMuc3VibWlzc2lvbi5jdXJyZW50VmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVN1Ym1pc3Npb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZXMuaGlkZUNvbXBvbmVudHMgJiYgY2hhbmdlcy5oaWRlQ29tcG9uZW50cy5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIGhpZGRlbkNvbXBvbmVudHNfMSA9IGNoYW5nZXMuaGlkZUNvbXBvbmVudHMuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmZvcm1pby5vcHRpb25zLmhpZGUgPSBoaWRkZW5Db21wb25lbnRzXzE7XG4gICAgICAgICAgICAgICAgX3RoaXMuZm9ybWlvLmV2ZXJ5Q29tcG9uZW50KCgvKipcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gez99IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub3B0aW9ucy5oaWRlID0gaGlkZGVuQ29tcG9uZW50c18xO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZGVuQ29tcG9uZW50c18xLmluY2x1ZGVzKGNvbXBvbmVudC5jb21wb25lbnQua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkYXRhXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5vblByZXZQYWdlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBkYXRhXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmFsZXJ0cy5zZXRBbGVydHMoW10pO1xuICAgICAgICB0aGlzLnByZXZQYWdlLmVtaXQoZGF0YSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRhdGFcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLm9uTmV4dFBhZ2UgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGRhdGFcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzLnNldEFsZXJ0cyhbXSk7XG4gICAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdChkYXRhKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAqIEBwYXJhbSB7P30gc2F2ZWRcbiAgICAgKiBAcGFyYW0gez89fSBub2VtaXRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBzdWJtaXNzaW9uXG4gICAgICogQHBhcmFtIHs/fSBzYXZlZFxuICAgICAqIEBwYXJhbSB7Pz19IG5vZW1pdFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHN1Ym1pc3Npb24sIHNhdmVkLCBub2VtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VibWlzc2lvblN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWlvLmVtaXQoJ3N1Ym1pdERvbmUnLCBzdWJtaXNzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5vZW1pdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQuZW1pdChzdWJtaXNzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5hbGVydHMuc2V0QWxlcnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBnZXQodGhpcy5vcHRpb25zLCAnYWxlcnRzLnN1Ym1pdE1lc3NhZ2UnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5vbkVycm9yID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hbGVydHMuc2V0QWxlcnRzKFtdKTtcbiAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBzdXJlIGl0IGlzIGFuIGFycmF5LlxuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIHZhciBlcnJvcnMgPSBBcnJheS5pc0FycmF5KGVycikgPyBlcnIgOiBbZXJyXTtcbiAgICAgICAgLy8gRW1pdCB0aGVzZSBlcnJvcnMgYWdhaW4uXG4gICAgICAgIHRoaXMuZXJyb3JDaGFuZ2UuZW1pdChlcnJvcnMpO1xuICAgICAgICBpZiAoZXJyLnNpbGVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1pbyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1pby5lbWl0KCdzdWJtaXRFcnJvcicsIGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggb25lIGFuZCBzZXQgdGhlIGFsZXJ0cyBhcnJheS5cbiAgICAgICAgZXJyb3JzLmZvckVhY2goKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGVycm9yXG4gICAgICAgICAgICAgICAgPyBlcnJvci5kZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IuZGV0YWlscy5tYXAoKC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBkZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkZXRhaWwpIHsgcmV0dXJuIGRldGFpbC5tZXNzYWdlOyB9KSkuam9pbignICcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHM6IGVycm9yLmRldGFpbHMubWFwKCgvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGV0YWlsKSB7IHJldHVybiBkZXRhaWwucGF0aDsgfSkpLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHM6IGVycm9yLnBhdGggPyBbZXJyb3IucGF0aF0gOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aHM6IFtdLFxuICAgICAgICAgICAgICAgIH0sIG1lc3NhZ2UgPSBfYS5tZXNzYWdlLCBwYXRocyA9IF9hLnBhdGhzO1xuICAgICAgICAgICAgX3RoaXMuYWxlcnRzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXJyb3IuY29tcG9uZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZm9ybWlvKSB7XG4gICAgICAgICAgICAgICAgcGF0aHMuZm9yRWFjaCgoLyoqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSBfdGhpcy5mb3JtaW8uZ2V0Q29tcG9uZW50KHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IEFycmF5LmlzQXJyYXkoY29tcG9uZW50KSA/IGNvbXBvbmVudCA6IFtjb21wb25lbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKCgvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gY29tcFxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNvbXApIHsgcmV0dXJuIGNvbXAuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSwgdHJ1ZSk7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmZvY3VzT25Db21wb25ldCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1pbykge1xuICAgICAgICAgICAgdGhpcy5mb3JtaW8uZm9jdXNPbkNvbXBvbmVudChrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLnN1Ym1pdEV4ZWN1dGUgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzdWJtaXNzaW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UgJiYgIXRoaXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VcbiAgICAgICAgICAgICAgICAuc2F2ZVN1Ym1pc3Npb24oc3VibWlzc2lvbilcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gc3ViXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBfdGhpcy5vblN1Ym1pdChzdWIsIHRydWUpOyB9KSwgKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLm9uRXJyb3IoZXJyKTsgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChzdWJtaXNzaW9uLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc3VibWl0Rm9ybSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHN1Ym1pc3Npb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gS2VlcCBkb3VibGUgc3VibWl0cyBmcm9tIG9jY3VycmluZy4uLlxuICAgICAgICBpZiAodGhpcy5zdWJtaXR0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJtaXNzaW9uU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmJlZm9yZVN1Ym1pdC5lbWl0KHN1Ym1pc3Npb24pO1xuICAgICAgICAvLyBpZiB0aGV5IHByb3ZpZGUgYSBiZWZvcmVTdWJtaXQgaG9vaywgdGhlbiBhbGxvdyB0aGVtIHRvIGFsdGVyIHRoZSBzdWJtaXNzaW9uIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIG9yIGV2ZW4gcHJvdmlkZSBhIGN1c3RvbSBFcnJvciBtZXRob2QuXG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGJlZm9yZVN1Ym1pdCA9IGdldCh0aGlzLm9wdGlvbnMsICdob29rcy5iZWZvcmVTdWJtaXQnKTtcbiAgICAgICAgaWYgKGJlZm9yZVN1Ym1pdCkge1xuICAgICAgICAgICAgYmVmb3JlU3VibWl0KHN1Ym1pc3Npb24sICgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHN1YlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKGVyciwgc3ViKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuc3VibWl0RXhlY3V0ZShzdWIpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRFeGVjdXRlKHN1Ym1pc3Npb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5vbkNoYW5nZSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy53YXRjaFN1Ym1pc3Npb25FcnJvcnMgJiYgIXRoaXMuc3VibWlzc2lvblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBnZXQodGhpcywgJ2Zvcm1pby5lcnJvcnMnLCBbXSk7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgYWxlcnRzID0gZ2V0KHRoaXMsICdhbGVydHMuYWxlcnRzJywgW10pO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgdmFyIHN1Ym1pdHRlZCA9IGdldCh0aGlzLCAnZm9ybWlvLnN1Ym1pdHRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChzdWJtaXR0ZWQgJiYgKGVycm9ycy5sZW5ndGggfHwgYWxlcnRzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IE5nWm9uZSB9LFxuICAgICAgICB7IHR5cGU6IEZvcm1pb0FwcENvbmZpZywgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfV0gfSxcbiAgICAgICAgeyB0eXBlOiBDdXN0b21UYWdzU2VydmljZSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfV0gfVxuICAgIF07IH07XG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgZm9ybTogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIHN1Ym1pc3Npb246IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICBzcmM6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICB1cmw6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICBzZXJ2aWNlOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgb3B0aW9uczogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIG5vZXZhbDogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGZvcm1pb09wdGlvbnM6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICByZW5kZXJPcHRpb25zOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgcmVhZE9ubHk6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICB2aWV3T25seTogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGhpZGVDb21wb25lbnRzOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgcmVmcmVzaDogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGVycm9yOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgc3VjY2VzczogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGxhbmd1YWdlOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgaG9va3M6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICByZW5kZXJlcjogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIHdhdGNoU3VibWlzc2lvbkVycm9yczogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIHJlbmRlcjogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICBjdXN0b21FdmVudDogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICBzdWJtaXQ6IFt7IHR5cGU6IE91dHB1dCB9XSxcbiAgICAgICAgcHJldlBhZ2U6IFt7IHR5cGU6IE91dHB1dCB9XSxcbiAgICAgICAgbmV4dFBhZ2U6IFt7IHR5cGU6IE91dHB1dCB9XSxcbiAgICAgICAgYmVmb3JlU3VibWl0OiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIGNoYW5nZTogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICBpbnZhbGlkOiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIGVycm9yQ2hhbmdlOiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIGZvcm1Mb2FkOiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIHN1Ym1pc3Npb25Mb2FkOiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIHJlYWR5OiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIGZvcm1pb0VsZW1lbnQ6IFt7IHR5cGU6IFZpZXdDaGlsZCwgYXJnczogWydmb3JtaW8nLCB7IHN0YXRpYzogdHJ1ZSB9LF0gfV1cbiAgICB9O1xuICAgIHJldHVybiBGb3JtaW9CYXNlQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb0Jhc2VDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JtO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zdWJtaXNzaW9uO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zcmM7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLnVybDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc2VydmljZTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUub3B0aW9ucztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUubm9ldmFsO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JtaW9PcHRpb25zO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJPcHRpb25zO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZWFkT25seTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUudmlld09ubHk7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmhpZGVDb21wb25lbnRzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZWZyZXNoO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5lcnJvcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc3VjY2VzcztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUubGFuZ3VhZ2U7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmhvb2tzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJlcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUud2F0Y2hTdWJtaXNzaW9uRXJyb3JzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXI7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmN1c3RvbUV2ZW50O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zdWJtaXQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLnByZXZQYWdlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5uZXh0UGFnZTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuYmVmb3JlU3VibWl0O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5jaGFuZ2U7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmludmFsaWQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmVycm9yQ2hhbmdlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JtTG9hZDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc3VibWlzc2lvbkxvYWQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLnJlYWR5O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JtaW9FbGVtZW50O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5BbGVydHNQb3NpdGlvbjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuZm9ybWlvO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsaXplZDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuYWxlcnRzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JtaW9SZWFkeTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmZvcm1pb1JlYWR5UmVzb2x2ZTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLnN1Ym1pdHRpbmc7XG4gICAgLyoqXG4gICAgICogQHR5cGUgez99XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zdWJtaXNzaW9uU3VjY2VzcztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuaXNMb2FkaW5nO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5uZ1pvbmU7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0Jhc2VDb21wb25lbnQucHJvdG90eXBlLmNvbmZpZztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuY3VzdG9tVGFncztcbn1cbiJdfQ==