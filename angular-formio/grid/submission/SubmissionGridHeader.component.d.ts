import { ExtendedComponentSchema } from 'formio-custom/formiojs';
import { GridHeaderComponent } from '../GridHeaderComponent';
import { FormioPromiseService } from '../../formio-promise.service';
import { ComponentInstance } from '../../formio.common';
import { GridColumn } from '../types/grid-column';
import { GridHeader, SortType } from '../types/grid-header';
import * as ɵngcc0 from '@angular/core';
export declare class SubmissionGridHeaderComponent extends GridHeaderComponent {
    formComponents: Map<string, ExtendedComponentSchema>;
    load(formio: FormioPromiseService, query?: any, columns?: Array<GridColumn>): Promise<GridHeader[]>;
    setHeader(header: GridHeader): void;
    getHeaderForColumn(column: GridColumn, component?: ExtendedComponentSchema, sort?: SortType): {
        label: string;
        key: string;
        sort: SortType;
        component: ComponentInstance;
        renderCell: (cellValue: any, component?: ComponentInstance) => string;
    };
    getHeaderForComponent(component: ExtendedComponentSchema, path: string, sort?: SortType): {
        label: string;
        key: string;
        sort: SortType;
        component: ComponentInstance;
    };
    setComponentsHeaders(components: Map<string, ExtendedComponentSchema>, sort?: SortType): void;
    setComponents(components: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SubmissionGridHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SubmissionGridHeaderComponent, "ng-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=SubmissionGridHeader.component.d.ts.map