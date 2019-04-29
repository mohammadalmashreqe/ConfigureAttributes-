import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';
import { AddEditAttributeComponent } from './add-edit-attribute/add-edit-attribute.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AttributeListComponent,
    AddEditAttributeComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot([
      {path:'',component:AttributeListComponent},
      {path:'AttributeList',component:AttributeListComponent},
      {path:'Attributes/:id',component:AddEditAttributeComponent}, 
      {path:"ConfirmationDialog/:id",component:ConfirmationDialogComponent}
    ]),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
