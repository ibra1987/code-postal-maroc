import codes from "./codes";




export function getRegionMetadata(region:string) {
    const metadata = [
        {
          region:"Rabat",
          title: "Découvrez les Codes Postaux à Rabat - Annuaire Complet",
          description: "Trouvez tous les codes postaux de Rabat, Maroc. Accédez aux informations précises pour les quartiers, régions et villes de Rabat."
        },
        {
          region:"Settat",
          title: "Codes Postaux à Settat - Trouvez les Codes Précis pour Chaque Zone",
          description: "Explorez les codes postaux détaillés de Settat, Maroc. Des zones urbaines aux régions rurales, trouvez les codes précis pour chaque lieu à Settat."
        },
        {
            region:"Casablanca",
          title: "Tous les Codes Postaux de Casablanca, Maroc - Recherche Simplifiée",
          description: "Découvrez la liste complète des codes postaux de Casablanca. Simplifiez votre recherche avec des informations exactes pour toutes les localités de Casablanca."
        },
        {
            region:"Fes",
          title: "Codes Postaux de Fes, Maroc - Guide Pratique et Rapide",
          description: "Accédez rapidement aux codes postaux de Fes, Maroc. Explorez une base de données complète pour les zones résidentielles et commerciales de Fes."
        },
        {
            region:"Marrakech",
          title: "Trouvez les Codes Postaux à Marrakech - Toutes les Zones Couvertes",
          description: "Consultez les codes postaux de Marrakech, Maroc. Trouvez facilement les codes pour les quartiers, les zones administratives et plus encore."
        },
        {
            region:"Meknes",
          title: "Tous les Codes Postaux de Meknes - Outil Complet en Ligne",
          description: "Découvrez un outil complet pour consulter les codes postaux de Meknes, Maroc. Obtenez des informations précises et fiables pour chaque adresse."
        },
        {
            region:"Oujda",
          title: "Codes Postaux à Oujda, Maroc - Toutes les provinces et Quartiers",
          description: "Explorez les codes postaux de Oujda, Maroc. Trouvez les informations nécessaires pour toutes les régions, quartiers et zones spécifiques."
        },
        {
            region:"Laayoune",
          title: "Explorez les Codes Postaux de Laayoune - Maroc Simplifié",
          description: "Recherchez facilement les codes postaux de Laayoune. Obtenez des données exactes pour les adresses résidentielles, commerciales et administratives."
        },
      
        {
          region:"Agadir",
          title: "Tous les Codes Postaux à Agadir - Liste Complète et Précise",
          description: "Explorez la liste complète des codes postaux de Agadir, Maroc. Trouvez facilement les informations nécessaires pour toutes les localités."
        },
        {
            region:"Tanger",
          title: "Guide des Codes Postaux à Tanger - Trouvez Rapidement",
          description: "Obtenez les codes postaux exacts de Tanger, Maroc. Découvrez une base de données fiable et complète pour chaque région et quartier."
        }
      ];
      return metadata.find((item) => item.region === region);
}


