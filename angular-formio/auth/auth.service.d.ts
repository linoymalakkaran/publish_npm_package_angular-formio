import { EventEmitter } from '@angular/core';
import { FormioAuthConfig } from './auth.config';
import { FormioAppConfig } from '../formio.config';
import * as ɵngcc0 from '@angular/core';
export declare class FormioAuthService {
    appConfig: FormioAppConfig;
    config: FormioAuthConfig;
    user: any;
    authenticated: boolean;
    loginForm: string;
    onLogin: EventEmitter<object>;
    onLogout: EventEmitter<object>;
    registerForm: string;
    onRegister: EventEmitter<object>;
    onUser: EventEmitter<object>;
    onError: EventEmitter<any>;
    ready: Promise<boolean>;
    readyResolve: any;
    readyReject: any;
    projectReady?: Promise<any>;
    accessReady?: Promise<any>;
    userReady?: Promise<any>;
    formAccess: any;
    submissionAccess: any;
    roles: any;
    is: any;
    constructor(appConfig: FormioAppConfig, config: FormioAuthConfig);
    onLoginSubmit(submission: object): void;
    onRegisterSubmit(submission: object): void;
    init(): void;
    setUser(user: any): void;
    setUserRoles(): void;
    logoutError(): void;
    logout(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormioAuthService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FormioAuthService>;
}

//# sourceMappingURL=auth.service.d.ts.map