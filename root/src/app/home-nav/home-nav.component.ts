import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit{
  ngOnInit(){
    let day = document.getElementById("day");
    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let newDate = new Date();
    let dateDay = newDate.getDay().toString();
    let dateHour = newDate.getHours().toString();
    let dateMinutes = newDate.getMinutes().toString();
    if (hour && day && minutes) {
      day.innerText = dateDay;
      hour.innerText = dateHour;
      minutes.innerText = dateMinutes;
    }
  }
}
