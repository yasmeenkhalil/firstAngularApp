import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  age=26;
  isadmin=true;

   students = [
    {
      firstname:"yasmeen",
      lastname:"shaikha",
      age:26,
      imge:"https://media.albayan.ae/images/fayezomar/3128910.jpg"
    },{
      firstname:"yas",
      lastname:"shai",
      age:30,
      imge:"https://pic.i7lm.com/wp-content/uploads/2019/06/unnamed-1-3.jpg"
    }
  ]
}
