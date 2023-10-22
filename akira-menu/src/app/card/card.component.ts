import { Component, Input ,OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public comida: any[] = [];
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarDato();
  }

  public cargarDato() {
    this.restService.get("http://localhost:1337/api/comidas?populate=*")
      .subscribe(respuesta => {
        console.log(respuesta); // Verifica la respuesta en la consola
        this.comida = respuesta.data;
      });
  }
}
