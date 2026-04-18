export interface ChapterContent {
  id: string;
  number: string;
  title: string;
  tag: string;
  content: string | any[];
}

export interface Section {
  id: string;
  title: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'teal';
  description?: string;
  content: any;
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  tag: string;
  description: string;
  sections: Section[];
}

export const CEJM_CHAPTERS: { annee1: ChapterContent[]; annee2: ChapterContent[] } = {
  annee1: [
    { id: 'ch1-1', number: '01', title: "L'intégration de l'entreprise dans son environnement", tag: 'Économie / Droit', content: 'Contenu de révision à venir...' },
    { id: 'ch1-2', number: '02', title: "La régulation de l'activité économique", tag: 'Économie publique', content: 'Contenu de révision à venir...' },
    { id: 'ch1-3', number: '03', title: "L'organisation de l'activité économique", tag: 'Droit des contrats', content: 'Contenu de révision à venir...' },
    { id: 'ch1-4', number: '04', title: "L'impact du numérique sur l'entreprise", tag: 'Management / Stratégie', content: 'Contenu de révision à venir...' },
    { id: 'ch1-5', number: '05', title: "Le choix d'une structure juridique", tag: 'Droit des sociétés', content: 'Contenu de révision à venir...' },
    { id: 'ch1-6', number: '06', title: "Les relations contractuelles entre les acteurs", tag: 'Droit des contrats', content: 'Contenu de révision à venir...' },
  ],
  annee2: [
    {
      id: 'ch2-12',
      number: '12',
      title: "L'impact des mutations du travail sur l'emploi et les conditions de travail",
      tag: 'RH / Management',
      content: [
        {
          id: 'gepp',
          title: "I. Les actions appropriées dans le cadre d'une gestion des emplois et des parcours professionnels",
          type: 'grid',
          items: [
            {
              title: "🎯 1. La GEPP (gestion des emplois et des parcours professionnels)",
              color: 'blue',
              text: [
                "La GEPP a pour vocation d'analyser les écarts entre les ressources humaines disponibles et les besoins futurs. En fonction de cette analyse, des actions appropriées vont être mises en place :",
                "📈 Si les besoins sont supérieurs aux ressources : l'organisation pourra envisager de recruter, de favoriser la promotion interne ou de former ses salariés ;",
                "📉 Si les ressources sont supérieures aux besoins : il faudra envisager de réduire les effectifs, de proposer des mobilités internes ou de réduire le temps de travail."
              ]
            },
            {
              title: "⭐ 2. La gestion des talents",
              color: 'purple',
              text: [
                "La gestion des talents vise à bénéficier d'un avantage compétitif en valorisant l'unicité et les compétences de chaque collaborateur afin de gagner en souplesse et en réactivité.",
                "-> Elle doit également permettre d'attirer, de détecter et de fidéliser les talents."
              ]
            }
          ]
        },
        {
          id: 'motivation',
          title: "II. Identifier les leviers de la motivation",
          type: 'grid',
          items: [
            {
              title: "🛠️ 1. Définition et leviers de l'employeur",
              color: 'green',
              text: [
                "💡 La motivation se définit comme une force plus ou moins consciente qui pousse un salarié à s'impliquer dans son travail.",
                "Pour agir sur la motivation des salariés, l'employeur dispose d'un certain nombre de leviers :",
                "• 💰 la rémunération ;",
                "• 📈 l'épargne salariale ;",
                "• 🚀 la gestion des carrières ;",
                "• 🕒 l'aménagement du temps de travail ;",
                "• 🛡️ la stabilité de l'emploi."
              ]
            },
            {
              title: "🧠 2. Les grandes théories de la motivation",
              color: 'amber',
              text: [
                "🔺 Abraham Maslow présente cinq besoins que l'entreprise doit satisfaire pour motiver ses salariés : le besoin physiologique, le besoin de sécurité, le besoin d'appartenance, le besoin d'estime (ou de reconnaissance) et le besoin d'épanouissement personnel.",
                "⚖️ Dans sa théorie bifactorielle, Frederick Herzberg distingue deux types de facteurs qui influencent la satisfaction au travail :",
                "-> d'une part, les facteurs d'hygiène, qui concernent l'environnement du travail (le salaire, les conditions de travail, la sécurité) ; leur absence crée de l'insatisfaction, mais leur présence ne motive pas durablement.",
                "-> d'autre part, les facteurs de motivation (ou moteurs), qui sont liés au travail en lui-même (l'intérêt de la mission, l'autonomie, la reconnaissance) et qui génèrent une véritable satisfaction."
              ]
            },
            {
              title: "💻 3. Le cas des nouvelles générations : les Digital Natives",
              color: 'teal',
              text: [
                "📱 Les digital natives, également appelés « Millennials », sont les collaborateurs nés dans un environnement digitalisé. Leurs attentes diffèrent des générations précédentes : ils souhaitent travailler dans un environnement qui favorise les échanges et le développement individuel.",
                "-> Pour répondre à leurs attentes, les entreprises doivent s'adapter en proposant des modes de travail collaboratifs, le recours au télétravail et la mise en place d'un management participatif (où le salarié est impliqué dans les décisions)."
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ch2-13',
      number: '13',
      title: "La démarche et le diagnostic stratégiques",
      tag: 'Stratégie',
      content: [
        {
          id: 'demarche',
          title: "I. Identifier les différentes étapes d'une démarche d'analyse stratégique",
          type: 'grid',
          items: [
            {
              title: "📊 1-1 La démarche stratégique (Modèle LCAG)",
              color: 'blue',
              text: [
                "Dans les années 1960, quatre professeurs de la Harvard Business School (Learned, Christensen, Andrews et Guth) ont développé le modèle LCAG, qui propose une démarche stratégique en plusieurs étapes afin de déterminer les choix stratégiques d'une entreprise.",
                "Les étapes de la démarche stratégique sont :",
                "1️⃣ la réalisation du diagnostic stratégique,",
                "2️⃣ la fixation des objectifs stratégiques",
                "3️⃣ et la détermination de choix stratégiques pour atteindre les objectifs.",
                " ",
                "La démarche stratégique s'appuie sur un diagnostic stratégique externe (analyse des menaces et des opportunités présentes dans l'environnement général et concurrentiel) et un diagnostic stratégique interne (identification des forces et des faiblesses de l'entreprise).",
                "-> Ce double diagnostic stratégique s'effectue au moyen d'un outil d'aide à la décision, appelé « FFOM » (Forces / Faiblesses, Menaces / Opportunités) ou « SWOT » (Strengths / Weaknesses, Opportunities / Threats)."
              ]
            },
            {
              title: "🛤️ 1-2 Stratégie délibérée ou émergente",
              color: 'teal',
              text: [
                "La démarche stratégique n'est pas linéaire et subit les perturbations de l'environnement (Henry Mintzberg). On distingue la stratégie délibérée de la stratégie émergente :",
                "🎯 la stratégie délibérée est celle qui est voulue dès le départ et planifiée pour plusieurs années ;",
                "🌊 la stratégie émergente ne l'est pas, elle surgit au cours du temps en fonction des aléas de l'environnement."
              ]
            }
          ]
        },
        {
          id: 'diag-externe',
          title: "II. Présenter les principaux éléments d'un diagnostic externe de l'entreprise",
          type: 'grid',
          items: [
            {
              title: "🌍 2-1 L'environnement global (Outil PESTEL)",
              color: 'amber',
              text: [
                "L'environnement global est l'ensemble des éléments externes qui peuvent influencer l'activité de l'entreprise et sur lesquels elle a généralement peu d'influence.",
                "Appelé également « macro-environnement », il englobe les caractéristiques générales de l'économie et de la société.",
                "-> Ce diagnostic peut être réalisé à l'aide de l'outil PESTEL, qui prend en compte six dimensions factuelles : 🏛️ Politique, 📈 Économique, 👥 Socioculturel, 📱 Technologique, 🌱 Écologique et ⚖️ Légal."
              ]
            },
            {
              title: "🥊 2-2 Le Micro-environnement (Les 5 forces de Porter)",
              color: 'red',
              text: [
                "Pour apprécier les forces concurrentielles en présence sur un marché donné (l'environnement proche de l'entreprise), on utilise le modèle des cinq forces concurrentielles proposé par Michael Porter. Ces forces qui exercent une pression sont :",
                "⚔️ Les concurrents directs : Déjà en place, ils sont rivaux car ils proposent des produits identiques.",
                "🚪 Les concurrents potentiels (nouveaux entrants) : Ils pourraient entrer sur le marché s'il n'est pas protégé et venir concurrencer les entreprises en place.",
                "🔄 Les concurrents indirects (produits de substitution) : Ils proposent des produits différents en apparence, mais qui répondent à un besoin des consommateurs identique.",
                "🛒 Les fournisseurs : Ils peuvent détenir un pouvoir de négociation important sur l'entreprise s'ils sont puissants, concentrés et incontournables.",
                "💳 Les clients : Ils peuvent détenir un pouvoir de négociation important sur l'entreprise s'ils sont puissants et organisés, pesant ainsi sur les prix ou la qualité."
              ]
            },
            {
              title: "🗝️ 2-3 Les Facteurs Clés de Succès (FCS)",
              color: 'purple',
              text: [
                "Le diagnostic externe permet de repérer les facteurs clés de succès (FCS) à maîtriser impérativement sur un marché. Un FCS est un élément essentiel qui garantit le succès d'une entreprise dans un domaine donné.",
                "Il peut s'agir d'une qualité comme l'agilité, d'une caractéristique du produit comme le prix, l'image ou les fonctionnalités, d'une compétence comme un savoir-faire technologique, ou d'une relation avec des tiers comme la fidélisation client.",
                "-> Il doit répondre spécifiquement aux besoins du marché tout en constituant une ressource ou une force exploitable par l'entreprise."
              ]
            }
          ]
        },
        {
          id: 'diag-interne',
          title: "III. Le diagnostic stratégique interne",
          type: 'grid',
          items: [
            {
              title: "💎 1. La théorie des ressources (Edith Penrose, 1959)",
              color: 'green',
              text: [
                "Il évalue la capacité intrinsèque de l'entreprise à affronter son marché. La théorie définit la firme comme un ensemble de ressources dont le succès résulte de sa capacité à mobiliser et exploiter des ressources clés ou spécifiques, c'est-à-dire celles qui vont créer de la valeur et qui sont rares.",
                "Les ressources détenues peuvent être de différentes natures :",
                "📦 Tangibles : Ressources matérielles, financières, humaines et physiques.",
                "✨ Intangibles : Ressources immatérielles comme les capacités organisationnelles, technologiques et réputationnelles (image de marque)."
              ]
            },
            {
              title: "🧠 2. La théorie des compétences (Gary Hamel et C.K. Prahalad, 1993)",
              color: 'blue',
              text: [
                "Une compétence correspond à ce que sait faire l'entreprise avec ses ressources ; c'est la manière de les combiner qui va leur donner de la valeur.",
                "-> Les compétences deviennent fondamentales ou distinctives si elles permettent à l'entreprise de se différencier de façon stratégique de ses concurrents.",
                "Elles contribuent à un avantage concurrentiel durable en permettant de gagner en qualité, flexibilité et rapidité d'exécution grâce à une expertise, en facilitant l'accès à un grand nombre de marchés via le management des marques ou la distribution, ou en distinguant le produit par son caractère unique et innovant."
              ]
            },
            {
              title: "🔗 3. La chaîne de valeur (Michael Porter, 1985)",
              color: 'amber',
              text: [
                "Cet outil représente l'entreprise comme un enchaînement d'activités, en distinguant les activités principales (qui touchent directement au produit : logistique, production, vente) des activités de soutien (qui viennent en appui : RH, achats, infrastructures).",
                "• Le but : Repérer les activités qui génèrent le plus de valeur pour le client final, et identifier celles qui ne créent pas de valeur et génèrent uniquement des coûts.",
                "• La décision : Il s'agit alors de se concentrer sur les activités génératrices de valeur, tandis que pour les secondes, se pose la question stratégique de les conserver en interne ou de les externaliser (sous-traiter).",
                "-> Les activités et les liens entre ces activités qui génèrent le plus de valeur vont constituer l'avantage concurrentiel de l'entreprise, sa source de différenciation par rapport à la concurrence."
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const SUBJECTS: Subject[] = [
  {
    id: 'bloc1',
    title: 'Stratégie de communication',
    icon: '📐',
    tag: 'Bloc 01',
    description: "Les 8 étapes clés du plan de com, de l'analyse au pilotage.",
    sections: [
      {
        id: 'diagnostic',
        title: '1. Diagnostic',
        badge: 'SWOT / FFOM',
        badgeColor: 'blue',
        description: "Analyse Interne (Forces/Faiblesses) et Externe (Opportunités/Menaces).",
        content: {
          type: 'swot',
          items: [
            { title: 'Forces (interne)', color: 'green', items: ['Atouts, savoir-faire distinctifs', 'Notoriété, label, budget fort', 'Image de marque positive'], example: 'Ex. Reels très vus, comm. organique performante' },
            { title: 'Faiblesses (interne)', color: 'red', items: ['Points faibles internes', 'Site obsolète, budget nul', 'Image vieillissante'], example: 'Ex. Ventes en ligne = 5%, pas de stratégie omnicanale' },
            { title: 'Opportunités (externe)', color: 'blue', items: ['Tendances favorables du marché', 'Croissance du e-commerce', 'Nouveaux besoins des cibles'], example: 'Ex. Essor de Pinterest/Instagram' },
            { title: 'Menaces (externe)', color: 'amber', items: ['Concurrents agressifs', 'Crise économique, inflation', 'Saturation médiatique'], example: 'Ex. Concurrence internationale à bas coût' }
          ],
          warning: "Ne faire que Forces/Faiblesses = diagnostic interne seulement = max 6 pts sur 10. Le SWOT complet est obligatoire."
        }
      },
      {
        id: 'probleme',
        title: '2. Problème',
        description: "Le défi que la campagne doit résoudre. Tension entre ambition et obstacle.",
        content: {
          type: 'formula',
          formula: "« Comment [objectif / ambition] alors que [obstacle / frein / préjugé] ? »",
          examples: [
            { label: 'Exemple 1 — Formation artisanale', text: "« Comment informer et inciter des jeunes à intégrer un centre de formation artisanal, alors que l'artisanat est perçu comme peu attractif et peu lucratif ? »" },
            { label: 'Exemple 2 — Culture / Spectacle', text: "« Comment attirer les jeunes vers l'opéra, alors que cette musique est perçue comme élitiste et chère ? »" },
            { label: 'Exemple 3 — Marque locale', text: "« Comment développer les ventes en ligne d'une marque artisanale locale, alors que sa cible privilégie encore l'achat en magasin ? »" }
          ],
          tip: "Le 'comment' = ton objectif. Le 'alors que' = le frein principal tiré du SWOT."
        }
      },
      {
        id: 'positionnement',
        title: '3. Positionnement',
        badge: '4 critères',
        badgeColor: 'blue',
        description: "La place que la marque veut occuper dans l'esprit du public.",
        content: {
          type: 'grid',
          items: [
            { title: 'Crédible', color: 'blue', text: 'La promesse est réaliste et prouvée (Labels, prix, ancienneté).' },
            { title: 'Distinctif', color: 'green', text: "L'offre se démarque clairement des concurrents (Avantage unique)." },
            { title: 'Attractif', color: 'amber', text: 'Répond à un vrai besoin ou attente forte de la cible.' },
            { title: 'Durable', color: 'red', text: 'Peut être maintenu et défendu sur le long terme.' }
          ],
          formula: "« [La marque] se positionne comme [image souhaitée] pour [cible], grâce à [preuve / différenciation]. »"
        }
      },
      {
        id: 'objectifs',
        title: '4. Objectifs',
        badge: 'Triptyque CAC',
        badgeColor: 'purple',
        content: {
          type: 'grid',
          items: [
            { title: '🧠 Cognitif', color: 'blue', text: 'FAIRE CONNAÎTRE : Informer, annoncer, développer la notoriété.' },
            { title: '❤️ Affectif', color: 'green', text: 'FAIRE AIMER : Améliorer l\'image, moderniser, créer la préférence.' },
            { title: '⚡ Conatif', color: 'amber', text: 'FAIRE AGIR : Pousser à l\'achat, générer des inscriptions ou du trafic.' }
          ],
          example: "Cognitif : Faire connaître le centre. Affectif : Valoriser l'image. Conatif : Inciter à l'inscription."
        }
      },
      {
        id: 'cibles',
        title: '5. Cibles',
        content: {
          type: 'table',
          headers: ['Type', 'Définition', 'Exemple'],
          rows: [
            ['Cible principale', 'Public global visé.', 'Jeunes 16-25 ans national.'],
            ['Cœur de cible', 'Fraction prioritaire.', 'Jeunes 16-25 ans régionaux.'],
            ['Cible secondaire', 'Public influent.', 'Parents, enseignants.'],
            ['Relais', 'Prescripteurs.', 'Journalistes, influenceurs.'],
            ['Interne', 'Collaborateurs.', 'Équipes, formateurs.']
          ],
          extra: {
            title: "Motivations & Freins",
            items: [
              { label: 'Motivations', color: 'green', list: ['Sens dans la carrière', 'Attrait local', 'Formation pratique'] },
              { label: 'Freins', color: 'red', list: ['Image dépassée', 'Méconnaissance débouchés', 'Peur revenus'] }
            ]
          }
        }
      },
      {
        id: 'moyens',
        title: '6. Moyens',
        badge: 'POE',
        badgeColor: 'amber',
        content: {
          type: 'grid',
          items: [
            { title: '📺 Médias', color: 'blue', text: 'Affichage, Presse, Radio, TV, Internet, Réseaux Sociaux.' },
            { title: '🎯 Hors-médias', color: 'green', text: 'Édition, Marketing direct, Événementiel, RP, Influence.' },
            { title: '💰 Paid', color: 'red', text: 'Ads, Influence rémunérée, Achat d\'espace.' },
            { title: '🏠 Owned', color: 'blue', text: 'Site, Blog, Réseaux (organique), Newsletter.' },
            { title: '🌱 Earned', color: 'green', text: 'Retombées presse, Bouche à oreille, Partages.' }
          ]
        }
      },
      {
        id: 'kpi',
        title: '7. KPI',
        content: {
          type: 'table',
          headers: ['Objectif', 'Indicateurs (KPI)'],
          rows: [
            ['Cognitif', 'Impressions, Visiteurs uniques, SEO, Notoriété.'],
            ['Affectif', 'Taux engagement, Followers, NPS, Sentiment.'],
            ['Conatif', 'Taux conversion, Panier moyen, CPA, CTR, CA.'],
            ['Physique', 'Taux de visite tracé (QR code), Entrées.'],
            ['RP', 'Nombre retombées, Audience cumulée, EAP.']
          ]
        }
      },
      {
        id: 'droit',
        title: '8. Droit',
        content: {
          type: 'list',
          items: [
            { title: 'RGPD (2018)', text: 'Consentement explicite, droit à l\'oubli, politique de confidentialité.' },
            { title: 'Loi Évin (1991)', text: 'Encadrement alcool (message sanitaire) et tabac (interdiction).' },
            { title: 'Loi Sapin (1993)', text: 'Transparence des achats d\'espaces publicitaires.' },
            { title: 'LCEN (2004)', text: 'Opt-in e-mailing, mentions légales, cookies.' },
            { title: 'Droit d\'auteur', text: 'Cession de droits obligatoire pour toute création originale.' },
            { title: 'Droit à l\'image', text: 'Autorisation écrite obligatoire pour toute personne identifiable.' },
            { title: 'Loi AGEC (2020)', text: 'Anti-gaspillage, éco-conception des supports.' }
          ]
        }
      },
      {
        id: 'recap',
        title: '✅ Récapitulatif',
        content: {
          type: 'table',
          headers: ['Étape', 'Question clé', 'Piège'],
          rows: [
            ['SWOT', 'Où en est-on ?', 'Oublier l\'externe.'],
            ['Problème', 'Défi à résoudre ?', 'Oublier le "Alors que".'],
            ['Positionnement', 'Image voulue ?', 'Oublier les 4 critères.'],
            ['Objectifs', 'Quoi obtenir ?', 'Oublier un des 3 niveaux.'],
            ['Cibles', 'À qui parler ?', 'Oublier les relais.'],
            ['Moyens', 'Quels canaux ?', 'Lister sans justifier.'],
            ['KPI', 'Comment mesurer ?', 'Déconnectés des moyens.']
          ]
        }
      }
    ]
  },
  {
    id: 'culture',
    title: 'Cultures de la Com',
    icon: '🎨',
    tag: 'Cultures',
    description: "Analyse des thèmes transversaux : La Rue, Le Repas, L'Excès.",
    sections: [
      {
        id: 'la-rue',
        title: "La Rue",
        badge: 'Séance 1',
        badgeColor: 'blue',
        content: {
          type: 'construction',
          text: 'Contenu en cours de construction — Bientôt disponible.'
        }
      },
      {
        id: 'le-repas',
        title: "Le Repas",
        badge: 'Séance 2',
        badgeColor: 'amber',
        content: {
          type: 'construction',
          text: 'Contenu en cours de construction — Bientôt disponible.'
        }
      },
      {
        id: 'exces',
        title: "L'Excès",
        badge: 'Séance 3',
        badgeColor: 'purple',
        content: {
          type: 'list',
          items: [
            {
              title: "Grands axes de la séance :",
              text: [
                "1. L'excès et la modération",
                "2. L'excès et la parodie",
                "3. Une esthétique de l'excès ?"
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'cejm',
    title: 'CEJM',
    icon: '⚖️',
    tag: 'Droit & Éco',
    description: "Culture Économique, Juridique et Managériale.",
    sections: [
      {
        id: 'methodologie',
        title: 'Méthodologie',
        badge: 'Outils',
        badgeColor: 'purple',
        content: {
          type: 'subsections',
          subsections: [
            {
              id: 'pestel',
              title: "🌍 1. L'Analyse de l'Environnement (PESTEL)",
              type: 'grid',
              items: [
                {
                  title: "🤔 Quand l'utiliser ?",
                  color: 'blue',
                  text: 'Dès que l\'on te demande d\'analyser le "macro-environnement", d\'identifier les facteurs externes qui influencent l\'entreprise ou de chercher des Opportunités et des Menaces.'
                },
                {
                  title: "🧩 La Méthode (6 dimensions)",
                  color: 'green',
                  text: [
                    "🏛️ P (Politique) : Stabilité gouvernementale, politique fiscale, commerce extérieur.",
                    "📈 E (Économique) : Croissance (PIB), taux d'intérêt, inflation, pouvoir d'achat.",
                    "👥 S (Socioculturel) : Démographie, habitudes de consommation, niveau d'éducation.",
                    "📱 T (Technologique) : Innovations, dépenses en R&D, nouveaux brevets.",
                    "🌱 E (Écologique) : Lois sur la protection de l'environnement, recyclage, consommation d'énergie.",
                    "⚖️ L (Légal) : Droit du travail, droit de la consommation, normes de sécurité."
                  ]
                }
              ]
            },
            {
              id: 'swot',
              title: "📊 2. Le Diagnostic Stratégique (SWOT / FFOM)",
              type: 'grid',
              items: [
                {
                  title: "🤔 Quand l'utiliser ?",
                  color: 'amber',
                  text: "C'est l'outil de synthèse par excellence. Il permet de croiser les capacités de l'entreprise avec son marché."
                },
                {
                  title: "🏢 Le Diagnostic Interne",
                  color: 'teal',
                  text: [
                    "Ce que l'entreprise contrôle :",
                    "• 💪 Forces : Atouts, savoir-faire, ressources financières solides, bonne image.",
                    "• ⚠️ Faiblesses : Manque de compétences, site web obsolète, faible notoriété."
                  ]
                },
                {
                  title: "🌍 Le Diagnostic Externe",
                  color: 'red',
                  text: [
                    "Ce que l'entreprise subit :",
                    "• 🌟 Opportunités : Marché en croissance, nouvelles lois favorables (Loi AGEC), boom du e-commerce.",
                    "• 🚨 Menaces : Arrivée d'un nouveau concurrent, hausse du prix des matières premières."
                  ]
                }
              ]
            },
            {
              id: 'syllogisme',
              title: "⚖️ 3. Le Raisonnement Juridique (Le Syllogisme)",
              type: 'grid',
              items: [
                {
                  title: "🤔 Quand l'utiliser ?",
                  color: 'blue',
                  text: 'Pour répondre de manière structurée à toute question juridique (mission de droit). C\'est la méthode qui garantit d\'obtenir le maximum de points.'
                },
                {
                  title: "🔑 Les 5 étapes clés",
                  color: 'purple',
                  text: [
                    "1️⃣ Les Faits : Résumer la situation de manière qualifiée juridiquement (ne pas dire \"le monsieur\", mais \"le salarié\" ou \"le créancier\").",
                    "2️⃣ Le Problème de droit : Poser la question sous forme juridique (ex: \"L'employeur peut-il utiliser des images de vidéosurveillance sans informer le salarié ?\").",
                    "3️⃣ La Majeure (La Règle) : Citer les articles de loi ou les principes juridiques applicables (Code civil, Code du travail).",
                    "4️⃣ La Mineure (L'Application) : Vérifier si, dans le cas présent, les conditions de la loi sont remplies.",
                    "5️⃣ La Conclusion : Répondre clairement à la question posée."
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: 'annee1',
        title: '1ère Année',
        badge: 'L1',
        badgeColor: 'teal',
        content: { type: 'cejm-chapters', year: 'annee1' }
      },
      {
        id: 'annee2',
        title: '2ème Année',
        badge: 'L2',
        badgeColor: 'blue',
        content: { type: 'cejm-chapters', year: 'annee2' }
      }
    ]
  }
];
