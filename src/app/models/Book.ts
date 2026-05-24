export class Book {
  /**
   * Indicates whether the book is available for borrowing
   *
   * OOP Implementation:
   * - Encapsulation: Private property 'available' controls access to book availability
   */
  private available: boolean = true;

  /**
   * Creates a new Book instance
   * @param title - The title of the book
   * @param author - The author of the book
   * @param isbn - The ISBN number of the book
   *
   * OOP Implementation:
   * - Encapsulation: Public properties (title, author, isbn) provide controlled access to book details
   */
  constructor(public title: string, public author: string, public isbn: string) {}

  /**
   * Marks the book as borrowed (sets available to false)
   *
   * OOP Implementation:
   * - Encapsulation: Controlled access to the 'available' property through this method
   */
  borrow(): void {
    this.available = false;
  }

  /**
   * Marks the book as returned (sets available to true)
   *
   * OOP Implementation:
   * - Encapsulation: Controlled access to the 'available' property through this method
   */
  return(): void {
    this.available = true;
  }

  /**
   * Checks if the book is currently available for borrowing
   * @returns true if available, false otherwise
   *
   * OOP Implementation:
   * - Encapsulation: Controlled access to the 'available' property through this method
   */
  isAvailable(): boolean {
    return this.available;
  }

  /**
   * Gets the title of the book
   * @returns The book's title
   *
   * OOP Implementation:
   * - Encapsulation: Controlled access to the 'title' property through this method
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * Gets a formatted description of the book
   * @returns Formatted description including title, author, and ISBN
   *
   * OOP Implementation:
   * - Encapsulation: Controlled access to book details through this method
   */
  getDescription(): string {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}
