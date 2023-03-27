/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // deal with cases 0 and 1 somewhere here
    
    // num * num = target
    // -> num = square root of target
  
    // half of target -> square root is less than or equal to that
    // check if half of target squared is >, <, === target
    let halfOfTarget = Math.floor(x/2);
    while(halfOfTarget > 0){
      let halfOfTargetSquared = halfOfTarget * halfOfTarget;
      if (halfOfTargetSquared < x &&
         (halfOfTarget + 1) * (halfOfTarget + 1) > x) {
        return halfOfTarget;
      }
      if (halfOfTargetSquared > x) {
        halfOfTarget = Math.floor(halfOfTarget/2);
      } else if (halfOfTargetSquared < x) {
        halfOfTarget += Math.floor(halfOfTarget/2) === 0 ? 1 : Math.floor(halfOfTarget/2);
      } else {
        return halfOfTarget;
      }
    }
    return x;
  };