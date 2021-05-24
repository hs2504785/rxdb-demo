import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

class RxdbService {
    constructor() { }
}
RxdbService.ɵfac = function RxdbService_Factory(t) { return new (t || RxdbService)(); };
RxdbService.ɵprov = ɵɵdefineInjectable({ token: RxdbService, factory: RxdbService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RxdbService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class RxdbComponent {
    constructor() { }
    ngOnInit() {
    }
}
RxdbComponent.ɵfac = function RxdbComponent_Factory(t) { return new (t || RxdbComponent)(); };
RxdbComponent.ɵcmp = ɵɵdefineComponent({ type: RxdbComponent, selectors: [["lib-rxdb"]], decls: 2, vars: 0, template: function RxdbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " rxdb works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RxdbComponent, [{
        type: Component,
        args: [{
                selector: 'lib-rxdb',
                template: `
    <p>
      rxdb works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

const routes = [
    {
        path: '',
        component: RxdbComponent,
    },
];
class RxdbModule {
}
RxdbModule.ɵfac = function RxdbModule_Factory(t) { return new (t || RxdbModule)(); };
RxdbModule.ɵmod = ɵɵdefineNgModule({ type: RxdbModule });
RxdbModule.ɵinj = ɵɵdefineInjector({ imports: [[RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RxdbModule, { declarations: [RxdbComponent], imports: [RouterModule], exports: [RxdbComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RxdbModule, [{
        type: NgModule,
        args: [{
                declarations: [RxdbComponent],
                imports: [RouterModule.forChild(routes)],
                exports: [RxdbComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of rxdb
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RxdbComponent, RxdbModule, RxdbService };
//# sourceMappingURL=rxdb.js.map
