/**
 * Data2 model
 */
export class Data2 {
  id: number;
  name: string;
  description: string;

  constructor(value: Data2) {
    this.id = value.id;
    this.name = value.name;
    this.description = value.description;
  }
}
