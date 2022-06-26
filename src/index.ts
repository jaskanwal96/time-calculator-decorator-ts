// function delay(t: number) {
//   return new Promise(resolve => setTimeout(resolve, t))
// }

function timeCalculator() {
  const startTime = Date.now();
  return function (target: any, propertyKey: string, descriptor: any) {
    let oldFunc = descriptor.value;
    descriptor.value = function () {
      const result = oldFunc.apply(this, arguments);
      console.log("Time Taken", Date.now() - startTime);
      return result;
    };
  };
}

class Decorator {
  @timeCalculator()
  fibUtil(n: number): number {
    return this.fib(n);
  }

  fib(n: number): number {
    if (n < 2) return n;
    return this.fib(n - 1) + this.fib(n - 2);
  }
}

const check = new Decorator();

const result = check.fibUtil(40);
console.log(result);
