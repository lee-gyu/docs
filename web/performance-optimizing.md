# 웹 성능 개선하기

## Assets

- css, images, font 최적화

### css

- css3를 이용한 고급 그래픽 처리 (transform, transition, animation로 이미지 대체)
- css sprite
  - 여러 이미지를 하나의 이미지로 합쳐서 사용하는 기법
  - 이미지 I/O를 줄일 수 있지만, 이미지 크기가 커지고, 사용하지 않는 이미지도 포함된다.

### images

- jpeg (progressive jpeg)
- gif
- png (png8, png24)
- icon
- svg

### font

## CSS & Javascript Loading

- 로딩 순서 & 방법
  - 가능한 head에 스타일시트를 로드하여, CSSOM이 여러 번 갱신되지 않도록 한다.
  - DOM을 그리면서 스타일시트가 다시 추가되면, Render Tree를 다시 만들어야 하기 때문에 렌더링 성능이 저하된다.
  - script는 head에 사용할 시, 반드시 async, defer 속성을 추가한다.
  - 아니라면, HTML 파서가 script 처리까지 기다려야 하기 때문에 렌더링이 지연된다.
- script async & defer
  - async: 스크립트를 비동기적으로 로드한다. (HTML 파서가 script를 만나면, 다운로드를 시작하고, 다운로드가 완료되면 스크립트를 실행한다.)
    - 주의사항
      1. 스크립트가 실행되는 순서가 보장되지 않는다.
      2. DOMContentLoaded 이벤트가 발생되지 않는다. (DOM을 직접 참조하는 스크립트가 있다면 주의한다.)
  - defer: DOM 생성이 끝난 후에 스크립트가 실행되도록 한다.

## link

- preload: 리소스를 미리 캐싱할 수 있도록 한다.
  - 반드시 사용하는 리소스에만 사용한다. (불필요한 네트워크 I/O 방지)
  - `as` 속성을 함께 사용하여 어떤 리소스 유형인지 알린다. (style, script)
- prefetch: 미래에 사용될 수 있는 assets을 미리 캐싱
  - 예: 상세 페이지 등 uri의 html 자원을 미리 캐싱
- preconnect: 호스트와 TCP 핸드셰이크를 미리 수행한다. (DNS, TCP, TLS 시간 절약)

## minification & gzip

- minification: 불필요한 공백, 주석 등을 제거하여 파일 크기를 줄인다.
- gzip: 파일을 압축하여 전송한다. (단, 컨텐츠 전송 서버에서 설정이 필요하다.)

## 자원 캐싱

- HTTP 응답 헤더를 통해, 자원들이 캐싱할 수 있도록 헤더 설정
- 캐싱된 자원은 네트워크 I/O를 줄여서, 렌더링 성능을 향상시킨다.
- Expires: 캐싱 만료 시간을 설정한다. (HTTP 1.0)
- Cache-Control: 캐싱 정책을 설정한다. (HTTP 1.1)
  - public: 캐싱 가능
  - private: 캐싱 불가능
  - no-cache: 캐싱은 하지만, 검증을 위해 서버에 요청
  - no-store: 캐싱하지 않음
- Last-Modified: 자원이 마지막으로 수정된 시간을 설정한다.
- ETag: 자원의 버전을 설정한다. (Last-Modified와 함께 사용)
