import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    private female = {
        name: 'Turanga Leela',
        sex: 'f',
        photo: 'assets/images/leela.jpg'
    };
    private male = {
        name: 'Philip J. Fry',
        sex: 'm',
        photo: 'assets/images/fry.jpg'
    };
    private person = this.male;

    fname:string = 'prashant';


}
