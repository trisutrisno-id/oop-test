import { Book } from '../models/Book';
import { Member } from '../models/Member';

import { Injectable } from '@angular/core';

/**
 * Service class to manage library operations such as adding books, registering members, borrowing and returning books
 *
 * OOP Implementation:
 * - Encapsulation: The LibraryService class encapsulates the logic for managing books and members, providing controlled access through its methods
 */


@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private books: Book[] = [];
  private members: Member[] = [];

  /**
   * Adds a new book to the library's collection
   * @param book - The book to be added
   *
   * OOP Implementation:
   * - Encapsulation: Access to the books array is controlled through this method
   */
  addBook(book: Book): void {
    this.books.push(book);
  }

  /**
   * Registers a new member to the library
   * @param member - The member to be registered
   *
   * OOP Implementation:
   * - Encapsulation: Access to the members array is controlled through this method
   */
  registerMember(member: Member): void {
    this.members.push(member);
  }

  private saveBooks(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  private loadBooks(): void {
    const booksData = localStorage.getItem('books');
    if (booksData) {
      const parsedBooks = JSON.parse(booksData);

      this.books = parsedBooks.map(
        (b: any) =>
          new Book(
            b.title,
            b.author,
            b.isbn
          )
      );

    }
  }

  /**
   * Allows a member to borrow a book if it is available
   * @param memberId - The ID of the member borrowing the book
   * @param isbn - The ISBN of the book to be borrowed
   *
   * OOP Implementation:
   * - Encapsulation: Access to books and members is controlled through this method
   */
  borrowBook(memberId: string, isbn: string): void {
    const member = this.members.find(m => m.getId() === memberId);
    const book = this.books.find(b => b.isbn === isbn);

    if (member && book && book.isAvailable()) {
      member.borrowBook(book);
      book.borrow();
    }
  }

  /**
   * Allows a member to return a borrowed book
   * @param memberId - The ID of the member returning the book
   * @param isbn - The ISBN of the book to be returned
   *
   * OOP Implementation:
   * - Encapsulation: Access to books and members is controlled through this method
   */
  returnBook(memberId: string, isbn: string): void {
    const member = this.members.find(m => m.getId() === memberId);
    const book = this.books.find(b => b.isbn === isbn);

    if (member && book) {
      member.getBorrowedBooks().forEach((borrowedBook, index) => {
        if (borrowedBook.isbn === isbn) {
          member.getBorrowedBooks().splice(index, 1); // Remove the book from the member's borrowed list
          book.return(); // Mark the book as returned
        }
      });
    }
  }
}
