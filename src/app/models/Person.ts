// Abstract class representing a person with an id and name
export abstract class Person {
  protected constructor(protected id: string, protected name: string) {}

  /**
   * Gets the person's name
   * @returns The person's name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets the person's ID
   * @returns The person's ID
   */
  getId(): string {
    return this.id;
  }

  /**
   * Sets the person's name
   * @param name The new name
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Sets the person's ID
   * @param id The new ID
   */
  setId(id: string): void {
    this.id = id;
  }

  /**
   * Abstract method that must be implemented by subclasses
   * @returns A string representation of the person
   */
  abstract toString(): string;
}
