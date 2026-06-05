const PROJECTS = [
  {
    id: "cric-o-nut",
    title: "Cric-o-nut",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "A two-part slow feeder that can be hung from a carabiner to facilitate slow cricket release for arboreal insectivores.",
    tools: ["FDM Printer"],
    taxa: ["Birds", "Small Mammals"],
    targetBehavior: ["Foraging"],
    species: ["Slow loris", "Azure-winged magpie", "Bush baby"],
    complexity: "Simple",
    files: ["STL"],
    notes: "",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/cric-o-nut",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/cric-o-nut/CONClosed.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/cric-o-nut/CONOpen.jpeg"
    ]
  },
  {
    id: "pyramid",
    title: "Pyramid",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "A 3D printed slow feeder that can be hung from perching. Contains nubs to encourage licking and arboreal foraging behavior.",
    tools: ["FDM Printer"],
    taxa: ["Small Primates", "Birds"],
    targetBehavior: ["Foraging", "Climbing"],
    species: ["Ruffed lemur", "Guenon"],
    complexity: "Simple",
    files: ["STL"],
    notes: "Epoxy sealing recommended for sanitation.",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/pyramid",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/pyramid/pyramid.jpeg"
    ]
  },
  {
    id: "lotus-pod",
    title: "Lotus Pod",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "A 3D printed lotus pod with tapering holes designed to extend foraging duration and promote object manipulation. Can be hung or placed on the ground.",
    tools: ["FDM Printer"],
    taxa: ["Small Primates", "Ant Eaters", "Birds"],
    targetBehavior: ["Foraging", "Object Manipulation", "Extractive Foraging"],
    species: [],
    complexity: "Simple",
    files: ["STL"],
    notes: "Epoxy sealing recommended for sanitation.",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/lotus-pod",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/lotus-pod/LotusPodRenderBack.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/lotus-pod/LotusPodRenderFront.jpeg"
    ]
  },
  {
    id: "table-barriers",
    title: "Table Barriers",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "Barriers that clip onto tables to allow safe presentation of interpretation animals on elevated surfaces. Not a replacement for proper attention and animal handling, but provide an extra layer of safety against potential falls.",
    tools: ["FDM Printer", "Laser Cutter"],
    taxa: ["Ectotherms", "Testudines", "Snakes", "Lizards"],
    targetBehavior: ["Presentation", "Exploration", "Animal Health"],
    species: ["Indian star tortoise", "Pancake tortoise", "Legless lizard", "Blue-tongue skink", "Hedgehog tenrec"],
    complexity: "Complex Kit",
    files: ["STL","DXF"],
    notes: "",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/table-barriers",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/table-barriers/TabBarrierAssembled.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/table-barriers/TabBarrierStored.jpeg"
    ]
  },
  {
    id: "fruut",
    title: "Fruut",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "A 3D printed hanging food holder that allows care staff to promote food processing by placing leafy greens around high-value food items in the center.",
    tools: ["FDM Printer"],
    taxa: ["Small Primates", "Birds"],
    targetBehavior: ["Foraging", "Ripping and Tearing", "Food Processing"],
    species: ["Guenon", "Azure-winged magpie"],
    complexity: "Simple",
    files: ["STL"],
    notes: "Epoxy sealing recommended for sanitation.",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/fruut",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/fruut/Fruut.jpeg"
    ]
  },
  {
    id: "anti-ant-stump",
    title: "Anti-ant Stump",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "A 3D printed stump that allows keepers to place food in a bowl surrounded by a water moat to prevent ants from accessing it.",
    tools: ["FDM Printer"],
    taxa: ["Birds"],
    targetBehavior: ["Animal Health"],
    species: ["Azure-winged magpie"],
    complexity: "Simple",
    files: ["STL"],
    notes: "Epoxy sealing required for watertightness.",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/anti-ant-stump",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/anti-ant-stump/Stump.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/anti-ant-stump/DoubleStump.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/anti-ant-stump/UnfinishedStump.jpeg"
    ]
  },
  {
    id: "woodpecker-log",
    title: "Woodpecker Log",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "A combination of a 3D printed sleeve and paper wrapped around a PVC interior, allowing animals to engage in extractive woodpecker-like foraging behavior.",
    tools: ["FDM Printer", "Drill", "Dremel"],
    taxa: ["Birds", "Small Mammals", "Small Primates", "Ectotherms"],
    targetBehavior: ["Foraging", "Ripping and Tearing", "Extractive Foraging"],
    species: ["Emerald tree monitor"],
    complexity: "Intermediate",
    files: ["STL"],
    notes: "",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/woodpecker-log",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/woodpecker-log/WPLPaper.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/woodpecker-log/WPLPaperTorn.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/woodpecker-log/WPLParts.jpeg"
    ]
  },
    {
    id: "antMoundFeeder",
    title: "Ant Mound Feeder",
    author: "Dylan Baldridge",
    contributorZoo: "Memphis Zoo",
    description: "This feeder has a central pole ants can run up and down for foraging by lizards liek the horntoad. It is themed to look like an ant hill.",
    tools: ["FDM Printer"],
    taxa: ["lizards", "Ectotherms"],
    targetBehavior: ["Foraging", "Hunting"],
    species: ["Horned lizard"],
    complexity: "Simple",
    files: ["STL"],
    notes: "Print exterior with fuzzy skin for best aesthetic results.",
    downloadUrl: "https://github.com/BaldridgeEnrichment/openSourceEnrichment/tree/main/antMoundFeeder",
    images: [
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/antMoundFeeder/AMFClosed.jpeg",
      "https://raw.githubusercontent.com/BaldridgeEnrichment/openSourceEnrichment/main/antMoundFeeder/AMFOpen.jpeg"
    ]
  }
];
