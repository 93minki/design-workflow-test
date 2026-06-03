---
version: alpha
name: Nexcent Landing
description: Figma Landing Page node 24:1136에서 추출한 Nexcent 마케팅 랜딩 페이지 디자인 시스템.
colors:
  primary: "#4CAF4F"
  primary-shade-s2: "#388E3B"
  primary-shade-s5: "#103E13"
  primary-tint-t4: "#C8E6C9"
  primary-tint-t5: "#E8F5E9"
  secondary: "#263238"
  text-heading: "#171D16"
  text-primary: "#18191F"
  text-strong: "#4D4D4D"
  text-muted: "#717171"
  text-subtle: "#89939E"
  surface: "#FFFFFF"
  surface-alt: "#F5F7FA"
  border-subtle: "#D9DBE1"
  border-muted: "#BECAB8"
typography:
  headline-1:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: 600
    lineHeight: 76px
    letterSpacing: 0px
  headline-2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 600
    lineHeight: 44px
    letterSpacing: 0px
  headline-3:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 0px
  headline-4:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md-medium:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xl-2: 40px
  xl-3: 48px
  xl-4: 64px
  section-y: 84px
  container: 1110px
  page-margin: 144px
  gutter: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-md-medium}"
    height: "52px"
    padding: "14px 32px"
  button-auth:
    backgroundColor: "{colors.primary-tint-t5}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-sm}"
    height: "40px"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.lg}"
    typography: "{typography.body-sm}"
    width: "299px"
  marketing-card:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.lg}"
    typography: "{typography.headline-4}"
    width: "317px"
---

# Nexcent Landing Design System

## Overview

Nexcent는 멤버십 관리 SaaS를 소개하는 밝고 정돈된 랜딩 페이지다. 화면은 흰색과 아주 옅은 실버 배경을 번갈아 사용하고, `Brand/Primary` 녹색을 CTA, 링크, 강조 문장에 제한적으로 배치해 신뢰감과 성장의 이미지를 만든다.

밀도는 중간 정도로 유지한다. 큰 섹션 제목과 넉넉한 좌우 여백으로 마케팅 페이지의 호흡을 만들되, 카드와 통계 영역은 반복 스캔이 쉽도록 정렬과 간격을 엄격하게 맞춘다.

## Colors

- **Primary `#4CAF4F`:** 주요 CTA, 링크형 액션, 고객명, 강조 문장에 사용한다.
- **Primary Tints `#E8F5E9`, `#C8E6C9`:** 아이콘 받침, 녹색 강조의 배경 상태, 부드러운 보조 면에 사용한다.
- **Secondary `#263238`:** 푸터 배경과 가장 강한 어두운 텍스트에 사용한다.
- **Text Strong `#4D4D4D`:** 주요 헤드라인과 숫자에 사용한다.
- **Text Muted `#717171`:** 본문, 설명, 카드 보조 텍스트의 기본 색이다.
- **Surface `#FFFFFF` / Surface Alt `#F5F7FA`:** 기본 페이지와 옅은 섹션 배경을 번갈아 구성한다.
- **Border Subtle `#D9DBE1`:** 푸터 입력 힌트와 아주 낮은 위계의 구분 색으로 사용한다.

## Typography

타입은 Inter 단일 패밀리를 기준으로 한다. 큰 제목은 Semi Bold, 카드 제목과 통계 숫자는 Bold 또는 Semi Bold, 본문은 Regular를 사용한다.

- **Headline 1:** 64px / 76px / 600. Hero와 CTA band의 큰 문장에만 사용한다.
- **Headline 2:** 36px / 44px / 600. 섹션 제목과 좌우 분할 콘텐츠 제목에 사용한다.
- **Headline 3:** 28px / 36px / 700. 커뮤니티 카드 제목과 통계 숫자에 사용한다.
- **Headline 4:** 20px / 28px / 600. 블로그 카드, 푸터 컬럼 제목, 링크형 CTA에 사용한다.
- **Body MD:** 16px / 24px / 400 또는 500. 내비게이션, 설명, 추천사 본문에 사용한다.
- **Body SM:** 14px / 20px. 카드 설명, 푸터 링크, 긴 설명 문단에 사용한다.

## Layout

데스크톱 기준 캔버스는 1440px이고 주요 콘텐츠의 좌우 기준 여백은 144px이다. 로고 열과 본문 컨테이너는 보통 1110-1152px 폭 안에서 정렬한다. Hero는 좌측 텍스트 657px, 우측 일러스트 391px의 2열 구성이며, 본문 설명 섹션도 이미지와 텍스트를 2열로 배치한다.

반응형 구현은 Tailwind 기본 중단점을 따른다: `sm 640px / md 768px / lg 1024px / xl 1280px / 2xl 1536px`. `lg` 이상에서는 Figma처럼 2열 또는 3열 그리드를 유지하고, `md` 이하에서는 섹션을 세로 스택으로 전환한다. 카드 그리드는 데스크톱 3열, 태블릿 2열, 모바일 1열로 흐르게 한다. 내비게이션은 모바일에서 접거나 핵심 CTA만 남겨야 한다.

중단점은 DESIGN.md 스키마에 토큰 그룹으로 넣지 않는다. 이 값들은 이 `## Layout` 설명에만 기록하고, `tailwind.theme.css`에는 `--breakpoint-*`를 추가하지 않는다.

## Elevation & Depth

깊이는 그림자보다 배경 톤과 카드의 겹침으로 만든다. 커뮤니티 카드에는 낮은 그림자 `0 2px 4px #ABBED133`를 사용하고, 고객 이미지와 블로그 카드 오버레이에는 `0 8px 16px #ABBED166`를 사용한다.

그림자는 중요한 콘텐츠 카드에만 사용한다. 일반 섹션, 로고 리스트, 네비게이션에는 그림자를 추가하지 않는다.

## Shapes

버튼은 4px radius를 기본으로 하고, 헤더의 작은 인증 버튼은 6px radius를 사용한다. 카드, 이미지, 로고 슬롯, 입력 필드는 8px radius를 사용한다. 장식적이고 큰 pill 형태는 이 디자인 언어에 맞지 않으므로 CTA나 카드에 적용하지 않는다.

## Components

컴포넌트 재사용 정책: 구현 시 먼저 `COMPONENTS.md`의 매핑된 경로를 확인하고, 없으면 `components/ui`, `components/sections`, route-local 구현 순서로 재사용 가능성을 확인한다. 새 컴포넌트는 기존 컴포넌트로 표현할 수 없는 구조나 상태가 있을 때만 만든다.

## Do's and Don'ts

- Do: 녹색은 CTA와 링크 위계에 집중해서 사용한다.
- Do: 섹션 제목은 `headline-2`, 카드 제목은 `headline-3` 또는 `headline-4`로 일관되게 배치한다.
- Do: 144px 데스크톱 마진, 24px 이상의 카드 내부 여백, 8px radius를 기본 리듬으로 유지한다.
- Do: 모바일에서는 좌우 2열 섹션을 자연스럽게 세로 스택으로 바꾸고 이미지가 텍스트를 밀어내지 않게 한다.
- Don't: Hero나 푸터 CTA 외의 작은 패널에 64px 타입을 사용하지 않는다.
- Don't: 카드 안에 또 다른 카드형 섹션을 중첩하지 않는다.
- Don't: `tailwind.theme.css`에 중단점이나 shadcn semantic 변수를 억지로 넣지 않는다.
