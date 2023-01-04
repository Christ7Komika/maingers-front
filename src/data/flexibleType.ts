export type TYPE_FLEXIBLE = {
  id: number;
  type: string;
  data: any[];
};

export const flexibleTypeData = [
  {
    id: 1,
    type: "EAU",
    data: [
      {
        id: 1,
        name: "VODA 6",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 1 ",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
          &Aspect toilé à partir du diamètre intèrieur 19
          &Résistant aux intempéries, détergents et produits
          &Chimiques dilués.
          &Température: -25°c à +70°c
          &Homologations: EN ISO 1403`,
        IdTableau: 1,
      },
      {
        id: 2,
        name: "VODA 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 2",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
          &Aspect toilé à partir du diamètre intèrieur 19
          &Résistant aux intempéries, détergents et produits
          &Chimiques dilués.
          &Température: -25°c à +70°c
          &Homologations: EN ISO 1403`,
        IdTableau: 2,
      },
      {
        id: 3,
        name: "VODA 25",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 3",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
          &Aspect toilé à partir du diamètre intèrieur 19
          &Résistant aux intempéries, détergents et produits
          &Chimiques dilués.
          &Température: -25°c à +70°c
          &Homologations: EN ISO 1403`,
        IdTableau: 3,
      },
      {
        id: 4,
        name: "NERO",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT D'EAU SUIVANT ISO 4641 TYPE 2",
        application:
          "Tuyau polyvalent pour l'aspiration et le refoulement d'eau et de produits chimiques légers.Dépression 0.08 Mpa&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile et spirale métallique (1 ou 2)
          &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
          &Aspect toilé à partir du diamètre intèrieur 19
          &Résistant aux intempéries, détergents et produits
          &Chimiques dilués.
          &Température: -30°c à +100°c
          &Homologations: EN ISO 4640`,
        IdTableau: 4,
      },
      {
        id: 5,
        name: "STAL",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU REVETEMENT FIBRE DE VERRE",
        application:
          "Tuyau de refoulement dans la sidérurgie ou la verrerie.Peut aussi servir de gaine de protection de câbles ou d'autres tuyaux",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR - Fibre de verre vulcanisée
          &Température: -30°c à +100°c
          &Résistance du revêtement à la chaleur: + 600°c
          &Pointes à 1000°c`,
        IdTableau: 5,
      },
      {
        id: 6,
        name: "THERMA A",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE LIQUIDE DE REFROIDISSEMENT DIN 73411",
        application:
          "Tuyau pour le refoulement de liquide de refroidissement Automobile, Poids lourds, Travaux publics et industrie",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Textile
          &Revêtement: EPDM/SBR aspect lisse
          Résistant aux intempéries
          &Température: -35°c à +125°c
          &Homologations: DIN 73411`,
        IdTableau: 6,
      },
      {
        id: 7,
        name: "THERMA B",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE LIQUIDE DE REFROIDISSEMENT DIN 73411",
        application:
          "Tuyau pour le refoulement de liquide de refroidissement Automobile, Poids lourds, Travaux publics et industrie",
        caracteristique: `Tube : EPDM
          &Renforcement: Textile
          &Revêtement: EPDM
          Résistant aux intempéries
          &Température: -35°c à +145°c
          &Homologations: DIN 73411`,
        IdTableau: 7,
      },
    ],
  },
  {
    id: 2,
    type: "AIR",
    data: [
      {
        id: 1,
        name: "AIR 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 1 CLASSE A ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
          &Résistant aux intempéries.
          &Température: -40°c à +70°c
          &Homologations: EN ISO 2398 Type 1 Classe A`,
        IdTableau: 8,
      },
      {
        id: 2,
        name: "AIR 16",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 2 CLASSE A ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR
          &Résistant aux intempéries.
          &Température: -40°c à +70°c
          &Homologations: EN ISO 2398 Type 2 Classe A`,
        IdTableau: 9,
      },
      {
        id: 3,
        name: "AIR 16",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 2 CLASSE C ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: NBR noir, aspect lisse ou toilé, résistant au huiles
          &Résistant aux intempéries.
          &Température: -40°c à +70°c
          &Homologations: EN ISO 2398 Type 2 Classe C`,
        IdTableau: 10,
      },
      {
        id: 4,
        name: "AIR 25",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 3 CLASSE C ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: NBR noir, aspect lisse ou toilé, résistant aux huiles
          &Résistant aux intempéries.
          &Température: -40°c à +70°c
          &Homologations: EN ISO 2398 Type 3 Classe C`,
        IdTableau: 11,
      },
      {
        id: 5,
        name: "WELD O&OXYGENE",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'OXYGENE SUIVANT EN 559 - ISO 3821 ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : SBR noir lisse
          &Renforcement: Textile
          &Revêtement: EPDM/SBR bleu, aspect lisse
          &Température: -30°c à +70°c
          &Homologations: EN 559 - ISO 3821`,
        IdTableau: 12,
      },
      {
        id: 6,
        name: "WELD A&ACETYLENE",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'OXYGENE ET/OU D'ACETYLENE SUIVANT EN 559 - ISO 3821 ",
        application:
          "Tuyau de refoulement d'acétylène, application de soudage ou d'oxycoupage",
        caracteristique: `Tube : SBR noir lisse
          &Renforcement: Textile
          &Revêtement: EPDM/SBR rouge, aspect lisse
          &Température: -30°c à +70°c
          &Homologations: EN 559 - ISO 3821`,
        IdTableau: 13,
      },
      {
        id: 7,
        name: "WELD O/A&OXYGENE - ACETYLENE",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'OXYGENE ET D'ACETYLENE SUIVANT EN 559 - ISO 3821 ",
        application:
          "Tuyau de refoulement d'acétylène, application de soudage ou d'oxycoupage",
        caracteristique: `Tube : SBR noir lisse
          &Renforcement: Textile
          &Revêtement: EPDM/SBR rouge, aspect lisse
          &Température: -30°c à +70°c
          &Homologations: EN 559 - ISO 3821`,
        IdTableau: 14,
      },
      {
        id: 8,
        name: "AIR DIN",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT DIN 20018 ",
        application: "Tuyau de refoulement d'air comprimé et d'eau",
        caracteristique: `Tube : EPDM/SBR noir lisse
          &Renforcement: Tresse ou plis textile
          &Revêtement: EPDM/SBR noir, aspect lisse et toilé
          &Résistant aux intempéries, détergents et produits chimiques dilués.
          &Température: -30°c à +50°c
          &Homologations: DIN 20018`,
        IdTableau: 15,
      },
    ],
  },
  {
    id: 3,
    type: "HYDROCARBURES",
    data: [
      {
        id: 1,
        name: "CARBO 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES TYPE 10",
        application:
          "Tuyau pour le refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: NBR/PVC aspect toilé
          &Résistant aux intempéries et hautes températures.
          &Température: -30°c à +100°c pointes à 125°c`,
        IdTableau: 16,
      },
      {
        id: 2,
        name: "CARBO 20",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES TYPE 20",
        application:
          "Tuyau pour le refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: NBR/PVC aspect toilé
          &Résistant aux intempéries et hautes températures.
          &Température: -30°c à +100°c pointes à 125°c`,
        IdTableau: 17,
      },
      {
        id: 3,
        name: "NAFTA",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT D'HYDROCARBURES",
        application:
          "Tuyau pour l'aspiration et le refoulement d'hydrocarbures,Essence et huile, Utilisé lorsque les conditions de travail sont difficiles, résiste au vrillage et au pliage",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile et spirale métallique (1 ou 2)
          &Revêtement: NBR/PVC aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c
          &Dépression 0.063 Mpa
          &Fil de masse antistatique`,
        IdTableau: 18,
      },
      {
        id: 4,
        name: "PETRO D",
        img: "",
        def: "TUYAU CAOUTCHOUC  REFOULEMENT D'HYDROCARBURES SUIVANT NORME EN 1761 TYPE D",
        application:
          "Tuyau aspiration refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: CR aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +70°c
          &Dépression 0.063 Mpa
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m
          &Homologation: EN 1761`,
        IdTableau: 19,
      },
      {
        id: 5,
        name: "PETRO S",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT D'HYDROCARBURES SUIVANT NORME EN 1761 TYPE SD",
        application:
          "Tuyau aspiration refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: CR aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +70°c
          &Dépression 0.063 Mpa
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m
          &Homologation: EN 1761`,
        IdTableau: 20,
      },
      {
        id: 6,
        name: "STOOM 165",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE VAPEUR 165°C",
        application: "Refoulement d'eau chaude ou de vapeur saturée.",
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +165°c`,
        IdTableau: 21,
      },
      {
        id: 7,
        name: "GPL 25",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE GPL",
        application:
          "Tuyau pour le refoulement de GPL et gaz liquéfié&Remplissage et de déchargement de réservoirs",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: CR aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +70°c
          &2 Fils de masse antistatique
          &Homologations : EN 1762 Type D`,
        IdTableau: 22,
      },
      {
        id: 8,
        name: "BENZIN",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES DIN 73379 TYPE 2A",
        application:
          "Bioéthanol (composés d'oxygène jusqu'à 15%) et biodiesel 80% de tuyau pour les installations de refoulement d'hydrocarbures, sur les véhicules automobiles, teneur en aromatiques jusqu'à 50% de gazol et 20% de bio composants.",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Textile
          &Revêtement: NBR/PVC Aspect lisse
          &Résistant aux intempéries et à la température.
          &Température: -30°c à +100°c Pointes à 125°c
          &2 Fils de masse antistatique
          &Homologations : DIN 73379 Type 2A`,
        IdTableau: 23,
      },
      {
        id: 9,
        name: "DIZEL",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES DIN 73379 TYPE B",
        application:
          "Tuyau pour les installationsde de refoulement d'hydrocarbures, et d'huiles sur les véhicules automobiles.",
        caracteristique: `Tube : NBR noir lisse
          &Revêtement: Tresse synthétique - Tresse coton
          &Résistant aux intempéries et à la température.
          &Température: -30°c à +85°c 
          &Homologations : DIN 73379 Type B`,
        IdTableau: 24,
      },
    ],
  },
  {
    id: 5,
    type: "CHIMIE",
    data: [
      {
        id: 1,
        name: "KEMIA END",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE PRODUITS CHIMIQUES SUIVANT EN 12115 TYPE D",
        application: `Tuyau pour le refoulement de produits chimiques
            &Acides et bases.
            &Acide nitrique à 20%
            &Acide sulfurique jusqu'a 80%
            &Acide chlorhydrique jusqu'à 36%
            &Hydroxyde de sodium, Acide acétique, Ammoniac toutes concentrations`,
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile type D
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries
          &Température: -30°c à +65°c
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m`,
        IdTableau: 25,
      },
      {
        id: 2,
        name: "KEMIA ENS",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS CHIMIQUES SUIVANT EN 12115 TYPE SD",
        application: `Tuyau pour l'aspiration et le refoulement de produits chimiques
            &Acides et bases.
            &Acide nitrique à 20%
            &Acide sulfurique jusqu'a 80%
            &Acide chlorhydrique jusqu'à 36%
            &Hydroxyde de sodium, Acide acétique, Ammoniac toutes concentrations`,
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile et spirale métallique type SD
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries
          &Température: -30°c à +65°c
          &Type S/D Dépression admissible - 0.09 Mpa
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m`,
        IdTableau: 26,
      },
      {
        id: 3,
        name: "KEMIA ECS",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS CHIMIQUES ",
        application: `Tuyau pour l'aspiration et le refoulement de produits chimiques
            &Acides et bases.
            &Acide nitrique à 20%
            &Acide sulfurique jusqu'a 80%
            &Acide chlorhydrique jusqu'à 36%
            &Hydroxyde de sodium, Acide acétique, Ammoniac toutes concentrations`,
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile type D
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries
          &Température: -30°c à +65°c
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m`,
        IdTableau: 27,
      },
    ],
  },
  {
    id: 6,
    type: "ALIMENTAIRE",
    data: [
      {
        id: 1,
        name: "GIDA",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE PRODUITS ALIMENTAIRES ",
        application: `Transfert de produits alimentaires dans les tuyaux sans saveur ni odeur
          &Nourriture acide pH ≤ 4,5
          &Alcool teneur maximum 96%`,
        caracteristique: `Tube : EPDM blanc lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR bleu, rouge ou blanc, aspect toilé
          &Résistant aux intempéries, détergents et produits chimiques diluées.
          &Température: -30°c à +70°c pointes à 140°c pendant la période de néttoyage à la vapeur`,
        IdTableau: 28,
      },
      {
        id: 2,
        name: "IKEL",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS ALIMENTAIRES ",
        application: `Transfert de produits alimentaires dans les tuyaux sans saveur ni odeur
          &Nourriture acide pH ≤ 4,5
          &Alcool teneur maximum 96%`,
        caracteristique: `Tube : EPDM blanc lisse
          &Renforcement: Plis textile et spiral métallique
          &Revêtement: EPDM/SBR bleu, rouge ou blanc, aspect toilé
          &Résistant aux intempéries, détergents et produits chimiques diluées.
          &Température: -30°c à +70°c pointes à 140°c pendant la période de néttoyage à la vapeur`,
        IdTableau: 29,
      },
    ],
  },
  {
    id: 7,
    type: "PROJECTION",
    data: [
      {
        id: 1,
        name: "GYPSO 40",
        img: "",
        def: "TUYAU CAOUTCHOUC DE PROJECTION ET DE GUNITAGE",
        application: `Projection de produits abrasifs divers tels que:
          &Mortier, Béton mélangé, Enduits
          &Indice d'abrasion 70 ou 40 mm^3`,
        caracteristique: `Tube : SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -35°c à +60°c`,
        IdTableau: 30,
      },
      {
        id: 2,
        name: "SAND",
        img: "",
        def: "TUYAU CAOUTCHOUC POUR LE SABLAGE",
        application: `Refoulement de sable ou grenaille
          &Indice d'abrasion 70 ou 40 mm^3`,
        caracteristique: `
          Tube : BR/NR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c`,
        IdTableau: 31,
      },
      {
        id: 3,
        name: "GRIT 70",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS ABRASIFS",
        application: `Tuyau aspiration refoulement de produits abrasifs
          &Sable, gravier, limaille etc.`,
        caracteristique: `
          Tube : BR/NR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c
          &2 Fils de masse métallique
          &Résistant électrique 10^6 Ω/m
          &Dépression 0.063 Mpa
          Indice d'abrasion : 70mm3`,
        IdTableau: 32,
      },
      {
        id: 4,
        name: "GRIT 40",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS ABRASIFS",
        application: `Tuyau aspiration refoulement de produits abrasifs
          &Sable, gravier, limaille etc.`,
        caracteristique: `
          Tube : BR/NR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c
          &2 Fils de masse métallique
          &Résistant électrique 10^6 Ω/m
          &Dépression 0.063 Mpa
          Indice d'abrasion : 40mm3`,
        IdTableau: 33,
      },
    ],
  },
  {
    id: 8,
    type: "COMPOSITE - POLYFILMS",
    data: [
      {
        id: 1,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'HYDROCARBURES - 10 BAR",
        tube: "Acier galvanise",
        armature: "Film polypropylène",
        revetement:
          "Tissu enduit pvc gris bande de marquage jaune acier galvanise",
        utilisation:
          "Aspiration et refoulement d'hydrocarbures spécialement conçu pour dépotage d'hydrocarbures par camions citernes",
        cds: "4:1",
        temperature: "-30°c / +80°c (-22°F / +176°F)",
        norme: "BS 5842",
        IdTableau: 34,
      },
      {
        id: 2,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'HYDROCARBURES - 14 BAR",
        tube: "Acier galvanise",
        armature: "Film polyester",
        revetement: "Tissu enduit pvc gris bande de marquage jaune",
        utilisation:
          "Aspiration et refoulement d'hydrocarbures spécialement conçu pour utilisation intensive et sévère nécessitant une résistance aux température élevées",
        cds: "4:1",
        temperature: "-30°c / +100°c (-22°F / +212°F)",
        norme: "BS 5842",
        IdTableau: 35,
      },
      {
        id: 3,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'ACIDES ET PRODUITS CHIMIQUES - 10 BAR",
        tube: "Fil acier revêtu polypropylène",
        armature: "Film polypropylène",
        revetement: "Tissu enduit pvc gris bande de marquage blanche",
        utilisation:
          "Aspiration et refoulement de produits chimiques - spécialement conçu pour dépotage de produits chimiques par camions citernes",
        cds: "4:1",
        temperature: "-30°c / +80°c (-22°F / +176°F)",
        norme: "BS 5842",
        IdTableau: 36,
      },
      {
        id: 4,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'ACIDES ET PRODUITS CHIMIQUES - 14 BAR",
        tube: "Fil acier inoxydable 316L",
        armature: "Film ptfe",
        revetement:
          "Tissu enduit pvc gris bande de marquage blanche fil acier inoxydable 316L",
        utilisation:
          "Aspiration et refoulement de produits chimiques agressifs, acides, solvants... - spécialement conçu pour l'utilisation intensives et sévère nécessitant une résistance élevées",
        cds: "4:1",
        temperature: "-30°c / +115°c (-22°F / +239°F)",
        norme: "BS 5842",
        IdTableau: 37,
      },
    ],
  },
  {
    id: 9,
    type: "TÉFLON - PTFE",
    data: [
      {
        id: 1,
        name: "TÉFLON - PTFE",
        img: "",
        def: "MULTISERVICES PTFE LISSE 1 TRESSE INOX 304",
        tube: "Ptfe lisse",
        armature: "1 tresse inox AISI 304",
        revetement:
          "Vapeur, air, gaz produits chimiques, fluides et pâtes à haute température - excellente",
        utilisation: "Résistance chimique - bonne résistance aux flexions",
        cds: "4:1",
        temperature: "-70°c / +260°c (-94°F / +500°F)",
        norme: "FDA",
        IdTableau: 38,
      },
      {
        id: 2,
        name: "TÉFLON - PTFE",
        img: "",
        def: "MULTISERVICES PTFE LISSE 2 TRESSE INOX 304",
        tube: "Ptfe lisse",
        armature: "2 tresse inox AISI 304",
        revetement:
          "Vapeur, air, gaz produits chimiques, fluides et pâtes à haute température - excellente",
        utilisation: "Résistance chimique",
        cds: "4:1",
        temperature: "-70°c / +260°c (-94°F / +500°F)",
        norme: "FDA",
        IdTableau: 39,
      },
      {
        id: 3,
        name: "TÉFLON - PTFE",
        img: "",
        def: "MULTISERVICES PTFE CONVOLUTE 1 TRESSE INOX 304",
        tube: "Ptfe convolute",
        armature: "1 tresse inox AISI 304",
        revetement:
          "Vapeur, air, gaz produits chimiques, fluides et pâtes à haute température - excellente",
        utilisation: "Résistance chimique",
        cds: "4:1",
        temperature: "-70°c / +260°c (-94°F / +500°F)",
        norme: "FDA",
        IdTableau: 40,
      },
    ],
  },
  {
    id: 10,
    type: "TUYAUX SILICONE TRESSE INOX",
    data: [
      {
        id: 1,
        name: "TUYAUX SILICONE TRESSE INOX",
        img: "",
        def: "TUYAUX SILICONE INDUSTRIEL BLEU TRESSÉ INOX",
        tube: "Silicone industriel bleu",
        armature: "1 tresse inox AISI 304",
        revetement: "",
        utilisation:
          "Transfert de liquides agressifs, acide citrique, acide tartique, vapeur, sorties de compresseurs - non toxique",
        temperatureContinu: "",
        temperatureMaxi: "-80°c / +240°c",
        option: "",
        IdTableau: 41,
      },
      {
        id: 2,
        name: "TUYAUX SILICONE TRESSE INOX",
        img: "",
        def: "TUYAUX SILICONE ALIMENTAIRE BLANC TRESSÉ INOX",
        tube: "Silicone alimentaire blanc",
        armature: "1 tresse inox AISI 304",
        revetement: "",
        utilisation:
          "Transfert de produits alimentaires, pharmaceutiques, vapeur, liquides agressifs, acide citrique, acide tartrique - non toxique",
        temperatureContinu: "",
        temperatureMaxi: "-80°c / +240°c",
        option: "",
        IdTableau: 42,
      },
    ],
  },
  {
    id: 11,
    type: "ONDULEUX MÉTALLIQUE INOX",
    data: [
      {
        id: 1,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES NORMALES INOX AISI 316 RENFORCÉES PAR 1 TRESS INOX AISI 304",
        tube: "Onduleux inox AISI 316 ou 321 - ondes parallèles normales",
        armature: "1 tresse inox AISI 304",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 43,
      },
      {
        id: 2,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES NORMALES INOX AISI 316 RENFORCÉES PAR 2 TRESSES INOX AISI 304",
        tube: "Onduleux inox AISI 316 - ondes parallèles normales",
        armature: "2 tresses inox AISI 304",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 44,
      },
      {
        id: 3,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES NORMALES INOX AISI 316 RENFORCÉES PAR 1 TRESSES INOX AISI 316",
        tube: "Onduleux inox AISI 316 - ondes parallèles normales",
        armature: "1 tresses inox AISI 316",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 45,
      },
      {
        id: 4,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES RAPPROCHÉES INOX AISI 316 RENFORCÉES PAR 1 TRESSES INOX AISI 304",
        tube: "Onduleux inox AISI 316 - ondes parallèles rapprochées",
        armature: "1 tresses inox AISI 304",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 46,
      },
    ],
  },
];

