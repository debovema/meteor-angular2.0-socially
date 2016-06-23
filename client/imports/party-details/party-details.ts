import 'reflect-metadata';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { Parties } from '../../../collections/parties';

@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html'
})
export class PartyDetails implements OnInit, OnDestroy {
  party: Object;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private ngZone: NgZone) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let partyId = params['partyId'];
       this.party = Parties.findOne(partyId);
       Tracker.autorun(() => {
         this.ngZone.run(() => {
         this.party
       });
     });
   });

//    let partyId = this.route.snapshot.params.partyId;
//    this.party = Parties.findOne(partyId);


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
