import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GlobalInterceptor} from './interceptor/global.interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {TokenService} from './service/token.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true},
    TokenService
  ]
})
export class CoreModule {
}
