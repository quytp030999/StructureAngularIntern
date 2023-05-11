import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent {
  @Input() name!: string;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(`Send Success ${this.name}`);
  }
}
