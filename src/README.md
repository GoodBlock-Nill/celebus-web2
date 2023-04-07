# CELEBUS

## 프로젝트 설명

CELEBUS는 웹 애플리케이션입니다. 애플리케이션은 React, Material-UI 및 기타 라이브러리를 사용하여 구축되었습니다. 반응형이며 여러 언어를 지원합니다.
지원 언어: 영어, 한국어, 일본어, 중국어(간체)

---

## 사용된 라이브러리

- React
- Material-UI (UI 컴포넌트 및 테마용)
- React Router DOM (라우팅용)
- Iconify (아이콘) (https://icon-sets.iconify.design/)
- React-i18next (다국어 지원용)
- i18next-browser-languagedetector (언어 감지용)
- React-scroll (부드러운 스크롤 및 섹션 링크용)
- Normalize.css (브라우저별 기본 스타일을 제거하여 여러 브라우저에서 일관된 스타일을 제공하는 데 사용)

---

## 폴더 구조(src)

- `assets`: 이미지, 아이콘, 비디오, 글꼴과 같은 정적 자산이 포함되어 있습니다.
- `components`: 애플리케이션 전체에서 사용되는 재사용 가능한 React 컴포넌트가 포함되어 있습니다.
- `locales`: 지원되는 언어의 번역 파일이 포함되어 있습니다.
- `screens`: 애플리케이션의 주요 화면 또는 페이지가 포함되어 있습니다.

```

📦src
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂Noto_Sans
 ┃ ┃ ┃ ┣ 📜NotoSans-Black.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-BlackItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-Bold.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-BoldItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-ExtraBold.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-ExtraBoldItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-ExtraLight.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-ExtraLightItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-Italic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-Light.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-LightItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-Medium.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-MediumItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-Regular.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-SemiBold.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-SemiBoldItalic.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-Thin.ttf
 ┃ ┃ ┃ ┣ 📜NotoSans-ThinItalic.ttf
 ┃ ┃ ┃ ┗ 📜OFL.txt
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜fonts.css
 ┃ ┣ 📂video
 ┃ ┃ ┗ 📜screen1.mp4
 ┃ ┗ 📜.DS_Store
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂CustomIcons
 ┃ ┃ ┗ 📜SelectLanguage.js
 ┃ ┣ 📂features
 ┃ ┗ 📂layout
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.js
 ┃ ┃ ┗ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.js
 ┣ 📂locales
 ┃ ┣ 📂en
 ┃ ┃ ┗ 📜translation.json
 ┃ ┣ 📂ja
 ┃ ┃ ┗ 📜translation.json
 ┃ ┣ 📂ko
 ┃ ┃ ┗ 📜translation.json
 ┃ ┗ 📂zh
 ┃ ┃ ┗ 📜translation.json
 ┣ 📂screens
 ┃ ┣ 📂Screen1
 ┃ ┃ ┣ 📜Screen1.js
 ┃ ┃ ┗ 📜Screen1.module.css
 ┃ ┣ 📂Screen2
 ┃ ┃ ┣ 📜Screen2.js
 ┃ ┃ ┗ 📜Screen2.module.css
 ┃ ┣ 📂Screen3
 ┃ ┃ ┣ 📜Screen3.js
 ┃ ┃ ┗ 📜Screen3.module.css
 ┃ ┣ 📂Screen4
 ┃ ┃ ┣ 📜Screen4.js
 ┃ ┃ ┗ 📜Screen4.module.css
 ┃ ┗ 📂Screen5
 ┃ ┃ ┣ 📜Screen5.js
 ┃ ┃ ┗ 📜Screen5.module.css
 ┣ 📜.DS_Store
 ┣ 📜.eslintrc.json
 ┣ 📜.prettierrc
 ┣ 📜App.js
 ┣ 📜README.md
 ┣ 📜i18n.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜theme.js

```

---

## 코딩 표준

React 및 JavaScript의 모범 사례를 따릅니다. 예를 들어:

- 훅을 사용한 함수형 컴포넌트 사용
- 컴포넌트 명명 규칙 (PascalCase) 준수.
- 컴포넌트를 작게 유지하고 단일 책임에 집중하십시오.
- 프로젝트의 ESLint 및 Prettier 설정을 사용하여 일관된 코드 서식 유지.

### ESLint와 Prettier

이 프로젝트에서는 코드 리팩터링을 위한 ESLint와 코드 서식을 위한 Prettier를 사용합니다. 두 도구 모두 프로젝트 전체에 일관된 코딩 스타일을 보장하기 위해 Visual Studio Code와 통합됩니다. 개발 환경에서 ESLint 및 Prettier를 설정하려면 다음 단계를 수행하십시오.

1. Visual Studio Code용 ESLint 및 Prettier 확장 프로그램 설치.
2. 프로젝트 루트에 `.eslintrc.json` 및 `.prettierrc` 구성 파일이 있는지 확인하십시오.
3. 이 문서의 "ESLint 및 Prettier 설정" 섹션에서 제공하는 지침에 따라 Visual Studio Code 설정을 구성하십시오.

ESLint와 Prettier에 대한 자세한 정보는 공식 문서를 참조하십시오

- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)

