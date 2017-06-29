import { Component } from '@angular/core';

@Component({
  selector: 'register-server',
  templateUrl: 'registerServer.component.html',
  styleUrls: ['registerServer.component.scss']
})
export class RegisterServerComponent {
  constructor() { }
  selectOptions = [
    {name : 'jales', value : 2},
    {name : 'vitoria', value : 1},
    {name : 'preta', value : 3}
  ]
 }