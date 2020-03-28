import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
} from '@portinari/portinari-ui';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['/principal.component.css']
})
export class PrincipalComponent implements AfterContentChecked {

  email: string = undefined;
  isSubscribed: boolean = false;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Compartilhar', action: this.modalOpen, icon: 'po-icon-share' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/principal' },
    ]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Compartilhar'
  };

  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent, { static: false }) poModal: PoModalComponent;

  constructor(private poNotification: PoNotificationService) { }

  ngAfterContentChecked() {
    this.shareAction.danger = this.formShare.invalid;
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(`Página compartilhada com sucesso para: ${this.email}.`);
    } else {
      this.poNotification.error(`Email inválido.`);
    }
    this.modalClose();
  }

}