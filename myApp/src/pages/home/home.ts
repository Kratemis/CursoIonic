import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResolveProvider } from '../../providers/resolve/resolve';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  display = '';
  operator = '';
  name: string;
  result: number;
  blank = true;
  firstFigureState = false;
  secondFigureState = false;
  resolvedState = false;
  firstFigure = 0;
  secondFigure = 0;

  constructor(public navCtrl: NavController, private service: ResolveProvider) {

  }

  numberPressed(input: number) {
    if (this.resolvedState) {
      this.service.display = '';
      this.resolvedState = false;
      this.blank = true;
    }
    if (this.blank) {
      this.firstFigure = this.firstFigure + input;
      this.blank = false;
      this.firstFigureState = true;
    } else if (this.firstFigureState) {
      this.firstFigure = 10 * this.firstFigure + input;
    } else if (this.secondFigureState) {
      this.secondFigure = 10 * this.secondFigure + input;
    }
    this.service.display = this.service.display + input;
  }

  symbolPressed(symbol: string) {
    if (this.firstFigureState) {
      if ((symbol !== '=') && (symbol !== '.')) {
        this.operator = symbol;
        this.service.display = this.service.display + symbol;
        this.secondFigureState = true;
        this.firstFigureState = false;
      }
    } else if (this.secondFigureState) {
      if (symbol === '=' && this.secondFigure !== 0) {
        this.service.display = this.service.display + symbol;
        this.result = this.service.resolveOperation(this.firstFigure, this.secondFigure, this.operator);
        this.service.display = this.service.display + this.result;
        this.firstFigure = 0;
        this.secondFigure = 0;
        this.resolvedState = true;
        this.secondFigureState = false;
      }
    }
  }

}
