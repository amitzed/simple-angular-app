import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IAnswers } from './interfaces/answers-interface';
import { ANSWERS } from './answers-db';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor() { }

  public getAnswers(): Observable<IAnswers[]> {
    const answers = of(ANSWERS);

    return answers;
  }
}
