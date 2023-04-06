# CELEBUS

## 프로젝트 설명

이 프로젝트는 React 및 Material-UI를 사용하여 구축된 웹 애플리케이션으로, 반응형이며 다중 언어를 지원합니다.</br>
애플리케이션은 여러 구성 요소 및 화면으로 구성되며 `src` 폴더 하위에 구조화되어 있습니다.

---

## 사용된 라이브러리

- React
- Material-UI (UI 구성 요소 및 테마용)
- iconify (아이콘) (https://icon-sets.iconify.design/)
- React-i18next (다국어용)
- i18next-browser-languagedetector (언어 감지용)

---

## 폴더 구조

- `assets`: 이미지, 아이콘, 글꼴과 같은 정적 자산이 포함되어 있습니다.
- `components`: 애플리케이션 전체에서 사용되는 재사용 가능한 React 구성 요소가 포함되어 있습니다.
- `locales`: 지원되는 언어에 대한 번역 파일이 포함되어 있습니다.
- `screens`: 애플리케이션의 주요 화면 또는 페이지가 포함되어 있습니다.

---

## 코딩 표준

React 및 JavaScript의 모범 사례를 따르십시오. 예를 들면:

- 후크를 사용한 함수형 구성 요소 사용
- 구성 요소 명명 규칙(PascalCase)을 따르십시오.
- 구성 요소를 작게 유지하고 단일 책임에 초점을 맞추십시오.
- 프로젝트의 ESLint 및 Prettier 설정을 사용하여 일관된 코드 서식을 유지하십시오.

### ESLint와 Prettier

이 프로젝트는 코드 리팩터링을 위해 ESLint를 사용하고 코드 포맷팅을 위해 Prettier를 사용합니다. </br>
두 도구 모두 Visual Studio Code와 통합되어 프로젝트 전체에서 일관된 코딩 스타일을 보장합니다. </br>
개발 환경에서 ESLint와 Prettier를 설정하려면 다음 단계를 따르십시오:

1. Visual Studio Code용 ESLint 및 Prettier 확장 프로그램을 설치합니다.
2. 프로젝트 루트에 `.eslintrc.json` 및 `.prettierrc` 구성 파일이 있는지 확인합니다.
3. 이 문서의 "ESLint 및 Prettier 설정" 섹션에서 제공하는 지침에 따라 Visual Studio Code 설정을 구성합니다.

ESLint 및 Prettier에 대한 자세한 내용은 공식 문서를 참조하십시오:

- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)

---

## 환경 변수

현재 환경 변수는 사용되지 않습니다. 추후 환경 변수가 추가되면 그 목적과 설정 위치에 대한 정보를 이 섹션에 업데이트하십시오.

---

## 다국어지원 (i18n)

번역은 `react-i18next` 라이브러리를 사용하여 관리됩니다. 번역 파일은 언어별로 정리된 `src/locales` 폴더에 위치합니다.</br>
번역을 추가, 수정 또는 제거하려면 해당 `translation.json` 파일을 수정하십시오.

---

## 반응형 디자인

Material-UI의 그리드 시스템과 브레이크포인트를 사용하여 반응형 디자인을 구현합니다.</br>
그리드 구성 요소 및 makeStyles 유틸리티를 사용하여 화면 크기에 따라 구성 요소의 레이아웃과 스타일을 조정하십시오.

---

## 스타일링

스타일링은 `src/theme.js`의 중앙 집중식 테마 구성과 함께 Material-UI의 테마 시스템을 사용하여 관리됩니다.</br>
사용자 지정 스타일은 makeStyles 유틸리티를 사용하여 추가할 수 있습니다.

---

## 상태 관리

현재 상태 관리는 React의 내장 훅을 사용하여 처리됩니다. 미래에 더 복잡한 상태 관리 솔루션이 필요한 경우, 이 섹션에 자세한 내용을 업데이트하십시오.

---

## 배포

배포 세부 정보가 아직 제공되지 않았습니다.
배포 프로세스가 정의되면 호스팅 서비스, CI/CD 파이프라인 또는 기타 요구 사항에 대한 정보로 이 섹션을 업데이트하십시오.

---
