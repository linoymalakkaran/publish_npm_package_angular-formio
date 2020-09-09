import { OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import * as ɵngcc0 from '@angular/core';
export declare class FormioResourceIndexComponent implements OnInit {
    service: FormioResourceService;
    route: ActivatedRoute;
    router: Router;
    config: FormioResourceConfig;
    cdr: ChangeDetectorRef;
    ngZone: NgZone;
    gridSrc?: string;
    gridQuery: any;
    createText: String;
    constructor(service: FormioResourceService, route: ActivatedRoute, router: Router, config: FormioResourceConfig, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    onSelect(row: any): void;
    onCreateItem(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormioResourceIndexComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormioResourceIndexComponent, "ng-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=index.component.d.ts.map