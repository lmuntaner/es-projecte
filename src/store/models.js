import Prismic from 'prismic-javascript';

import { parseArticle } from './parsers';

const apiEndpoint = 'https://esprojecte.prismic.io/api/v2';

export const articles = {
  state: {},
  reducers: {
    addList(state, payload) {
      const newArticles = payload.reduce((acc, article) => {
        acc[article.uid] = article;
        return acc;
      }, {});
      return {
        ...state,
        ...newArticles,
      }
    },
  },
  effects: {
    async getList() {
      try {
        const api = await Prismic.getApi(apiEndpoint);
        const response = await api.query(
          [
            Prismic.Predicates.at('document.type', 'article'),
            Prismic.Predicates.at('document.tags', ['post']),
          ]
        );
        const articles = response.results.map(parseArticle);
        this.addList(articles);
      } catch (error) {
        console.log('in da error');
        console.log(error);
      }
    },
    async getOne(uid) {
      try {
        const api = await Prismic.getApi(apiEndpoint);
        const article = await api.getByUID('article', uid);
        const parsedArticle = parseArticle(article);
        this.addList([parsedArticle])
      } catch (error) {
        console.log('in da error');
        console.log(error);
      }
    }
  }
}