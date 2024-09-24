import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {CounterComponent} from "./components/counter/counter.component";

const routes: Routes = [
  {path: '',  component: DisplayhelloworldComponent},
  {path: 'showhellobutton',  component: ShowhellobuttonComponent},
  {path: 'displayname',  component: DisplaynameComponent},
  {path: 'counter',  component: CounterComponent},







]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,


  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
