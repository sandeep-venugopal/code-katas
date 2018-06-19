/**
 * Create a complement to the Object.freeze function, Object.deepFreeze
 * This method should apply the Object.freeze function to an object and,
 * recursively, all of its properties that are objects.
 * The freeze operation should prevent objects from being modified.
 *
 */
function deepFreezeHelper(object) {
  Object.deepFreeze = function recursiveDeepFreeze(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
      if (obj[key] !== null && obj[key] && typeof obj[key] === 'object') {
        recursiveDeepFreeze(obj[key]);
      }
    });
  };
  Object.deepFreeze(object);
}

// Object.deepFreeze = function recursiveDeepFreeze(obj) {
//   Object.freeze(obj);
//   if (obj !== null && obj && obj.constructor === Array) {
//     obj.forEach(val => {
//       if (val !== null && val && typeof val === 'object') {
//         recursiveDeepFreeze(val);
//       }
//     });
//   } else if (obj !== null && obj && obj.constructor === Object) {
//     Object.keys(obj).forEach(key => {
//       if (obj[key] !== null && obj[key] && typeof obj[key] === 'object') {
//         recursiveDeepFreeze(obj[key]);
//       }
//     });
//   }
// };

module.exports = deepFreezeHelper;