export const flexiblesTableData = [
  {
    id: 1,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IEA31006010001", "10", "3,5", "17", "6", "18", "100", "0.20", "50"],
        ["IEA31306012501", "13", "3,5", "20", "6", "18", "120", "0.24", "50"],
        ["IEA31606016001", "16", "3,5", "23", "6", "18", "160", "0.30", "50"],
      ],
    },
  },
  {
    id: 2,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IEA42410010001", "10", "3,5", "17", "10", "30", "100", "0.20", "50"],
        ["IEA42710012501", "13", "3,5", "20", "10", "30", "120", "0.25", "50"],
        ["IEA43010016001", "16", "3,5", "23", "10", "30", "160", "0.27", "50"],
      ],
    },
  },
  {
    id: 3,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        [
          "IEA53625010001",
          "10",
          "5,2",
          "20,4",
          "25",
          "100",
          "100",
          "0.35",
          "20",
        ],
        [
          "IEA53925012501",
          "13",
          "5,2",
          "23,4",
          "25",
          "100",
          "100",
          "0.41",
          "20",
        ],
        [
          "IEA54225016001",
          "16",
          "5,2",
          "26,4",
          "25",
          "100",
          "160",
          "0.49",
          "40",
        ],
      ],
    },
  },
  {
    id: 4,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IEA82120020002", "19", "6", "31", "20", "64", "75", "0.76", "20"],
        ["IEA82720025002", "25", "6", "37", "20", "64", "100", "0.90", "20"],
        ["IEA83315031502", "32", "6.5", "45", "15", "48", "130", "1.26", "20"],
      ],
    },
  },
  {
    id: 5,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["ISI09920020001", "19", "7", "33", "20", "60", "152", "0.700", "40"],
        ["ISI10220025001", "25", "7", "39", "20", "60", "200", "0.900", "40"],
        ["ISI10515031501", "32", "7", "46", "15", "45", "256", "1.000", "40"],
      ],
    },
  },
  {
    id: 6,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IRA00106006301", "6.3", "3.5", "13.3", "6", "16", "63", "0.14", "50"],
        ["IRA00206007001", "7", "3.5", "14", "6", "16", "70", "0.15", "50"],
        ["IRA00406008001", "8", "3.5", "15", "6", "16", "80", "0.16", "50"],
      ],
    },
  },
  {
    id: 7,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IRA13106006301", "6.3", "3.5", "13.3", "6", "16", "63", "0.14", "50"],
        ["IRA13306007001", "7", "3.5", "14", "6", "16", "70", "0.15", "50"],
        ["IRA13406008001", "8", "3.5", "15", "6", "16", "80", "0.16", "50"],
      ],
    },
  },
  {
    id: 8,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        [
          "IAI17710006301",
          "6.3",
          "3.5",
          "13.3",
          "10",
          "40",
          "63",
          "0.15",
          "50",
        ],
        ["IAI18010008001", "8", "3.5", "15", "10", "40", "80", "0.17", "50"],
        ["IAI18310010001", "10", "3.5", "17", "10", "40", "100", "0.20", "50"],
      ],
    },
  },
  {
    id: 9,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAI34716008001", "8", "5.7", "19.4", "16", "64", "80", "0.33", "20"],
        [
          "IAI35016010001",
          "10",
          "5.7",
          "21.4",
          "16",
          "64",
          "100",
          "0.38",
          "20",
        ],
        [
          "IAI35316012501",
          "12.5",
          "5.7",
          "23.9",
          "16",
          "64",
          "125",
          "0.45",
          "20",
        ],
      ],
    },
  },
  {
    id: 10,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAI34716008001", "8", "5.7", "19.4", "16", "64", "80", "0.33", "20"],
        [
          "IAI35016010001",
          "10",
          "5.7",
          "21.4",
          "16",
          "64",
          "100",
          "0.38",
          "20",
        ],
        [
          "IAI35316012501",
          "12.5",
          "5.7",
          "23.9",
          "16",
          "64",
          "125",
          "0.45",
          "20",
        ],
      ],
    },
  },
  {
    id: 11,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAI43225008001", "8", "5", "20.4", "25", "100", "80", "0.37", "20"],
        [
          "IAI43525010001",
          "10",
          "6.2",
          "22.4",
          "25",
          "100",
          "100",
          "0.42",
          "20",
        ],
        [
          "IAI438250112501",
          "12.5",
          "6.2",
          "24.9",
          "25",
          "100",
          "125",
          "0.49",
          "20",
        ],
      ],
    },
  },
  {
    id: 12,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IOX00420005001", "5", "3.5", "12", "20", "60", "45", "0.14", "50"],
        [
          "IOX00720006301",
          "6.3",
          "3.5",
          "13.3",
          "20",
          "60",
          "60",
          "0.16",
          "50",
        ],
        ["IOX010200080001", "8", "3.5", "15", "20", "60", "75", "0.19", "50"],
      ],
    },
  },
  {
    id: 13,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAC00420005001", "5", "3.5", "12", "20", "60", "45", "0.14", "50"],
        [
          "IAC00720006301",
          "6.3",
          "3.5",
          "13.3",
          "20",
          "60",
          "60",
          "0.16",
          "50",
        ],
        ["IAC01020008001", "8", "3.5", "15", "20", "60", "75", "0.19", "50"],
      ],
    },
  },
  {
    id: 14,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IOA00420005001", "5", "3.5", "12", "20", "60", "45", "0.28", "50"],
        [
          "IOA01020006301",
          "6.3",
          "3.5",
          "13.3",
          "20",
          "60",
          "60",
          "0.32",
          "50",
        ],
        ["IOA02220010001", "8", "3.5", "15", "20", "60", "75", "0.38", "50"],
      ],
    },
  },
  {
    id: 15,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAI56910010001", "10", "5", "20", "10/16", "40", "90", "0.34", "20"],
        ["IAI57210012501", "13", "5", "23", "10/16", "40", "117", "0.39", "20"],
        ["IAI57510016001", "16", "6", "28", "10/16", "40", "144", "0.59", "40"],
      ],
    },
  },
  {
    id: 16,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        [
          "IHY05510019001",
          "19",
          "3.9",
          "26.8",
          "10",
          "30",
          "190",
          "0.40",
          "40",
        ],
        ["IHY06110025001", "25", "4", "33", "10", "30", "250", "0.51", "40"],
        ["IHY06410031501", "32", "4", "40", "10", "30", "320", "0.68", "40"],
      ],
    },
  },
  {
    id: 17,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        [
          "IHY22720019001",
          "19",
          "3.9",
          "26.8",
          "20",
          "50",
          "190",
          "0.37",
          "40",
        ],
        ["IHY23620025001", "25", "5", "35", "20", "50", "250", "0.51", "40"],
        [
          "IHY24220031501",
          "32",
          "5.2",
          "42.4",
          "20",
          "50",
          "320",
          "0.84",
          "40",
        ],
      ],
    },
  },
  {
    id: 18,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IHY40016020002", "19", "6", "31", "16", "48", "100", "1.76", "20"],
        ["IHY40616025002", "25", "6", "37", "16", "48", "110", "1.91", "20"],
        ["IHY41212031502", "32", "6.5", "45", "12", "36", "145", "2.27", "20"],
      ],
    },
  },
  {
    id: 19,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IHY58810020002", "19", "6", "31", "10", "40", "125", "1.66", "40"],
        ["IHY59110025002", "25", "6", "37", "10", "40", "150", "1.79", "40"],
        ["IHY59410032002", "32", "6", "44", "10", "40", "175", "1.97", "40"],
      ],
    },
  },
  {
    id: 20,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IHY66110020002", "19", "6", "31", "10", "40", "125", "1.71", "10"],
        ["IHY66410025002", "25", "6", "37", "10", "40", "150", "1.89", "10"],
        ["IHY66710032002", "32", "6", "44", "10", "40", "175", "2.12", "10"],
      ],
    },
  },
  {
    id: 21,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
        ["IVA18006016001", "16", "5.2", "26.4", "6", "60", "144", "0.44", "40"],
        ["IVA18306019001", "19", "5.3", "29.6", "6", "60", "171", "0.51", "40"],
      ],
    },
  },
  {
    id: 22,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IGP00125016001", "16", "5", "26", "25", "100", "125", "1.47", "40"],
        ["IGP00425019001", "19", "6", "31", "25", "100", "160", "1.70", "40"],
        ["IGP01025025001", "25", "6.5", "38", "25", "100", "200", "1.87", "40"],
      ],
    },
  },
  {
    id: 23,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IHY00110003201", "3.2", "3.3", "9.8", "10", "30", "40", "0.09", "50"],
        ["IHY00410004001", "4", "3.3", "10.6", "10", "30", "45", "0.10", "50"],
        ["IHI00710005001", "5", "3.3", "11.6", "10", "30", "55", "0.12", "50"],
      ],
    },
  },
  {
    id: 24,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IHY80110003001", "3.2", "1.9", "7", "10", "30", "40", "0.038", "50"],
        ["IHY80410003501", "3.5", "2", "7.5", "10", "30", "45", "0.043", "50"],
        ["IHI80710004001", "4", "2", "8", "10", "30", "45", "0.046", "50"],
      ],
    },
  },
  {
    id: 25,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["ICH63115020001", "19", "6", "31", "15", "60", "125", "1.64", "40"],
        ["ICH63415025001", "25", "6", "37", "15", "60", "150", "1.76", "40"],
        ["ICH63712032001", "32", "6", "44", "12", "48", "175", "1.94", "40"],
      ],
    },
  },
  {
    id: 26,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["ICH69215020002", "19", "6", "31", "15", "60", "125", "1.71", "20"],
        ["ICH69515025002", "25", "6", "37", "15", "60", "150", "1.89", "20"],
        ["ICH69812032002", "32", "6", "44", "12", "48", "175", "2.12", "20"],
      ],
    },
  },
  {
    id: 27,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["ICH49520020002", "19", "6", "31", "20", "60", "114", "1.71", "20"],
        ["ICH50120025002", "25", "6", "37", "20", "60", "150", "1.84", "20"],
        ["ICH50715031502", "32", "6.5", "45", "15", "45", "192", "2.18", "20"],
      ],
    },
  },
  {
    id: 28,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAL00125008001", "8", "5.3", "18.6", "25", "75", "64", "0.30", "20"],
        ["IAL00425010001", "10", "5.3", "20.6", "25", "75", "80", "0.35", "20"],
        [
          "IAL00725012501",
          "13",
          "5.3",
          "23.6",
          "25",
          "75",
          "104",
          "0.41",
          "20",
        ],
      ],
    },
  },
  {
    id: 29,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAL16220020002", "19", "6", "31", "20", "60", "75", "0.75", "20"],
        ["IAL16520025002", "25", "6", "37", "20", "60", "100", "0.90", "20"],
        ["IAL16815031502", "32", "6.5", "45", "15", "45", "130", "1.35", "20"],
      ],
    },
  },
  {
    id: 30,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: [
          "GYPSO 40 - 40 BAR",
          "mm",
          "mm",
          "mm",
          "bar",
          "bar",
          "mm",
          "Kg/ml",
          "m",
        ],
      },
      value: [
        ["IPR12940025001", "25", "7", "39", "40", "120", "100", "0.900", "40"],
        ["IPR13240035001", "35", "7", "49", "40", "120", "180", "1.100", "20"],
        ["IPR13540050001", "50", "9", "68", "40", "120", "370", "1.700", "20"],
      ],
    },
  },
  {
    id: 31,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: [
          "SAND 70 - 70 MM3",
          "mm",
          "mm",
          "mm",
          "bar",
          "bar",
          "mm",
          "Kg/ml",
          "m",
        ],
      },
      value: [
        ["ISA26612013001", "13", "7", "27", "12", "48", "125", "0.495", "20"],
        ["ISA26912016001", "16", "5.5", "27", "12", "48", "150", "0.470", "40"],
        ["ISA27212019001", "19", "7", "33", "12", "48", "190", "0.650", "40"],
      ],
    },
  },
  {
    id: 32,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAB11015020002", "19", "9.5", "38", "15", "60", "105", "1.27", "10"],
        ["IAB11315025002", "25", "9.5", "44", "15", "60", "138", "1.48", "10"],
        ["IAB00715031502", "32", "9.5", "51", "15", "60", "176", "1.76", "10"],
      ],
    },
  },
  {
    id: 33,
    type: "table-1",
    table: {
      head: {
        title: [
          "Reference",
          "Diamètre interieur",
          "Epaisseur parois",
          "Diamètre exterieur",
          "Pression de service",
          "PLNE",
          "Rayon de courbure",
          "Poids",
          "Longueur",
        ],
        measure: ["empty", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
      },
      value: [
        ["IAB00115020002", "19", "9.5", "38", "15", "60", "105", "1.27", "10"],
        ["IAB00415025002", "25", "9.5", "44", "15", "60", "138", "1.48", "10"],
        ["IAB11615031502", "32", "9.5", "51", "15", "60", "176", "1.76", "10"],
      ],
    },
  },
  {
    id: 34,
    type: "table-2",
    table: [
      [
        "TICOM14010050",
        "50",
        '2"',
        "61",
        "2.4",
        "10",
        "150",
        "90",
        "150",
        "1.680",
      ],
      [
        "TICOM14010065",
        "65",
        '2"5/8',
        "77",
        "3.46",
        "10",
        "150",
        "90",
        "175",
        "2.450",
      ],
      [
        "TICOM14010080",
        "80",
        '3"1/8',
        "93",
        "3.66",
        "10",
        "150",
        "90",
        "250",
        "2.600",
      ],
    ],
  },
  {
    id: 35,
    type: "table-2",
    table: [
      [
        "TICOM14012025",
        "25",
        '1"',
        "37",
        "1.46",
        "14",
        "200",
        "90",
        "100",
        "0.900",
      ],
      [
        "TICOM14012040",
        "40",
        '1"1/2',
        "53",
        "2.09",
        "14",
        "200",
        "90",
        "140",
        "1.250",
      ],
      [
        "TICOM14012050",
        "50",
        '2"',
        "63",
        "2.48",
        "14",
        "200",
        "90",
        "150",
        "1.700",
      ],
    ],
  },
  {
    id: 36,
    type: "table-2",
    table: [
      [
        "TICOM14050025",
        "25",
        '1"',
        "37",
        "1.46",
        "10",
        "150",
        "90",
        "100",
        "0.900",
      ],
      [
        "TICOM14050040",
        "40",
        '1"1/2',
        "52",
        "2.05",
        "10",
        "150",
        "90",
        "140",
        "1.100",
      ],
      [
        "TICOM14050050",
        "50",
        '2"',
        "62",
        "2.44",
        "10",
        "150",
        "90",
        "150",
        "1.450",
      ],
    ],
  },
  {
    id: 37,
    type: "table-2",
    table: [
      [
        "TICOM14052025",
        "25",
        '1"',
        "37",
        "1.46",
        "14",
        "200",
        "90",
        "100",
        "1.000",
      ],
      [
        "TICOM14052040",
        "40",
        '1"1/2',
        "53",
        "2.09",
        "14",
        "200",
        "90",
        "140",
        "1.300",
      ],
      [
        "TICOM14052050",
        "50",
        '2"',
        "63",
        "2.48",
        "14",
        "200",
        "90",
        "150",
        "1.700",
      ],
    ],
  },
  {
    id: 38,
    type: "table-2",
    table: [
      [
        "TITEF12010005",
        "4.80",
        '3/16"',
        "7.80",
        " ",
        "200",
        "2900",
        " ",
        "35",
        "0.105",
      ],
      [
        "TITEF12010006",
        "6.40",
        '1/4"',
        "9.40",
        " ",
        "175",
        "2537",
        " ",
        "45",
        "0.126",
      ],
      [
        "TITEF12010008",
        "8.00",
        '5/16"',
        "11.20",
        " ",
        "150",
        "2175",
        " ",
        "50",
        "0.172",
      ],
    ],
  },
  {
    id: 39,
    type: "table-2",
    table: [
      [
        "TITEF12012005",
        "4.80",
        '3/16"',
        "7.80",
        " ",
        "365",
        "5292",
        " ",
        "35",
        "0.126",
      ],
      [
        "TITEF12012006",
        "6.40",
        '1/4"',
        "9.40",
        " ",
        "330",
        "4785",
        " ",
        "45",
        "0.154",
      ],
      [
        "TITEF12012008",
        "8.00",
        '5/16"',
        "11.20",
        " ",
        "300",
        "4350",
        " ",
        "50",
        "0.210",
      ],
    ],
  },
  {
    id: 40,
    type: "table-2",
    table: [
      [
        "TITEF12050006",
        "6.40",
        '1/4"',
        "12.70",
        " ",
        "172",
        " ",
        " ",
        "20",
        "0.150",
      ],
      [
        "TITEF12050008",
        "8.00",
        '5/16"',
        "14.70",
        " ",
        "120",
        " ",
        " ",
        "25",
        "0.190",
      ],
      [
        "TITEF12050005",
        "9.50",
        '3/8"',
        "16.20",
        " ",
        "120",
        " ",
        " ",
        "30",
        "0.220",
      ],
    ],
  },

  {
    id: 41,
    type: "table-3",
    table: [
      [
        "TISILIND04",
        "TI/INOX 1 TI304 SILICONE INDUSTRIEL BLEU DN04",
        "",
        "",
        "4.00",
        "8.00",
        "42",
        "609",
        "120",
        "1740",
        " ",
        "55",
        "0,12",
      ],
      [
        "TISILIND06",
        "TI/INOX 1 TI304 SILICONE INDUSTRIEL BLEU DN06",
        "",
        "",
        "6.00",
        "10.50",
        "37",
        "536.5",
        "110",
        "1595",
        " ",
        "80",
        "0,14",
      ],
      [
        "TISILIND08",
        "TI/INOX 1 TI304 SILICONE INDUSTRIEL BLEU DN08",
        "",
        "",
        "8.00",
        "13.00",
        "37",
        "536.5",
        "110",
        "1595",
        " ",
        "110",
        "0,20",
      ],
    ],
  },
  {
    id: 42,
    type: "table-3",
    table: [
      [
        "TISILALD04",
        "TI/INOX 1 TI304 SILICONE ALIMENTAIRE BLANC DN04",
        "",
        "",
        "4.00",
        "8.00",
        "42",
        "609",
        "120",
        "1740",
        " ",
        "55",
        "0,12",
      ],
      [
        "TISILALD06",
        "TI/INOX 1 TI304 SILICONE ALIMENTAIRE BLANC DN06",
        "",
        "",
        "6.00",
        "10.50",
        "37",
        "536.5",
        "110",
        "1595",
        " ",
        "80",
        "0,14",
      ],
      [
        "TISILALD08",
        "TI/INOX 1 TI304 SILICONE ALIMENTAIRE BLANC DN08",
        "",
        "",
        "8.00",
        "13.00",
        "37",
        "536.5",
        "110",
        "1595",
        " ",
        "110",
        "0,20",
      ],
    ],
  },

  {
    id: 43,
    type: "table-4",
    table: [
      [
        "DI-TIOND15010006",
        "6.40",
        '1/4"',
        "11.50",
        "",
        "150",
        "2175",
        "25",
        "100",
        "0,300",
      ],
      [
        "DI-TIOND15010008",
        "8.00",
        '5/16"',
        "13.10",
        "",
        "135",
        "1958",
        "40",
        "140",
        "0,400",
      ],
      [
        "DI-TIOND15010010",
        "9.50",
        '3/8"',
        "17.00",
        "",
        "90",
        "1305",
        "40",
        "200",
        "0,450",
      ],
    ],
  },
  {
    id: 44,
    type: "table-4",
    table: [
      [
        "DI-TIOND15012006",
        "6.40",
        '1/4"',
        "11.50",
        "",
        "150",
        "3190",
        "30",
        "100",
        "0,360",
      ],
      [
        "DI-TIOND15012008",
        "8.00",
        '5/16"',
        "13.10",
        "",
        "200",
        "2900",
        "35",
        "140",
        "0,400",
      ],
      [
        "DI-TIOND15012010",
        "9.50",
        '3/8"',
        "17.00",
        "",
        "144",
        "2088",
        "40",
        "150",
        "0,550",
      ],
    ],
  },
  {
    id: 45,
    type: "table-4",
    table: [
      [
        "DI-TIOND15014006",
        "6.40",
        '1/4"',
        "11.50",
        "",
        "150",
        "2175",
        "25",
        "100",
        "0,300",
      ],
      [
        "DI-TIOND15014008",
        "8.00",
        '5/16"',
        "13.10",
        "",
        "135",
        "1958",
        "40",
        "140",
        "0,400",
      ],
      [
        "DI-TIOND15014010",
        "9.50",
        '3/8"',
        "17.00",
        "",
        "90",
        "1305",
        "40",
        "200",
        "0,450",
      ],
    ],
  },
  {
    id: 46,
    type: "table-4",
    table: [
      [
        "DI-TIOND15050010",
        "9.50",
        '3/8"',
        "17.70",
        "",
        "75",
        "1070",
        "30",
        "150",
        "",
      ],
      [
        "DI-TIOND15050012",
        "12.70",
        '1/2"',
        "19.70",
        "",
        "70",
        "1000",
        "30",
        "198",
        "",
      ],
      [
        "DI-TIOND15050016",
        "15.90",
        '5/8"',
        "25.50",
        "",
        "65",
        "928",
        "35",
        "255",
        "",
      ],
    ],
  },
];
