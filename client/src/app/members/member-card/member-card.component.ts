import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @Input() member : Member | undefined;

}
