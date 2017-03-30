import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Notifications } from '../../commons/notifications';

import { VerNotificationPage } from './verNotification';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

notifications : Array<Notifications> = [
  {action: 'reply', img:'https://cdn.shopify.com/s/files/1/0185/4636/products/Pin_Totoro_1024x1024.png?v=1447714012', nick_name:'@Pepe', text: 'Hello'},
  {action: 'replatzitt', img:'http://imagenpng.com/wp-content/uploads/2016/09/025Pikachu_OS_anime_10.png', nick_name:'@Antonio', text: 'Hi'},
  {action: 'mention', img:'https://wikimon.net/images/thumb/8/80/Agumon2.png/200px-Agumon2.png', nick_name:'@Paco', text: 'Hallo'}
];

  constructor(public navCtrl: NavController) {

  }

  verNotification(_notification:Notifications){
    this.navCtrl.push(VerNotificationPage, {
    id: _notification
    })
  }
}
