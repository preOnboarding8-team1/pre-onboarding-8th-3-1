# 원티드 프리온보딩 8th - 3주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

검색창 구현 및 검색어 추천 기능을 구현하였습니다.
질환명 검색시 API 호출 통해서 검색어를 추천하고, 최적화 및 키보드 이동 기능을 구현했습니다.

### 🗓 수행 기간

> 2023.01.10 - 2022.01.13

### 📢 배포 링크

> http://pre-search.s3-website.ap-northeast-2.amazonaws.com/> <br />

## 📚 목차

- [팀 정보](#팀-정보)
- [Best Practice](#best-practice)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)

<br />

## 팀 정보

원티드 프리온보딩 프론트엔드 인턴쉽 과정 1팀입니다.

### Members

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/hyejj19">
                <img src="https://avatars.githubusercontent.com/u/89173923?v=4" width="100px;" alt="박혜정"/>
                <br />
                <sub>
                    <b>박혜정</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=hyejj19" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/minsang98">
                <img src="https://avatars.githubusercontent.com/u/64800318?v=4" width="100px;" alt="김민상"/>
                <br />
                <sub>
                    <b>김민상</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=minsang98" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/kwakhyun">
                <img src="https://avatars.githubusercontent.com/u/73919235?v=4" width="100px;" alt="곽현"/>
                <br />
                <sub>
                    <b>곽현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=kwakhyun" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/badmaniacs">
                <img src="https://avatars.githubusercontent.com/u/96967183?v=4" width="100px;" alt="박경태"/>
                <br />
                <sub>
                    <b>박경태</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=badmaniacs" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/zkzk8953">
                <img src="https://avatars.githubusercontent.com/u/78520794?s=400&u=355629856caf2969fe39e5cc7f4a07f800e90f5d&v=4" width="100px;" alt="seoungheon lee"/>
                <br />
                <sub>
                    <b>이성헌</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=zkzk8953" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/JeongTaekCho">
                <img src="https://avatars.githubusercontent.com/u/92679073?v=4" width="100px;" alt="조정택"/>
                <br />
                <sub>
                    <b>조정택</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=JeongTaekCho" title="Code">💻</a>
        </td> 
        <td align="center">
            <a href="https://github.com/aydenote">
                <img src="https://avatars.githubusercontent.com/u/77476077?v=4" width="100px;" alt="최승수"/>
                <br />
                <sub>
                    <b>최승수</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=aydenote" title="Code">💻</a>
        </td>                 
    </tr>
</table>

### Notion

> https://galvanized-gecko-b10.notion.site/Code-Wiki-week-2-6d55122209b34219b595097fa55387c8 > <br />

## Best Practice

과제에서 요구한 기능들의 구현 여부 및 Best Practice로 도출된 코드들에 대해 설명합니다.

---

### Assignment1

- [x] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 최적화 전략 수립 및 실행

    <br />

  ```jsx
  // hooks/useDebounce.ts
  export const useDebounce = () => {
    const [timer, setTimer] = useState(0);

    const debouncer = (callback: Callback, delay: number) => {
      if (timer) {
        window.clearTimeout(timer);
      }

      const newTimer = window.setTimeout(() => {
        try {
          callback();
        } catch (e) {
          console.error('error', e);
        }
      }, delay);
      setTimer(newTimer);
    };

    return debouncer;
  };
  ```

  > 📌 0.5초 동안의 요청 중 마지막 요청만을 실행하는 디바운싱을 적용해, Input의 입력이 끝난 시점에 검색되도록 api 호출을 최적화 하였습니다.  
  > 📌 디바운싱을 담당하는 로직을 훅으로 만들어 관심사를 분리하고 재사용성을 높였습니다.

## <br />

### Assignment2

- [x] API 호출별로 로컬 캐싱 구현

   <br />

  ```jsx
  // hooks/useGetResults
  export const useGetResults: UseGetResultsType = (searchQuery, setResults) => {
  const debouncer = useDebounce();
  let data: Result[] = JSON.parse(localStorage.getItem(searchQuery));
  const [isLoading, setIsLoading] = useState(false);

  const getResults = () => {
    setIsLoading(true);
    debouncer(async () => {
      if (!data) {
        data = await searchAPI.getResult(`/sick?q=${searchQuery}
              `);
        localStorage.setItem(searchQuery, JSON.stringify(data));
      }

      setResults(data.slice(0, 10));
      setIsLoading(false);
    }, 500);
  };

  return { getResults, isLoading };

  // components/ SearchBar.tsx
  const { getResults } = useGetResults(searchQuery, setResults);

  useEffect(getResults, [searchQuery]);
  ```

  > 📌 검색 기록을 로컬 스토리지에 저장합니다. getResults 함수가 호출되면 로컬 스토리지에서 캐싱된 값을 먼저 찾고, 없는 경우에만 api를 호출합니다.  
  > 📌 getResults 함수를 반환하는 훅을 생성해 로직을 분리했습니다.

## <br />

### Assignment3

- [x] 키보드만으로 추천 검색어들로 이동 가능하도록 구현

   <br />

  ```jsx
  // pages/Main.tsx
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && results.length - 1 > selected) {
      setSelected(selected + 1);
    }
    if (e.key === 'ArrowUp' && selected >= 0) {
      setSelected(selected - 1);
    }
    if (e.key === 'Enter' && selected >= 0) {
      handleDropDownClick(results[selected].sickNm);
      setSelected(-1);
    }
  };

  // components/SearchItem.tsx
  <SearchItemWrapper
    key={sickCd}
    onClick={() => handleDropDownClick(sickNm)}
    className={selected === idx ? 'selected' : ''}>
    ...
  </SearchItemWrapper>;
  ```

  > 📌 Input과 DropDown 을 포함하는 상위 컴포넌트에 키보드 방향에 따라 추천 검색어 배열의 인덱스를 탐색하는 onKeyUp 이벤트 핸들러를 전달합니다.  
  > 📌 추천 검색어의 각 검색 결과인 하위 컴포넌트는 현재 인덱스와 키보드 이벤트에 따라 변경된 selected 의 인덱스가 같을 경우 조건부로 클래스를 부여하여 스타일링합니다.  
  > 📌 Input창에 검색어를 입력한 뒤 down 키를 눌러 추천 검색어를 탐색할 수 있습니다. down, up 키로 원하는 검색어로 이동할 수 있습니다.

<br />

---

## 실행 방법

해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.

1. 레파지토리 클론

   ```
   https://github.com/preOnboarding8-team1/pre-onboarding-8th-3-1.git
   ```

2. packages 설치

   ```
   npm install
   ```

3. 실행

   ```
   npm start
   ```

<br />

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>
    <div>

        ┣ 📂 src
          ┣ 📂 api
          ┃ ┗ 📝 searchAPI.ts
          ┣ 📂 components
          ┃ ┣ 📝 DropDown.tsx
          ┃ ┣ 📝 MagnifierIcon.tsx
          ┃ ┣ 📝 SearchBar.tsx
          ┃ ┗ 📝 SearchItem.tsx
          ┣ 📂 constants
          ┃ ┗ 📝 constants.ts
          ┣ 📂 hooks
          ┃ ┣ 📝 useDebounce.ts
          ┃ ┗ 📝 useGetResults.ts
          ┣ 📂 pages
          ┃ ┗ 📝 Main.tsx
          ┣ 📂 style
          ┃ ┗ 📝 GlobalStyle.tsx
          ┣ 📂 types
          ┃  ┗ 📝 types.ts
          ┣ 📂 utils
          ┃  ┗ 📝 httpClient.ts
          ┣ 📝 App.tsx
          ┗ 📝 index.tsx

</details>
