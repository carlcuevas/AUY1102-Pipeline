// src/value-object/primitives/date-value-object.ts (CORREGIDO)

import { StringValueObject } from './string-value-object';

export abstract class DateValueObject extends StringValueObject {
  readonly value: string;

  constructor(value: string) {
    super(value);
    this.checkDateIsValid(value); // <- Corregido el nombre
    this.value = this.format(value);
  }

  // Corregimos la lógica: debe lanzar error si la fecha es INVÁLIDA
  private checkDateIsValid(date: string): void {
    // Quitamos el '!' que causaba el bug
    if (Number.isNaN(new Date(date).getTime())) {
      this.throwErrorForInvalidDate(date);
    }
  }

  public format(date: string): string {
    return new Date(date).toISOString();
  }

  public isBetweenTheDates(startDate: string, lastDate: string): boolean {
    this.checkDateIsValid(startDate);
    this.checkDateIsValid(lastDate);
    return this.isAfterThisDate(startDate) && this.isBeforeThisDate(lastDate);
  }

  public isBeforeThisDate(anotherDate: string): boolean {
    this.checkDateIsValid(anotherDate);
    return this.value < this.format(anotherDate);
  }

  public isAfterThisDate(anotherDate: string): boolean {
    this.checkDateIsValid(anotherDate);
    return this.value > this.format(anotherDate);
  }

  protected abstract throwErrorForInvalidDate(value: string): void;
}