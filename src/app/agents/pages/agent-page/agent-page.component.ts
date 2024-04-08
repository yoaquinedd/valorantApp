import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../../interfaces/agent.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-agent-page',
  templateUrl: './agent-page.component.html',
  styleUrl: './agent-page.component.css'
})
export class AgentPageComponent implements OnInit {

  public agent?:Agent;

  constructor(
    private agentsService:AgentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.agentsService.getAgentById(id))
      ).subscribe(agent =>{
        if(!agent) return this.router.navigate(['agents/list']); // Corrección: verificar si agent es undefined

        this.agent = agent;
        return;
      })
  }




}
