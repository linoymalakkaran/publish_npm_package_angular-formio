/**
 * @fileoverview added by tsickle
 * Generated from: grid/GridFooterComponent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridFooterPositions } from './types/grid-footer-positions';
import { Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { GridHeaderComponent } from './GridHeaderComponent';
import { GridBodyComponent } from './GridBodyComponent';
import * as ɵngcc0 from '@angular/core';
var GridFooterComponent = /** @class */ (function () {
    function GridFooterComponent() {
        this.footerPositions = GridFooterPositions;
        this.pageChanged = new EventEmitter();
        this.createItem = new EventEmitter();
    }
    GridFooterComponent.propDecorators = {
        header: [{ type: Input }],
        body: [{ type: Input }],
        createText: [{ type: Input }],
        size: [{ type: Input }],
        actionAllowed: [{ type: Input }],
        pageChanged: [{ type: Output }],
        createItem: [{ type: Output }],
        template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
GridFooterComponent.ɵfac = function GridFooterComponent_Factory(t) { return new (t || GridFooterComponent)(); };
GridFooterComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridFooterComponent, viewQuery: function GridFooterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { header: "header", body: "body", createText: "createText", size: "size", actionAllowed: "actionAllowed" }, outputs: { pageChanged: "pageChanged", createItem: "createItem" } });

    return GridFooterComponent;
}());
export { GridFooterComponent };
if (false) {
    /** @type {?} */
    GridFooterComponent.prototype.header;
    /** @type {?} */
    GridFooterComponent.prototype.body;
    /** @type {?} */
    GridFooterComponent.prototype.createText;
    /** @type {?} */
    GridFooterComponent.prototype.size;
    /** @type {?} */
    GridFooterComponent.prototype.actionAllowed;
    /** @type {?} */
    GridFooterComponent.prototype.pageChanged;
    /** @type {?} */
    GridFooterComponent.prototype.createItem;
    /** @type {?} */
    GridFooterComponent.prototype.template;
    /** @type {?} */
    GridFooterComponent.prototype.footerPositions;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZEZvb3RlckNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiR3JpZEZvb3RlckNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBncmlkL0dyaWRGb290ZXJDb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgR3JpZEZvb3RlclBvc2l0aW9ucyB9IGZyb20gJy4vdHlwZXMvZ3JpZC1mb290ZXItcG9zaXRpb25zJztcbmltcG9ydCB7IElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JpZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vR3JpZEhlYWRlckNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQm9keUNvbXBvbmVudCB9IGZyb20gJy4vR3JpZEJvZHlDb21wb25lbnQnO1xudmFyIEdyaWRGb290ZXJDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR3JpZEZvb3RlckNvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5mb290ZXJQb3NpdGlvbnMgPSBHcmlkRm9vdGVyUG9zaXRpb25zO1xuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIEdyaWRGb290ZXJDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgIGhlYWRlcjogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGJvZHk6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICBjcmVhdGVUZXh0OiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgc2l6ZTogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGFjdGlvbkFsbG93ZWQ6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICBwYWdlQ2hhbmdlZDogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICBjcmVhdGVJdGVtOiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIHRlbXBsYXRlOiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFtUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSxdIH1dXG4gICAgfTtcbiAgICByZXR1cm4gR3JpZEZvb3RlckNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBHcmlkRm9vdGVyQ29tcG9uZW50IH07XG5pZiAoZmFsc2UpIHtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEZvb3RlckNvbXBvbmVudC5wcm90b3R5cGUuaGVhZGVyO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkRm9vdGVyQ29tcG9uZW50LnByb3RvdHlwZS5ib2R5O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkRm9vdGVyQ29tcG9uZW50LnByb3RvdHlwZS5jcmVhdGVUZXh0O1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkRm9vdGVyQ29tcG9uZW50LnByb3RvdHlwZS5zaXplO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkRm9vdGVyQ29tcG9uZW50LnByb3RvdHlwZS5hY3Rpb25BbGxvd2VkO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkRm9vdGVyQ29tcG9uZW50LnByb3RvdHlwZS5wYWdlQ2hhbmdlZDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEZvb3RlckNvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlSXRlbTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEZvb3RlckNvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGU7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRGb290ZXJDb21wb25lbnQucHJvdG90eXBlLmZvb3RlclBvc2l0aW9ucztcbn1cbiJdfQ==