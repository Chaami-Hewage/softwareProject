import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GraphicdesignhomeComponent} from "./graphicdesignhome/graphicdesignhome.component";
import {GraphicDesignProfileComponent} from "./graphic-design-profile/graphic-design-profile.component";
import {GraphicDesignSettingsComponent} from "./graphic-design-settings/graphic-design-settings.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'graphicdesignhome', component: GraphicdesignhomeComponent},
  {path: 'graphicdesignprofile', component: GraphicDesignProfileComponent},
  {path: 'graphicdesignsettings', component: GraphicDesignSettingsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
