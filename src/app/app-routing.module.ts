import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { AddActivityComponent } from "./AddActivity/add-activity/add-activity.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    // { path: "add", loadChildren: "~/app/AddActivity/add-activity/add-activity.module#AddActivityRoutingModule"  },
     { path: "add", loadChildren: "~/app/featured/featured.module#FeaturedModule"  },
     { path: "viewCard", loadChildren: "~/app/browse/browse.module#BrowseModule"  },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
