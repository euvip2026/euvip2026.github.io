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
    affiliation: 'University of Bristol & Google DeepMind',
    // description: 'United Kingdom',
    imageUrl: '/speakers/DimaDamen.jpg',
    profileUrl: 'https://dimadamen.github.io/',
    talkTitle: 'Modeling in an Ego-Sensed World',
    talkAbstract:
      'Forecasting the rise of wearable devices equipped with audio-visual feeds and onboard spatial sensors, this talk will present novel approaches for generative and perception modelling in egocentric videos. The talk argues for new ways to foresee egocentric videos as partial observations of a dynamic 3D world, where objects are out of sight but not out of mind and activities take place in a physically-grounded space. I’ll review new data collection and digital twin annotations in HD-EPIC (https://hd-epic.github.io/) that merges video understanding with 3D modelling, showcasing current failures of VLMs in understanding the perspective outside the camera’s field of view — a task trivial for humans.',
    bio: 'Dima Damen is a Professor of Computer Vision at the University of Bristol and Senior Research Scientist at Google DeepMind. Dima is currently an EPSRC Fellow (2020-2026), focusing her research interests in the automatic understanding of object interactions, actions and activities using wearable visual (and depth) sensors. She is best known for her leading works in Egocentric Vision, and has also contributed to novel research questions including mono-to-3D, video object segmentation, assessing action completion, domain adaptation, skill/expertise determination from video sequences, discovering task-relevant objects, dual-domain and dual-time learning as well as multi-modal fusion using vision, audio and language.She is the project lead for EPIC-KITCHENS, the seminal dataset in egocentric vision, with accompanying open challenges and follow-up works: EPIC-Sounds, VISOR and EPIC Fields, as well as the recent HD-EPIC. She is part of the large-scale consortium effort Ego4D and Ego-Exo4D. She is an ELLIS Fellow, associate editor (AE) of IJCV, and was a program chair for ICCV 2021 and Associate Editor-in-Chief (AEIC) of IEEE TPAMI (2023-2025). She is frequently a Senior Area Chair and Area Chair in major conferences and was selected as Outstanding SAC in ECCV 2024 and Outstanding Reviewer in CVPR2021, CVPR2020, ICCV2017, CVPR2013 and CVPR2012. Dima received her PhD from the University of Leeds (2009), joined the University of Bristol as a Postdoctoral Researcher (2010-2012), Assistant Professor (2013-2018), Associate Professor (2018-2021) and was appointed as chair in August 2021. She supervises 9 PhD students and 3 Visiting PhD students.',
  },
  {
    name: 'Elisa Ricci',
    affiliation: 'University of Trento & Fondazione Bruno Kessler',
    // description: 'Italy',
    imageUrl: '/speakers/ElisaRicci.jpeg',
    profileUrl: 'https://eliricci.eu/',
    talkTitle: 'Rethinking Multimodal AI Models: Beyond Accuracy, Towards Trust',
    talkAbstract:
      'The rapid adoption of Large Multimodal Models is reshaping smart technologies, while simultaneously raising fundamental questions about trust, safety and accountability. Moving beyond traditional performance metrics, real-world deployment demands a deeper understanding of model behavior under uncertainty, bias, and privacy constraints. This talk presents a perspective on Trustworthy AI approaches, with a focus on vision-language tasks, across five interconnected dimensions: (i) eXplainable AI for making multimodal decisions transparent; (ii) bias discovery and mitigation through scalable and automated approaches; (iii) automatic benchmarking frameworks for robust evaluation of Large Multimodal Models; (iv) uncertainty quantification as a foundation for reliable decision making; and (v) privacy-based learning, including privacy leakage analysis, unlearning and federated learning. The talk concludes by outlining open research challenges toward principled and socially aligned AI systems for the next generation of smart technologies.',
    bio: 'Elisa Ricci is a Professor at the University of Trento and Head of the Research Unit Deep Visual Learning at Fondazione Bruno Kessler. Her research lies at the intersection of computer vision, deep learning, and robotics perception. She is interested in developing novel approaches for learning from visual and multi-modal data in an open world. Elisa received her MSc and PhD from the University of Perugia and has held positions at Idiap Research Institute, Fondazione Bruno Kessler and as visiting researcher at ETH Zurich and the University of Bristol. She has co‑authored over 200 scientific publications with broad impact in vision and learning research.  She was the General Co-Chair of ACM ICMR 2025 and Program Co-Chair of ACM MM 2022 and ECCV 2024. Her group has received many best paper awards, including Best Paper Award at ACM MM 2015. She serves on the editorial boards of several international journals, such as Pattern Recognition and Computer Vision and Image Understanding. Elisa has led and contributed to multiple national and EU research projects, including H2020 and HE projects such as SPRING and ELLIOT. She is an ELLIS and a IAPR Fellow. ',
  },
  {
    name: 'Fatma Güney',
    affiliation: 'Koç University',
    // description: 'Turkey',
    imageUrl: '/speakers/FatmaGüney.jpeg',
    profileUrl: 'https://mysite.ku.edu.tr/fguney/',
  },

  {
    name: 'Silvia Zuffi',
    affiliation: 'IMATI-CNR',
    // description: 'Turkey',
    imageUrl: '/speakers/SilviaZuffi.jpg',
    profileUrl: 'https://scholar.google.com/citations?user=-d7Ib5UAAAAJ&hl=en',
  },
]

