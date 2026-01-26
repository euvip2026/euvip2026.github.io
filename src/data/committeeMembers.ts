export interface CommitteeMember {
  firstName: string
  lastName: string
  organization: string
  country: string
  imageUrl: string
  cvLink: string
}

export const committeeMembers: { [key: string]: CommitteeMember[] } = {
  "General Chairs": [
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
    }
  ],
  "Technical Program Chairs": [
    {
      firstName: 'Enjie',
      lastName: 'Ghorbel',
      organization: 'CRISTAL, ENSI, University of Manouba',
      country: 'Tunisia',
      imageUrl: '/committee/EnjieGhorbel.jpg',
      cvLink: '',
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
      imageUrl: '/committee/AnisKacem.jpg',
      cvLink: '',
    },
  ],
  "Plenary Chairs": [
    {
      firstName: 'Samia',
      lastName: 'Ainouz',
      organization: 'INSA Rouen',
      country: 'France',
      imageUrl: '/committee/SamiaAinouz.jpg',
      cvLink: '',
    },
    {
      firstName: 'Raphaël',
      lastName: 'Frank',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/RaphaelFrank.jpg',
      cvLink: '',
    },
  ],
  "Tutorials Chairs": [
    {
      firstName: 'Stefania',
      lastName: 'Colonnese',
      organization: 'Sapienza University of Rome',
      country: 'Italy',
      imageUrl: '/committee/StefaniaColonnese.jpg',
      cvLink: '',
    },
    {
      firstName: 'Rachid',
      lastName: 'Jennane',
      organization: 'Université d\'Orléans',
      country: 'France',
      imageUrl: '/committee/RachidJennane.jpg',
      cvLink: '',
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
  "Student Session Chairs": [
    {
      firstName: 'Shekoufeh Gorgi',
      lastName: 'Zadeh',
      organization: 'LCSB, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/ShekoufehGorgiZadeh.jpg',
      cvLink: '',
    },
    {
      firstName: 'Marouane',
      lastName: 'Tliba',
      organization: 'Université de Sorbonne Paris Nord',
      country: 'France',
      imageUrl: '/committee/MarouaneTliba.jpg',
      cvLink: '',
    },
  ],
  "Awards Chairs": [
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
      imageUrl: '/committee/VincentGaudilliere.jpg',
      cvLink: '',
    },
    {
      firstName: 'Aladine',
      lastName: 'Chetouani',
      organization: 'Universite Sorbonne Paris Nord',
      country: 'France',
      imageUrl: '/committee/AladineChetouani.jpg',
      cvLink: 'https://www.linkedin.com/in/aladine-chetouani-2aa66038/',
    },
    {
      firstName: 'Francesco',
      lastName: 'Agustoni',
      organization: 'Università degli Studi di Pavia',
      country: 'Italy',
      imageUrl: '/committee/FrancescoAgustoni.jpg',
      cvLink: '',
    },
  ],
  "Industry Liaison Chairs": [
    {
      firstName: 'Tedjani',
      lastName: 'Mesbahi',
      organization: 'INSA Strasbourg',
      country: 'France',
      imageUrl: '/committee/TedjaniMesbahi.jpg',
      cvLink: '',
    },
    {
      firstName: 'Marcin',
      lastName: 'Seredynski',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/MarcinSeredynski.jpg',
      cvLink: '',
    },
    {
      firstName: 'Faouzi Alaya',
      lastName: 'Cheikh',
      organization: 'NTNU, Gjovik',
      country: 'Norway',
      imageUrl: '/committee/FaouziAlayaCheikh.jpg',
      cvLink: 'https://www.linkedin.com/in/faouzi-alaya-cheikh-1559582/',
    },
  ],
  "Demos & Exhibition Session Chairs": [
    {
      firstName: 'Arunkumar',
      lastName: 'Rathinam',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/ArunkumarRathinam.jpg',
      cvLink: '',
    },
    {
      firstName: 'Tiziana',
      lastName: 'Cattai',
      organization: 'Sapienza University of Rome',
      country: 'Italy',
      imageUrl: '/committee/TizianaCattai.jpg',
      cvLink: 'https://www.linkedin.com/in/tiziana-cattai-919902145/',
    },
  ],
  "Panel Discussion Chair": [
    {
      firstName: 'Jenny',
      lastName: 'Benois-Pineau',
      organization: 'Université de Bordeaux',
      country: 'France',
      imageUrl: '/committee/JennyBenoisPineau.jpg',
      cvLink: 'https://www.linkedin.com/in/jenny-benois-pineau-5726b94a/',
    },
    {
      firstName: 'David',
      lastName: 'Fofi',
      organization: 'Université de Bourgogne',
      country: 'France',
      imageUrl: '/committee/DavidFofi.jpg',
      cvLink: '',
    },
  ],
  "Publications Chairs": [
    {
      firstName: 'Meriem',
      lastName: 'Outtas',
      organization: 'INSA, Rennes',
      country: 'France',
      imageUrl: '/committee/MeriemOuttas.jpg',
      cvLink: 'https://www.linkedin.com/in/meriem-outtas-298baa34/',
    },
    {
      firstName: 'Mohamed Ali',
      lastName: 'Qureshi',
      organization: 'IUB, Bahawalpur',
      country: 'Pakistan',
      imageUrl: '/committee/MohamedAliQureshi.jpg',
      cvLink: '',
    },
  ],
  "Publicity Chairs": [
    {
      firstName: 'Estefania Talavera',
      lastName: 'Martinez',
      organization: 'UT-EEMCS',
      country: 'Netherlands',
      imageUrl: '/committee/EstefaniaTalaveraMartinez.jpg',
      cvLink: '',
    },
    {
      firstName: 'Hantao',
      lastName: 'Liu',
      organization: 'Cardiff University',
      country: 'UK',
      imageUrl: '/committee/HantaoLiu.jpg',
      cvLink: 'https://www.linkedin.com/in/hantaoliu/',
    },
    {
      firstName: 'Carl James',
      lastName: 'Debono',
      organization: 'University of Malta',
      country: 'Malta',
      imageUrl: '/committee/CarlJamesDebono.jpg',
      cvLink: '',
    },
  ],
  "Web Chair": [
    {
      firstName: 'Geetanjali',
      lastName: 'Rajaraman',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/GeetanjaliRajaraman.jpg',
      cvLink: '',
    },
    {
      firstName: 'Eya',
      lastName: 'Khamassi',
      organization: 'SnT, University of Luxembourg',
      country: 'Luxembourg',
      imageUrl: '/committee/EyaKhamassi.jpg',
      cvLink: '',
    },
    {
      firstName: 'Zuheng',
      lastName: 'Ming',
      organization: 'Universite Sorbonne Paris Nord',
      country: 'France',
      imageUrl: '/committee/ZuhengMing.jpg',
      cvLink: 'https://www.linkedin.com/in/zuheng-ming-2b910853/',
    },
  ],
}
