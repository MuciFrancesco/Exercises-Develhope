class BankAccount {
  #amount = 0;
  constructor(number) {
    this.#amount = number;
  }

  deposit(deposit) {
    this.#amount += deposit;
  }
  withdraw(withdraw) {
    this.#amount -= withdraw;
  }
  view() {
    return this.#amount;
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
