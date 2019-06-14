import { Component, OnInit } from '@angular/core';
import { SpesAccoService } from '../../services/spes-acco.service';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-spes-acco',
  templateUrl: './spes-acco.component.html',
  styleUrls: ['./spes-acco.component.scss']
})
export class SpesAccoComponent implements OnInit {

  public accommodations;
  public accoID: number;
  public establishment: string;
  public catering: string;
 
  constructor(private data: SpesAccoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.data.getSpesAccoService()
    .subscribe(res => {this.accommodations = res 
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.accoID = id;
      const filteredEstablishment = this.accommodations.filter(establishments => establishments.id == id);
      this.establishment = filteredEstablishment[0];
      if(filteredEstablishment[0].selfCatering === 'true'){
        this.catering = 'Yes';
      } else {
        this.catering = 'No';
      }
     });
  }
}
