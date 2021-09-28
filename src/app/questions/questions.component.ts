import { Component, OnInit } from '@angular/core';

import { IQuestions } from '../interfaces/questions-interface';
import { QuestionService } from '../question.service';
import { IAnswers } from '../interfaces/answers-interface';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questions: IQuestions[] = [];
  public answers: IAnswers[] = [];
  private regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/;
  private constainsNumbers = /\d/;
  public meetsCriteria: boolean = false;
  private questionMark: string = '?';

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
    console.log('Questions:', this.questions)
    console.log('Answers:', this.answers)
    console.log('-----------')
    console.log(this.saySomething("LET'S HAVE A CHAT!"));
    console.log(this.saySomething("Hello."));
    console.log(this.saySomething("Hello[]"));
    console.log(this.saySomething("Are you hungry?"));
    console.log(this.saySomething("52"));
    console.log(this.saySomething(null));
    console.log(this.saySomething(''));
  }

  public saySomething(s: any): any {
    if (s !== null && s.length >= 1) {
      // check if all letters are uppercased.
      if (s === s.toUpperCase() && !this.constainsNumbers.test(s)) {
        this.meetsCriteria = false;

        return `${s} -- Stop Shouting!`;
      }
      // Check if includes question mark.
      if (s.includes(this.questionMark)) {
        this.meetsCriteria = false;

        return `${s} -- Yes!`;
      }
      // check if special characters (excluding  '.' and '?') or numbers present.
      if (this.regex.test(s) || this.constainsNumbers.test(s)) {
        this.meetsCriteria = false;

        return `${s} -- I do not understand.`;
      }

      // if the string is not ALL CAPS, NOT EMPTY, and contains ONLY LETTERS
      this.meetsCriteria = true;
    }
    // if null or empty string.
    if (this.meetsCriteria) {

      return `${s} -- Got it!`;
    }

    return `${s} Empty String -- Say Something`;
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
