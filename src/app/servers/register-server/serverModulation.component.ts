import { Component } from '@angular/core';

@Component({
  selector: 'server-modulation-register',
  templateUrl: 'serverModulation.component.html',
  styleUrls: ['serverModulation.component.scss']
})
export class ServerModulationComponent {
  constructor() { }
  selectOptions = [
    {name : 'jales', value : 2},
    {name : 'vitoria', value : 1},
    {name : 'preta', value : 3}
  ]
 }