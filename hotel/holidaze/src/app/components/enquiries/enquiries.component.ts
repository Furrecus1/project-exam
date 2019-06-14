import { Component, OnInit } from '@angular/core';
import { EnquiriesService } from '../../services/enquiries.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {

  enquiries;

  constructor(private data: EnquiriesService) { }

  ngOnInit() {
    this.data.getEnquiriesService()
    .subscribe(res => this.enquiries = res);
  }

}
