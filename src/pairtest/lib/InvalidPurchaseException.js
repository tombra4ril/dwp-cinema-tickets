export default class InvalidPurchaseException extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'InvalidPurchaseException';
  }
}
