import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Profile } from '../../commons/profile';
import { Notifications } from '../../commons/notifications';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile: Profile = {
  "img" : 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png',
  "nick_name" : '@Pablo',
  "interactions" : 1,
  "github" : "PabloJC",
  "twitter" : "@Smoolfh",
  "medium" : "Pablo",
  "bio" : "Hola me llamo Pablo"
  };

  notifications : Array<Notifications> = [
    {action: 'reply', img:'https://cdn.shopify.com/s/files/1/0185/4636/products/Pin_Totoro_1024x1024.png?v=1447714012', nick_name:'@Pepe', text: 'Hello'},
    {action: 'replatzitt', img:'http://imagenpng.com/wp-content/uploads/2016/09/025Pikachu_OS_anime_10.png', nick_name:'@Antonio', text: 'Hi'},
    {action: 'mention', img:'https://wikimon.net/images/thumb/8/80/Agumon2.png/200px-Agumon2.png', nick_name:'@Paco', text: 'Hallo'}
  ];

  constructor(public navCtrl: NavController) {

  }

}
