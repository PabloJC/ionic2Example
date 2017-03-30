import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Notifications } from '../../commons/notifications';

@Component({
  selector: 'ver-notification',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Notification
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <ion-list>
        <ion-item *ngFor='let item of notifications'>
          <ion-thumbnail item-left>
            <img src="{{item.img}}">
          </ion-thumbnail>
          <h2>{{item.nick_name}}</h2>
          <p>{{item.text}}</p>
          <button ion-button clear item-right>Ver</button>
        </ion-item>
      </ion-list>
    </ion-content>`
})

export class VerNotificationPage{
  notification = {};

  constructor(private navParams: NavParams){
    this.notification = navParams.get('id');
  }
}