---

## 환경 변수

현재 환경 변수는 사용되지 않습니다. 추후 환경 변수가 추가되면 이 섹션에 목적과 설정 위치에 대한 정보를 업데이트하십시오.

---

## 다국어 지원 (i18n)

번역은 `react-i18next` 라이브러리를 사용하여 관리됩니다. 번역 파일은 언어별로 구성된 `src/locales` 폴더에 위치해 있습니다. 번역을 추가, 편집 또는 제거하려면 해당 `translation.json` 파일을 편집하십시오.

---

## 라우팅

응용 프로그램에서는 `react-router-dom`을 사용하여 라우팅을 처리합니다. 라우트는 `src/App.js`에서 정의됩니다. 라우트를 추가하거나 수정하려면 `App.js` 파일을 업데이트하십시오.

---

## 반응형 디자인

반응형 디자인은 Material-UI의 그리드 시스템 및 브레이크포인트를 사용하여 구현됩니다. 화면 크기에 따라 컴포넌트의 레이아웃과 스타일을 조정하기 위해 그리드 컴포넌트와 makeStyles 유틸리티를 사용하십시오.

---

## 스타일링

스타일링은 `src/theme.js`에 중앙 집중식 테마 구성을 사용하여 Material-UI의 테마 시스템을 사용하여 관리됩니다. makeStyles 유틸리티를 사용하여 사용자 지정 스타일을 추가할 수 있습니다.

---

## 상태 관리

현재 상태 관리는 React의 내장 훅을 사용하여 처리됩니다.

---

## 비디오 구현

애플리케이션은 `Screen1`과 같은 일부 화면에서 비디오 재생 기능을 제공합니다. 비디오 구현은 `src/screens/Screen1/Screen1.js` 파일에서 찾을 수 있습니다.

---

## 부드러운 스크롤링 및 섹션 연결

이 애플리케이션은 `react-scroll` 라이브러리를 사용하여 부드러운 스크롤링 및 섹션 연결을 구현합니다. `App.js` 파일에서 다양한 화면을 감싸기 위해 `react-scroll`의 `Element` 컴포넌트를 사용합니다. 이를 통해 사용자는 섹션 간에 부드럽게 스크롤 할 수 있으며 애플리케이션을 통한 탐색을 쉽게 할 수 있습니다.

---

## 배포

배포 세부 정보는 아직 사용할 수 없습니다. 배포 프로세스가 정의되면 호스팅 서비스, CI/CD 파이프라인 또는 기타 요구 사항에 대한 정보로 이 섹션을 업데이트하십시오.

---
