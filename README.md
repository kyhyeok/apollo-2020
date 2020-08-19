# Apollo 2020

Movie app built w ith React, Apollo and GraphQL

## 이 수업은 GraphQL로 영화 API 만들기 라는 제목의 니코 선생님 수업을 선행해야 한다. 반드시!!!!

## step1

1. 정리

- src폴더에서 App.js와 index.js파일을 제외하고 전부 삭제
- App.js와 index.js를 정리
- src폴더에 components폴더를 만들고 App.js를 폴더안에 옮기고 index.js파일에 import부분을 수정
- npm install styled-components, npm install react-router-dom, npm install apollo-boost @apollo/react-hooks graphql
- hooks를 이용하기 때문에 apollo/react-hooks이다.

- Apollo는 nico샘의 생각에 GraphQL을 사용하는 가장 좋은 방법이다.
- REST API는 URL로 가서 JSON로 받아오지만 GraphQL은 query나 mutation을 보내야 한다.

2. reset.css로 모든 css style을 reset한다.

3. Catch

- React Apollo는 cache를 가지고 있다. 이 부분이 좋은 부분인데 react Apollo를 뭔가를 얻으면 cache로 저장을 하고 있어서 그 cache를 보내준다. request를 매번 요청하지 않는다는 점이 장점이다.

4. Data

- Apollo에서는 바로 data.movie.title 이런식으로 사용할 수 없다. 왜냐면 맨 처음에는 data가 정의되어 있지 않아서다.
- 항상 data를 요청하고 data가 존재하는지 확인 할 필요가 있다.
- 항상 항상 삼항 연산자(ternary operator)로 만들어줘야 한다.

5. Optional Chaining

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
- something?.anything?.everything
- something is true && anything && everything: "okay" : "no";

7. Local State

- 개발자가 직접 API에서 넘어온 data를 수정할 수 있는 것이다.
- Apollo client를 보면 많은 config옵션들이 있다.
- resolvers는 기본적으로 백엔드나 api에서 resolve하는 역할을 담당하고 필드 또한 resolve할 수 있는 비슷한 식인데 client쪽에서 일어나는 것이다.
