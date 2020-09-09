import { EventEmitter, TemplateRef } from '@angular/core';
import { FormioPromiseService } from '../formio-promise.service';
import { GridHeader } from './types/grid-header';
import * as ɵngcc0 from '@angular/core';
export declare class GridHeaderComponent {
    actionAllowed: any;
    sort: EventEmitter<GridHeader>;
    template: TemplateRef<any>;
    headers: Array<GridHeader>;
    constructor();
    get numHeaders(): number;
    load(formio: FormioPromiseService, query?: any, columns?: Array<any>): Promise<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GridHeaderComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<GridHeaderComponent, never, never, { "actionAllowed": "actionAllowed"; }, { "sort": "sort"; }, never>;
}

//# sourceMappingURL=GridHeaderComponent.d.ts.map