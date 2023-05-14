/**
 * Object.defineProperty
 * 객체의 속성을 정의한다.
 */

const cat = { };

// 첫번째 인자: 객체
// 두번째 인자: 속성명 (문자열 또는 Symbol)
// 세번째 인자: 속성의 정보를 담은 객체 (descriptor)
// 반환값: 첫번째 인자의 객체

const returnValue = Object.defineProperty(cat, "name", {
  get: function () {
    return "Luvly"
  },
  configurable: false, // 삭제 여부 방지
  //writable: false, // 쓰기, 삭제 여부 방지
})

console.log(cat === returnValue);

Object.defineProperty(cat, Symbol.for("age"), {
  get() {
    return 10;
  }
})

// PropertyDescriptor
/** @type {PropertyDescriptor} */
const descriptor = {
  
}


console.log(cat.name); // Luvly
console.log(cat[Symbol.for("age")]);