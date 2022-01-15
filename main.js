let str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aaabbbcccdddd
http://hello
백두산_모두 닳도록
`;

// const regexp = new RegExp("the", "gi");
const regexp = /the/gi;
console.log(str.match(regexp));

const regexp2 = /fox/gi;

console.log(regexp2.test(str)); // true

// str = str.replace(regexp2, "AAA");
console.log(str); // fox가 AAA로 대체된 문자열 반환

console.log(str.match(/\.$/gim)); // 이스케이프 처리 (일반적 문자로 해석) 문자열의 끝이 마침표로 끝나는 부분을 찾기

console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));
console.log(str.match(/fox|dog/g));
console.log(str.match(/https?/g));
console.log(str.match(/d{2,3}/g));
console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));

console.log(str.match(/\bf\w{1,}\b/g));
console.log(str.match(/\d{1,}/g));

const h = `  the helllo  world    ! 



`;

console.log(h.replace(/\s/g, ""));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
