import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent, SearchResponse } from '../interfaces/agent.interface';
import { Observable, catchError, of } from 'rxjs';
import { environments } from '../../../environments/environments';

const params = new HttpParams()
      .set('language', 'es-ES')
      .set('isPlayableCharacter', true)

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private baseUrl = environments.baseUrl;
  public agentsList: Agent[] = [];
  constructor(private http: HttpClient) { }

  getAgents() {
    this.http.get<SearchResponse>(`${this.baseUrl}/agents`, { params })
      .subscribe(response => {
        this.agentsList = response.data
      })
  }

  getAgentById(id:string): Observable<Agent | undefined>{
    return this.http.get<Agent>(`${this.baseUrl}/agents/${id}`,{ params })
      .pipe(
        
        catchError(error => of(undefined))

      )
  }

}
