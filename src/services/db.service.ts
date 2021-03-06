import { Injectable } from '@angular/core';

import { SQLite } from '@ionic-native/sqlite'

@Injectable()
export class DBService{
  db: SQLite = null;

  constructor(){
    this.db = new SQLite();
  }

  openDatabase(){
    return this.db.openDatabase({
      name:"data.db",
      location: 'default'
    });
  }

  createTable(){
    let sql = `
      CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nick_name TEXT,
        full_name TEXT,
        email TEXT,
        password TEXT
      )
    `;
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * from users';
    return this.db.executeSql(sql, [])
    .then(
      response => {
        let users = [];
        for(let index = 0; index < response.rows.length; index++){
          users.push(response.rows.item(index));
        }
        return Promise.resolve(users);
      }
    )
  }

  create(user:any){
    let sql = `
    INSERT INTO users(nick_name, full_name, email, password)
    values(?,?,?,?)`;

    return this.db.executeSql(sql,[user.nick_name, user.full_name, user.email, user.password]);
  }
}
