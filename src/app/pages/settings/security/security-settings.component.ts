import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ChangePasswordComponent} from '../../../components/modals/change-password/change-password.component';

@Component({
  selector: 'app-security',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.scss']
})
export class SecuritySettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showChangePasswordModal() {
    this.dialog.open(ChangePasswordComponent);
  }

}
