import {APP_LOCALES} from '../config';

const messages = {};

messages[APP_LOCALES.FR] = {
  about : {
    main : {
      title : 'À Propos'
    },
    aside : {
      presentation : 'Présentation de la publication',
      editorialProject : 'Un projet éditorial relationnel',
      editor : 'Editeur'
    },
    content : {
      becomeAuthor : 'Devenir auteur'
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
    },
    keywords : {
      empty : "Aucun mot-clé n'a été défini pour cet article."
    }
  },
  articles : {
    main : {
      title : 'Articles'
    },
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
  contact : {
    main : {
      title : 'Crédits et contact'
    },
    aside : {
      credits : 'Crédits',
      contact : 'Contact'
    },
    content : {
      director : 'Directeur de projet',
      manager : 'Chef de projet',
      artistic : 'Directeurs artistiques',
      ux : 'UX Designers',
      developers : 'Développeurs'
    },
    form : {
      name : 'Nom',
      mail : 'Mail',
      message : 'Message',
      send : 'Envoyer'
    }
  },
  committee : {
    main : {
      title : 'Comités'
    },
    aside : {
      editorial : 'Comité de rédaction',
      reading : 'Comité de lecture',
      scientific : 'Comité scientifique'
    }
  },
  error : {
    title : 'Erreur',
    number : '404',
    sorry : 'Nous sommes désolés',
    notFound : 'La page que vous cherchez n’est pas disponible',
    goBack : 'Revenir au site'
  },
  filter : {
    writeToFilter : 'Ecrire pour filtrer',
    filterBy : 'Filtrer par',
    languages : 'Langues',
    themes : 'Thèmes'
  },
  menu : {
    navMenu : {
      search : 'Rechercher',
      home :  'Accueil',
      about :  'À propos',
      articles : 'Articles',
      authors : 'Auteurs',
      contribute : 'Contribuer',
      committee : 'Comités',
      creditsAndContacts : 'Crédits et contact',
      legalNotices : 'Mentions légales',
    },
    newsMenu : {
      readArticle : "Lire l'article",
      newArticles : "Récemment parus"
    }
  },
  legal : {
    title : 'Mentions légales'
  },
  preview : {
    readArticle : "Lire l'article",
  }
};

messages[APP_LOCALES.EN] = {
  about : {
    main : {
      title : 'About'
    },
    aside : {
      presentation : 'Presentation of the publication',
      editorialProject : 'The editorial relational project',
      editor : 'Editor'
    },
    content : {
      becomeAuthor : 'Become author'
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
    },
    keywords : {
      empty : "This article does not have any keyword."
    }
  },
  articles : {
    main : {
      title : 'Articles'
    }
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
  committee : {
    main : {
      title : 'Committees'
    },
    aside : {
      editorial : 'Editorial Committee',
      reading : 'Reading Committee',
      scientific : 'Scientific Committee'
    }
  },
  contact : {
    main : {
      title : 'Credits and contact'
    },
    aside : {
      credits : 'Credits',
      contact : 'Contact'
    },
    content : {
      director : 'Project Director',
      manager : 'Project Manager',
      artistic : 'Artistic Directors',
      ux : 'UX Designers',
      developers : 'Developers'
    },
    form : {
      name : 'Name',
      mail : 'Email',
      message : 'Message',
      send : 'Send'
    }
  },
  error : {
    title : 'Error',
    number : '404',
    sorry : 'We are sorry',
    notFound : 'The page you are looking for cannot be found',
    goBack : 'Go back'
  },
  filter : {
    writeToFilter : 'Write to filter',
    filterBy : 'Filter by',
    languages : 'Languages',
    themes : 'Themes'
  },
  legal : {
    title : 'Legal notices'
  },
  menu : {
    navMenu : {
      search : 'Search',
      home :  'Home',
      about :  'About',
      articles : 'Articles',
      authors : 'Authors',
      contribute : 'Contribute',
      committee : 'Committees',
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
  }
};

module.exports = messages;
