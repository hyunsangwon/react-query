### react-query
- react-query는 서버 상태를 다루는 라이브러리
- redux은 클라이언트 상태를 다루는 라이브러리

### react query?
    지금까지 redux toolkit(이하 rtk)을 이용해서 서버에서 데이터를 받아왔다.
    동기, 비동기작업을 수행했고 데이터를 스토어에 저장한 후 원하는 컴포넌트에서 스토어에 저장된 데이터를 사용했다.
    react-query는 위 작업을 간편하게 해주며 데이터 캐싱을 쉽게 처리한다.
    데이터가 처음 fetch되는 동안 isLoading 등의 상태를 직접 선언하고 조작할 필요도 없다. react-query에서 모든 상태값과 메서드를 제공하기 때문.

### react query 클라이언트 데이터 활용법
    서버 데이터와 관계없이 전역적으로 다뤄야 하는 데이터들은 react-query에 임의로 저장하고 다루는 것이 아니라 컨텍스트나 전역 상태관리 라이브러리(recoil)를 사용해서 핸들링하자.

### ref
- https://www.youtube.com/watch?v=lLWfZL-Y8lM
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment (구조분해할당(Destructuring assignment) 까먹을 때 마다 보기)

### json-server
    1. sudo npm i json-server -g
    2. json-server -w data/db.json -p 3500