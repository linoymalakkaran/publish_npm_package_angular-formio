/**
 * @fileoverview added by tsickle
 * Generated from: auth/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { FormioAuthConfig } from './auth.config';
import { FormioAppConfig } from '../formio.config';
import { get, each } from 'lodash';
import { Formio } from 'formio-adports/formiojs';
import * as ɵngcc0 from '@angular/core';
var FormioAuthService = /** @class */ (function () {
    function FormioAuthService(appConfig, config) {
        var _this = this;
        this.appConfig = appConfig;
        this.config = config;
        this.authenticated = false;
        this.formAccess = {};
        this.submissionAccess = {};
        this.is = {};
        this.user = null;
        if (this.appConfig && this.appConfig.appUrl) {
            Formio.setBaseUrl(this.appConfig.apiUrl);
            Formio.setProjectUrl(this.appConfig.appUrl);
            Formio.formOnly = !!this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        this.loginForm =
            this.appConfig.appUrl +
                '/' +
                get(this.config, 'login.form', 'user/login');
        this.registerForm =
            this.appConfig.appUrl +
                '/' +
                get(this.config, 'register.form', 'user/register');
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
        this.onRegister = new EventEmitter();
        this.onUser = new EventEmitter();
        this.onError = new EventEmitter();
        this.ready = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.readyResolve = resolve;
            _this.readyReject = reject;
        }));
        // Register for the core events.
        Formio.events.on('formio.badToken', (/**
         * @return {?}
         */
        function () { return _this.logoutError(); }));
        Formio.events.on('formio.sessionExpired', (/**
         * @return {?}
         */
        function () { return _this.logoutError(); }));
        if (!this.config.delayAuth) {
            this.init();
        }
    }
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioAuthService.prototype.onLoginSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        this.setUser(submission);
        this.onLogin.emit(submission);
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioAuthService.prototype.onRegisterSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        this.setUser(submission);
        this.onRegister.emit(submission);
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.projectReady = Formio.makeStaticRequest(this.appConfig.appUrl).then((/**
         * @param {?} project
         * @return {?}
         */
        function (project) {
            each(project.access, (/**
             * @param {?} access
             * @return {?}
             */
            function (access) {
                _this.formAccess[access.type] = access.roles;
            }));
        }), (/**
         * @return {?}
         */
        function () {
            _this.formAccess = {};
            return null;
        }));
        // Get the access for this project.
        this.accessReady = Formio.makeStaticRequest(this.appConfig.appUrl + '/access').then((/**
         * @param {?} access
         * @return {?}
         */
        function (access) {
            each(access.forms, (/**
             * @param {?} form
             * @return {?}
             */
            function (form) {
                _this.submissionAccess[form.name] = {};
                form.submissionAccess.forEach((/**
                 * @param {?} subAccess
                 * @return {?}
                 */
                function (subAccess) {
                    _this.submissionAccess[form.name][subAccess.type] = subAccess.roles;
                }));
            }));
            _this.roles = access.roles;
            return access;
        }), (/**
         * @return {?}
         */
        function () {
            _this.roles = {};
            return null;
        }));
        /** @type {?} */
        var currentUserPromise;
        if (this.config.oauth) {
            // Make a fix to the hash to remove starting "/" that angular might put there.
            if (window.location.hash && window.location.hash.match(/^#\/access_token/)) {
                history.pushState(null, null, window.location.hash.replace(/^#\/access_token/, '#access_token'));
            }
            // Initiate the SSO if they provide oauth settings.
            currentUserPromise = Formio.ssoInit(this.config.oauth.type, this.config.oauth.options);
        }
        else {
            currentUserPromise = Formio.currentUser();
        }
        this.userReady = currentUserPromise.then((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            _this.setUser(user);
            return user;
        }));
        // Trigger we are redy when all promises have resolved.
        if (this.accessReady) {
            this.accessReady
                .then((/**
             * @return {?}
             */
            function () { return _this.projectReady; }))
                .then((/**
             * @return {?}
             */
            function () { return _this.userReady; }))
                .then((/**
             * @return {?}
             */
            function () { return _this.readyResolve(true); }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.readyReject(err); }));
        }
    };
    /**
     * @param {?} user
     * @return {?}
     */
    FormioAuthService.prototype.setUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var namespace = Formio.namespace || 'formio';
        if (user) {
            this.user = user;
            localStorage.setItem(namespace + "AppUser", JSON.stringify(user));
            this.setUserRoles();
        }
        else {
            this.user = null;
            this.is = {};
            localStorage.removeItem(namespace + "AppUser");
            Formio.clearCache();
            Formio.setUser(null);
        }
        this.authenticated = !!Formio.getToken();
        this.onUser.emit(this.user);
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.setUserRoles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.accessReady) {
            this.accessReady.then((/**
             * @return {?}
             */
            function () {
                each(_this.roles, (/**
                 * @param {?} role
                 * @param {?} roleName
                 * @return {?}
                 */
                function (role, roleName) {
                    if (_this.user.roles.indexOf(role._id) !== -1) {
                        _this.is[roleName] = true;
                    }
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.logoutError = /**
     * @return {?}
     */
    function () {
        this.setUser(null);
        localStorage.removeItem('formioToken');
        this.onError.emit();
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setUser(null);
        localStorage.removeItem('formioToken');
        Formio.logout()
            .then((/**
         * @return {?}
         */
        function () { return _this.onLogout.emit(); }))
            .catch((/**
         * @return {?}
         */
        function () { return _this.logoutError(); }));
    };
    /** @nocollapse */
    FormioAuthService.ctorParameters = function () { return [
        { type: FormioAppConfig },
        { type: FormioAuthConfig }
    ]; };
FormioAuthService.ɵfac = function FormioAuthService_Factory(t) { return new (t || FormioAuthService)(ɵngcc0.ɵɵinject(FormioAppConfig), ɵngcc0.ɵɵinject(FormioAuthConfig)); };
FormioAuthService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FormioAuthService, factory: function (t) { return FormioAuthService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioAuthService, [{
        type: Injectable
    }], function () { return [{ type: FormioAppConfig }, { type: FormioAuthConfig }]; }, null); })();
    return FormioAuthService;
}());
export { FormioAuthService };
if (false) {
    /** @type {?} */
    FormioAuthService.prototype.user;
    /** @type {?} */
    FormioAuthService.prototype.authenticated;
    /** @type {?} */
    FormioAuthService.prototype.loginForm;
    /** @type {?} */
    FormioAuthService.prototype.onLogin;
    /** @type {?} */
    FormioAuthService.prototype.onLogout;
    /** @type {?} */
    FormioAuthService.prototype.registerForm;
    /** @type {?} */
    FormioAuthService.prototype.onRegister;
    /** @type {?} */
    FormioAuthService.prototype.onUser;
    /** @type {?} */
    FormioAuthService.prototype.onError;
    /** @type {?} */
    FormioAuthService.prototype.ready;
    /** @type {?} */
    FormioAuthService.prototype.readyResolve;
    /** @type {?} */
    FormioAuthService.prototype.readyReject;
    /** @type {?} */
    FormioAuthService.prototype.projectReady;
    /** @type {?} */
    FormioAuthService.prototype.accessReady;
    /** @type {?} */
    FormioAuthService.prototype.userReady;
    /** @type {?} */
    FormioAuthService.prototype.formAccess;
    /** @type {?} */
    FormioAuthService.prototype.submissionAccess;
    /** @type {?} */
    FormioAuthService.prototype.roles;
    /** @type {?} */
    FormioAuthService.prototype.is;
    /** @type {?} */
    FormioAuthService.prototype.appConfig;
    /** @type {?} */
    FormioAuthService.prototype.config;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJhdXRoLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFHTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O3FHQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogYXV0aC9hdXRoLnNlcnZpY2UudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoQ29uZmlnIH0gZnJvbSAnLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICcuLi9mb3JtaW8uY29uZmlnJztcbmltcG9ydCB7IGdldCwgZWFjaCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGb3JtaW8gfSBmcm9tICdmb3JtaW9qcyc7XG52YXIgRm9ybWlvQXV0aFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9ybWlvQXV0aFNlcnZpY2UoYXBwQ29uZmlnLCBjb25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hcHBDb25maWcgPSBhcHBDb25maWc7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JtQWNjZXNzID0ge307XG4gICAgICAgIHRoaXMuc3VibWlzc2lvbkFjY2VzcyA9IHt9O1xuICAgICAgICB0aGlzLmlzID0ge307XG4gICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmFwcENvbmZpZyAmJiB0aGlzLmFwcENvbmZpZy5hcHBVcmwpIHtcbiAgICAgICAgICAgIEZvcm1pby5zZXRCYXNlVXJsKHRoaXMuYXBwQ29uZmlnLmFwaVVybCk7XG4gICAgICAgICAgICBGb3JtaW8uc2V0UHJvamVjdFVybCh0aGlzLmFwcENvbmZpZy5hcHBVcmwpO1xuICAgICAgICAgICAgRm9ybWlvLmZvcm1Pbmx5ID0gISF0aGlzLmFwcENvbmZpZy5mb3JtT25seTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYW4gQXBwQ29uZmlnIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9uIScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9naW5Gb3JtID1cbiAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnLmFwcFVybCArXG4gICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICBnZXQodGhpcy5jb25maWcsICdsb2dpbi5mb3JtJywgJ3VzZXIvbG9naW4nKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPVxuICAgICAgICAgICAgdGhpcy5hcHBDb25maWcuYXBwVXJsICtcbiAgICAgICAgICAgICAgICAnLycgK1xuICAgICAgICAgICAgICAgIGdldCh0aGlzLmNvbmZpZywgJ3JlZ2lzdGVyLmZvcm0nLCAndXNlci9yZWdpc3RlcicpO1xuICAgICAgICB0aGlzLm9uTG9naW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25Mb2dvdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25SZWdpc3RlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblVzZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IG5ldyBQcm9taXNlKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSByZXNvbHZlXG4gICAgICAgICAqIEBwYXJhbSB7P30gcmVqZWN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgX3RoaXMucmVhZHlSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pKTtcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9yIHRoZSBjb3JlIGV2ZW50cy5cbiAgICAgICAgRm9ybWlvLmV2ZW50cy5vbignZm9ybWlvLmJhZFRva2VuJywgKC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubG9nb3V0RXJyb3IoKTsgfSkpO1xuICAgICAgICBGb3JtaW8uZXZlbnRzLm9uKCdmb3JtaW8uc2Vzc2lvbkV4cGlyZWQnLCAoLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sb2dvdXRFcnJvcigpOyB9KSk7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZGVsYXlBdXRoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5vbkxvZ2luU3VibWl0ID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBzdWJtaXNzaW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoc3VibWlzc2lvbikge1xuICAgICAgICB0aGlzLnNldFVzZXIoc3VibWlzc2lvbik7XG4gICAgICAgIHRoaXMub25Mb2dpbi5lbWl0KHN1Ym1pc3Npb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBzdWJtaXNzaW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUub25SZWdpc3RlclN1Ym1pdCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHN1Ym1pc3Npb24pIHtcbiAgICAgICAgdGhpcy5zZXRVc2VyKHN1Ym1pc3Npb24pO1xuICAgICAgICB0aGlzLm9uUmVnaXN0ZXIuZW1pdChzdWJtaXNzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLmluaXQgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcm9qZWN0UmVhZHkgPSBGb3JtaW8ubWFrZVN0YXRpY1JlcXVlc3QodGhpcy5hcHBDb25maWcuYXBwVXJsKS50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwcm9qZWN0XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgZWFjaChwcm9qZWN0LmFjY2VzcywgKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChhY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5mb3JtQWNjZXNzW2FjY2Vzcy50eXBlXSA9IGFjY2Vzcy5yb2xlcztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSksICgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmZvcm1BY2Nlc3MgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KSk7XG4gICAgICAgIC8vIEdldCB0aGUgYWNjZXNzIGZvciB0aGlzIHByb2plY3QuXG4gICAgICAgIHRoaXMuYWNjZXNzUmVhZHkgPSBGb3JtaW8ubWFrZVN0YXRpY1JlcXVlc3QodGhpcy5hcHBDb25maWcuYXBwVXJsICsgJy9hY2Nlc3MnKS50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChhY2Nlc3MpIHtcbiAgICAgICAgICAgIGVhY2goYWNjZXNzLmZvcm1zLCAoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGZvcm1cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3VibWlzc2lvbkFjY2Vzc1tmb3JtLm5hbWVdID0ge307XG4gICAgICAgICAgICAgICAgZm9ybS5zdWJtaXNzaW9uQWNjZXNzLmZvckVhY2goKC8qKlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gc3ViQWNjZXNzXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc3ViQWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pc3Npb25BY2Nlc3NbZm9ybS5uYW1lXVtzdWJBY2Nlc3MudHlwZV0gPSBzdWJBY2Nlc3Mucm9sZXM7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgX3RoaXMucm9sZXMgPSBhY2Nlc3Mucm9sZXM7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzO1xuICAgICAgICB9KSwgKC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucm9sZXMgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KSk7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGN1cnJlbnRVc2VyUHJvbWlzZTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9hdXRoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIGEgZml4IHRvIHRoZSBoYXNoIHRvIHJlbW92ZSBzdGFydGluZyBcIi9cIiB0aGF0IGFuZ3VsYXIgbWlnaHQgcHV0IHRoZXJlLlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLm1hdGNoKC9eI1xcL2FjY2Vzc190b2tlbi8pKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiNcXC9hY2Nlc3NfdG9rZW4vLCAnI2FjY2Vzc190b2tlbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEluaXRpYXRlIHRoZSBTU08gaWYgdGhleSBwcm92aWRlIG9hdXRoIHNldHRpbmdzLlxuICAgICAgICAgICAgY3VycmVudFVzZXJQcm9taXNlID0gRm9ybWlvLnNzb0luaXQodGhpcy5jb25maWcub2F1dGgudHlwZSwgdGhpcy5jb25maWcub2F1dGgub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VXNlclByb21pc2UgPSBGb3JtaW8uY3VycmVudFVzZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVzZXJSZWFkeSA9IGN1cnJlbnRVc2VyUHJvbWlzZS50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB1c2VyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgICAgX3RoaXMuc2V0VXNlcih1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KSk7XG4gICAgICAgIC8vIFRyaWdnZXIgd2UgYXJlIHJlZHkgd2hlbiBhbGwgcHJvbWlzZXMgaGF2ZSByZXNvbHZlZC5cbiAgICAgICAgaWYgKHRoaXMuYWNjZXNzUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzUmVhZHlcbiAgICAgICAgICAgICAgICAudGhlbigoLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcm9qZWN0UmVhZHk7IH0pKVxuICAgICAgICAgICAgICAgIC50aGVuKCgvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVzZXJSZWFkeTsgfSkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVhZHlSZXNvbHZlKHRydWUpOyB9KSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLnJlYWR5UmVqZWN0KGVycik7IH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB1c2VyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUuc2V0VXNlciA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gdXNlclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gRm9ybWlvLm5hbWVzcGFjZSB8fCAnZm9ybWlvJztcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lc3BhY2UgKyBcIkFwcFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgdGhpcy5zZXRVc2VyUm9sZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlzID0ge307XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lc3BhY2UgKyBcIkFwcFVzZXJcIik7XG4gICAgICAgICAgICBGb3JtaW8uY2xlYXJDYWNoZSgpO1xuICAgICAgICAgICAgRm9ybWlvLnNldFVzZXIobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gISFGb3JtaW8uZ2V0VG9rZW4oKTtcbiAgICAgICAgdGhpcy5vblVzZXIuZW1pdCh0aGlzLnVzZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUuc2V0VXNlclJvbGVzID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFjY2Vzc1JlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc1JlYWR5LnRoZW4oKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVhY2goX3RoaXMucm9sZXMsICgvKipcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gez99IHJvbGVcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gez99IHJvbGVOYW1lXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocm9sZSwgcm9sZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnVzZXIucm9sZXMuaW5kZXhPZihyb2xlLl9pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc1tyb2xlTmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5sb2dvdXRFcnJvciA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFVzZXIobnVsbCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JtaW9Ub2tlbicpO1xuICAgICAgICB0aGlzLm9uRXJyb3IuZW1pdCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUubG9nb3V0ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2V0VXNlcihudWxsKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2Zvcm1pb1Rva2VuJyk7XG4gICAgICAgIEZvcm1pby5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25Mb2dvdXQuZW1pdCgpOyB9KSlcbiAgICAgICAgICAgIC5jYXRjaCgoLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sb2dvdXRFcnJvcigpOyB9KSk7XG4gICAgfTtcbiAgICBGb3JtaW9BdXRoU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IEZvcm1pb0FwcENvbmZpZyB9LFxuICAgICAgICB7IHR5cGU6IEZvcm1pb0F1dGhDb25maWcgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIEZvcm1pb0F1dGhTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb0F1dGhTZXJ2aWNlIH07XG5pZiAoZmFsc2UpIHtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLnVzZXI7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5hdXRoZW50aWNhdGVkO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUubG9naW5Gb3JtO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUub25Mb2dpbjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLm9uTG9nb3V0O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUucmVnaXN0ZXJGb3JtO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUub25SZWdpc3RlcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLm9uVXNlcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLm9uRXJyb3I7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5yZWFkeTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLnJlYWR5UmVzb2x2ZTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLnJlYWR5UmVqZWN0O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUucHJvamVjdFJlYWR5O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUuYWNjZXNzUmVhZHk7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS51c2VyUmVhZHk7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5mb3JtQWNjZXNzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUuc3VibWlzc2lvbkFjY2VzcztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvQXV0aFNlcnZpY2UucHJvdG90eXBlLnJvbGVzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoU2VydmljZS5wcm90b3R5cGUuaXM7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5hcHBDb25maWc7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb0F1dGhTZXJ2aWNlLnByb3RvdHlwZS5jb25maWc7XG59XG4iXX0=