import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CalendarViewComponent } from "./calendar-view/calendar-view.component";
import { AppLoginComponent } from "./app.login.component";
import {AuthGuard} from "./core/guards/auth.guard"
const appRoutes: Routes = [
  {
    path: 'login',
    component: AppLoginComponent,
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
