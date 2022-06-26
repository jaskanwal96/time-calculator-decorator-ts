
function delay(t: number) {
  return new Promise(resolve => setTimeout(resolve, t))
}
function timeCalculator() {
  const startTime = Date.now();
  return function (target: any, propertyKey: string, descriptor: any) {
  let oldFunc = descriptor.value;
   descriptor.value = async function (){
     const result = await oldFunc.apply(this, arguments);
     console.log('Time Taken', Date.now() - startTime);
     return result;
   }
  };
}

class Decorator {
  @timeCalculator()
  async hello() {
    let count = 0;
    for(let i = 0; i < 1000; i++) count++;
    await delay(5000);
    return count;
  }
}


const check = new Decorator();
check.hello().then((data) => console.log(data));