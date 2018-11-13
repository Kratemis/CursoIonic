import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public teclasNumericas: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() { }

  ngOnInit() {
  }

  suma(a: number, b: number) {
    return a + b;
  }

  resta(a: number, b: number) {
    return a - b;
  }

  store(a: number) {
    console.log(a);
  }
}
