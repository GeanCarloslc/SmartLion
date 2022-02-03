import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrosService } from './cadastros/cadastros.service'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { ComponentModule } from "./components/component.module";

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { CadastrosModule } from './cadastros/cadastros.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ReactiveFormsModule,
    CadastrosModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false  // Manter caracteres especias
    }),
    AngularMaterialModule,
    ComponentModule,
    FormsModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    CadastrosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
