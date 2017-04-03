/**
 * Data1 model
 */
export class Data1 {
  id: number;
  name: string;
  description: string;

  constructor(value: Data1) {
    this.id = value.id;
    this.name = value.name;
    this.description = value.description;
  }
}
