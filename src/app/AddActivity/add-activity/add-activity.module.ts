import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AddActivityComponent } from "./add-activity.component";
import { AddActivityRoutingModule } from "./add-activity-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AddActivityRoutingModule
    ],
    declarations: [
        AddActivityComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddActivityModule { }
