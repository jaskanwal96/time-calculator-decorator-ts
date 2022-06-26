// function delay(t: number) {
//   return new Promise(resolve => setTimeout(resolve, t))
// }

function timeCalculator() {
    const startTime = Date.now();
    return function (target: any, propertyKey: string, descriptor: any) {
        let oldFunc = descriptor.value;
        descriptor.value = function () {
            const result = oldFunc.apply(this, arguments);
            console.log(`Time Taken', ${(Date.now() - startTime) / 1000}s`);
            return result;
        };
    };
}

class Decorator {
    @timeCalculator()
    fibUtil(n: number): number {
        return this.fib(n);
    }

    fib(n: number): any {
        const dp: any = {};
        const fibDp = (n: number): number => {
            if (dp[n]) return dp[n];
            if (n < 2) return n;
            dp[n] = fibDp(n - 1) + fibDp(n - 2);
            return dp[n];
        };
        const res = fibDp(n);
        console.log(dp);
        return res;
    }
}

const check = new Decorator();

const result = check.fibUtil(50);
console.log(result);
