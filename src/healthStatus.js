export default function sort(heroes) {
  return [...heroes].sort((a, b) => b.health - a.health);
}

// function expect(value) {
//   return {
//     toBe: (exp) => {
//       if (value === exp) {
//         console.log('success');
//       } else {
//         console.error(` Value is ${value}, but expectation ${exp}`);
//       }
//     },
//   };
// }

// const sum = (a, b) => a + b;

// expect(sum(43, 47)).toBe(90);