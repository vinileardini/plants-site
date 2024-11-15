import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  photoCover:string = ''
  contentTitle:string = ''
  contentDescription:string = ''
  name:string = ''
  origem:string = ''
  altura: string = ''
  tags:string[] = [];
  private id:string | null = "0";
  botaoVoltar = '';


  
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValuestoComponent(this.id)


  }

  setValuestoComponent(id:string | null){
    const result = data.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.descriptionPage;
    this.photoCover = result.photoCover;
    this.name = result.name ?? '';  
    this.origem = result.origem ?? '';
    this.altura = result.altura ?? '';
    this.botaoVoltar = "src/assets/img/seta.png"


  }

}
