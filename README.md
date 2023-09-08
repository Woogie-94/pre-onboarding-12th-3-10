## Team

<table>
<tr>
    <td align="center">
        <a href="https://github.com/Woogie-94">
        <img src="https://avatars.githubusercontent.com/u/59603529?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>곽은욱(팀장)</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Mooobi">
        <img src="https://avatars.githubusercontent.com/u/124570875?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>박무생</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/net7281">
        <img src="https://avatars.githubusercontent.com/u/33312138?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>정현정</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/chochojj">
        <img src="https://avatars.githubusercontent.com/u/104323906?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>조지현</b></sub>
        </a>
    </td>
     <td align="center">
        <a href="https://github.com/hnoch">
        <img src="https://avatars.githubusercontent.com/u/53362953?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>황현호</b></sub>
        </a>
    </td>
</tr>
</table>

## 배포 링크

[배포 사이트](http://pre-onboarding-3-10.s3-website.ap-northeast-2.amazonaws.com/)

## 프로젝트 실행 방법

```jsx
$ npm install && npm run dev
```

## Commit Message Rule

### **Ref**

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

[Angular Team Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)

위의 컨벤션을 레퍼런스 삼아 아래의 룰을 만들었습니다.

```jsx
<type>: <description>

[optional body]

[optional footer(s)]
```

### Type

모든 커밋은 명사로 된 접두어를 포함해야 하고 `:`과 공백이 있어야 합니다. type은 다음 중 하나여야합니다.

- **feat** : 새로운 기능 추가
- **fix** : 버그 수정
- **docs** : 문서 수정
- **style** : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
- **refactor** : 코드 리팩터링
- **test** : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)
- **chore** : 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)
- **design** : CSS 등 사용자 UI 디자인 변경
- **comment** : 필요한 주석 추가 및 변경
- **rename** : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- **remove** : 파일을 삭제하는 작업만 수행한 경우

### Description

description은 type 접두어 뒤에 있는 콜론(:)과 공백 다음에 작성되어야 합니다. description은 코드 변경 사항에 대한 짧은 요약입니다.

```jsx
feat: Toast 구현
```

### Body [optional]

body는 짧은 설명 다음에 위치할 수 있으며 코드 변경 사항에 대한 추가적인 문맥적인 정보를 제공합니다. 본문은 반드시 설명 다음에 빈 행으로 시작해야 합니다. 형식이 자유로우며 새 줄로 분리된 많은 수의 단락들로 구성 될 수 있습니다.

```jsx
feat: Toast 구현

useToast Hook으로 Toast를 컨트롤할 수 있도록 구현했습니다.
```

### Footer [optional]

footer는 본문 다음 빈 행 다음에 위치합니다. 코드 변경 사항에 대한 정보로 구성되며 `-` 로 시작해야 합니다.

```jsx

feat: Toast 구현

useToast Hook으로 Toast를 컨트롤할 수 있도록 구현했습니다.

- Toast Component 구현
- Toast Context 구현
- useToast 구현
- App.tsx에 ToastProvider와 Toast Component 사용
```

## Git Flow

![Untitled](https://techblog.woowahan.com/wp-content/uploads/img/2017-10-30/git-flow_overall_graph.png)

저희는 Git Branch 전략으로 Git Flow 전략을 선택했습니다. 고도의 버전 관리와 QA가 필요하지 않은 상황이라 일반적인 전략을 간소화해 develop, release 과정을 제외했습니다. 구성과 과정 아래와 같습니다.

### **구성**

`main` - main 브랜치는 base 브랜치겸 배포가 될 브랜치입니다.

`feature/xxx` - feature 브랜치는 새 기능을 작업하는 브랜치입니다.

`fix/xxx` - fix 브랜치는 버그가 발생할 시 해결하는 브랜치입니다.

### **과정**

1. main 브랜치를 기반으로 feature, fix 브랜치를 생성합니다. (생성전 꼭 pull을 진행합니다)
2. 작업을 완료하면 main 브랜치를 타겟으로 PR을 생성합니다.
3. main 브랜치와 충돌을 확인하고 PR을 merge 시킵니다.

## Best Practice

### 로컬 캐싱 구현과 expire time 구현

외부 스토어인 QueryClient를 구현하여 로컬 캐싱을 하고 있습니다. QueryClient는 fetch해온 데이터 및 key, option등 각종 상태들을 포함해 Query로 만들어 QueryClient에 저장합니다.
QueryClient는 리액트와 무관한 외부 스토어이기 때문에 useQuery에서 useSyncExternalStore을 이용해 QueryClient와 동기화 시켜 React가 QueryClient의 Query들을 observing할 수 있게 구현했습니다.

QueryClient가 캐싱 여부를 판단할 땐 query key를 이용합니다. useQuery를 통해 fetch를 시도하면 지정한 query key가 QueryClient에 존재하는지 검사하며 이미 존재하는 key일 경우 캐싱되어 있는 데이터를 활용하도록합니다.

useQuery의 option 중 cacheTime을 통해 캐시 주기를 정해줄 수 있습니다. Query를 생성하면 convertCacheTimeToDate를 통해 캐싱된 시점을 기록하고 fetch 시점마다 모든 Query의 cacheTime을 현재 시간과 비교해 expried된 Query를 만료시켜 캐싱에 제외시킵니다.

### 디바운싱

API 호출을 최소화 하기 위해서 debouce 기술을 적용했습니다. 재사용성을 생각해 useDebounce를 만들어 사용하고 있습니다.

### 키보드 방향키로 추천 검색어 이동

검색창에서 방향키로 검색 결과를 선택할 수 있습니다. 구현 과정에서 reduce를 사용해 코드를 읽을 때 action type으로 무엇을 하는지 직관적으로 알 수 있게 구현했습니다. 추가로 선택한 검색 결과에서 엔터를 누르면 해당 결과의 상세 페이지로 이동할 수 있도록 구현했습니다.

### input과 검색 결과창 focus 관리

input의 focus 기준으로 검색 결과창을 렌더링하게 되면 유저가 검색 결과창을 누를 수 없는 문제가 생깁니다. 그렇기 때문에 useOutsiedeClice 훅을 만들어 input의 blur 역할을 대신하도록 구현했습니다.
