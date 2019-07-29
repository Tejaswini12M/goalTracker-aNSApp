import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
// import { registerElement } from "nativescript-angular/element-registry";
// import { CardView } from "../nativescript-cardview";
import * as app from "tns-core-modules/application";

// registerElement("CardView", () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    activities = [];

    constructor(private page: Page,  private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        // this.page.on('navigatedTo', () => {
        //     this.page.getViewById("addButtonContainer").top = screen.mainScreen.heightDIPs - 120;
        // });
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.activities.push({activityText:"WorkOut",activitycount:"30 Days"  });
        this.activities.push({activityText:"Study", activitycount: "10 Hrs" });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    addActivity(): void {

        this.routerExtensions.navigate(["/add"], {
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 200,
                curve: "easeIn"
            }
        });
    }

    viewActivity(): void {

        this.routerExtensions.navigate(["/viewCard"], {
            animated: true,
            transition: {
                name: "slideUp",
                duration: 200,
                curve: "easeIn"
            }
        });
    }
}
