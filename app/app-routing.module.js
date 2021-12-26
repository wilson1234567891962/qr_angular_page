import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotPermissionComponent } from "./components/not-permission/not-permission.component";
import { AppComponent } from "./app.component";
import { HavePermissionComponent } from "./components/have-permission/have-permission.component";
const routes = [
    { path: '', component: AppComponent },
    { path: 'not-permission', component: NotPermissionComponent },
    { path: 'permission', component: HavePermissionComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
        ],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map