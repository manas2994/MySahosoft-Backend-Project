import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interface/menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems : Menu[];

  constructor(public _menuService: MenuService) {
    this.menuItems=this._menuService.MENUITEMS
   }

logoImage="assets/images/dashboard/SahosoftMallBachend-logo.png";
userImage='assets/images/user.png';
  ngOnInit(): void {
  }
  toggleNavActive(item : Menu){
    item.active = !item.active;

  }
}
