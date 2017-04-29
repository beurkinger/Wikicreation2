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
      downloads : {
        title : "Téléchargements",
        empty : "Aucun téléchargement n'est disponible pour cet article."
      },
    },
    content : {
      keywords : "Mots-clés : ",
      footnotes : "Notes de bas de page : ",
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
      email : 'Email',
      message : 'Message',
      send : 'Envoyer'
    }
  },
  contribute : {
    main : {
      title : 'Contribuer',
    },
    aside : {
      discursiveForms : 'Les formes discursives',
      formalInstructions : 'Les consignes formelles',
      sendArticle : "Envoi d'un article"
    },
    form : {
      author: 'Auteur',
      article : 'Article',
      contact : 'Contact',
      name : 'Nom',
      university : 'Université',
      authorTitle : 'Titre',
      bio : 'Biographie',
      title : 'Titre',
      categories : 'Catégorie(s)',
      keywords : 'Mots-Clés',
      abstract : 'Abstract',
      email : 'Email',
      doc : 'Document',
      errorMissing : "Présence d'un champs non-rempli.",
      errorEmail : 'Merci de vérifier votre adresse email.',
      errorServer : "Erreur lors de l'envoi. Merci de réessayer.",
      send : "Envoyer",
      sending : 'Envoi...',
      sent : 'Votre message a bien été envoyé. Merci.'
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
    writeToFilter : 'Filter par nom',
    filterBy : 'Filtrer par',
    languages : 'Langues',
    themes : 'Thèmes',
    resetFilter : 'Vider les fitres'
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
      downloads : {
        title : "Downloads",
        empty : "There is no download available for this article."
      },
    },
    content : {
      keywords : "Keywords : ",
      footnotes : "Footnotes : ",
      toQuote : "To quote this article : ",
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
      email : 'Email',
      message : 'Message',
      send : 'Send'
    }
  },
  contribute : {
    main : {
      title : 'Contribute',
    },
    aside : {
      discursiveForms : 'Discursive Forms',
      formalInstructions : 'Formal Instructions',
      sendArticle : 'Send an Article'
    },
    form : {
      author: 'Author',
      article : 'Article',
      contact : 'Contact',
      name : 'Name',
      university : 'University',
      authorTitle : 'Title',
      bio : 'Biography',
      title : 'Title',
      categories : 'Categorie(s)',
      keywords : 'Keywords',
      abstract : 'Abstract',
      email : 'Email',
      doc : 'Document',
      errorMissing : "Error : empty field.",
      errorEmail : 'Please verify your email address.',
      errorServer : "There was an error sending your message. Please try again.",
      send : "Send",
      sending : 'Sending...',
      sent : 'Your message has been sent. Thanks.'
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
    writeToFilter : 'Filter by name',
    filterBy : 'Filter by',
    languages : 'Languages',
    themes : 'Themes',
    resetFilter : 'Empty the filters'
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
