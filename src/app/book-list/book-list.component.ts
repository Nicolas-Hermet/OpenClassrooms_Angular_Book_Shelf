import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscritpion: Subscription;

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.bookSubscritpion = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

    onNewBook() {
      this.router.navigate(['/books', 'new']);
    }

    onDeleteBook(book: Book) {
      this.booksService.removeBook(book);
    }

    onViewBook(id: number) {
      this.router.navigate(['/books', 'view', id]);
    }

    ngOnDestroy(): void {
      // Called once, before the instance is destroyed.
      // Add 'implements OnDestroy' to the class.
      this.bookSubscritpion.unsubscribe();
    }
}
