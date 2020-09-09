import { EventEmitter, TemplateRef } from '@angular/core';
import { GridHeaderComponent } from './GridHeaderComponent';
import { FormioPromiseService } from '../formio-promise.service';
import * as ɵngcc0 from '@angular/core';
export declare class GridBodyComponent {
    header: GridHeaderComponent;
    actionAllowed: any;
    rowSelect: EventEmitter<any>;
    rowAction: EventEmitter<any>;
    template: TemplateRef<any>;
    rows: Array<any>;
    loading: Boolean;
    firstItem: number;
    lastItem: number;
    skip: number;
    limit: number;
    total: number;
    constructor();
    load(formio: FormioPromiseService, query?: any): Promise<any>;
    onRowSelect(event: any, row: any): void;
    onRowAction(event: any, row: any, action: any): void;
    /**
     * Set the rows for this Grid body.
     *
     * @param query
     * @param items
     * @return any
     */
    setRows(query: any, items: any): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GridBodyComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<GridBodyComponent, never, never, { "header": "header"; "actionAllowed": "actionAllowed"; }, { "rowSelect": "rowSelect"; "rowAction": "rowAction"; }, never>;
}

//# sourceMappingURL=GridBodyComponent.d.ts.map