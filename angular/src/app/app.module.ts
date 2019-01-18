import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CreateformComponent } from './createform/createform.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { EditformComponent } from './editform/editform.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateformComponent,
    DisplayformComponent,
    EditformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
