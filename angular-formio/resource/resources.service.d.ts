import { EventEmitter } from '@angular/core';
import { FormioAuthService } from '../auth/auth.service';
import * as ɵngcc0 from '@angular/core';
export interface FormioResourceMap {
    [name: string]: any;
}
export declare class FormioResources {
    auth?: FormioAuthService;
    resources: FormioResourceMap;
    error: EventEmitter<any>;
    onError: EventEmitter<any>;
    constructor(auth?: FormioAuthService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormioResources, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FormioResources>;
}

//# sourceMappingURL=resources.service.d.ts.map