export function getProvinceMetadata(province:string) {  
    const metadata = [
        {
          province: "Rabat",
          title: "Codes Postaux à Rabat - Guide Complet",
          description: "Découvrez tous les codes postaux de Rabat, Maroc. Trouvez facilement les informations nécessaires pour chaque quartier et région."
        },
        {
          province: "Sale",
          title: "Codes Postaux à Salé - Annuaire Pratique",
          description: "Accédez à la liste complète des codes postaux de Salé, Maroc. Informations précises et mises à jour pour chaque zone."
        },
        {
          province: "Skhirate-temara",
          title: "Codes Postaux à Skhirate-Témara - Trouvez Facilement",
          description: "Consultez les codes postaux détaillés pour Skhirate-Témara, Maroc. Guide rapide pour chaque localité."
        },
        {
          province: "Benslimane",
          title: "Annuaire des Codes Postaux à Benslimane",
          description: "Recherchez les codes postaux de Benslimane, Maroc. Informations fiables pour toutes les zones."
        },
        {
          province: "Kenitra",
          title: "Trouvez les Codes Postaux de Kénitra - Maroc",
          description: "Explorez les codes postaux pour Kénitra. Informations complètes et précises pour chaque adresse."
        },
        {
          province: "Khemisset",
          title: "Codes Postaux à Khémisset - Recherche Simplifiée",
          description: "Découvrez les codes postaux de Khémisset, Maroc. Trouvez les informations exactes pour toutes les zones."
        },
        {
          province: "Sidi kacem",
          title: "Guide des Codes Postaux à Sidi Kacem",
          description: "Accédez à la liste des codes postaux pour Sidi Kacem, Maroc. Trouvez facilement le code dont vous avez besoin."
        },
        {
          province: "Casablanca",
          title: "Codes Postaux à Casablanca - Toutes les Zones",
          description: "Explorez les codes postaux détaillés pour Casablanca, Maroc. Informations précises pour chaque quartier."
        },
        {
          province: "Azilal",
          title: "Tous les Codes Postaux à Azilal - Maroc",
          description: "Trouvez les codes postaux d’Azilal, Maroc. Guide complet pour toutes les localités."
        },
        {
          province: "Beni mellal",
          title: "Codes Postaux à Béni Mellal - Annuaire",
          description: "Découvrez tous les codes postaux de Béni Mellal, Maroc. Informations à jour pour chaque zone."
        },
        {
          province: "El jadida",
          title: "Liste des Codes Postaux à El Jadida",
          description: "Consultez les codes postaux pour El Jadida, Maroc. Trouvez rapidement les informations nécessaires."
        },
        {
          province: "Khouribga",
          title: "Trouvez les Codes Postaux de Khouribga",
          description: "Explorez les codes postaux de Khouribga, Maroc. Informations fiables pour toutes les localités."
        },
        {
          province: "Nouaceur",
          title: "Codes Postaux à Nouaceur - Informations Complètes",
          description: "Découvrez les codes postaux de Nouaceur, Maroc. Guide pratique pour toutes les adresses."
        },
        {
          province: "Mohammedia",
          title: "Codes Postaux à Mohammédia - Trouvez Facilement",
          description: "Consultez la liste complète des codes postaux pour Mohammédia, Maroc. Informations utiles et mises à jour."
        },
        {
          province: "Mediouna",
          title: "Codes Postaux à Médiouna - Annuaire Pratique",
          description: "Recherchez les codes postaux de Médiouna, Maroc. Informations détaillées pour chaque zone."
        },
        {
          province: "Fes",
          title: "Codes Postaux à Fès - Découvrez Facilement",
          description: "Explorez les codes postaux détaillés pour Fès, Maroc. Informations précises et fiables."
        },
        {
          province: "Sefrou",
          title: "Annuaire des Codes Postaux à Sefrou",
          description: "Consultez les codes postaux de Sefrou, Maroc. Trouvez rapidement les informations nécessaires."
        },
        {
          province: "Al hoceima",
          title: "Codes Postaux à Al Hoceïma - Guide Complet",
          description: "Découvrez les codes postaux d’Al Hoceïma, Maroc. Informations fiables pour toutes les localités."
        },
        {
          province: "Boulemane",
          title: "Codes Postaux à Boulemane - Recherche Simplifiée",
          description: "Trouvez les codes postaux de Boulemane, Maroc. Guide pratique et rapide."
        },
        {
          province: "Taounate",
          title: "Liste des Codes Postaux à Taounate",
          description: "Explorez les codes postaux pour Taounate, Maroc. Informations détaillées pour chaque zone."
        },
        {
          province: "Taza",
          title: "Codes Postaux à Taza - Trouvez Facilement",
          description: "Découvrez les codes postaux de Taza, Maroc. Guide complet et à jour."
        },
        {
          province: "Moulay yacoub",
          title: "Codes Postaux à Moulay Yacoub - Annuaire",
          description: "Consultez les codes postaux de Moulay Yacoub, Maroc. Informations précises pour toutes les zones."
        },
        {
          province: "Marrakech",
          title: "Codes Postaux à Marrakech - Guide Pratique",
          description: "Découvrez les codes postaux de Marrakech, Maroc. Trouvez facilement les informations nécessaires."
        },
        {
          province: "Al haouz",
          title: "Liste des Codes Postaux à Al Haouz",
          description: "Explorez les codes postaux pour Al Haouz, Maroc. Informations fiables et détaillées."
        },
        {
          province: "El kelaa des sraghna",
          title: "Codes Postaux à El Kelaâ des Sraghna",
          description: "Consultez les codes postaux de El Kelaâ des Sraghna, Maroc. Guide pratique pour toutes les zones."
        },
        {
          province: "Essaouira",
          title: "Annuaire des Codes Postaux à Essaouira",
          description: "Recherchez les codes postaux d’Essaouira, Maroc. Informations mises à jour et précises."
        },
        {
          province: "Ouarzazate",
          title: "Codes Postaux à Ouarzazate - Guide Complet",
          description: "Découvrez les codes postaux de Ouarzazate, Maroc. Trouvez rapidement les informations nécessaires."
        },
        {
          province: "Safi",
          title: "Trouvez les Codes Postaux de Safi",
          description: "Explorez les codes postaux pour Safi, Maroc. Informations fiables pour toutes les localités."
        },
        {
          province: "Zagora",
          title: "Codes Postaux à Zagora - Informations Complètes",
          description: "Recherchez les codes postaux de Zagora, Maroc. Guide pratique et facile."
        },
        {
          province: "Meknes",
          title: "Annuaire des Codes Postaux à Meknès",
          description: "Consultez les codes postaux de Meknès, Maroc. Informations à jour pour toutes les zones."
        },
        {
          province: "El hajeb",
          title: "Codes Postaux à El Hajeb - Trouvez Facilement",
          description: "Découvrez les codes postaux de El Hajeb, Maroc. Informations fiables et précises."
        },
        {
          province: "Errachidia",
          title: "Codes Postaux à Errachidia - Guide Complet",
          description: "Explorez les codes postaux d’Errachidia, Maroc. Informations exactes pour toutes les zones."
        },
        {
          province: "Ifrane",
          title: "Trouvez les Codes Postaux d’Ifrane",
          description: "Consultez les codes postaux pour Ifrane, Maroc. Informations pratiques et mises à jour."
        },
        { 
            province: "Khenifra", 
            title: "Codes postaux de la province de Khénifra", 
            description: "Trouvez rapidement les codes postaux des localités de la province de Khénifra, Maroc." 
          },
          { 
            province: "Oujda Angad", 
            title: "Codes postaux pour Oujda-Angad", 
            description: "Recherchez les codes postaux pour les quartiers et villages de la région d'Oujda-Angad."
          },
          { 
            province: "Figuig", 
            title: "Liste des codes postaux à Figuig", 
            description: "Découvrez les codes postaux de la province de Figuig et ses environs."
          },
          { 
            province: "Berkane", 
            title: "Codes postaux de Berkane et ses localités", 
            description: "Accédez facilement aux codes postaux des localités dans la province de Berkane."
          },
          { 
            province: "Jerada", 
            title: "Tous les codes postaux de Jerada", 
            description: "Obtenez une liste complète des codes postaux pour Jerada, Maroc."
          },
          { 
            province: "Taourirt", 
            title: "Codes postaux des localités de Taourirt", 
            description: "Recherchez et trouvez les codes postaux pour Taourirt et ses environs."
          },
          { 
            province: "Laayoune", 
            title: "Codes postaux pour la province de Laâyoune", 
            description: "Trouvez les codes postaux de Laâyoune et des zones avoisinantes."
          },
          { 
            province: "Boujdour", 
            title: "Codes postaux des localités de Boujdour", 
            description: "Découvrez les codes postaux des localités de la province de Boujdour."
          },
          { 
            province: "Es Semara", 
            title: "Liste des codes postaux à Es-Semara", 
            description: "Trouvez rapidement les codes postaux d'Es-Semara, Maroc."
          },
          { 
            province: "Oued Ed-Dahab", 
            title: "Codes postaux pour Oued Ed-Dahab", 
            description: "Recherchez les codes postaux des différentes zones de Oued Ed-Dahab."
          },
          { 
            province: "Aousserd", 
            title: "Codes postaux de la province d'Aousserd", 
            description: "Accédez à une liste détaillée des codes postaux pour Aousserd."
          },
          { 
            province: "Agadir Ida Ou Tanane", 
            title: "Codes postaux d'Agadir Ida Ou Tanane", 
            description: "Trouvez les codes postaux des localités d'Agadir Ida Ou Tanane."
          },
          { 
            province: "Guelmim", 
            title: "Liste des codes postaux pour Guelmim", 
            description: "Découvrez les codes postaux des zones de la province de Guelmim."
          },
          { 
            province: "Assa Zag", 
            title: "Codes postaux de la province d'Assa-Zag", 
            description: "Recherchez les codes postaux pour Assa-Zag et ses localités."
          },
          { 
            province: "Tan Tan", 
            title: "Codes postaux des zones de Tan-Tan", 
            description: "Accédez aux codes postaux pour les quartiers de la province de Tan-Tan."
          },
          { 
            province: "Tata", 
            title: "Codes postaux pour la province de Tata", 
            description: "Trouvez les codes postaux pour les localités de Tata et ses alentours."
          },
          { 
            province: "Tiznit", 
            title: "Liste des codes postaux pour Tiznit", 
            description: "Recherchez les codes postaux des zones et quartiers de Tiznit."
          },
          { 
            province: "Inezgane Ait Melloul", 
            title: "Codes postaux d'Inezgane Aït Melloul", 
            description: "Découvrez les codes postaux des quartiers d'Inezgane Aït Melloul."
          },
          { 
            province: "Chtouka Ait Baha", 
            title: "Codes postaux pour Chtouka Aït Baha", 
            description: "Obtenez facilement les codes postaux des localités de Chtouka Aït Baha."
          },
          { 
            province: "Tanger Assilah", 
            title: "Codes postaux de Tanger-Assilah", 
            description: "Recherchez les codes postaux des quartiers et zones de Tanger-Assilah."
          },
          { 
            province: "Tetouan", 
            title: "Tous les codes postaux de Tétouan", 
            description: "Accédez à une liste détaillée des codes postaux pour Tétouan et ses environs."
          },
          { 
            province: "Chefchaouen", 
            title: "Codes postaux des localités de Chefchaouen", 
            description: "Découvrez les codes postaux pour Chefchaouen et ses alentours."
          },
          { 
            province: "Larache", 
            title: "Liste des codes postaux pour Larache", 
            description: "Recherchez les codes postaux pour les zones et quartiers de Larache."
          },
          { 
            province: "Fahs Anjra", 
            title: "Codes postaux de la province de Fahs Anjra", 
            description: "Trouvez les codes postaux des localités de Fahs Anjra, Maroc."
          }
        ]
        return metadata.find(metadata => metadata.province === province)
      
}

export function getCodeMetaData(code:string) {
     const localCode = codes.find(codePostal => codePostal.NOUVEAU_CODE_POSTAL.toString() === code)?.NOUVEAU_CODE_POSTAL

      return {
        title: `Code postal ${localCode} | Code Postal Maroc`,
        description:"Recherchez facilement le code postal correspondant à votre adresse." 
        
      }
    }


export function getAgenceMetaData(agence:string){
const  regionPostal = codes.find((reg)=> reg.AGENCE === agence.toUpperCase())
  return {
    title: `${agence} | Code Postal Maroc`,
    description:`Le code postal de ${agence}. ${agence} 
            se trouve dans la province postale de ${regionPostal?.PROVINCE.toLowerCase()}, située  dans la région postale de ${regionPostal?.REGION_POSTALE.toLowerCase()}` 
  }

}