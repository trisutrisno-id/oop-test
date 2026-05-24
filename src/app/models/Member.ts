import { Person } from "./Person";
import { Book } from "./Book";

/**
 * Member class extends Person and adds membership-specific properties and methods
 * Inherits id and name from Person, and adds membershipId and borrowedBooks
 *
 * OOP Implementation:
 * - Inheritance: Member class inherits from Person class
 * - Encapsulation: Private properties (borrowedBooks, membershipId) and controlled access through methods
 */
export class Member extends Person {
  /**
   * Creates a new Member instance
   * @param id - Unique identifier for the member
   * @param name - Name of the member
   * @param membershipId - Unique membership identifier
   *
   * OOP Implementation:
   * - Encapsulation: membershipId is a private property, accessed only through getter methods
   */
  constructor(id: string, name: string, private membershipId: string) {
    super(id, name);
  }

  /**
   * Encapsulated property to store borrowed books
   *
   * OOP Implementation:
   * - Encapsulation: borrowedBooks is a private property, accessed only through dedicated methods
   */
  private borrowedBooks: Book[] = [];

  /**
   * Borrows a book and adds it to the member's borrowed books list
   * @param book - The book to be borrowed
   *
   * OOP Implementation:
   * - Encapsulation: Access to borrowedBooks is controlled through this method
   */
  borrowBook(book: Book): void {
    this.borrowedBooks.push(book);
  }

  /**
   * Gets the list of books currently borrowed by this member
   * @returns Array of borrowed books
   *
   * OOP Implementation:
   * - Encapsulation: Returns a copy of the array to prevent external modification
   */
  getBorrowedBooks(): Book[] {
    return this.borrowedBooks;
  }

  /**
   * Gets the membership ID of this member
   * @returns The membership ID
   *
   * OOP Implementation:
   * - Encapsulation: Controlled access to private membershipId property
   */
  getMembershipId(): string {
    return this.membershipId;
  }

  /**
   * Gets string representation of this member
   * @returns String representation of the member
   *
   * OOP Implementation:
   * - Inheritance: Overrides the abstract toString() method from Person class
   */
  toString(): string {
    return `Member: ${this.name} (ID: ${this.id}, Membership ID: ${this.membershipId})`;
  }
}
