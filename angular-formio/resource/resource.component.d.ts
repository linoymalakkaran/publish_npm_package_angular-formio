import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioAuthService } from '../auth/auth.service';
import { FormioResourceService } from './resource.service';
import * as ɵngcc0 from '@angular/core';
export declare class FormioResourceComponent implements OnInit, OnDestroy {
    service: FormioResourceService;
    route: ActivatedRoute;
    auth: FormioAuthService;
    private paramsSubscription;
    perms: {
        delete: boolean;
        edit: boolean;
    };
    constructor(service: FormioResourceService, route: ActivatedRoute, auth: FormioAuthService);
    ngOnInit(): void;
    init(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormioResourceComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormioResourceComponent, "ng-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=resource.component.d.ts.map