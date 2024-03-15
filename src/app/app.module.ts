import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AccordionModule } from 'primeng/accordion';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from "./shared/service/http-data.service";

@NgModule({
    declarations : [
        AppComponent
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        AccordionModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers : [
        HttpService
    ],
    bootstrap : [AppComponent]
})
export class AppModule{}