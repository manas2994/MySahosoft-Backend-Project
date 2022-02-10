import { Component, OnInit } from '@angular/core';
import { CollapseService } from '../../services/collapse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 userImage='assets/images/user.png';
 
  constructor(public _collapseService:CollapseService) { }

  ngOnInit(): void {
    
  }
  collapsesidebar(){
  this._collapseService.openNav=!this._collapseService.openNav
  }

}
