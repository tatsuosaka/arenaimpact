import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  ngOnInit(): void {
    const mobile  = document.getElementById("mobile");
    const menu  = document.getElementById("menu");
    const social = document.getElementById("social");
    if(mobile && menu && social){
      mobile.addEventListener("click", ()=> {
        social.classList.toggle("hide");
        menu.classList.toggle("hide");
      })
    }
  }
  openMobile(){
    
    const menu  = document.getElementById("menu");
    const social = document.getElementById("social");
    if (menu && social){
      menu.style.display = "flex";
      social.style.display = "flex";
    }
  }
}
