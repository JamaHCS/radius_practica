import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmPopupModule,
    VirtualScrollerModule,
    ProgressBarModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    DialogModule,
    DataViewModule,
    TableModule,
    CardModule,
    DropdownModule,
    TagModule,
  ],
  exports: [
    TagModule,
    ConfirmPopupModule,
    VirtualScrollerModule,
    ProgressBarModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    CardModule,
    TableModule,
    DialogModule,
    DropdownModule,
    DataViewModule,
  ],
})
export class PrimeModule {}
