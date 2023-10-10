import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  openMobile(){
    
    const menu  = document.getElementById("menu");
    const social = document.getElementById("social");
    if (menu && social){
      menu.style.display = "flex";
      social.style.display = "flex";
    }
  }
}
