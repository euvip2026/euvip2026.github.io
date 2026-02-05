export interface Speaker {
  name: string
  affiliation: string
  description: string
  country?: string
  imageUrl: string
  talkTitle?: string
  talkAbstract?: string
  profileUrl?: string
  bio?: string
}

export const speakers: Speaker[] = [
  // Add your speakers here
  // Example:
  {
    name: 'Dima Damen',
    affiliation: 'Professor & head of research group',
    description: 'United Kingdom',
    imageUrl: '/speakers/DimaDamen.jpg',
    profileUrl: 'https://dimadamen.github.io/',
  },
  {
    name: 'Elisa Ricci',
    affiliation: 'Professor & head of research unit',
    description: 'Italy',
    imageUrl: '/speakers/ElisaRicci.jpeg',
    profileUrl: 'https://eliricci.eu/',
    talkTitle: 'Rethinking Multimodal AI Models: Beyond Accuracy, Towards Trust',
    talkAbstract:
      'The rapid adoption of Large Multimodal Models is reshaping smart technologies, while simultaneously raising fundamental questions about trust, safety and accountability. Moving beyond traditional performance metrics, real-world deployment demands a deeper understanding of model behavior under uncertainty, bias, and privacy constraints. This talk presents a perspective on Trustworthy AI approaches, with a focus on vision-language tasks, across five interconnected dimensions: (i) eXplainable AI for making multimodal decisions transparent; (ii) bias discovery and mitigation through scalable and automated approaches; (iii) automatic benchmarking frameworks for robust evaluation of Large Multimodal Models; (iv) uncertainty quantification as a foundation for reliable decision making; and (v) privacy-based learning, including privacy leakage analysis, unlearning and federated learning. The talk concludes by outlining open research challenges toward principled and socially aligned AI systems for the next generation of smart technologies.',
    bio: 'Elisa Ricci is a Professor at the University of Trento and Head of the Research Unit Deep Visual Learning at Fondazione Bruno Kessler. Her research lies at the intersection of computer vision, deep learning, and robotics perception. She is interested in developing novel approaches for learning from visual and multi-modal data in an open world. Elisa received her MSc and PhD from the University of Perugia and has held positions at Idiap Research Institute, Fondazione Bruno Kessler and as visiting researcher at ETH Zurich and the University of Bristol. She has co‑authored over 200 scientific publications with broad impact in vision and learning research.  She was the General Co-Chair of ACM ICMR 2025 and Program Co-Chair of ACM MM 2022 and ECCV 2024. Her group has received many best paper awards, including Best Paper Award at ACM MM 2015. She serves on the editorial boards of several international journals, such as Pattern Recognition and Computer Vision and Image Understanding. Elisa has led and contributed to multiple national and EU research projects, including H2020 and HE projects such as SPRING and ELLIOT. She is an ELLIS and a IAPR Fellow. ',
  },
  {
    name: 'Fatma Güney',
    affiliation: 'Assistant professor',
    description: 'Turkey',
    imageUrl: '/speakers/FatmaGüney.jpeg',
    profileUrl: 'https://mysite.ku.edu.tr/fguney/',
  },
]
