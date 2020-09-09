import { OnInit, OnChanges, OnDestroy, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { FormioAppConfig } from '../../formio.config';
import { FormioForm, FormioOptions } from '../../formio.common';
import { FormBuilder } from 'formio-adports/formiojs';
import { Observable } from 'rxjs';
import { CustomTagsService } from '../../custom-component/custom-tags.service';
import * as ɵngcc0 from '@angular/core';
export declare class FormBuilderComponent implements OnInit, OnChanges, OnDestroy {
    private ngZone;
    private config;
    private customTags?;
    ready: Promise<object>;
    readyResolve: any;
    formio: any;
    builder: FormBuilder;
    componentAdding: boolean;
    private refreshSubscription;
    form?: FormioForm;
    options?: FormioOptions;
    formbuilder?: any;
    noeval?: boolean;
    refresh?: Observable<void>;
    rebuild?: Observable<object>;
    change?: EventEmitter<object>;
    builderElement?: ElementRef<any>;
    constructor(ngZone: NgZone, config: FormioAppConfig, customTags?: CustomTagsService);
    ngOnInit(): void;
    setInstance(instance: any): any;
    setDisplay(display: String): any;
    //added new fn by linoy
    setBreadCrumbsDisplay(display: String,selectedBreadCrumbsTpl: object): any;
    buildForm(form: any): any;
    rebuildForm(form: any, options?: object): Promise<any>;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormBuilderComponent, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormBuilderComponent, "form-builder", never, { "noeval": "noeval"; "form": "form"; "options": "options"; "formbuilder": "formbuilder"; "refresh": "refresh"; "rebuild": "rebuild"; }, { "change": "change"; }, never, never>;
}

//# sourceMappingURL=formbuilder.component.d.ts.map