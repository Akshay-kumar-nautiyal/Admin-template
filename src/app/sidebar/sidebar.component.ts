import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  data:any ;

  ngOnInit(): void {
      this.data = localStorage.getItem("userData")
      this.data = JSON.parse(this.data);
      console.log(this.data.name);
  }

}
