import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-date-counter',
  standalone: true,
  imports: [
    MatButtonModule, MatDividerModule,
    UpperCasePipe
  ],
  templateUrl: './date-counter.component.html',
  styleUrl: './date-counter.component.css'
})
export class DateCounterComponent {
  season = "primavera";
  year= 1901;
  
  onIncrease(){
    if(this.season === "primavera") {
      this.season = "otoño";
    }
    else if(this.season === "otoño"){
      this.year++;
      this.season = "primavera";
    }
  }
  onDecrease(){
    if(this.season === "primavera") {
      this.season = "otoño";
      this.year--;
    }
    else if(this.season === "otoño"){
      this.season = "primavera";
    }
  }
  
}
