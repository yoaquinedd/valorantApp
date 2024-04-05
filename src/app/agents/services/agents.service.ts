import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent, SearchResponse } from '../interfaces/agent.interface';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private baseUrl = environments.baseUrl;
  public agentsList: Agent[] = [];
  constructor(private http: HttpClient) { }

  getAgents() {
    const params = new HttpParams()
      .set('language', 'es-ES')
      .set('isPlayableCharacter', true)
    this.http.get<SearchResponse>(`${this.baseUrl}/agents`, { params })
      .subscribe(response => {
        this.agentsList = response.data
      })
  }

}
