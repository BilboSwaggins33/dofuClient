import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { CalendarViewComponent } from "./calendar-view/calendar-view.component";
import { DofuViewComponent } from "./dofu-view/dofu-view.component";
import { DateTitleComponent } from "./date-title/date-title.component";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { JwtInterceptor } from "./core/interceptors/jwt.interceptor";
import { FormsModule } from "@angular/forms";
import { CdkDrag, CdkDragPreview, CdkDropList, CdkDropListGroup } from "@angular/cdk/drag-drop";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HeaderViewComponent } from "./header-view/header-view.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DofuService } from "./core/services/dofu.service";
import { TaskService } from "./core/services/task.service";
import { MouseHoldDirective } from "./mouse-hold.directive";
import { AppLoginComponent } from "./app.login.component";
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig
} from "@abacritt/angularx-social-login";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./core/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CalendarViewComponent,
    DofuViewComponent,
    DateTitleComponent,
    HeaderViewComponent,
    MouseHoldDirective,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterOutlet,
    AppRoutingModule,
    GoogleSigninButtonModule,
    CdkDragPreview
  ],
  providers: [HttpClient, DofuService, AuthService, TaskService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID, provider: new GoogleLoginProvider(
              "315687330122-oql11qeaddlv99jbt6rs9rl61331t7mo.apps.googleusercontent.com",
              {scopes: "openid"})
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule {


}
