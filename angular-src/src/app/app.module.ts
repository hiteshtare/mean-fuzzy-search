import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
// PrimeNG Modules

import { NgxSpinnerModule } from 'ngx-spinner'; // Spinner Module

import { FuzzyApiService } from './shared/services/fuzzy-api.service';
import { DefaultComponent } from './components/default/default.component';
import { CustomComponent } from './components/custom/custom.component';
import { NumberOnlyDirective } from './shared/directives/number-only.directive';
import { CustomToastService } from './shared/services/custom-toast.service';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    CustomComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    FieldsetModule,
    ToastModule,
    NgxSpinnerModule
  ],
  providers: [FuzzyApiService, MessageService, CustomToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

