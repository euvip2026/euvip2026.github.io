export interface Speaker {
  name: string
  affiliation: string
  description: string
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
    affiliation: 'Professor & head of research group <br/> Senior research scientist <br />',
    description: 'University of Bristol, Google DeepMind <br/> United Kingdom',
    imageUrl: '/speakers/DimaDamen.jpg',
    profileUrl: 'https://dimadamen.github.io/',
    // talkTitle: 'Video Understanding Through Egocentric Vision'
  },
  {
    name: 'Elisa Ricci',
    affiliation: 'Professor and head of research unit',
    description: 'University of Trento, Fondazione Bruno Kessler <br/> Italy',
    imageUrl: '/speakers/ElisaRicci.jpeg',
    profileUrl: 'https://eliricci.eu/',
    // talkTitle: 'Continual and Adaptive Learning in Computer Vision',
  },
  {
    name: 'Fatma Güney',
    affiliation: 'Assistant professor',
    description: 'Koç University <br/> Turkey',
    imageUrl: '/speakers/FatmaGüney.jpeg',
    profileUrl: 'https://mysite.ku.edu.tr/fguney/',
  },
]
