import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title,
      responsible,
      description,
      severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title,
      responsible,
      description,
      severity,
      status
    };
    console.log("issue", issue);
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
}
