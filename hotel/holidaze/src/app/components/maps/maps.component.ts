import { Component, OnInit } from '@angular/core';
import { SpesAccoService } from '../../services/spes-acco.service';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  accommodations;
  public accoID;
  public establishment;

  lat: number;
  lng: number;

  constructor(private data: SpesAccoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getSpesAccoService()
    .subscribe(res => {this.accommodations = res 
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.accoID = id;
      const rebels = this.accommodations.filter(establishments => establishments.id == id);
      this.establishment = rebels[0];
      this.lat = rebels[0].googleLat;
      this.lng = rebels[0].googleLong;
     
     });
  }

}
