import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; 

import { ProductViewComponent } from './pages/products-screen/product-view/product-view.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';


@NgModule({
  declarations: [AppComponent, RoutingComponents, NavBarComponent, ProductViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
