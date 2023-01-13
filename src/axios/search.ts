import { AxiosResponse } from "axios";
import { SearchParams, SearchRelatedKeywords } from "../components/search/SearchBox";
import configAxios from "./configAxios";

export default {
  /**
   * 연관 검색어 얻기
   * @param keywords 입력한 키워드
   * @returns Promise
   */
  getKeywords(keywords: SearchParams): Promise<AxiosResponse<SearchRelatedKeywords[]>> {
    return configAxios({
      url: "sick",
      method: "GET",
      params: { ...keywords }
    });
  }
};
