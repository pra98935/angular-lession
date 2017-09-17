import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userinfo = {
    name:'prashant',
    city:'gwalior',
    mobile:'9691418839'
  }

}
