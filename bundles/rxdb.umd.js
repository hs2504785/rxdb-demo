(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('rxdb', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rxdb = {}, global.ng.core, global.ng.router));
}(this, (function (exports, i0, i1) { 'use strict';

    var RxdbService = /** @class */ (function () {
        function RxdbService() {
        }
        return RxdbService;
    }());
    RxdbService.ɵfac = function RxdbService_Factory(t) { return new (t || RxdbService)(); };
    RxdbService.ɵprov = i0.ɵɵdefineInjectable({ token: RxdbService, factory: RxdbService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RxdbService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var RxdbComponent = /** @class */ (function () {
        function RxdbComponent() {
        }
        RxdbComponent.prototype.ngOnInit = function () {
        };
        return RxdbComponent;
    }());
    RxdbComponent.ɵfac = function RxdbComponent_Factory(t) { return new (t || RxdbComponent)(); };
    RxdbComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RxdbComponent, selectors: [["lib-rxdb"]], decls: 2, vars: 0, template: function RxdbComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " rxdb works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RxdbComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-rxdb',
                        template: "\n    <p>\n      rxdb works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var routes = [
        {
            path: '',
            component: RxdbComponent,
        },
    ];
    var RxdbModule = /** @class */ (function () {
        function RxdbModule() {
        }
        return RxdbModule;
    }());
    RxdbModule.ɵfac = function RxdbModule_Factory(t) { return new (t || RxdbModule)(); };
    RxdbModule.ɵmod = i0.ɵɵdefineNgModule({ type: RxdbModule });
    RxdbModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[i1.RouterModule.forChild(routes)]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RxdbModule, { declarations: [RxdbComponent], imports: [i1.RouterModule], exports: [RxdbComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RxdbModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [RxdbComponent],
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [RxdbComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of rxdb
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RxdbComponent = RxdbComponent;
    exports.RxdbModule = RxdbModule;
    exports.RxdbService = RxdbService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rxdb.umd.js.map
