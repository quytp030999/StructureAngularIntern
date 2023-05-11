import { ApisService } from "./../../services/apis.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent {
  receivedMessage: string = "";
  public persondata = [];

  constructor(private apiService: ApisService) {}

  receiveMessage(message: string) {
    this.receivedMessage = message;
    this.apiService.getData().subscribe((data: any) => {
      this.persondata = this.persondata.concat(data);
      console.log("data:::", data);
      console.log("persondata:::", this.persondata);
    });
  }
}
