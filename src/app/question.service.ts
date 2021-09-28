import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IQuestions } from './interfaces/questions-interface';
import { QUESTIONS } from './questions-db';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  public getQuestions(): Observable<IQuestions[]> {
    const questions = of(QUESTIONS);

    return questions;
  }
}
