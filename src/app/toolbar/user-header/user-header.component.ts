import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-user-header',
  templateUrl: 'user-header.component.html',
  styleUrls: ['user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  static updateImage = new EventEmitter<any>();
  userProfile: any;
  showAppMenu: boolean = false;
  left: number = 10;
  top: number = 300;

  constructor(private router: Router) {
    UserHeaderComponent.updateImage.subscribe(() => this.updateImage())
  }

  updateImage = () => this.userProfile = localStorage.getObject('userProfile');
  

  ngOnInit() {
    this.updateImage();
  }

  click(event) {
    let dom_clicked = $(event.target);
    let target = event.target;
    let within_button = dom_clicked.parents(".app-list-menu-btn").length;
    let is_button = event.target.classList.contains('app-list-menu-btn');
    let within_menu = dom_clicked.parents(".app-menu-container").length;
    let is_menu = event.target.classList.contains('app-menu-container');
    let coordinates: any;
    if (is_button || within_button) {
      this.showAppMenu ? this.showAppMenu = false : this.showAppMenu = true;
      coordinates = target.getBoundingClientRect();
      this.top = coordinates.top + 32;
      this.left = coordinates.left - 500 + 32;
    } else if (within_menu || is_menu) {
    } else {
      this.showAppMenu = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/auth"]);
  }

}
