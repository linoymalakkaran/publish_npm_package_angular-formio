import { EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import * as ɵngcc0 from '@angular/core';
export declare class FormioResourceCreateComponent implements OnInit {
    service: FormioResourceService;
    route: ActivatedRoute;
    router: Router;
    config: FormioResourceConfig;
    onError: EventEmitter<any>;
    onSuccess: EventEmitter<any>;
    constructor(service: FormioResourceService, route: ActivatedRoute, router: Router, config: FormioResourceConfig);
    ngOnInit(): void;
    onSubmit(submission: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormioResourceCreateComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormioResourceCreateComponent, "ng-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=create.component.d.ts.map