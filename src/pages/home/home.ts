import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {twitt} from '../../commons/twitt';

import { Fav } from '../../components/fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	listado: Array<twitt> = [
		{img: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png', nick_name: '@Pablo', text: 'Hola'},
		{img: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png', nick_name: '@Pablo', text: 'Hola'},
		{img: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png', nick_name: '@Pablo', text: 'Hola'},

	]
  constructor(public navCtrl: NavController) {

  }

  onFav(response:string){
    console.log(response)
  }

}
