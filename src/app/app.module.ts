import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { DofuViewComponent } from './dofu-view/dofu-view.component';
import { DateTitleComponent } from './date-title/date-title.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import {BrowserModule} from '@angular/platform-browser'
import {CorsInterceptor} from "./core/interceptors/cors.interceptor";
import { FormsModule } from "@angular/forms";
import { CdkDrag, CdkDropList, CdkDropListGroup } from "@angular/cdk/drag-drop";
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { HeaderViewComponent } from './header-view/header-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CalendarViewComponent,
    DofuViewComponent,
    DateTitleComponent,
    HeaderViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    TableModule,
    ListboxModule,
    FormsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatIconModule
  ],
  providers: [HttpClient, {provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {


}
