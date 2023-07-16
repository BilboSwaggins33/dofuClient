import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CalendarViewComponent } from "./calendar-view/calendar-view.component";
import { AppLoginComponent } from "./app.login.component";
import {AuthGuard} from "./core/guards/auth.guard"
import { LoginGuard } from "./core/guards/login.guard";
const appRoutes: Routes = [
  {
    path: 'login',
    component: AppLoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    component: CalendarViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
