import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/;
  private constainsNumbers = /\d/;
  private meetsCriteria = false;
  private questionMark = '?';

  constructor() { }

  ngOnInit(): void {
  }

  public saySomething(s: string): string {
    if (s !== null && s.length >= 1) {
      // check if all letters are uppercased.
      if (s === s.toUpperCase() && !this.constainsNumbers.test(s)) {
        this.meetsCriteria = false;

        return 'Stop Shouting!';
      }
      // Check if includes question mark.
      if (s.includes(this.questionMark)) {
        this.meetsCriteria = false;

        return 'Yes!';
      }
      // check if special characters (excluding  '.' and '?') or numbers present.
      if (this.regex.test(s) || this.constainsNumbers.test(s)) {
        this.meetsCriteria = false;

        return "I don't understand.";
      }

      // if the string is not ALL CAPS, NOT EMPTY, and contains ONLY LETTERS
      this.meetsCriteria = true;
    }
    // if null or empty string.
    if (this.meetsCriteria) {

      return 'Got it!';
    }

    return 'Say Something';
  }

}
