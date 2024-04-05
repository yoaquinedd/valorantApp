import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';
import { Agent } from '../../interfaces/agent.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent   implements OnInit {



  constructor(private agentService: AgentsService) { }
  ngOnInit(): void {
    this.agentService.getAgents();
  }

  get agents():Agent[] {
    return this.agentService.agentsList;
  }

}
