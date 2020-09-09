/**
 * @fileoverview added by tsickle
 * Generated from: resource/resources.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { FormioAuthService } from '../auth/auth.service';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function FormioResourceMap() { }
var FormioResources = /** @class */ (function () {
    function FormioResources(auth) {
        this.auth = auth;
        this.resources = {};
        this.error = new EventEmitter();
        this.onError = this.error;
        this.resources = {
            currentUser: {
                resourceLoaded: this.auth.userReady
            }
        };
    }
    /** @nocollapse */
    FormioResources.ctorParameters = function () { return [
        { type: FormioAuthService }
    ]; };
FormioResources.ɵfac = function FormioResources_Factory(t) { return new (t || FormioResources)(ɵngcc0.ɵɵinject(FormioAuthService)); };
FormioResources.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FormioResources, factory: function (t) { return FormioResources.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResources, [{
        type: Injectable
    }], function () { return [{ type: FormioAuthService }]; }, null); })();
    return FormioResources;
}());
export { FormioResources };
if (false) {
    /** @type {?} */
    FormioResources.prototype.resources;
    /** @type {?} */
    FormioResources.prototype.error;
    /** @type {?} */
    FormioResources.prototype.onError;
    /** @type {?} */
    FormioResources.prototype.auth;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInJlc291cmNlcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBR007QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7MkVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogcmVzb3VyY2UvcmVzb3VyY2VzLnNlcnZpY2UudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgZnVuY3Rpb24gRm9ybWlvUmVzb3VyY2VNYXAoKSB7IH1cbnZhciBGb3JtaW9SZXNvdXJjZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9ybWlvUmVzb3VyY2VzKGF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbkVycm9yID0gdGhpcy5lcnJvcjtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB7XG4gICAgICAgICAgICBjdXJyZW50VXNlcjoge1xuICAgICAgICAgICAgICAgIHJlc291cmNlTG9hZGVkOiB0aGlzLmF1dGgudXNlclJlYWR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEZvcm1pb1Jlc291cmNlcy5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEZvcm1pb1Jlc291cmNlcy5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9BdXRoU2VydmljZSB9XG4gICAgXTsgfTtcbiAgICByZXR1cm4gRm9ybWlvUmVzb3VyY2VzO1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb1Jlc291cmNlcyB9O1xuaWYgKGZhbHNlKSB7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlcy5wcm90b3R5cGUucmVzb3VyY2VzO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZXMucHJvdG90eXBlLmVycm9yO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZXMucHJvdG90eXBlLm9uRXJyb3I7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlcy5wcm90b3R5cGUuYXV0aDtcbn1cbiJdfQ==