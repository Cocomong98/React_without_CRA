트랜스파일러 : 문법 전환 (JSX -> JS) + 언어 변경 (TS -> JS)

## 1강

## 2강
1. cdn을 통해 babel 적용
2. script 내부의 구조를 JSX 구조로 변경
3. script 태그 안의 type="text/babel" 을 추가해 babel로 변환할 스크립트 지정
4. 브라우저에서 스크립트를 실시간으로 transfile하는것은 비효율적이라는 경고 출력

## 3강 
1. @babel/cli, @babel/core, @babel/preset-react 설치 
   1. 명령어 실행 시 node_moduels가 생성되지 않는 오류 발생
   2. package.json이 존재하지 않아 생긴 문제라고 판별
   3. 임의로 package.json 파일을 생성했지만 오류 발생
   4. npm init -y 커맨드로 생성 후 해결
2. 설치 결과 생성된 node_modules를 .gitingore로 git 관리에서 제외 (용량이 크기 때문)
3. babelrc파일과 package.json을 통해 build script 작성

## 4강
 개발 단계에서는 유지보수를 위해 파일을 분리, 운영 단계에서는 파일 수를 최소화하는것이 좋음 -> 한 페이지에서 여러 개의 스크립트가 요청되는 경우, wating에 걸리게 되어 성능에 악영향 -> 때문에 분리된 모듈들을 통합하는 역할을 하는것이 번들러
1. webpack 관련 패키지 설치
2. babel의 babelrc와 같은 설정파일인 webpack.config.js를 만들고 설정 (module export 문법 사용)
3. 이후 package.json에서 build 명령 수정,  index.html에서 script 태그 수정 (babel이 아닌 webpack을 사용하기 위함)
4. dist 폴더 삭제 후 gitignore에 dist 추가 후 build 

## 5강

## 6강

## 7강