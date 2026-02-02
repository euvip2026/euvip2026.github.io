export interface Speaker {
    name: string
    affiliation: string
    country?: string
    imageUrl: string
    talkTitle?: string
    profileUrl?: string
  }

export const speakers: Speaker[] = [
  // Add your speakers here
  // Example:
  {
    name: 'Dima Damen',
    affiliation:'Professor and head of research group, and senior research scientist at University of Bristol, Google DeepMind, UK',
    imageUrl: '/speakers/DimaDamen.jpg',
    // talkTitle: 'Video Understanding Through Egocentric Vision'
  },
  {
    name: 'Elisa Ricci',
    affiliation:
      'Professor and head of reearch unit at University of Trento, Fondazione Bruno Kessler, Italy',
    imageUrl: '/speakers/ElisaRicci.jpeg',
    // talkTitle: 'Continual and Adaptive Learning in Computer Vision',
  },
  {
    name: 'Fatma Güney',
    affiliation:
      'Assistant Professor at the Department of Computer Engineering at Koç University, Istanbul',
    imageUrl: '/speakers/FatmaGüney.jpeg',
  }
]