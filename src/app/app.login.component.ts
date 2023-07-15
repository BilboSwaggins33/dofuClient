import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-login",
  templateUrl: "./app.login.component.html",
  styleUrls: ["./app.login.component.css"]
})
export class AppLoginComponent {


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("google-logo", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/google-icon.svg"));
  }


}
