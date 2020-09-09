(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/router'), require('formio-adports/formiojs'), require('rxjs'), require('lodash'), require('formiojs/utils/Evaluator'), require('@angular/elements'), require('ngx-bootstrap/pagination')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/router', 'formio-adports/formiojs', 'rxjs', 'lodash', 'formiojs/utils/Evaluator', '@angular/elements', 'ngx-bootstrap/pagination'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['formio-grid'] = {}, global.core, global.common, global.forms, global.router, global.formiojs, global.rxjs, global.lodash, global.Evaluator, null, global.pagination));
}(this, (function (exports, core, common, forms, router, formiojs, rxjs, lodash, Evaluator, elements, pagination) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Evaluator__default = /*#__PURE__*/_interopDefaultLegacy(Evaluator);

    /**
     * @fileoverview added by tsickle
     * Generated from: formio.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioAppConfig = /** @class */ (function () {
        function FormioAppConfig() {
            this.appUrl = '';
            this.apiUrl = '';
        }
        FormioAppConfig.decorators = [
            { type: core.Injectable },
        ];
        return FormioAppConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: formio.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioService = /** @class */ (function () {
        function FormioService(url, options) {
            this.url = url;
            this.options = options;
            this.formio = new formiojs.Formio(this.url, this.options);
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        FormioService.prototype.requestWrapper = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var record;
            /** @type {?} */
            var called = false;
            return rxjs.Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                try {
                    if (!called) {
                        called = true;
                        fn()
                            .then((/**
                         * @param {?} _record
                         * @return {?}
                         */
                        function (_record) {
                            record = _record;
                            observer.next(record);
                            observer.complete();
                        }))
                            .catch((/**
                         * @param {?} err
                         * @return {?}
                         */
                        function (err) { return observer.error(err); }));
                    }
                    else if (record) {
                        observer.next(record);
                        observer.complete();
                    }
                }
                catch (err) {
                    observer.error(err);
                }
            }));
        };
        /**
         * @param {?} form
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.saveForm = /**
         * @param {?} form
         * @param {?=} options
         * @return {?}
         */
        function (form, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.saveForm(form, options); }));
        };
        /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.loadForm = /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.loadForm(query, options); }));
        };
        /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.loadForms = /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.loadForms(query, options); }));
        };
        /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.loadSubmission = /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.loadSubmission(query, options); }));
        };
        /**
         * @param {?} user
         * @param {?} form
         * @param {?} submission
         * @return {?}
         */
        FormioService.prototype.userPermissions = /**
         * @param {?} user
         * @param {?} form
         * @param {?} submission
         * @return {?}
         */
        function (user, form, submission) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.userPermissions(user, form, submission); }));
        };
        /**
         * @param {?=} data
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.deleteSubmission = /**
         * @param {?=} data
         * @param {?=} options
         * @return {?}
         */
        function (data, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.deleteSubmission(data, options); }));
        };
        /**
         * @param {?} submission
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.saveSubmission = /**
         * @param {?} submission
         * @param {?=} options
         * @return {?}
         */
        function (submission, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.saveSubmission(submission, options); }));
        };
        /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        FormioService.prototype.loadSubmissions = /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            var _this = this;
            return this.requestWrapper((/**
             * @return {?}
             */
            function () { return _this.formio.loadSubmissions(query, options); }));
        };
        return FormioService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: components/alerts/formio.alerts.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioAlerts = /** @class */ (function () {
        function FormioAlerts() {
            this.alerts = [];
        }
        /**
         * @param {?} alert
         * @return {?}
         */
        FormioAlerts.prototype.setAlert = /**
         * @param {?} alert
         * @return {?}
         */
        function (alert) {
            this.alerts = [alert];
        };
        /**
         * @param {?} alert
         * @return {?}
         */
        FormioAlerts.prototype.addAlert = /**
         * @param {?} alert
         * @return {?}
         */
        function (alert) {
            this.alerts.push(alert);
        };
        /**
         * @param {?} alerts
         * @return {?}
         */
        FormioAlerts.prototype.setAlerts = /**
         * @param {?} alerts
         * @return {?}
         */
        function (alerts) {
            this.alerts = alerts;
        };
        return FormioAlerts;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: custom-component/custom-tags.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomTagsService = /** @class */ (function () {
        function CustomTagsService() {
            this.tags = [];
        }
        /**
         * @param {?} tag
         * @return {?}
         */
        CustomTagsService.prototype.addCustomTag = /**
         * @param {?} tag
         * @return {?}
         */
        function (tag) {
            this.tags.push(tag);
        };
        CustomTagsService.decorators = [
            { type: core.Injectable },
        ];
        return CustomTagsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: types/alerts-position.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var AlertsPosition = {
        none: 0,
        top: 1,
        bottom: 2,
        both: 3,
    };
    AlertsPosition[AlertsPosition.none] = 'none';
    AlertsPosition[AlertsPosition.top] = 'top';
    AlertsPosition[AlertsPosition.bottom] = 'bottom';
    AlertsPosition[AlertsPosition.both] = 'both';

    /**
     * @fileoverview added by tsickle
     * Generated from: FormioBaseComponent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.render = new core.EventEmitter();
            this.customEvent = new core.EventEmitter();
            this.submit = new core.EventEmitter();
            this.prevPage = new core.EventEmitter();
            this.nextPage = new core.EventEmitter();
            this.beforeSubmit = new core.EventEmitter();
            this.change = new core.EventEmitter();
            this.invalid = new core.EventEmitter();
            this.errorChange = new core.EventEmitter();
            this.formLoad = new core.EventEmitter();
            this.submissionLoad = new core.EventEmitter();
            this.ready = new core.EventEmitter();
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
            return lodash.assign({}, {
                icons: lodash.get(this.config, 'icons', 'fontawesome'),
                noAlerts: lodash.get(this.options, 'noAlerts', true),
                readOnly: this.readOnly,
                viewAsHtml: this.viewOnly,
                i18n: lodash.get(this.options, 'i18n', null),
                fileService: lodash.get(this.options, 'fileService', null),
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
            Evaluator__default['default'].noeval = this.noeval;
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
                        message: message || lodash.get(_this.options, 'alerts.submitMessage')
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
                    if (lodash.isEmpty(_this.submission) &&
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
            Evaluator__default['default'].noeval = this.noeval;
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
                    message: lodash.get(this.options, 'alerts.submitMessage')
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
            var beforeSubmit = lodash.get(this.options, 'hooks.beforeSubmit');
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
                var errors = lodash.get(this, 'formio.errors', []);
                /** @type {?} */
                var alerts = lodash.get(this, 'alerts.alerts', []);
                /** @type {?} */
                var submitted = lodash.get(this, 'formio.submitted', false);
                if (submitted && (errors.length || alerts.length)) {
                    this.onError(errors);
                }
            }
            return this.change.emit(value);
        };
        /** @nocollapse */
        FormioBaseComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: FormioAppConfig, decorators: [{ type: core.Optional }] },
            { type: CustomTagsService, decorators: [{ type: core.Optional }] }
        ]; };
        FormioBaseComponent.propDecorators = {
            form: [{ type: core.Input }],
            submission: [{ type: core.Input }],
            src: [{ type: core.Input }],
            url: [{ type: core.Input }],
            service: [{ type: core.Input }],
            options: [{ type: core.Input }],
            noeval: [{ type: core.Input }],
            formioOptions: [{ type: core.Input }],
            renderOptions: [{ type: core.Input }],
            readOnly: [{ type: core.Input }],
            viewOnly: [{ type: core.Input }],
            hideComponents: [{ type: core.Input }],
            refresh: [{ type: core.Input }],
            error: [{ type: core.Input }],
            success: [{ type: core.Input }],
            language: [{ type: core.Input }],
            hooks: [{ type: core.Input }],
            renderer: [{ type: core.Input }],
            watchSubmissionErrors: [{ type: core.Input }],
            render: [{ type: core.Output }],
            customEvent: [{ type: core.Output }],
            submit: [{ type: core.Output }],
            prevPage: [{ type: core.Output }],
            nextPage: [{ type: core.Output }],
            beforeSubmit: [{ type: core.Output }],
            change: [{ type: core.Output }],
            invalid: [{ type: core.Output }],
            errorChange: [{ type: core.Output }],
            formLoad: [{ type: core.Output }],
            submissionLoad: [{ type: core.Output }],
            ready: [{ type: core.Output }],
            formioElement: [{ type: core.ViewChild, args: ['formio', { static: true },] }]
        };
        return FormioBaseComponent;
    }());

    var __extends = (undefined && undefined.__extends) || (function () {
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
    /* tslint:disable */
    var FormioComponent = /** @class */ (function (_super) {
        __extends(FormioComponent, _super);
        function FormioComponent(ngZone, config, customTags) {
            var _this = _super.call(this, ngZone, config, customTags) || this;
            _this.ngZone = ngZone;
            _this.config = config;
            _this.customTags = customTags;
            if (_this.config) {
                formiojs.Formio.setBaseUrl(_this.config.apiUrl);
                formiojs.Formio.setProjectUrl(_this.config.appUrl);
            }
            else {
                console.warn('You must provide an AppConfig within your application!');
            }
            return _this;
        }
        /**
         * @return {?}
         */
        FormioComponent.prototype.getRenderer = /**
         * @return {?}
         */
        function () {
            return this.renderer || formiojs.Form;
        };
        FormioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'formio',
                        template: "<div> <div *ngIf=\"isLoading\" style=\"position:relative;height:200px\"> <formio-loader [isLoading]=\"isLoading\"></formio-loader> </div> <formio-alerts *ngIf=\"this.options.alertsPosition === AlertsPosition.top || this.options.alertsPosition === AlertsPosition.both\" (focusComponent)=\"focusOnComponet($event)\" [alerts]=\"alerts\"></formio-alerts> <div #formio></div> <formio-alerts *ngIf=\"this.options.alertsPosition === AlertsPosition.bottom || this.options.alertsPosition === AlertsPosition.both\" (focusComponent)=\"focusOnComponet($event)\" [alerts]=\"alerts\"></formio-alerts> </div> ",
                        styles: ["@charset \"UTF-8\";.flatpickr-calendar{background:0 0;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08)}.flatpickr-calendar.inline,.flatpickr-calendar.open{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none!important;box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.arrowRight:after,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.rightMost:before{left:auto;right:22px}.flatpickr-calendar.arrowCenter:after,.flatpickr-calendar.arrowCenter:before{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:0 0;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-next-month,.flatpickr-months .flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9)}.flatpickr-months .flatpickr-next-month.flatpickr-disabled,.flatpickr-months .flatpickr-prev-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-next-month i,.flatpickr-months .flatpickr-prev-month i{position:relative}.flatpickr-months .flatpickr-next-month.flatpickr-prev-month,.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-next-month.flatpickr-next-month,.flatpickr-months .flatpickr-prev-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover{color:#959ea9}.flatpickr-months .flatpickr-next-month:hover svg,.flatpickr-months .flatpickr-prev-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-next-month svg,.flatpickr-months .flatpickr-prev-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-next-month svg path,.flatpickr-months .flatpickr-prev-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-inner-spin-button,.numInputWrapper input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,.5)}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,.9)}.flatpickr-current-month input.cur-year{background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,.5);background:0 0;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:0;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:active,.flatpickr-current-month .flatpickr-monthDropdown-months:focus{outline:0}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:0;padding:0}.flatpickr-weekdays{background:0 0;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:0 0;color:rgba(0,0,0,.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:0 0;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.nextMonthDay:hover,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.today.inRange,.flatpickr-day:focus,.flatpickr-day:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:focus,.flatpickr-day.today:hover{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.endRange,.flatpickr-day.endRange.inRange,.flatpickr-day.endRange.nextMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.endRange:focus,.flatpickr-day.endRange:hover,.flatpickr-day.selected,.flatpickr-day.selected.inRange,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.selected:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange,.flatpickr-day.startRange.inRange,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.startRange:focus,.flatpickr-day.startRange:hover{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.endRange.startRange,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.endRange.endRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.endRange.startRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.nextMonthDay,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.prevMonthDay{color:rgba(57,57,57,.3);background:0 0;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,.3);background:0 0;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:0 0;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-am-pm,.flatpickr-time .flatpickr-time-separator{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:focus,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time input:hover{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=''] .choices__button{display:none}.choices[data-type*=select-one]:after{content:'';height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translate(0,-50%)}.formio-form{position:relative;min-height:80px}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.formio-warning-wrapper{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{display:block;color:inherit;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{min-height:200px;background-color:#fff}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{width:100%;margin:0;background:#1d1d1d;box-sizing:border-box;color:#ccc;font-size:15px;outline:0;padding:20px;line-height:24px;font-family:Consolas,Menlo,Monaco,\"Courier New\",monospace;position:absolute;top:0;bottom:0;border:none;display:none}.formio-component-tags tags{background-color:#fff}.field-required:after{content:\" *\";color:red}.glyphicon-spin{-webkit-animation:formio-spin 1s infinite linear;-moz-animation:formio-spin 1s infinite linear;-o-animation:formio-spin 1s infinite linear;animation:formio-spin 1s infinite linear}@-moz-keyframes formio-spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes formio-spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes formio-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success::after{content:'\\2713';position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail::after{content:'\\2717';position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.02) inset;border:1px solid #f4f4f4}.btn.signature-pad-refresh{position:absolute;left:0;top:0;z-index:1000;padding:3px;line-height:0}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{text-align:center;color:#c3c3c3}.formio-loader{position:relative;min-height:60px}.loader-wrapper{z-index:1000;position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.1)}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;padding:2px 8px;line-height:1em;margin-bottom:6px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{white-space:nowrap;overflow:hidden;padding-right:25px;text-overflow:ellipsis}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{padding-left:5px;float:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{float:left;margin:0 8px 0 -4px;padding-left:unset;padding-right:16px;border-left:unset;border-right:1px solid #008fa1;overflow:hidden}.formio-component-file .fileSelector{padding:15px;border:2px dashed #ddd;text-align:center}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-right:unset;margin-left:5px}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}100%{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}100%{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}100%{opacity:1}}.formio-dialog{box-sizing:border-box;font-size:.8em;color:#666}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);animation:formio-dialog-fadein .5s}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;margin-right:15px;background:0 0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-content{background:#fff;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;pointer-events:all;overflow:auto}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{font-family:Helvetica,Arial,sans-serif;content:'×';cursor:pointer}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{border:none;background:0 0;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{display:block;padding:3px;background:0 0;color:#bbb;content:'×';font-size:26px;font-weight:400;line-height:26px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:0}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{content:'';display:table;clear:both}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:0}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{position:absolute;color:#999}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;width:100%;height:1000px}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{position:absolute;top:6px;right:5px;font-size:1.5em}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{font-weight:400;cursor:pointer}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit .has-error{display:none}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-top:-10px;margin-left:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-right:unset;margin-left:4px}.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon,.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{position:absolute;top:0;right:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-component-modaledit .formio-modaledit-view-container{position:relative;border:1px solid #ddd;min-height:34px;padding:6px 12px;cursor:text}td .formio-component-modaledit .formio-modaledit-view-container{padding:0;border-style:none}.formio-component-modaledit .formio-modaledit-edit{position:absolute;top:0;left:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-modaledit-dialog .formio-modaledit-close{position:absolute;top:100%;right:0;border-radius:0}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:''}.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-label.collapsed>td{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{display:inline-block;vertical-align:middle;content:'▾';margin:0 5px}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:'▸'}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-top:5px;margin-bottom:10px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.formio-component-textarea .alert .ck-editor__editable{color:inherit}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{position:relative;margin-left:0}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{width:100%;text-align:left}.formio-component-modal-wrapper-signature .open-modal-button{text-align:center;height:100%;font-size:1.4em;padding:0;margin:0}.formio-component-content .image{display:table;clear:both;text-align:center;margin:1em auto}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.formio-component-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;margin:1em 0;display:block;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px #ccc}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:solid 5px #ccc}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;position:absolute;margin-top:-9px;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;font:14px/22px \"-apple-system\",BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;overflow:auto;box-sizing:border-box;border:1px solid rgba(50,50,50,.6);z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}div[read-only=true] .formio-component-textarea div[ref=input]{white-space:pre-wrap}.checkbox label,.radio label{min-height:21px}"],
                        encapsulation: core.ViewEncapsulation.None,
                    },] },
        ];
        /** @nocollapse */
        FormioComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: FormioAppConfig, decorators: [{ type: core.Optional }] },
            { type: CustomTagsService, decorators: [{ type: core.Optional }] }
        ]; };
        return FormioComponent;
    }(FormioBaseComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: components/formbuilder/formbuilder.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var FormBuilderComponent = /** @class */ (function () {
        function FormBuilderComponent(ngZone, config, customTags) {
            var _this = this;
            this.ngZone = ngZone;
            this.config = config;
            this.customTags = customTags;
            this.componentAdding = false;
            this.noeval = false;
            if (this.config) {
                formiojs.Formio.setBaseUrl(this.config.apiUrl);
                formiojs.Formio.setProjectUrl(this.config.appUrl);
            }
            else {
                console.warn('You must provide an AppConfig within your application!');
            }
            this.change = new core.EventEmitter();
            this.ready = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                _this.readyResolve = resolve;
            }));
        }
        /**
         * @return {?}
         */
        FormBuilderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            formiojs.Utils.Evaluator.noeval = this.noeval;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.ngZone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.buildForm(_this.form);
                    }));
                }));
            }
            if (this.rebuild) {
                this.rebuild.subscribe((/**
                 * @param {?} options
                 * @return {?}
                 */
                function (options) {
                    _this.ngZone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.rebuildForm(_this.form, options);
                    }));
                }));
            }
        };
        /**
         * @param {?} instance
         * @return {?}
         */
        FormBuilderComponent.prototype.setInstance = /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            var _this = this;
            this.formio = instance;
            instance.off('addComponent');
            instance.off('saveComponent');
            instance.off('updateComponent');
            instance.off('removeComponent');
            instance.on('addComponent', (/**
             * @param {?} component
             * @param {?} parent
             * @param {?} path
             * @param {?} index
             * @param {?} isNew
             * @return {?}
             */
            function (component, parent, path, index, isNew) {
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    if (isNew) {
                        _this.componentAdding = true;
                    }
                    else {
                        _this.change.emit({
                            type: 'addComponent',
                            builder: instance,
                            form: instance.schema,
                            component: component,
                            parent: parent,
                            path: path,
                            index: index
                        });
                        _this.componentAdding = false;
                    }
                }));
            }));
            instance.on('saveComponent', (/**
             * @param {?} component
             * @param {?} original
             * @param {?} parent
             * @param {?} path
             * @param {?} index
             * @param {?} isNew
             * @return {?}
             */
            function (component, original, parent, path, index, isNew) {
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.change.emit({
                        type: _this.componentAdding ? 'addComponent' : 'saveComponent',
                        builder: instance,
                        form: instance.schema,
                        component: component,
                        originalComponent: original,
                        parent: parent,
                        path: path,
                        index: index,
                        isNew: isNew || false
                    });
                    _this.componentAdding = false;
                }));
            }));
            instance.on('updateComponent', (/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.change.emit({
                        type: 'updateComponent',
                        builder: instance,
                        form: instance.schema,
                        component: component
                    });
                }));
            }));
            instance.on('removeComponent', (/**
             * @param {?} component
             * @param {?} parent
             * @param {?} path
             * @param {?} index
             * @return {?}
             */
            function (component, parent, path, index) {
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.change.emit({
                        type: 'deleteComponent',
                        builder: instance,
                        form: instance.schema,
                        component: component,
                        parent: parent,
                        path: path,
                        index: index
                    });
                }));
            }));
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.readyResolve(instance);
            }));
            return instance;
        };
        /**
         * @param {?} display
         * @return {?}
         */
        FormBuilderComponent.prototype.setDisplay = /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            var _this = this;
            return this.builder.setDisplay(display).then((/**
             * @param {?} instance
             * @return {?}
             */
            function (instance) { return _this.setInstance(instance); }));
        };
        /**
         * @param {?} form
         * @return {?}
         */
        FormBuilderComponent.prototype.buildForm = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            var _this = this;
            if (!form || !this.builderElement || !this.builderElement.nativeElement) {
                return;
            }
            if (this.builder) {
                return this.setDisplay(form.display).then((/**
                 * @return {?}
                 */
                function () {
                    _this.builder.form = form;
                    _this.builder.instance.form = form;
                    return _this.builder.instance;
                }));
            }
            return this.rebuildForm(form);
        };
        /**
         * @param {?} form
         * @param {?=} options
         * @return {?}
         */
        FormBuilderComponent.prototype.rebuildForm = /**
         * @param {?} form
         * @param {?=} options
         * @return {?}
         */
        function (form, options) {
            var _this = this;
            /** @type {?} */
            var Builder = this.formbuilder || formiojs.FormBuilder;
            /** @type {?} */
            var extraTags = this.customTags ? this.customTags.tags : [];
            this.builder = new Builder(this.builderElement.nativeElement, form, lodash.assign({
                icons: 'fontawesome',
                sanitizeConfig: {
                    addTags: extraTags
                }
            }, options || this.options || {}));
            return this.builder.ready.then((/**
             * @param {?} instance
             * @return {?}
             */
            function (instance) { return _this.setInstance(instance); }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        FormBuilderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            formiojs.Utils.Evaluator.noeval = this.noeval;
            if (changes.form && changes.form.currentValue) {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.buildForm(changes.form.currentValue || { components: [] });
                }));
            }
        };
        /**
         * @return {?}
         */
        FormBuilderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
            if (this.formio) {
                this.formio.destroy();
            }
        };
        FormBuilderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-builder',
                        template: "<div #builder></div> ",
                        styles: ["@charset \"UTF-8\";.flatpickr-calendar{background:0 0;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08)}.flatpickr-calendar.inline,.flatpickr-calendar.open{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none!important;box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.arrowRight:after,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.rightMost:before{left:auto;right:22px}.flatpickr-calendar.arrowCenter:after,.flatpickr-calendar.arrowCenter:before{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:0 0;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-next-month,.flatpickr-months .flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9)}.flatpickr-months .flatpickr-next-month.flatpickr-disabled,.flatpickr-months .flatpickr-prev-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-next-month i,.flatpickr-months .flatpickr-prev-month i{position:relative}.flatpickr-months .flatpickr-next-month.flatpickr-prev-month,.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-next-month.flatpickr-next-month,.flatpickr-months .flatpickr-prev-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover{color:#959ea9}.flatpickr-months .flatpickr-next-month:hover svg,.flatpickr-months .flatpickr-prev-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-next-month svg,.flatpickr-months .flatpickr-prev-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-next-month svg path,.flatpickr-months .flatpickr-prev-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-inner-spin-button,.numInputWrapper input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,.5)}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,.9)}.flatpickr-current-month input.cur-year{background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,.5);background:0 0;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:0;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:active,.flatpickr-current-month .flatpickr-monthDropdown-months:focus{outline:0}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:0;padding:0}.flatpickr-weekdays{background:0 0;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:0 0;color:rgba(0,0,0,.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:0 0;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.nextMonthDay:hover,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.today.inRange,.flatpickr-day:focus,.flatpickr-day:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:focus,.flatpickr-day.today:hover{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.endRange,.flatpickr-day.endRange.inRange,.flatpickr-day.endRange.nextMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.endRange:focus,.flatpickr-day.endRange:hover,.flatpickr-day.selected,.flatpickr-day.selected.inRange,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.selected:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange,.flatpickr-day.startRange.inRange,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.startRange:focus,.flatpickr-day.startRange:hover{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.endRange.startRange,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.endRange.endRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.endRange.startRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.nextMonthDay,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.prevMonthDay{color:rgba(57,57,57,.3);background:0 0;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,.3);background:0 0;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:0 0;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-am-pm,.flatpickr-time .flatpickr-time-separator{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:focus,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time input:hover{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=''] .choices__button{display:none}.choices[data-type*=select-one]:after{content:'';height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translate(0,-50%)}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";filter:alpha(opacity=20)}.formio-form{position:relative;min-height:80px}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.formio-warning-wrapper{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{display:block;color:inherit;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{min-height:200px;background-color:#fff}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{width:100%;margin:0;background:#1d1d1d;box-sizing:border-box;color:#ccc;font-size:15px;outline:0;padding:20px;line-height:24px;font-family:Consolas,Menlo,Monaco,\"Courier New\",monospace;position:absolute;top:0;bottom:0;border:none;display:none}.formio-component-tags tags{background-color:#fff}.field-required:after{content:\" *\";color:red}.glyphicon-spin{-webkit-animation:formio-spin 1s infinite linear;-moz-animation:formio-spin 1s infinite linear;-o-animation:formio-spin 1s infinite linear;animation:formio-spin 1s infinite linear}@-moz-keyframes formio-spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes formio-spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes formio-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success::after{content:'\\2713';position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail::after{content:'\\2717';position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.02) inset;border:1px solid #f4f4f4}.btn.signature-pad-refresh{position:absolute;left:0;top:0;z-index:1000;padding:3px;line-height:0}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{text-align:center;color:#c3c3c3}.formio-loader{position:relative;min-height:60px}.loader-wrapper{z-index:1000;position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.1)}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;padding:2px 8px;line-height:1em;margin-bottom:6px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{white-space:nowrap;overflow:hidden;padding-right:25px;text-overflow:ellipsis}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{padding-left:5px;float:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{float:left;margin:0 8px 0 -4px;padding-left:unset;padding-right:16px;border-left:unset;border-right:1px solid #008fa1;overflow:hidden}.formio-component-file .fileSelector{padding:15px;border:2px dashed #ddd;text-align:center}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-right:unset;margin-left:5px}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}100%{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}100%{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}100%{opacity:1}}.formio-dialog{box-sizing:border-box;font-size:.8em;color:#666}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);animation:formio-dialog-fadein .5s}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;margin-right:15px;background:0 0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-content{background:#fff;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;pointer-events:all;overflow:auto}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{font-family:Helvetica,Arial,sans-serif;content:'×';cursor:pointer}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{border:none;background:0 0;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{display:block;padding:3px;background:0 0;color:#bbb;content:'×';font-size:26px;font-weight:400;line-height:26px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:0}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{content:'';display:table;clear:both}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:0}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{position:absolute;color:#999}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;width:100%;height:1000px}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{position:absolute;top:6px;right:5px;font-size:1.5em}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{font-weight:400;cursor:pointer}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit .has-error{display:none}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-top:-10px;margin-left:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-right:unset;margin-left:4px}.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon,.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{position:absolute;top:0;right:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-component-modaledit .formio-modaledit-view-container{position:relative;border:1px solid #ddd;min-height:34px;padding:6px 12px;cursor:text}td .formio-component-modaledit .formio-modaledit-view-container{padding:0;border-style:none}.formio-component-modaledit .formio-modaledit-edit{position:absolute;top:0;left:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-modaledit-dialog .formio-modaledit-close{position:absolute;top:100%;right:0;border-radius:0}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:''}.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-label.collapsed>td{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{display:inline-block;vertical-align:middle;content:'▾';margin:0 5px}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:'▸'}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-top:5px;margin-bottom:10px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.formio-component-textarea .alert .ck-editor__editable{color:inherit}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{position:relative;margin-left:0}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{width:100%;text-align:left}.formio-component-modal-wrapper-signature .open-modal-button{text-align:center;height:100%;font-size:1.4em;padding:0;margin:0}.formio-component-content .image{display:table;clear:both;text-align:center;margin:1em auto}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.formio-component-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;margin:1em 0;display:block;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px #ccc}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:solid 5px #ccc}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;position:absolute;margin-top:-9px;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;font:14px/22px \"-apple-system\",BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;overflow:auto;box-sizing:border-box;border:1px solid rgba(50,50,50,.6);z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}div[read-only=true] .formio-component-textarea div[ref=input]{white-space:pre-wrap}.formbuilder{position:relative}.drag-container{padding:10px;border:dotted 2px #e8e8e8}.drag-container:hover{cursor:move;border:dotted 2px #ccc}.drag-container.formio-builder-form,.drag-container.formio-builder-form:hover,.panel-body>.drag-container.formio-builder-components,.panel-body>.drag-container.formio-builder-components:hover,.tab-pane>.drag-container.formio-builder-components,.tab-pane>.drag-container.formio-builder-components:hover{padding:0 0 1rem 0;border:none}.component-btn-group{position:absolute;right:0;z-index:1000;margin-top:-2px}.builder-component{position:relative;min-height:15px}.builder-component .formio-component-htmlelement{border:dotted 2px #e8e8e8}.builder-component .formio-component-htmlelement [ref=html]:empty:before{content:'HTML Content';color:#aaa}.builder-component:not(:hover) .component-btn-group{display:none}.builder-group-button{background-color:transparent;white-space:normal;text-align:left}.form-builder-group-header{padding:0}.component-btn-group .component-settings-button{float:right;z-index:1001;margin:4px 4px 0 0;z-index:1001;-webkit-box-shadow:0 0 10px 1px rgba(48,113,169,.6);-moz-box-shadow:0 0 10px 1px rgba(48,113,169,.6);box-shadow:0 0 10px 1px rgba(48,113,169,.6)}.formbuilder .formio-component-content,.formbuilder .formio-component-form,.formbuilder .formio-component-hidden{border:2px dashed #ddd}.formbuilder .formio-component-form,.formbuilder .formio-component-hidden{height:3em;text-align:center;color:#aaa;padding-top:.5em}.btn-group-xxs>.btn,.btn-xxs,.component-btn-group .component-settings-button{padding:2px 2px;font-size:10px;line-height:1.2em;border-radius:0;width:18px;height:18px}.formcomponents .formcomponent{text-align:left;padding:5px 5px 5px 8px;margin-top:.2rem;font-size:.8em;line-height:1.2;border-radius:.3em}.form-builder-panel .panel-body{padding:5px}.formio-component-tabs .ui.tabular.menu .item{padding:.8em}.formio-pdf-builder{position:relative}.formio-drop-zone{display:none;position:absolute;z-index:10;background-color:#0d87e9;opacity:.1}.formio-drop-zone.enabled{display:inherit}.component-settings-button-paste{display:none}.builder-paste-mode .component-settings-button-paste{display:inherit}.wizard-page-label{cursor:pointer;border-radius:0}.panel-body .drag-and-drop-alert{margin-bottom:0}.builder-sidebar_scroll{position:sticky;top:15px}.formio-wizard-builder-component-title{color:#6c757d;text-align:center;padding:.5rem}.formio-wizard-position{position:relative}.formio-settings-help{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc;margin-top:10px}.help-block{margin:0}.builder-sidebar .btn{white-space:normal}.component-settings{padding-top:20px!important;padding-bottom:20px!important}.component-settings .formio-dialog-content{max-height:100%}.component-edit-container{height:auto;overflow:hidden}.component-edit-content{height:calc(100% - 4em)}.component-edit-tabs.col-sm-6{height:100%;overflow-y:auto}.component-edit-tabs.col-sm-12{height:calc(100% - 4em);overflow-y:auto}.component-edit-tabs.col-sm-12 .editForm{height:calc(100% - 4em);overflow-y:auto}.progress.pdf-progress{height:1rem}.progress.pdf-progress .progress-bar{font-size:.7rem;line-height:1rem}"],
                        encapsulation: core.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        FormBuilderComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: FormioAppConfig, decorators: [{ type: core.Optional }] },
            { type: CustomTagsService, decorators: [{ type: core.Optional }] }
        ]; };
        FormBuilderComponent.propDecorators = {
            form: [{ type: core.Input }],
            options: [{ type: core.Input }],
            formbuilder: [{ type: core.Input }],
            noeval: [{ type: core.Input }],
            refresh: [{ type: core.Input }],
            rebuild: [{ type: core.Input }],
            change: [{ type: core.Output }],
            builderElement: [{ type: core.ViewChild, args: ['builder', { static: true },] }]
        };
        return FormBuilderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: components/alerts/parse-html-content.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParseHtmlContentPipe = /** @class */ (function () {
        function ParseHtmlContentPipe() {
        }
        /*
          Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
          And then render in template.
        */
        /*
            Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
            And then render in template.
          */
        /**
         * @param {?} content
         * @return {?}
         */
        ParseHtmlContentPipe.prototype.transform = /*
            Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
            And then render in template.
          */
        /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            /** @type {?} */
            var parsedContent = new DOMParser().parseFromString(content, 'text/html').body.childNodes[0];
            return parsedContent.textContent;
        };
        ParseHtmlContentPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'parseHtmlContent', pure: false },] },
        ];
        return ParseHtmlContentPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: components/alerts/formio.alerts.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioAlertsComponent = /** @class */ (function () {
        function FormioAlertsComponent() {
            this.focusComponent = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormioAlertsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.alerts) {
                this.alerts = new FormioAlerts();
            }
        };
        /**
         * @param {?} event
         * @param {?} alert
         * @return {?}
         */
        FormioAlertsComponent.prototype.getComponent = /**
         * @param {?} event
         * @param {?} alert
         * @return {?}
         */
        function (event, alert) {
            this.focusComponent.emit(alert.component.key);
        };
        FormioAlertsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'formio-alerts',
                        template: "<div *ngFor=\"let alert of alerts.alerts\" class=\"alert alert-{{ alert.type }}\" role=\"alert\" (click)=\"getComponent($event, alert)\"> {{alert.message | parseHtmlContent}} </div> "
                    },] },
        ];
        FormioAlertsComponent.propDecorators = {
            alerts: [{ type: core.Input }],
            focusComponent: [{ type: core.Output }]
        };
        return FormioAlertsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: components/loader/formio.loader.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioLoaderComponent = /** @class */ (function () {
        function FormioLoaderComponent() {
        }
        FormioLoaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'formio-loader',
                        styles: [".formio-loader-wrapper { position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 1000; } .formio-loader { position: absolute; left: 50%; top: 50%; margin-left: -30px; margin-top: -30px; z-index: 10000; display: inline-block; border: 6px solid #f3f3f3; border-top: 6px solid #3498db; border-radius: 50%; width: 60px; height: 60px; animation: spin 2s linear infinite; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } "],
                        template: "<div class=\"formio-loader-wrapper\" *ngIf=\"isLoading\"> <div class=\"formio-loader\"></div> </div> "
                    },] },
        ];
        FormioLoaderComponent.propDecorators = {
            isLoading: [{ type: core.Input }]
        };
        return FormioLoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: formio.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioModule = /** @class */ (function () {
        function FormioModule() {
        }
        FormioModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FormioComponent,
                            FormBuilderComponent,
                            FormioLoaderComponent,
                            FormioAlertsComponent,
                            ParseHtmlContentPipe
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            FormioComponent,
                            FormBuilderComponent,
                            FormioLoaderComponent,
                            FormioAlertsComponent
                        ],
                        providers: [
                            FormioAlerts,
                            CustomTagsService
                        ],
                        entryComponents: [
                            FormioComponent,
                            FormBuilderComponent
                        ]
                    },] },
        ];
        return FormioModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/types/grid-footer-positions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var GridFooterPositions = {
        bottom: 0,
        top: 1,
        both: 2,
    };
    GridFooterPositions[GridFooterPositions.bottom] = 'bottom';
    GridFooterPositions[GridFooterPositions.top] = 'top';
    GridFooterPositions[GridFooterPositions.both] = 'both';

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/GridHeaderComponent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridHeaderComponent = /** @class */ (function () {
        function GridHeaderComponent() {
            this.headers = [];
            this.sort = new core.EventEmitter();
        }
        Object.defineProperty(GridHeaderComponent.prototype, "numHeaders", {
            get: /**
             * @return {?}
             */
            function () {
                return this.headers.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} formio
         * @param {?=} query
         * @param {?=} columns
         * @return {?}
         */
        GridHeaderComponent.prototype.load = /**
         * @param {?} formio
         * @param {?=} query
         * @param {?=} columns
         * @return {?}
         */
        function (formio, query, columns) {
            return Promise.resolve([]);
        };
        GridHeaderComponent.propDecorators = {
            actionAllowed: [{ type: core.Input }],
            sort: [{ type: core.Output }],
            template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }]
        };
        return GridHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/types/grid-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SortType = {
        ASC: "asc",
        DESC: "desc",
    };

    var __extends$1 = (undefined && undefined.__extends) || (function () {
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
    var FormGridHeaderComponent = /** @class */ (function (_super) {
        __extends$1(FormGridHeaderComponent, _super);
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
        FormGridHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-grid-header',
                        template: "<ng-template> <thead> <tr> <th> <div class=\"row\"> <div class=\"col-sm-8\"> <a (click)=\"sort.emit(header)\"> {{ header.label }}&nbsp;<span [ngClass]=\"{'glyphicon-triangle-top fa-caret-up': (header.sort === 'asc'), 'glyphicon-triangle-bottom fa-caret-down': (header.sort === 'desc')}\" class=\"glyphicon fa\" *ngIf=\"header.sort\"></span> </a> </div> <div class=\"col-sm-4\"> Operations </div> </div> </th> </tr> </thead> </ng-template> "
                    },] },
        ];
        return FormGridHeaderComponent;
    }(GridHeaderComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/GridBodyComponent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridBodyComponent = /** @class */ (function () {
        function GridBodyComponent() {
            this.firstItem = 0;
            this.lastItem = 0;
            this.skip = 0;
            this.limit = 0;
            this.total = 0;
            this.rowSelect = new core.EventEmitter();
            this.rowAction = new core.EventEmitter();
            this.loading = true;
        }
        /**
         * @param {?} formio
         * @param {?=} query
         * @return {?}
         */
        GridBodyComponent.prototype.load = /**
         * @param {?} formio
         * @param {?=} query
         * @return {?}
         */
        function (formio, query) {
            return formio.loadForm(query);
        };
        /**
         * @param {?} event
         * @param {?} row
         * @return {?}
         */
        GridBodyComponent.prototype.onRowSelect = /**
         * @param {?} event
         * @param {?} row
         * @return {?}
         */
        function (event, row) {
            event.preventDefault();
            this.rowSelect.emit(row);
        };
        /**
         * @param {?} event
         * @param {?} row
         * @param {?} action
         * @return {?}
         */
        GridBodyComponent.prototype.onRowAction = /**
         * @param {?} event
         * @param {?} row
         * @param {?} action
         * @return {?}
         */
        function (event, row, action) {
            event.preventDefault();
            this.rowAction.emit({ row: row, action: action });
        };
        /**
         * Set the rows for this Grid body.
         *
         * @param query
         * @param items
         * @return any
         */
        /**
         * Set the rows for this Grid body.
         *
         * @param {?} query
         * @param {?} items
         * @return {?} any
         */
        GridBodyComponent.prototype.setRows = /**
         * Set the rows for this Grid body.
         *
         * @param {?} query
         * @param {?} items
         * @return {?} any
         */
        function (query, items) {
            var _this = this;
            this.rows = [];
            this.firstItem = query.skip + 1;
            this.lastItem = this.firstItem + items.length - 1;
            this.total = items.serverCount;
            this.limit = query.limit;
            this.skip = Math.floor(items.skip / query.limit) + 1;
            this.loading = false;
            lodash.each(items, (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.rows.push(lodash.clone(item));
            }));
            return this.rows;
        };
        GridBodyComponent.propDecorators = {
            header: [{ type: core.Input }],
            actionAllowed: [{ type: core.Input }],
            rowSelect: [{ type: core.Output }],
            rowAction: [{ type: core.Output }],
            template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }]
        };
        return GridBodyComponent;
    }());

    var __extends$2 = (undefined && undefined.__extends) || (function () {
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
    var FormGridBodyComponent = /** @class */ (function (_super) {
        __extends$2(FormGridBodyComponent, _super);
        function FormGridBodyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} formio
         * @param {?=} query
         * @return {?}
         */
        FormGridBodyComponent.prototype.load = /**
         * @param {?} formio
         * @param {?=} query
         * @return {?}
         */
        function (formio, query) {
            var _this = this;
            query = query || {};
            return formio.loadForms({ params: query }).then((/**
             * @param {?} forms
             * @return {?}
             */
            function (forms) { return _this.setRows(query, forms); }));
        };
        FormGridBodyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-grid-body',
                        styles: [".form-btn { font-size: 0.75rem; } "],
                        template: "<ng-template> <tbody *ngIf=\"rows\"> <tr *ngFor=\"let form of rows\"> <td> <div class=\"row\"> <div class=\"col-sm-8\"> <a routerLink=\"{{form._id}}/view\" (click)=\"onRowSelect($event, form)\"><h5>{{ form.title }}</h5></a> </div> <div class=\"col-sm-4\"> <button *ngIf=\"actionAllowed('formView')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'view')\"><span class=\"fa fa-pencil\"></span> Enter Data</button>&nbsp; <button *ngIf=\"actionAllowed('submissionIndex')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'submission')\"><span class=\"fa fa-list-alt\"></span> View Data</button>&nbsp; <button *ngIf=\"actionAllowed('formEdit')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'edit')\"><span class=\"fa fa-edit\"></span> Edit Form</button>&nbsp; <button *ngIf=\"actionAllowed('formDelete')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'delete')\"><span class=\"fa fa-trash\"></span></button> </div> </div> </td> </tr> </tbody> </ng-template> "
                    },] },
        ];
        return FormGridBodyComponent;
    }(GridBodyComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/GridFooterComponent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridFooterComponent = /** @class */ (function () {
        function GridFooterComponent() {
            this.footerPositions = GridFooterPositions;
            this.pageChanged = new core.EventEmitter();
            this.createItem = new core.EventEmitter();
        }
        GridFooterComponent.propDecorators = {
            header: [{ type: core.Input }],
            body: [{ type: core.Input }],
            createText: [{ type: core.Input }],
            size: [{ type: core.Input }],
            actionAllowed: [{ type: core.Input }],
            pageChanged: [{ type: core.Output }],
            createItem: [{ type: core.Output }],
            template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }]
        };
        return GridFooterComponent;
    }());

    var __extends$3 = (undefined && undefined.__extends) || (function () {
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
    var FormGridFooterComponent = /** @class */ (function (_super) {
        __extends$3(FormGridFooterComponent, _super);
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
        FormGridFooterComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<ng-template #footer let-position=\"position\"> <thead class=\"formio-grid-footer\" *ngIf=\"position === footerPositions.top\"> <ng-container [ngTemplateOutlet]=\"defaultFooterTemplate\"></ng-container> </thead> <tfoot class=\"formio-grid-footer\" *ngIf=\"position === footerPositions.bottom\"> <ng-container [ngTemplateOutlet]=\"defaultFooterTemplate\"></ng-container> </tfoot> </ng-template> <ng-template #defaultFooterTemplate> <tr> <td *ngIf=\"header\" [colSpan]=\"header.numHeaders\"> <button *ngIf=\"actionAllowed('formCreate')\" class=\"btn btn-primary pull-left float-left\" (click)=\"createItem.emit('form')\"><i class=\"glyphicon glyphicon-plus fa fa-plus\"></i> {{ createText }}</button> <span class=\"pull-right float-right item-counter\"><span class=\"page-num\">{{ body.firstItem }} - {{ body.lastItem }}</span> / {{ body.total }} total</span> <pagination [totalItems]=\"body.total\" [itemsPerPage]=\"body.limit\" [(ngModel)]=\"body.skip\" (pageChanged)=\"pageChanged.emit($event)\" [maxSize]=\"size\" class=\"justify-content-center pagination-sm\"> </pagination> </td> </tr> </ng-template> ",
                        styles: ["tfoot.formio-grid-footer td { padding: 0.3rem; } tfoot.formio-grid-footer .page-num { font-size: 1.4em; } tfoot.formio-grid-footer ul.pagination { margin-top: 5px; margin-bottom: 0; } "],
                        encapsulation: core.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        FormGridFooterComponent.ctorParameters = function () { return []; };
        return FormGridFooterComponent;
    }(GridFooterComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/form/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormComponents = {
        header: FormGridHeaderComponent,
        body: FormGridBodyComponent,
        footer: FormGridFooterComponent
    };

    var __extends$4 = (undefined && undefined.__extends) || (function () {
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
    var SubmissionGridHeaderComponent = /** @class */ (function (_super) {
        __extends$4(SubmissionGridHeaderComponent, _super);
        function SubmissionGridHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} formio
         * @param {?=} query
         * @param {?=} columns
         * @return {?}
         */
        SubmissionGridHeaderComponent.prototype.load = /**
         * @param {?} formio
         * @param {?=} query
         * @param {?=} columns
         * @return {?}
         */
        function (formio, query, columns) {
            var _this = this;
            query = query || {};
            return formio.loadForm({ params: query }).then((/**
             * @param {?} form
             * @return {?}
             */
            function (form) {
                _this.headers = [];
                _this.formComponents = new Map();
                _this.setComponents(form.components);
                columns ? columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    _this.setHeader(_this.getHeaderForColumn(column, _this.formComponents.get(column.path)));
                })) : _this.setComponentsHeaders(_this.formComponents);
                return _this.headers;
            }));
        };
        /**
         * @param {?} header
         * @return {?}
         */
        SubmissionGridHeaderComponent.prototype.setHeader = /**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            this.headers.push(header);
        };
        /**
         * @param {?} column
         * @param {?=} component
         * @param {?=} sort
         * @return {?}
         */
        SubmissionGridHeaderComponent.prototype.getHeaderForColumn = /**
         * @param {?} column
         * @param {?=} component
         * @param {?=} sort
         * @return {?}
         */
        function (column, component, sort) {
            return {
                label: column.label,
                key: column.path,
                sort: sort,
                component: component ? (/** @type {?} */ (formiojs.Components.create(component, null, null, true))) : undefined,
                renderCell: column ? column.renderCell : undefined
            };
        };
        /**
         * @param {?} component
         * @param {?} path
         * @param {?=} sort
         * @return {?}
         */
        SubmissionGridHeaderComponent.prototype.getHeaderForComponent = /**
         * @param {?} component
         * @param {?} path
         * @param {?=} sort
         * @return {?}
         */
        function (component, path, sort) {
            return {
                label: component.label,
                key: path,
                sort: sort,
                component: component ? (/** @type {?} */ (formiojs.Components.create(component, null, null, true))) : undefined,
            };
        };
        // Set headers from components in case if columns are not provided
        // Set headers from components in case if columns are not provided
        /**
         * @param {?} components
         * @param {?=} sort
         * @return {?}
         */
        SubmissionGridHeaderComponent.prototype.setComponentsHeaders = 
        // Set headers from components in case if columns are not provided
        /**
         * @param {?} components
         * @param {?=} sort
         * @return {?}
         */
        function (components, sort) {
            var _this = this;
            components.forEach((/**
             * @param {?} component
             * @param {?} path
             * @return {?}
             */
            function (component, path) {
                if (component.input &&
                    (!component.hasOwnProperty('tableView') || component.tableView)) {
                    _this.setHeader(_this.getHeaderForComponent(component, path, sort));
                }
            }));
        };
        // Map components
        // Map components
        /**
         * @param {?} components
         * @return {?}
         */
        SubmissionGridHeaderComponent.prototype.setComponents = 
        // Map components
        /**
         * @param {?} components
         * @return {?}
         */
        function (components) {
            var _this = this;
            formiojs.Utils.eachComponent(components, (/**
             * @param {?} component
             * @param {?} newPath
             * @return {?}
             */
            function (component, newPath) {
                _this.formComponents.set("data." + newPath, component);
            }));
        };
        SubmissionGridHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<ng-template> <thead> <tr> <th *ngFor=\"let header of headers\"> <a (click)=\"sort.emit(header)\"> {{ header.label }}&nbsp;<span [ngClass]=\"{'glyphicon-triangle-top': (header.sort === 'asc'), 'glyphicon-triangle-bottom': (header.sort === 'desc')}\" class=\"glyphicon\" *ngIf=\"header.sort\"></span> </a> </th> </tr> </thead> </ng-template> "
                    },] },
        ];
        return SubmissionGridHeaderComponent;
    }(GridHeaderComponent));

    var __extends$5 = (undefined && undefined.__extends) || (function () {
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
    var SubmissionGridBodyComponent = /** @class */ (function (_super) {
        __extends$5(SubmissionGridBodyComponent, _super);
        function SubmissionGridBodyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} formio
         * @param {?=} query
         * @return {?}
         */
        SubmissionGridBodyComponent.prototype.load = /**
         * @param {?} formio
         * @param {?=} query
         * @return {?}
         */
        function (formio, query) {
            var _this = this;
            query = query || {};
            return formio.loadSubmissions({ params: query })
                .then((/**
             * @param {?} submissions
             * @return {?}
             */
            function (submissions) { return _this.setRows(query, submissions); }));
        };
        /**
         * Render the cell data.
         *
         * @param submission
         * @param header
         * @return any
         */
        /**
         * Render the cell data.
         *
         * @param {?} submission
         * @param {?} header
         * @return {?} any
         */
        SubmissionGridBodyComponent.prototype.view = /**
         * Render the cell data.
         *
         * @param {?} submission
         * @param {?} header
         * @return {?} any
         */
        function (submission, header) {
            /** @type {?} */
            var cellValue = lodash.get(submission, header.key);
            if (header.renderCell) {
                return header.renderCell(cellValue, header.component);
            }
            else {
                if (header.component) {
                    if (header.component.getView) {
                        return header.component.getView(cellValue);
                    }
                    return header.component.asString(cellValue);
                }
                else {
                    return cellValue.toString();
                }
            }
        };
        SubmissionGridBodyComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<ng-template> <tbody> <tr *ngFor=\"let row of rows\" (click)=\"onRowSelect($event, row)\"> <td *ngFor=\"let rowHeader of header.headers\" [innerHTML]=\"view(row, rowHeader)\"></td> </tr> </tbody> </ng-template> "
                    },] },
        ];
        return SubmissionGridBodyComponent;
    }(GridBodyComponent));

    var __extends$6 = (undefined && undefined.__extends) || (function () {
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
    var SubmissionGridFooterComponent = /** @class */ (function (_super) {
        __extends$6(SubmissionGridFooterComponent, _super);
        function SubmissionGridFooterComponent() {
            return _super.call(this) || this;
        }
        /**
         * @return {?}
         */
        SubmissionGridFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.size) {
                this.size = 7;
            }
        };
        SubmissionGridFooterComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<ng-template #footer let-position=\"position\"> <thead class=\"formio-grid-footer\" *ngIf=\"position === footerPositions.top\"> <ng-container [ngTemplateOutlet]=\"defaultFooterTemplate\"></ng-container> </thead> <tfoot class=\"formio-grid-footer\" *ngIf=\"position === footerPositions.bottom\"> <ng-container [ngTemplateOutlet]=\"defaultFooterTemplate\"></ng-container> </tfoot> </ng-template> <ng-template #defaultFooterTemplate> <tr> <td *ngIf=\"header\" [colSpan]=\"header.numHeaders\"> <button *ngIf=\"actionAllowed('submissionCreate') && createText\" class=\"btn btn-primary pull-left float-left\" (click)=\"createItem.emit('form')\"><i class=\"glyphicon glyphicon-plus fa fa-plus\"></i> {{ createText }}</button> <span class=\"pull-right float-right item-counter\"><span class=\"page-num\">{{ body.firstItem }} - {{ body.lastItem }}</span> / {{ body.total }} total</span> <pagination [totalItems]=\"body.total\" [itemsPerPage]=\"body.limit\" [(ngModel)]=\"body.skip\" (pageChanged)=\"pageChanged.emit($event)\" [maxSize]=\"size\" class=\"justify-content-center pagination-sm\"></pagination> </td> </tr> </ng-template> ",
                        styles: ["tfoot.formio-grid-footer td { padding: 0.3rem; } tfoot.formio-grid-footer .page-num { font-size: 1.4em; } tfoot.formio-grid-footer ul.pagination { margin-top: 5px; margin-bottom: 0; } "],
                        encapsulation: core.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        SubmissionGridFooterComponent.ctorParameters = function () { return []; };
        return SubmissionGridFooterComponent;
    }(GridFooterComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/submission/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubmissionComponents = {
        header: SubmissionGridHeaderComponent,
        body: SubmissionGridBodyComponent,
        footer: SubmissionGridFooterComponent
    };

    var __extends$7 = (undefined && undefined.__extends) || (function () {
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
    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    /** @type {?} */
    var BaseInputComponent = formiojs.Components.components.input;
    /** @type {?} */
    var TextfieldComponent = formiojs.Components.components.textfield;

    /**
     * @fileoverview added by tsickle
     * Generated from: formio-promise.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioPromiseService = /** @class */ (function () {
        function FormioPromiseService(url, options) {
            this.url = url;
            this.options = options;
            this.formioService = new FormioService(url, options);
        }
        /**
         * @param {?} form
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.saveForm = /**
         * @param {?} form
         * @param {?=} options
         * @return {?}
         */
        function (form, options) {
            return this.formioService.saveForm(form, options).toPromise();
        };
        /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.loadForm = /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            return this.formioService.loadForm(query, options).toPromise();
        };
        /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.loadSubmission = /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            return this.formioService.loadSubmission(query, options).toPromise();
        };
        /**
         * @param {?} user
         * @param {?} form
         * @param {?} submission
         * @return {?}
         */
        FormioPromiseService.prototype.userPermissions = /**
         * @param {?} user
         * @param {?} form
         * @param {?} submission
         * @return {?}
         */
        function (user, form, submission) {
            return this.formioService.userPermissions(user, form, submission).toPromise();
        };
        /**
         * @param {?=} data
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.deleteSubmission = /**
         * @param {?=} data
         * @param {?=} options
         * @return {?}
         */
        function (data, options) {
            return this.formioService.deleteSubmission(data, options).toPromise();
        };
        /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.loadForms = /**
         * @param {?} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            return this.formioService.loadForms(query, options).toPromise();
        };
        /**
         * @param {?} submission
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.saveSubmission = /**
         * @param {?} submission
         * @param {?=} options
         * @return {?}
         */
        function (submission, options) {
            return this.formioService.saveSubmission(submission, options).toPromise();
        };
        /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        FormioPromiseService.prototype.loadSubmissions = /**
         * @param {?=} query
         * @param {?=} options
         * @return {?}
         */
        function (query, options) {
            return this.formioService.loadSubmissions(query, options).toPromise();
        };
        return FormioPromiseService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/grid.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.select = this.rowSelect = new core.EventEmitter();
            this.rowAction = new core.EventEmitter();
            this.createItem = new core.EventEmitter();
            this.error = new core.EventEmitter();
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
            formiojs.Formio.cache = {};
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
            lodash.each(this.header.headers, (/**
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
        FormioGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'formio-grid',
                        styles: [".formio-grid { position: relative; width: 100%; } .grid-refresh { height: 400px; width: 100%; } "],
                        template: "<ng-template #headerTemplate></ng-template> <ng-template #bodyTemplate></ng-template> <ng-template #footerTemplate></ng-template> <div class=\"formio-grid\"> <formio-alerts [alerts]=\"alerts\"></formio-alerts> <table class=\"table table-bordered table-striped table-hover\"> <ng-container *ngIf=\"initialized && [footerPositions.top, footerPositions.both].indexOf(footerPosition) !== -1\" [ngTemplateOutlet]=\"footer.template\" [ngTemplateOutletContext]=\"{ position: footerPositions.top }\"> </ng-container> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"header.template\"></ng-container> <formio-loader [isLoading]=\"isLoading\"></formio-loader> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"body.template\"></ng-container> <ng-container *ngIf=\"initialized && [footerPositions.bottom, footerPositions.both].indexOf(footerPosition) !== -1\" [ngTemplateOutlet]=\"footer.template\" [ngTemplateOutletContext]=\"{ position: footerPositions.bottom }\"> </ng-container> </table> </div> "
                    },] },
        ];
        /** @nocollapse */
        FormioGridComponent.ctorParameters = function () { return [
            { type: FormioAlerts },
            { type: core.ComponentFactoryResolver },
            { type: core.ChangeDetectorRef }
        ]; };
        FormioGridComponent.propDecorators = {
            footerPosition: [{ type: core.Input }],
            src: [{ type: core.Input }],
            items: [{ type: core.Input }],
            onForm: [{ type: core.Input }],
            query: [{ type: core.Input }],
            refresh: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            gridType: [{ type: core.Input }],
            size: [{ type: core.Input }],
            components: [{ type: core.Input }],
            formio: [{ type: core.Input }],
            createText: [{ type: core.Input }],
            isActionAllowed: [{ type: core.Input }],
            select: [{ type: core.Output }],
            rowSelect: [{ type: core.Output }],
            rowAction: [{ type: core.Output }],
            createItem: [{ type: core.Output }],
            error: [{ type: core.Output }],
            headerElement: [{ type: core.ViewChild, args: ['headerTemplate', { read: core.ViewContainerRef, static: true },] }],
            bodyElement: [{ type: core.ViewChild, args: ['bodyTemplate', { read: core.ViewContainerRef, static: true },] }],
            footerElement: [{ type: core.ViewChild, args: ['footerTemplate', { read: core.ViewContainerRef, static: true },] }]
        };
        return FormioGridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/grid.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormioGrid = /** @class */ (function () {
        function FormioGrid() {
        }
        FormioGrid.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            FormioModule,
                            router.RouterModule,
                            pagination.PaginationModule.forRoot()
                        ],
                        declarations: [
                            FormioGridComponent,
                            FormGridHeaderComponent,
                            FormGridBodyComponent,
                            FormGridFooterComponent,
                            SubmissionGridHeaderComponent,
                            SubmissionGridBodyComponent,
                            SubmissionGridFooterComponent
                        ],
                        exports: [
                            FormioGridComponent
                        ],
                        entryComponents: [
                            FormGridHeaderComponent,
                            FormGridBodyComponent,
                            FormGridFooterComponent,
                            SubmissionGridHeaderComponent,
                            SubmissionGridBodyComponent,
                            SubmissionGridFooterComponent
                        ],
                        providers: [
                            FormioAlerts
                        ]
                    },] },
        ];
        return FormioGrid;
    }());

    exports.FormGridBodyComponent = FormGridBodyComponent;
    exports.FormGridFooterComponent = FormGridFooterComponent;
    exports.FormGridHeaderComponent = FormGridHeaderComponent;
    exports.FormioGrid = FormioGrid;
    exports.FormioGridComponent = FormioGridComponent;
    exports.GridBodyComponent = GridBodyComponent;
    exports.GridFooterComponent = GridFooterComponent;
    exports.GridHeaderComponent = GridHeaderComponent;
    exports.SubmissionGridBodyComponent = SubmissionGridBodyComponent;
    exports.SubmissionGridFooterComponent = SubmissionGridFooterComponent;
    exports.SubmissionGridHeaderComponent = SubmissionGridHeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
