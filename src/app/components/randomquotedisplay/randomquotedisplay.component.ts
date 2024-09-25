import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomQuoteDisplayComponent {
  // List of quotes
  private quotes: string[] = [
    "Many of life’s failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "Don’t settle for what life gives you; make life better and build something. - Ashton Kutcher",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out. —Eleanor Roosevel",
  ];
  randomQuote: string | null = null;
  // Function to display a random quote from the list
  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}

export class RandomquotedisplayComponent {
}
