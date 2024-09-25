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
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {UserageComponent} from "./components/userage/userage.component";
import {UsergreetingComponent} from "./components/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowUsernameComponent} from "./components/showusername/showusername.component";

const routes: Routes = [
  {path: '',  component: DisplayhelloworldComponent},
  {path: 'showhellobutton',  component: ShowhellobuttonComponent},
  {path: 'displayname',  component: DisplaynameComponent},
  {path: 'counter',  component: CounterComponent},
  {path: 'simpleform',  component: SimpleformComponent},
  {path: 'userage',  component: UserageComponent},
  {path: 'usergreeting',  component: UsergreetingComponent},
  {path: 'calculator',  component: CalculatorComponent},
  {path: 'textlength',  component: TextlengthComponent},
  {path: 'currencyconverter',  component: CurrencyconverterComponent},
  {path: 'evenoddchecker',  component: EvenoddcheckerComponent},
  {path: 'wordreverser',  component: WordreverserComponent},
  {path: 'showdate',  component: ShowdateComponent},
  {path: 'showusername',  component: ShowUsernameComponent},








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
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowUsernameComponent,


  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
