import {APP_LOCALES} from '../constants';

const messages = {};

messages[APP_LOCALES.FR] = {
  article : {
    aside : {
      progress : "Navigation sur l'article",
      keywords : "Mots clefs de l'article",
      download : "Téléchargement",
    },
    content : {
      keywords : "Mots-clés : ",
      toQuote : "Pour citer cet article : ",
      publishedOn : "publié le"
    }
  },
  articles : {
    main : {
      title : 'Articles'
    }
  },
  filter : {
    filterBy : 'Filtrer par',
    languages : 'Langages',
    themes : 'Thèmes'
  },
  author : {
    main : {
      articles : 'Articles'
    }
  },
  authors : {
    main : {
      title : 'Auteurs'
    }
  },
  menu : {
    newsMenu : {
      readArticle : "Lire l'article",
      newArticles : "Récemment parus"
    }
  }
};

messages[APP_LOCALES.EN] = {
  article : {
    aside : {
      progress : "Reading progress",
      keywords : "Article's keywords",
      download : "Download",
    },
    content : {
      keywords : "Keywords : ",
      howtoQuote : "To quote this article : ",
      publishedOn : "published on the"
    }
  },
  articles : {
    main : {
      title : 'Articles'
    }
  },
  filter : {
    filterBy : 'Filter by',
    languages : 'Languages',
    themes : 'Themes'
  },
  author : {
    main : {
      articles : 'Articles'
    }
  },
  authors : {
    main : {
      title : 'Auteurs'
    }
  },
  menu : {
    newsMenu : {
      readArticle : "Read the article",
      newArticles : "Recent articles"
    }
  }
};

module.exports = messages;
