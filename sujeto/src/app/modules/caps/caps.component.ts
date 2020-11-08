import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {
  foto2: string= "assets/fotos/foto2.jpg";
  foto3: string= "assets/fotos/foto3.jpg";
  foto4: string= "assets/fotos/foto4.jpg";
  foto5: string= "assets/fotos/foto5.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
