### Assignment1

- [x] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

   <br />

  ```jsx
  useEffect(() => {
    const debouncer = setTimeout(() => {
      if (input) {
        FetchInputHandler(input).then((res) => {
          dataCtx.setSearchedKeyword(() => input);
          dataCtx.setRecommendItemList(res);
        });
      }
      dataCtx.setRecommendItemList(() => []);
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [input]);
  ```

  > 📌 debounce를 통해 api 호출 횟수를 줄였습니다. 

## <br />

### Assignment2

- [x] 캐싱

   <br />

  ```jsx
    const FetchInputHandler = async (query: string) => {
  // @TODO 검색한 데이터를 저장하는 store 구현
  const cachedData = await localStorage.getItem(query);
  if (cachedData) {
    // FIXME tesing consolelog
    // eslint-disable-next-line
    console.log('캐시된 데이터 호출');
    return JSON.parse(cachedData);
  }
  const response = await client.get(`?q=${query}`);
  const dataParser = JSON.stringify(response.data);
  await localStorage.setItem(query, dataParser);
  // eslint-disable-next-line
  console.info('calling api');
  return response.data;
    };
  ```

  > 📌 api를 호출하고 결과를 저장하는 localStorage를 사용해서, 이미 검색했던 쿼리가 들어오면 api를 호출하지 않고 로컬에 저장된 데이터를 반환합니다. 

## <br />

### Assignment3

- [x] 키보드만으로 추천 검색어들로 이동 가능하도록 구현

   <br />

  ```jsx
    const arrowKeyReducer = (state:number, action) => {
    switch (action.type) {
        case 'UP':
        if (state === -1) {
            return state;
        }
        return state - 1;
        case 'DOWN': {
        return state + 1;
        }
        case 'RESET': {
        return -1;
        }
        default:
        return state;
    }
    };

    export const SelectContextProvider = ({ children }) => {
    const [selectedNumber, keyDispatch] = useReducer(arrowKeyReducer, -1);
    const dataCtx = useContext(DataContext);

    const onKeyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
        keyDispatch({ type: 'UP' });
        } else if (e.key === 'ArrowDown') {
        if (selectedNumber === dataCtx.recommendItemList.length) {
            return;
        }
        keyDispatch({ type: 'DOWN' });
        } else {
        keyDispatch({ type: 'RESET' });
        }
    };

    const memoContextValue = useMemo(() => ({ onKeyDownHandler, selectedNumber }), [selectedNumber]);

    return <SelectContext.Provider value={memoContextValue}>{children}</SelectContext.Provider>;
    };
  ```

  > 📌 키보드 이벤트를 받아서 배열의 index를 선택하는 context를 구현했습니다. 


  ```jsx
    const RecommendItemBox = () => {
        const dataCtx = useContext(DataContext);
        const selectCtx = useContext(SelectContext);

        let RecommendItemList;

        if (dataCtx.recommendItemList.length === 0) {
            RecommendItemList = <NotingDiv>검색어 없음</NotingDiv>;
        } else {
            RecommendItemList = dataCtx.recommendItemList.map((item: RecommendItemType, index) => (
            <RecommendItem
                key={item.sickCd}
                sickName={item.sickNm}
                boldString={dataCtx.searchedKeyword}
                isSelected={index === selectCtx.selectedNumber}
            />
            ));
        }

        return (
            <RecommendItemBoxWrapper>
            <Card>
                <RecommendItemBoxText>추천 검색어</RecommendItemBoxText>
                {RecommendItemList}
            </Card>
            </RecommendItemBoxWrapper>
        );
    };
  ```
  > 📌 배열의 index와 키보드 이벤트로 선택된 index가 일치하면 상태를 넘겨주고, 조건부 스타일링을 통해 이동할 수 있게끔 구현했습니다.
<br />
