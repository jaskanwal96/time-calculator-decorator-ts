declare function timeCalculator(): (target: any, propertyKey: string, descriptor: any) => void;
declare class Decorator {
    fibUtil(n: number): number;
    fib(n: number): any;
}
declare const check: Decorator;
declare const result: number;
