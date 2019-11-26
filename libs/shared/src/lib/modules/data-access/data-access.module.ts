import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api-service/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule]
})
export class DataAccessModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: DataAccessModule,
      providers: [ApiService]
    }
  }
 }
