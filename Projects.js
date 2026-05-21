{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // ============================================================\
//  ZOO ENRICHMENT LIBRARY \'97 PROJECT DATA\
//  Edit this file to add, update, or remove projects.\
//\
//  TO ADD A NEW PROJECT: copy one of the blocks below,\
//  paste it at the end of the array (before the final ]);\
//  and fill in your details. Don't forget the comma after\
//  the closing \} of the previous entry.\
//\
//  TAGS \'97 use exact strings from the lists below so filters\
//  work correctly. You can add new tag values any time;\
//  they will automatically appear in the filter bar.\
//\
//  tools        \uc0\u8594  matches the "Tools I have" filter (inclusive)\
//  taxa         \uc0\u8594  animal group tags\
//  behavior     \uc0\u8594  target enrichment behavior\
//  complexity   \uc0\u8594  "Simple" | "Intermediate" | "Complex Kit"\
//  files        \uc0\u8594  file types included in the download\
//\
//  FILE LINKS: replace the # placeholders in downloadUrl\
//  with real GitHub raw file URLs once you upload your files.\
//  e.g. "https://github.com/YOUR-USERNAME/zoo-enrichment/raw/main/projects/cric-o-nut/cric-o-nut.3mf"\
// ============================================================\
\
const PROJECTS = [\
  \{\
    id: "cric-o-nut",\
    title: "Cric-o-nut",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "A two-part slow feeder that can be hung from a carabiner to facilitate slow cricket release for arboreal insectivores.",\
    tools: ["FDM Printer"],\
    taxa: ["Birds", "Small Mammals"],\
    animalCharacteristics: ["Insectivore", "Arboreal", "Small Animals", "Medium Animals"],\
    targetBehavior: ["Foraging"],\
    species: ["Slow loris", "Azure-winged magpie", "Bush baby"],\
    safetyConcerns: ["Entrapment", "Ingestion"],\
    aesthetic: "Naturalistic",\
    complexity: "Simple",\
    files: ["3MF"],\
    fileFolder: "cric-o-nut",\
    notes: "",\
    // Replace # with your actual GitHub file URL\
    downloadUrl: "#"\
  \},\
  \{\
    id: "pyramid",\
    title: "Pyramid",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "A 3D printed slow feeder that can be hung from perching. Contains nubs to encourage licking and arboreal foraging behavior.",\
    tools: ["FDM Printer"],\
    taxa: ["Small Primates", "Birds"],\
    animalCharacteristics: ["Arboreal", "Medium Animals", "Small Animals"],\
    targetBehavior: ["Foraging", "Climbing"],\
    species: ["Ruffed lemur", "Guenon"],\
    safetyConcerns: ["Entrapment", "Ingestion"],\
    aesthetic: "Intentional",\
    complexity: "Simple",\
    files: ["3MF"],\
    fileFolder: "pyramid",\
    notes: "Epoxy sealing recommended for sanitation.",\
    downloadUrl: "#"\
  \},\
  \{\
    id: "lotus-pod",\
    title: "Lotus Pod",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "A 3D printed lotus pod with tapering holes designed to extend foraging duration and promote object manipulation. Can be hung or placed on the ground.",\
    tools: ["FDM Printer"],\
    taxa: ["Small Primates", "Ant Eaters", "Birds"],\
    animalCharacteristics: ["Arboreal", "Medium Animals", "Small Animals"],\
    targetBehavior: ["Foraging", "Object Manipulation", "Extractive Foraging"],\
    species: [],\
    safetyConcerns: ["Entrapment", "Ingestion"],\
    aesthetic: "Naturalistic",\
    complexity: "Simple",\
    files: ["3MF"],\
    fileFolder: "lotus-pod",\
    notes: "Epoxy sealing recommended for sanitation.",\
    downloadUrl: "#"\
  \},\
  \{\
    id: "table-barriers",\
    title: "Table Barriers",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "Barriers that clip onto tables to allow safe presentation of interpretation animals on elevated surfaces. Not a replacement for proper attention and animal handling, but provide an extra layer of safety against potential falls.",\
    tools: ["FDM Printer", "Laser Cutter"],\
    taxa: ["Ectotherms", "Testudines", "Snakes", "Lizards"],\
    animalCharacteristics: ["Interpretation", "Small Animals"],\
    targetBehavior: ["Presentation", "Exploration", "Animal Health"],\
    species: ["Indian star tortoise", "Pancake tortoise", "Legless lizard", "Blue-tongue skink", "Hedgehog tenrec"],\
    safetyConcerns: ["Falls"],\
    aesthetic: "Intentional",\
    complexity: "Complex Kit",\
    files: ["3MF", "PDF", "DXF", "BOM"],\
    fileFolder: "table-barriers",\
    notes: "",\
    downloadUrl: "#"\
  \},\
  \{\
    id: "frut",\
    title: "Fr\'fct",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "A 3D printed hanging food holder that allows care staff to promote food processing by placing leafy greens around high-value food items in the center.",\
    tools: ["FDM Printer"],\
    taxa: ["Small Primates", "Birds"],\
    animalCharacteristics: ["Small Animals", "Arboreal", "Frugivore"],\
    targetBehavior: ["Foraging", "Ripping and Tearing", "Food Processing"],\
    species: ["Guenon", "Azure-winged magpie"],\
    safetyConcerns: ["Entrapment", "Ingestion"],\
    aesthetic: "Intentional",\
    complexity: "Simple",\
    files: ["3MF"],\
    fileFolder: "frut",\
    notes: "Epoxy sealing recommended for sanitation.",\
    downloadUrl: "#"\
  \},\
  \{\
    id: "anti-ant-stump",\
    title: "Anti-ant Stump",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "A 3D printed stump that allows keepers to place food in a bowl surrounded by a water moat to prevent ants from accessing it.",\
    tools: ["FDM Printer"],\
    taxa: ["Birds"],\
    animalCharacteristics: ["Small Animals"],\
    targetBehavior: ["Animal Health"],\
    species: ["Azure-winged magpie"],\
    safetyConcerns: ["Ingestion", "Pinching"],\
    aesthetic: "Naturalistic",\
    complexity: "Simple",\
    files: ["3MF"],\
    fileFolder: "anti-ant-stump",\
    notes: "Epoxy sealing required for watertightness.",\
    downloadUrl: "#"\
  \},\
  \{\
    id: "woodpecker-log",\
    title: "Woodpecker Log",\
    author: "Dylan Baldridge",\
    contributorZoo: "Memphis Zoo",\
    description: "A combination of a 3D printed sleeve and paper wrapped around a PVC interior, allowing animals to engage in extractive woodpecker-like foraging behavior.",\
    tools: ["FDM Printer", "Drill", "Dremel"],\
    taxa: ["Birds", "Small Mammals", "Small Primates", "Ectotherms"],\
    animalCharacteristics: ["Small Animals", "Arboreal"],\
    targetBehavior: ["Foraging", "Ripping and Tearing", "Extractive Foraging"],\
    species: ["Emerald tree monitor"],\
    safetyConcerns: ["Entrapment", "Pinching", "Ingestion"],\
    aesthetic: "Naturalistic",\
    complexity: "Intermediate",\
    files: ["3MF", "PDF", "BOM"],\
    fileFolder: "woodpecker-log",\
    notes: "",\
    downloadUrl: "#"\
  \}\
\
  // \uc0\u9472 \u9472  ADD NEW PROJECTS BELOW THIS LINE \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
  // Copy the block above, paste here, update the fields.\
  // Make sure to add a comma after the \} of the entry above.\
\
];}