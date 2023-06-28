import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CdkDrag, CdkDropList, CdkDropListGroup } from "@angular/cdk/drag-drop";
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { DofuViewComponent } from './dofu-view/dofu-view.component';
import { DateTitleComponent } from './date-title/date-title.component';
import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CalendarViewComponent,
    DofuViewComponent,
    DateTitleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {


}
