import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card/card.component';
import { HeaderComponent } from '../../header/header/header.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardComponent, HeaderComponent],  
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']  
})
export class HomepageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}
