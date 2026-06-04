# Component Contract

## Lookup Order

`COMPONENTS.md` mapped Code Path -> `components/ui` -> `components/sections` -> route-local -> new with reason.

## Components

| Figma Name     | Code Path                               | Variants/Notes                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BasicCard      | components/sections/basic-card.tsx      | Origin: custom. Figma node `40:2810`. Responsive component set with `breakpoint=mobile/desktop`; mobile is base, desktop applies at `md`. Mobile: 208px max width, 33px horizontal/15px vertical padding, 6px radius, title Inter Semi Bold 20/28, body Inter Regular 14/20 at 146px text width. Desktop: 343.333px max width, 33px padding, 8px radius, 4px gap, title Inter Bold 28/36, body Inter Medium 14/20. |
| BlogCard       | components/sections/blog-card.tsx       | Origin: custom. Figma node `55:134`. Responsive component set with `breakpoint=mobile/desktop`; mobile is base with a 343.333px x 286px cropped image and 308.983px x 72px bottom panel containing the centered `Readmore` action. Desktop applies at `md`, keeps the same cropped image, moves the panel to y=134, expands it to 200px height, and reveals the centered 20/28 Inter Semi Bold heading above the link. |
| InputComponent | components/sections/input-component.tsx | Origin: custom. Figma node `42:3075`. Responsive component set with `breakpoint=mobile/desktop`; mobile is base with 320px shadcn `Input` only, desktop applies at `md` and adds an installed shadcn `Button` labelled `Subscribe` with 8px gap. Uses shadcn semantic variables: `background`, `border`, `muted-foreground`, `foreground`, radius-md/lg, and shadow-xs.                                            |

## Primitive Components

현재 코드베이스에는 shadcn/ui가 설치되어 있고 `components.json` 및 `components/ui/button.tsx`가 확인된다.

| Primitive | Code Path                | Origin/Notes                                                                                                           |
| --------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Button    | components/ui/button.tsx | Origin: shadcn. Installed via shadcn CLI; use for button actions before creating custom button primitives.             |
| Input     | components/ui/input.tsx  | Origin: shadcn. Installed via shadcn CLI; use for text/email input primitives before creating custom input primitives. |

## New Component Rule

새 컴포넌트는 기존 컴포넌트 인벤토리로 필요한 UI를 표현할 수 없을 때만 허용한다. 새 항목을 추가할 때는 어떤 기존 컴포넌트가 부족했는지와 새 컴포넌트가 담당하는 변형, 상태, 반응형 규칙을 함께 기록해야 한다.
