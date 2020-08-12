// 전역 객체 : 1) console: 콘솔 창에 결과를 보여주는 객체    2) process: 프로세스의 실행에 대한 정보를 다루는 객체    3) exports: 모듈을 다루는 객체
console.log('안녕하세요.');
console.log('숫자 보여주기: %d', 10);
console.log('문자열 보여주기: %s', '소녀시대');
var Me = {name:"이아현", age:21};
console.dir(Me);

// console.dir(object)  -> 자바스크립트 객체의 속성들을 한꺼번에 출력해주는 메소드
// console.time(id) && console.timeEnd(id)  -> 코드 실행 시간을 측정할 수 있는 메소드(time은 시작 시간, timeEnd는 끝 시간을 기록)
var result = 0;
console.time('duration_sum');
for(var i = 1; i <= 1000; i++){
    result += i;
}
console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

// __filename과 __dirname은 전역 변수
console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

// process 객체의 주요 속성과 메소드
// argv : 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보
// env : 환경 변수 정보
// exit() : 프로세스를 끝내는 메소드
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);
if(process.argv.length > 2){
    console.log('세 번째 파라미터 값 : %s', process.argv[2]);
}
process.argv.forEach(function(item, index){
    console.log(index + ' : ', item);
});

console.dir(process.env);
console.log('OS 환경 변수의 값 : ' + process.env['OS']);


var calc = {};
calc.add = function(a, b){
    return a + b;
}
console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));
var calc_ = require('./calc');
console.log('모듈로 분리한 후 - calc_.add 함수 호출 결과 : %d', calc_.add(10, 10));
var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));

// 시스템 환경 변수를 확인하는 기능을 다른 사람이 외장 모듈로 만들어 놓은 것 -> nconf
// nconf는 설정과 관련된 유용한 기능뿐 아니라 시스템 환경 변수를 접근하는 기능도 포함하고 있음
var nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));


// os 모듈
// hostname() : 운영체제의 호스트 이름을 알려주는 메소드
// totalmem() : 시스템의 전체 메모리 용량을 알려주는 메소드
// freemem() : 시스템에서 사용 가능한 메모리 용량을 알려주는 메소드
// cpus() : CPU 정보를 알려주는 메소드
// networkInterfaces() : 네트워크 인터페이스 정보를 담은 배열 객체를 반환해주는 메소드
var os = require('os');
console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());


// path 모듈
// join() : 여러 개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어주는 메소드. 파일 패스를 완성할 때 구분자 등을 알아서 조정해줌.
// dirname() :  파일 패스에서 디렉터리 이름을 반환해주는 메소드
// basename() : 파일 패스에서 파일의 확장자를 제외한 이름을 반환하는 메소드
// extname() : 파일 패스에서 파일의 확장자를 반환하는 메소드
var path = require('path');
// 디렉터리 이름 합치기
var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);
// 디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일 패스 : %s', curPath);

// 패스에서 디렉터리, 파일 이름, 확장자 구별하기
var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);
