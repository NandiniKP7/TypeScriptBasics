class Delivery {
  protected distance: number;
  constructor(distance: number) {
    this.distance = distance;
  }
  calculateFee(): number {
    return 0;
  }
}
class BikeDelivery extends Delivery {
  override calculateFee(): number {
    let basicfee: number = 3;
    let additionalcharge: number = 1;

    return basicfee + additionalcharge * this.distance;
  }
}
class CarDelivery extends Delivery {
  override calculateFee(): number {
    let basicfee: number = 5;
    let additionalcharge: number = 2;

    return basicfee + additionalcharge * this.distance;
  }
}
function printDeliveryFee(delivery: Delivery): void {
  console.log(delivery.calculateFee());
}

const bike = new BikeDelivery(4);
const car = new CarDelivery(5);

printDeliveryFee(bike);
printDeliveryFee(car);

class Payment {
  protected amount: number;
  readonly transactionId: number;

  constructor(transactionId: number, amount: number) {
    ((this.amount = amount), (this.transactionId = transactionId));
  }

  processPayment(): boolean {
    return false;
  }
  getPaymentInfo(): string {
    return `transactionID:${this.transactionId} and amount:${this.amount}`;
  }
}
class CreditCardPayment extends Payment {
  private creditLimit: number;
  constructor(transactionId: number,amount: number,creditLimit: number) {
    super(transactionId,amount);
    this.creditLimit = creditLimit;
  }
  override processPayment(): boolean {
    if (this.amount > 0 && this.creditLimit >= this.amount) {
      this.creditLimit = this.creditLimit - this.amount;
      return true;
    }
    return false;
  }
  override getPaymentInfo(): string {
    return `${super.getPaymentInfo()}, CreditCardPayment:${this.creditLimit}`;
  }
}

class GiftCardPayment extends Payment {
  private giftCardBalance: number;
  constructor(transactionId: number,amount: number, giftCardBalance: number) {
    super(transactionId,amount);
    this.giftCardBalance = giftCardBalance;
  }
  override processPayment(): boolean {
    if (this.amount > 0 && this.giftCardBalance >= this.amount) {
      this.giftCardBalance = this.giftCardBalance - this.amount;
      return true;
    }
    return false;
  }
  override getPaymentInfo(): string {
    return `${super.getPaymentInfo()},and giftcardBalance:${this.giftCardBalance}`;
  }
}
function checkout(payment: Payment): void {
    if(payment.processPayment()==true)
    {
   console.log("Payment Succesful")
    }
    else{
        console.log("Payment Failed")
    }
  console.log(payment.getPaymentInfo());
}
const creditCard = new CreditCardPayment(101, 200, 500);
const giftCard = new GiftCardPayment(102, 100, 75);

checkout(creditCard);
checkout(giftCard);
