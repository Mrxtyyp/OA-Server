export class ResClass {
  readonly data: any;
  readonly code: number;
  readonly msg: string;

  constructor(code: number, data?: any, msg = 'success') {
    this.code = code;
    this.data = data;
    this.msg = msg;
  }

  static success(data?: any) {
    return new ResClass(200, data);
  }
}
