import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
  id : number;
  username : string;
  page : number;
  type : string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    //récupérer les segments dynamiques
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.username = this.route.snapshot.paramMap.get('username');
    //récupérer les queries
   this.page = parseInt(this.route.snapshot.queryParamMap.get('page'));
   this.type = this.route.snapshot.queryParamMap.get('type');
  }

}
