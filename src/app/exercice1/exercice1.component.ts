import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public exercice1Interpolation: string = "interpolation";

  @Input() public liaisonAttribut: string = "liaisonAttribut";

  public hello: string = "Hello event";
  public afficheHello: string = "Button";

  @Output() eventHelloClick: EventEmitter<string> = new EventEmitter();

  public helloClick(event: Event) {
    console.log(event);
    console.log(this.hello);
    this.afficheHello = this.hello;
  }
}
