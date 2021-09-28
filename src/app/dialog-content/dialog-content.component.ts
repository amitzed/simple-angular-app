import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { IQuestions } from '../interfaces/questions-interface';
import { QuestionService } from '../question.service';
import { IAnswers } from '../interfaces/answers-interface';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
  public questions: IQuestions[] = [];
  public answers: IAnswers[] = [];
  public action: string | undefined;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
    this.action = this.data;
    console.log(this)
  }

  public getQuestions(): void {
    this.questionService.getQuestions()
                        .subscribe(questions => this.questions = questions)
  }

  public getAnswers(): void {
    this.answerService.getAnswers()
                      .subscribe(answers => this.answers = answers)
  }

}
