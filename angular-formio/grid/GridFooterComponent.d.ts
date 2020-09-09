import { GridFooterPositions } from './types/grid-footer-positions';
import { TemplateRef, EventEmitter } from '@angular/core';
import { GridHeaderComponent } from './GridHeaderComponent';
import { GridBodyComponent } from './GridBodyComponent';
import * as ɵngcc0 from '@angular/core';
export declare class GridFooterComponent {
    header: GridHeaderComponent;
    body: GridBodyComponent;
    createText: String;
    size: number;
    actionAllowed: any;
    pageChanged: EventEmitter<any>;
    createItem: EventEmitter<any>;
    template: TemplateRef<any>;
    footerPositions: typeof GridFooterPositions;
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GridFooterComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<GridFooterComponent, never, never, { "header": "header"; "body": "body"; "createText": "createText"; "size": "size"; "actionAllowed": "actionAllowed"; }, { "pageChanged": "pageChanged"; "createItem": "createItem"; }, never>;
}

//# sourceMappingURL=GridFooterComponent.d.ts.map