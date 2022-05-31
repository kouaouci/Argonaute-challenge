export class Argonaute {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public set name(name: string) {
    this._name = name;
  }
}
