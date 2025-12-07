export abstract class StringValueObject {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  // CORRECCIÓN 1: Recibimos un objeto StringValueObject, no un string suelto
  equalsTo(anotherValue: StringValueObject): boolean {
    return this.value === anotherValue.value;
  }

  isEmpty(): boolean {
    return !this.value;
  }

  // CORRECCIÓN 2: Lo mismo aquí para mantener la consistencia
  differentTo(anotherValue: StringValueObject): boolean {
    return this.value !== anotherValue.value;
  }

  hasMoreCharacterThan(length = 30): boolean {
    return this.value.length > length;
  }

  hasLessCharacterThan(length = 5): boolean {
    return this.value.length < length;
  }

  toString(): string {
    return this.value;
  }
}
