import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChangeUsernameComponent} from '../../../components/modals/change-username/change-username.component';
import {ChangeEmailComponent} from '../../../components/modals/change-email/change-email.component';
import {DeleteAccountComponent} from '../../../components/modals/delete-account/delete-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showChangeUsernameModal() {
    this.dialog.open(ChangeUsernameComponent);
  }

  showChangeEmailModal() {
    this.dialog.open(ChangeEmailComponent);
  }

  showDeleteAccountModal() {
    this.dialog.open(DeleteAccountComponent);
  }
}
