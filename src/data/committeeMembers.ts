export interface CommitteeMember {
  firstName: string
  lastName: string
  organization: string
  country: string
  imageUrl: string
  cvLink: string
}

export const committeeMembers: { [key: string]: CommitteeMember[] } = {
  'General Chairs': [
    {
      firstName: 'Djamila',
      lastName: 'Aouada',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/DjamilaAouada.jpg', // Replace with actual image path
      cvLink: 'https://www.linkedin.com/in/djamilaaouada/',
    },
    {
      firstName: 'Azeddine',
      lastName: 'Beghdadi',
      organization: 'Universite Sorbonne Paris Nord',
      country: 'France',
      imageUrl: '/committee/AzeddineBeghdadi.jpg', // Replace with actual image path
      cvLink: 'https://www.linkedin.com/in/azeddine-beghdadi-8616ba20/',
    },
  ],
  'Technical Program Chairs': [
    {
      firstName: 'Enjie',
      lastName: 'Ghorbel',
      organization: 'CRISTAL, ENSI, University of Manouba',
      country: 'Tunisia',
      imageUrl: '/committee/EnjieGhorbel.jpeg',
      cvLink: 'https://lu.linkedin.com/in/enjie-ghorbel-0282919a',
    },
    {
      firstName: 'Mihai',
      lastName: 'Mitrea',
      organization: 'Telecom Paris Sud',
      country: 'France',
      imageUrl: '/committee/MihaiMitrea.jpg',
      cvLink: 'https://www.linkedin.com/in/mihai-mitrea-663a6247/',
    },
    {
      firstName: 'Anis',
      lastName: 'Kacem',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/AnisKacem.png',
      cvLink: 'https://lu.linkedin.com/in/aniskacem',
    },
  ],
  'Plenary Chairs': [
    {
      firstName: 'Samia',
      lastName: 'Ainouz',
      organization: 'INSA Rouen',
      country: 'France',
      imageUrl: '/committee/SamiaAinouz.jpg',
      cvLink: 'https://fr.linkedin.com/in/samia-ainouz-65636978',
    },
    {
      firstName: 'Raphaël',
      lastName: 'Frank',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/RaphaelFrank.jpg',
      cvLink: 'https://lu.linkedin.com/in/raphaël-frank-66925132',
    },
  ],
  'Tutorials Chairs': [
    {
      firstName: 'Stefania',
      lastName: 'Colonnese',
      organization: 'Sapienza University of Rome',
      country: 'Italy',
      imageUrl: '/committee/StefaniaColonnese.jpg',
      cvLink: 'https://orcid.org/0000-0002-1807-2155',
    },
    {
      firstName: 'Rachid',
      lastName: 'Jennane',
      organization: "Université d'Orléans",
      country: 'France',
      imageUrl: '/committee/RachidJennane.jpg',
      cvLink: 'https://fr.linkedin.com/in/rachid-jennane-5051539b',
    },
    {
      firstName: 'Habib',
      lastName: 'Zaidi',
      organization: 'University of Geneva',
      country: 'Switzerland',
      imageUrl: '/committee/HabibZaidi.jpg',
      cvLink: 'https://www.linkedin.com/in/habib-zaidi-fieee-faimbe-faapm-fiomp-faaia-fbir-4264684/',
    },
  ],
  'Student Session Chairs': [
    {
      firstName: 'Shekoufeh Gorgi',
      lastName: 'Zadeh',
      organization: 'LCSB, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/ShekoufehGorgiZadeh.jpg',
      cvLink: 'https://orcid.org/0000-0002-3314-2262',
    },
    {
      firstName: 'Marouane',
      lastName: 'Tliba',
      organization: 'Université de Sorbonne Paris Nord',
      country: 'France',
      imageUrl: '/committee/MarouaneTliba.jpg',
      cvLink: 'https://fr.linkedin.com/in/mtliba',
    },
  ],
  'Awards Chairs': [
    {
      firstName: 'Nuno Miguel Morais',
      lastName: 'Rodrigues',
      organization: 'Politécnico de Leiria',
      country: 'Portugal',
      imageUrl: '/committee/NunoMiguelMoraisRodrigues.jpg',
      cvLink: 'https://www.linkedin.com/in/nunommrodrigues/',
    },
    {
      firstName: 'Vincent',
      lastName: 'Gaudilliere',
      organization: 'University of Lorraine',
      country: 'France',
      imageUrl: '/committee/VincentGaudilliere.png',
      cvLink: '',
    },
    // {
    //   firstName: 'Aladine',
    //   lastName: 'Chetouani',
    //   organization: 'Universite Sorbonne Paris Nord',
    //   country: 'France',
    //   imageUrl: '/committee/AladineChetouani.jpg',
    //   cvLink: 'https://www.linkedin.com/in/aladine-chetouani-2aa66038/',
    // },
    // {
    //   firstName: 'Francesco',
    //   lastName: 'Agustoni',
    //   organization: 'Università degli Studi di Pavia',
    //   country: 'Italy',
    //   imageUrl: '/committee/FrancescoAgustoni.jpg',
    //   cvLink: '',
    // },
  ],
  'Industry Liaison Chairs': [
    {
      firstName: 'Tedjani',
      lastName: 'Mesbahi',
      organization: 'INSA Strasbourg',
      country: 'France',
      imageUrl: '/committee/TedjaniMesbahi.jpg',
      cvLink: '',
    },
    // {
    //   firstName: 'Marcin',
    //   lastName: 'Seredynski',
    //   organization: 'SnT, University of Luxembourg',
    //   country: 'Luxembourg',
    //   imageUrl: '/committee/MarcinSeredynski.jpg',
    //   cvLink: '',
    // },
    {
      firstName: 'Faouzi Alaya',
      lastName: 'Cheikh',
      organization: 'NTNU, Gjovik',
      country: 'Norway',
      imageUrl: '/committee/FaouziAlayaCheikh.jpg',
      cvLink: 'https://www.linkedin.com/in/faouzi-alaya-cheikh-1559582/',
    },
  ],
  'Demos & Exhibition Session Chairs': [
    {
      firstName: 'Arunkumar',
      lastName: 'Rathinam',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/ArunkumarRathinam.png',
      cvLink: '',
    },
    // {
    //   firstName: 'Tiziana',
    //   lastName: 'Cattai',
    //   organization: 'Sapienza University of Rome',
    //   country: 'Italy',
    //   imageUrl: '/committee/TizianaCattai.jpg',
    //   cvLink: 'https://www.linkedin.com/in/tiziana-cattai-919902145/',
    // },
  ],
  'Panel Discussion Chair': [
    // {
    //   firstName: 'Jenny',
    //   lastName: 'Benois-Pineau',
    //   organization: 'Université de Bordeaux',
    //   country: 'France',
    //   imageUrl: '/committee/JennyBenoisPineau.jpg',
    //   cvLink: 'https://www.linkedin.com/in/jenny-benois-pineau-5726b94a/',
    // },
    {
      firstName: 'David',
      lastName: 'Fofi',
      organization: 'Université de Bourgogne',
      country: 'France',
      imageUrl: '/committee/DavidFofi.jpg',
      cvLink: '',
    },
  ],
  'Publications Chairs': [
    // {
    //   firstName: 'Meriem',
    //   lastName: 'Outtas',
    //   organization: 'INSA, Rennes',
    //   country: 'France',
    //   imageUrl: '/committee/MeriemOuttas.jpg',
    //   cvLink: 'https://www.linkedin.com/in/meriem-outtas-298baa34/',
    // },
    // {
    //   firstName: 'Mohamed Ali',
    //   lastName: 'Qureshi',
    //   organization: 'IUB, Bahawalpur',
    //   country: 'Pakistan',
    //   imageUrl: '/committee/MohamedAliQureshi.jpg',
    //   cvLink: '',
    // },
  ],
  'Publicity Chairs': [
    // {
    //   firstName: 'Estefania Talavera',
    //   lastName: 'Martinez',
    //   organization: 'UT-EEMCS',
    //   country: 'Netherlands',
    //   imageUrl: '/committee/EstefaniaTalaveraMartinez.jpg',
    //   cvLink: '',
    // },
    // {
    //   firstName: 'Hantao',
    //   lastName: 'Liu',
    //   organization: 'Cardiff University',
    //   country: 'UK',
    //   imageUrl: '/committee/HantaoLiu.jpg',
    //   cvLink: 'https://www.linkedin.com/in/hantaoliu/',
    // },
    // {
    //   firstName: 'Carl James',
    //   lastName: 'Debono',
    //   organization: 'University of Malta',
    //   country: 'Malta',
    //   imageUrl: '/committee/CarlJamesDebono.jpg',
    //   cvLink: '',
    // },
  ],
  'Web Chair': [
    // {
    //   firstName: 'Geetanjali',
    //   lastName: 'Rajaraman',
    //   organization: 'SnT, University of Luxembourg',
    //   country: 'Luxembourg',
    //   imageUrl: '/committee/GeetanjaliRajaraman.jpg',
    //   cvLink: '',
    // },
    {
      firstName: 'Eya',
      lastName: 'Khamassi',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/EyaKhamassi.jpeg',
      cvLink: 'https://tn.linkedin.com/in/eya-khamassi-920090212',
    },
    // {
    //   firstName: 'Zuheng',
    //   lastName: 'Ming',
    //   organization: 'Universite Sorbonne Paris Nord',
    //   country: 'France',
    //   imageUrl: '/committee/ZuhengMing.jpg',
    //   cvLink: 'https://www.linkedin.com/in/zuheng-ming-2b910853/',
    // },
  ],
}
