"use strict";
// function delay(t: number) {
//   return new Promise(resolve => setTimeout(resolve, t))
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function timeCalculator() {
    const startTime = Date.now();
    return function (target, propertyKey, descriptor) {
        let oldFunc = descriptor.value;
        descriptor.value = function () {
            const result = oldFunc.apply(this, arguments);
            console.log(`Time Taken', ${(Date.now() - startTime) / 1000}s`);
            return result;
        };
    };
}
class Decorator {
    fibUtil(n) {
        return this.fib(n);
    }
    fib(n) {
        const dp = {};
        const fibDp = (n) => {
            if (dp[n])
                return dp[n];
            if (n < 2)
                return n;
            dp[n] = fibDp(n - 1) + fibDp(n - 2);
            return dp[n];
        };
        const res = fibDp(n);
        console.log(dp);
        return res;
    }
    *fibGenerators(n) {
        const dp = {};
        if (dp[n])
            return dp[n];
        if (n < 2)
            return n;
        dp[n] = yield this.fibGenerators(n - 1) + this.fibGenerators(n - 2);
        return dp[n];
    }
}
__decorate([
    timeCalculator(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], Decorator.prototype, "fibUtil", null);
const check = new Decorator();
// const result = check.fibUtil(50);
const resultGen = check.fibGenerators(5);
console.log(resultGen.next());
