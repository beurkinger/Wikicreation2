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
      legalNotices : 'Mentions légales',
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
  },
  committee : {
    main : {
      title : 'Comité'
    }
  },
  legal : {
    title : 'Mentions légales'
  },
  error : {
    title : 'Erreur',
    number : '404',
    sorry : 'Nous sommes désolés',
    notFound : 'La page que vous cherchez n’est pas disponible',
    goBack : 'Revenir au site'
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
      legalNotices : 'Legal Notices',
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
  },
  committee : {
    main : {
      title : 'Comité'
    }
  },
  legal : {
    title : 'Legal notices'
  },
  error : {
    title : 'Error',
    number : '404',
    sorry : 'We are sorry',
    notFound : 'The page you are looking for cannot be found',
    goBack : 'Go back'
  }
};

module.exports = messages;
