declare function delay(t: number): Promise<unknown>;
declare function timeCalculator(): (target: any, propertyKey: string, descriptor: any) => void;
declare class Decorator {
    hello(): Promise<number>;
}
declare const check: Decorator;
