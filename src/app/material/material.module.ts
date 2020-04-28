import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'; // todo sort these imports out


const MaterialComponents = [ MatDialogModule ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
