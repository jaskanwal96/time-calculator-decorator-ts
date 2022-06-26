"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}
function timeCalculator() {
    const startTime = Date.now();
    return function (target, propertyKey, descriptor) {
        let oldFunc = descriptor.value;
        descriptor.value = async function () {
            const result = await oldFunc.apply(this, arguments);
            console.log('Time Taken', Date.now() - startTime);
            return result;
        };
    };
}
class Decorator {
    async hello() {
        let count = 0;
        for (let i = 0; i < 1000; i++)
            count++;
        await delay(5000);
        return count;
    }
}
__decorate([
    timeCalculator(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Decorator.prototype, "hello", null);
const check = new Decorator();
check.hello().then((data) => console.log(data));
