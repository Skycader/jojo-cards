import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './components/storage/storage.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CardsStorageComponent } from './components/cards-storage/cards-storage.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [StorageComponent, MainLayoutComponent, CardsStorageComponent, CardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'storage',
        component: MainLayoutComponent,
      },
    ]),
  ],
})
export class StorageModule {}
