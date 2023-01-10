# 원티드 프리온보딩 8th - 2주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

"할 일", "진행 중", "완료" 세 가지 상태를 가진 이슈 트래커를 구현하고, 각자 구현된 내용을 바탕으로 바탕으로 Best Practice 를 도출해내는 과제를 수행했습니다.

### 🗓 수행 기간

> 2023.01.03 - 2022.01.06

### 📢 배포 링크

> http://searchbar-wanted.s3-website.ap-northeast-2.amazonaws.com/ > <br />

## 📚 목차

- [팀 정보](#팀-정보)
- [Best Practice](#best-practice)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)
- [추가 구현 기능](#추가-구현-기능)

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
            <a href="https://github.com/rewrite0w0">
                <img src="https://avatars.githubusercontent.com/u/55968557?v=4" width="100px;" alt="오태준"/>
                <br />
                <sub>
                    <b>오태준</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=rewrite0w0" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/bigwave-cho">
                <img src="https://avatars.githubusercontent.com/u/105909665?v=4" width="100px;" alt="조재현"/>
                <br />
                <sub>
                    <b>조재현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1/commits?author=bigwave-cho" title="Code">💻</a>
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

- [x] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

   <br />

  ```jsx
  const debounceFunction = (callback: Callback, delay = 500) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };
  const debounceOnChange = debounceFunction((value: string) => {
    setQuery(value);
    search(value);
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceOnChange(e.target.value);
  };
  ```

  > 📌 debounce개념을 이용해 0.5초동안 change이벤트가 없을시 input value의 값으로 api를 호출 하는 방식으로 API 호출 최적화를 구현했습니다.

## <br />

### Assignment2

- [x] 캐싱

   <br />

  ```jsx
  const [cache, setCache] = useState<Cache[]>([]);
  const search = async (q: string = query) => {
    setIsLoading(true);
    if (q.length) {
      const caching = cache.filter((cacheItem) => cacheItem.query === q);
      if (caching.length) {
        const newSearchTerm = caching[0].recommended;
        setSearchTerm(newSearchTerm);
      } else {
        const recommended = await getSearchTermList(q);
        const newCacheData = { query: q, recommended };
        const result = [...cache, newCacheData];
        setCache(result);
        setSearchTerm(recommended);
      }
    } else {
      setSearchTerm([]);
    }
    setIsLoading(false);
  };
  ```

  > 📌 검색기록을 저장하는 배열 state를 만들어 배열에 키워드의 결과값이 있다면 배열에서 추출해 값을 보여줍니다.  
  > 📌 배열에 결과값이 없다면 api를 호출하여 결과값을 state에 키워드와 함께 저장하는 형식으로 캐싱 기능을 구현했습니다.

## <br />

### Assignment3

- [x] 키보드만으로 추천 검색어들로 이동 가능하도록 구현

   <br />

  ```jsx
   const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && (select as number) < searchTerm.length - 1) {
      const newSelect = select === null ? 0 : (select as number) + 1;
      setSelect(newSelect);
      (inputRef.current as HTMLInputElement).value = searchTerm[newSelect].sickNm;
    } else if (e.key === 'ArrowUp' && (select as number) > 0) {
      const newSelect = select === null ? 0 : (select as number) - 1;
      setSelect(newSelect);
      (inputRef.current as HTMLInputElement).value = searchTerm[newSelect].sickNm;
    }
  };

  const handleOnFocus = () => setIsFocus(true);
  const handleOnBlur = () => setIsFocus(false);
  };
  ```

  > 📌 input창이 focus되면 input하단에 추천 검색어 리스트를 띄우는 창이 생성됩니다.  
  > 📌 input창에 키워드를 타이핑하면 input 하단에 추천 검색어가 등장합니다.  
  > 📌 키보드 화살표 아래 방향을 누르면 추천 키워드가 아래로 순서대로 내려가며 select 됩니다.  
  > 📌 키보드 화살표 위 방향을 누르면 추천 키워드가 위로 이동하며 역순으로 select 됩니다.  
  > 📌 input창에서 focus가 벗어나면 input하단의 검색어 리스트가 사라집니다.

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
          ┃ ┗ 📝 search.ts
          ┣ 📂 components
            ┣ 📝 Recommend.tsx
            ┣ 📝 Search.tsx
            ┗ 📝 Loading.tsx

</details>
