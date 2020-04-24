import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; // todo sort these imports out


const MaterialComponents = [MatSlideToggleModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
