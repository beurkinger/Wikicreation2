import {APP_LOCALES} from '../constants';

const messages = {};

messages[APP_LOCALES.FR] = {
  about : {
    main : {
      title : 'À Propos'
    }
  },
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
    },
  },
  filter : {
    writeToFilter : 'Ecrire pour filtrer',
    filterBy : 'Filtrer par',
    languages : 'Langues',
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
    navMenu : {
      search : 'Rechercher',
      home :  'Accueil',
      about :  'À propos',
      articles : 'Articles',
      authors : 'Auteurs',
      contribute : 'Contribuer',
      committee : 'Comité',
      creditsAndContacts : 'Crédits et contact',
      legalNotice : 'Mentions légales',
    },
    newsMenu : {
      readArticle : "Lire l'article",
      newArticles : "Récemment parus"
    }
  },
  preview : {
    readArticle : "Lire l'article",
  },
  contact : {
    main : {
      title : 'Crédits et contact'
    }
  }
};

messages[APP_LOCALES.EN] = {
  about : {
    main : {
      title : 'About'
    }
  },
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
    writeToFilter : 'Write to filter',
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
      title : 'Authors'
    }
  },
  menu : {
    navMenu : {
      search : 'Search',
      home :  'Home',
      about :  'About',
      articles : 'Articles',
      authors : 'Authors',
      contribute : 'Contribute',
      committee : 'Committee',
      creditsAndContacts : 'Credits and contact',
      legalNotice : 'Legal Notice',
    },
    newsMenu : {
      readArticle : "Read the article",
      newArticles : "Recent articles"
    }
  },
  preview : {
    readArticle : "Read the article",
  },
  contact : {
    main : {
      title : 'Credits and contact'
    }
  }
};

module.exports = messages;
