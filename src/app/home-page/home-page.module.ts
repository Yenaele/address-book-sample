import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {NzButtonModule} from 'ng-zorro-antd';
import {ShareModule} from '../share/share.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [HomePageComponent],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    ShareModule
  ]
})
export class HomePageModule {
}
