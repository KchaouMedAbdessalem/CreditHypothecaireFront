import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mAchat : number = 0;
  fondPropre : number = 0;
  duree : number = 0;
  intAnnuel : number = 0;
  configUrl = "http://localhost:49346/api/Calcul_Resultat/"
  MontantBrut = 0.0;
  MontantNet = 0.0;
  table : any[];
  constructor(private http: HttpClient) { }

  public Calculer()
  {
    console.log("Calculer function")
    this.http.get(this.configUrl+this.mAchat+"/"+this.fondPropre+"/"+this.duree+"/"+this.intAnnuel/100+"/").subscribe((data: any) =>  {
      
      this.MontantBrut = data['MontantBrut'],
      this.MontantNet =  data['MontantNet'],
      this.table = data['Tableau_Amortissement']
    
  },
  error => {
    console.log("error: ", error)
  });
  }
}
