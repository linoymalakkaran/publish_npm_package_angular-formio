import { GridBodyComponent } from '../GridBodyComponent';
import { FormioPromiseService } from '../../formio-promise.service';
import { GridHeader } from '../types/grid-header';
import FormioSubmission from '../../types/formio-submission';
import * as ɵngcc0 from '@angular/core';
export declare class SubmissionGridBodyComponent extends GridBodyComponent {
    load(formio: FormioPromiseService, query?: any): Promise<any[]>;
    /**
     * Render the cell data.
     *
     * @param submission
     * @param header
     * @return any
     */
    view(submission: FormioSubmission, header: GridHeader): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SubmissionGridBodyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SubmissionGridBodyComponent, "ng-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=SubmissionGridBody.component.d.ts.map