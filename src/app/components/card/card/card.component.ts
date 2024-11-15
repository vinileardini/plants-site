import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  constructor(
    private route:ActivatedRoute
  ) { }

  @Input() photoCover:string = "";
  @Input() cardTitle:string = "";
  @Input() origem:string = "";
  @Input() forma_cultivo:string = "";
  @Input() nome_cientifico:string = "";
  @Input() Plant_size:string = "";
  @Input() Id:string="0";

  ngOnInit(): void {
  }



  
}
