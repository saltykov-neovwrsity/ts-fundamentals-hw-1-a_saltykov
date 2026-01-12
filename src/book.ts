// TODO: імпортуй потрібні типи з ./types
import type { BookId, Genre, LoanStatus } from "./types";
export class Book {
  // TODO: додай типи до властивостей
  public id: BookId;
  public title: string;
  public author: string;
  public year: number;
  public genre: Genre;

  private status: LoanStatus = "available";
  private borrowedBy: string | null = null;

  // TODO: реалізуй конструктор з параметром opts
  constructor(
    opts: {
      id: BookId;
      title: string;
      author: string;
      year: number;
      genre: Genre;
    }
  ) { 
    this.id = opts.id;
    this.title = opts.title;
    this.author = opts.author;
    this.year = opts.year;
    this.genre = opts.genre;
  }

  // TODO: методи відповідно до ТЗ
  getStatus(): LoanStatus {
    return this.status
  }

  markBorrowed(personName: string): void {
    if (this.status === "borrowed") {
      throw new Error(`Already borrowed by ${this.borrowedBy}`);
    }
    this.status = "borrowed";
    this.borrowedBy = personName;
  }

  markReturned(): void {
    if (this.status === "available") {
      throw new Error("Already available");
    }
    this.status = "available";
    this.borrowedBy = null;
  }

  getInfo(): string {
    if (this.status === "available") {
      return `${this.title} — ${this.author} (${this.year}), ${this.genre} [Available]`;
    }
    return `${this.title} — ${this.author} (${this.year}), ${this.genre} [Borrowed by ${this.borrowedBy}]`;
  }
}
