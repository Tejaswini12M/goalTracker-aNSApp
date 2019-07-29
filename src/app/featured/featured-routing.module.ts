import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

import { FeaturedComponent } from "./featured.component";

const routes: Routes = [
    { path: "", component: FeaturedComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule, NativeScriptFormsModule]
})
export class FeaturedRoutingModule { }
