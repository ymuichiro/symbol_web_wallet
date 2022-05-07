/** Internal or System Error */
export class InternalError extends Error {

  public viewMessage: string;
  public viewTitle: string;

  constructor(consoleMessage: string) {
    super();
    this.name = "InternalError";
    this.message = consoleMessage;
    this.viewTitle = "システムエラー";
    this.viewMessage = "内部的なエラーが発生しました";
  }

}

/** inpur by user Error */
export class InputError extends Error {

  public viewMessage: string;
  public viewTitle: string;

  constructor(consoleMessage: string) {
    super();
    this.name = "InputError";
    this.message = consoleMessage;
    this.viewTitle = "入力エラー";
    this.viewMessage = "入力が正しくありません。再度入力して下さい";
  }

}

/** node connect Error */
export class ConnectionError extends Error {

  public viewMessage: string;
  public viewTitle: string;

  constructor(consoleMessage: string) {
    super();
    this.name = "ConnectionError";
    this.message = consoleMessage;
    this.viewTitle = "通信エラー";
    this.viewMessage = "設定されているノードに接続できませんでした。通信情報を確認するか、接続先ノードの変更をして下さい";
  }

}