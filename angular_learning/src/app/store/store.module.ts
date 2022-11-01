import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangComponent } from './barang/barang.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { KasirComponent } from './kasir/kasir.component';



@NgModule({
  declarations: [
    BarangComponent,
    PegawaiComponent,
    KasirComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
