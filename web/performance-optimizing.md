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
- preload
  - 이후에 필요한 리소스를 미리 로드할 수 있도록 한다.
  - 이를 이용하여 미리 캐싱을 하여 네트워크 요청 작업을 최적화할 수 있다.
- script async & defer
  - async: 스크립트를 비동기적으로 로드한다. (HTML 파서가 script를 만나면, 다운로드를 시작하고, 다운로드가 완료되면 스크립트를 실행한다.)
    - 주의사항
      1. 스크립트가 실행되는 순서가 보장되지 않는다.
      2. DOMContentLoaded 이벤트가 발생되지 않는다. (DOM을 직접 참조하는 스크립트가 있다면 주의한다.)
  - defer: DOM 생성이 끝난 후에 스크립트가 실행되도록 한다.
