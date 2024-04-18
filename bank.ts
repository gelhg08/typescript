//2. Diseñar una clase para representar una cuenta bancaria:
//a. La clase debe tener propiedades para el número de cuenta, el saldo y el nombre del titular.
//b. Definir métodos para depositar, retirar y consultar el saldo de la cuenta.
//c. Crear dos objetos de cuenta bancaria diferentes y realizar operaciones sobre ellos.
class Bank {
    // Propiedades
    private accountNumber: string;
    private balance: number;
    private accountHolderName: string;

    // Constructor
    constructor(accountNumber: string, balance: number, accountHolderName: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountHolderName = accountHolderName;
    }


    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Depósito de ${amount} realizado en la cuenta ${this.accountNumber} de ${this.accountHolderName}`);
        } else {
            console.log("La cantidad a depositar debe ser mayor que 0.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Retiro de ${amount} realizado de la cuenta ${this.accountNumber}`);
        } else {
            console.log("La cantidad a retirar es inválida o excede el saldo disponible.");
        }
    }


    checkBalance(): void {
        console.log(`Saldo disponible en la cuenta de ${this.accountHolderName} ${this.accountNumber}: ${this.balance}`);
    }
}

// Crear objetos de cuenta bancaria y realizar operaciones sobre ellos
const account1: Bank = new Bank("123456789", 1000, "John Doe");
const account2: Bank = new Bank("987654321", 500, "Jane Smith");

// Realizar operaciones sobre la primera cuenta
account1.deposit(200);
account1.checkBalance();
account1.withdraw(300);
account1.checkBalance();

// Realizar operaciones sobre la segunda cuenta
account2.deposit(1000);
account2.checkBalance();
account2.withdraw(700);
account2.checkBalance();
