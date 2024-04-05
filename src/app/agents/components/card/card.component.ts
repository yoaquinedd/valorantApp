import { Component, Input, OnInit } from '@angular/core';
import { Agent } from '../../interfaces/agent.interface';

@Component({
  selector: 'agents-agent-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {


  @Input()
  public agent!:Agent


  ngOnInit(): void {
    if(!this.agent) throw Error('agent must be provided');
  }

  seeMoreButton(id:string){
    console.log({id})
  }

}
