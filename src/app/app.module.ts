import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraphicdesignhomeComponent } from './graphicdesignhome/graphicdesignhome.component';
import { GraphicDesignProfileComponent } from './graphic-design-profile/graphic-design-profile.component';
import { GraphicDesignSettingsComponent } from './graphic-design-settings/graphic-design-settings.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphicdesignhomeComponent,
    GraphicDesignProfileComponent,
    GraphicDesignSettingsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
