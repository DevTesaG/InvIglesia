import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar")!.classList.remove("navbar-dark");
        document.getElementById("navbar")!.classList.add("bg-light");
        document.getElementById("navbar")!.classList.add("navbar-light");
        document.getElementById("navbar")!.classList.add("link-active-light");
        
        document.getElementById("navbar")!.classList.remove("link-active");
      } else {
        document.getElementById("navbar")!.classList.remove("link-active-light");
        document.getElementById("navbar")!.classList.remove("navbar-light");
        document.getElementById("navbar")!.classList.remove("bg-light");
        document.getElementById("navbar")!.classList.add("navbar-dark");
        // document.getElementById("navbar")!.classList.add("link-active");
      }
    }
  }

}
