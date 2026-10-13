/* ==========================================================================
   content.js : TOUT LE CONTENU DU SITE
   - Chaque texte existe en français (fr) et en anglais (en).
   - Garde toujours les guillemets "..." , les virgules et les accolades { }.
   - Une virgule ou un guillemet oublié casse le site : après chaque
     modification, vérifie la page.
   ========================================================================== */

window.SITE = {

  name: "Mohamed Omar Kahloun",
  revision: "2026-10",          // date de dernière mise à jour affichée en haut

  pageTitle: {
    fr: "Mohamed Omar Kahloun — Ingénieur systèmes embarqués et IoT",
    en: "Mohamed Omar Kahloun — Embedded Systems and IoT Engineer"
  },
  part: {
    fr: "Fiche technique, ingénieur systèmes embarqués et IoT",
    en: "Datasheet, embedded systems and IoT engineer"
  },
  tagline: {
    fr: "Je conçois des systèmes embarqués qui voient, décident et communiquent.",
    en: "I design embedded systems that see, decide and communicate."
  },

  /* Le composant dessiné en haut à droite : 12 broches.
     Broches 1 à 6 = côté gauche (de haut en bas),
     broches 7 à 12 = côté droit (de bas en haut). */
  chip: { name: "Kahloun", line1: "Embedded Systems", line2: "ISI 2027" },
  pins: ["STM32", "ESP32", "RPi", "Jetson", "UART", "SPI", "I2C", "CAN", "MQTT", "RTOS", "VHDL", "Edge AI"],

  features: [
    { fr: "Dernière année d'ingénierie Systèmes Embarqués à l'ISI, promotion 2027", en: "Final-year Embedded Systems engineering student at ISI, class of 2027" },
    { fr: "Ancien co-directeur du département Robotique et IoT du club FREEWAYS", en: "Former Co-Director of the Robotics and IoT department, FREEWAYS club" },
    { fr: "De la carte PCB à l'IA embarquée sur la cible", en: "From PCB boards to on-device embedded AI" },
    { fr: "Français et anglais courants", en: "Fluent in French and English" },
    { fr: "Recherche un PFE", en: "Looking for an end-of-studies internship" }
  ],

  interests: [
    { fr: "Robotique et IoT", en: "Robotics and IoT" },
    { fr: "Vision par ordinateur et edge AI", en: "Computer vision and edge AI" },
    { fr: "Conception numérique sur FPGA", en: "Digital design on FPGA" },
    { fr: "Systèmes temps réel (RTOS)", en: "Real-time systems (RTOS)" },
    { fr: "Conception de cartes PCB", en: "PCB design" },
    { fr: "Agents IA, en exploration", en: "AI agents, exploring" }
  ],

  about: [
    {
      fr: "Étudiant en dernière année d'ingénierie Systèmes Embarqués à l'Institut Supérieur d'Informatique (ISI), Université Tunis El Manar.",
      en: "I am a final-year Embedded Systems engineering student at the Institut Supérieur d'Informatique (ISI), Université Tunis El Manar. I build systems end to end: board design, C and C++ firmware, device-to-device communication, then artificial intelligence on the target."
    },
    {
      fr: "J’aime concevoir des systèmes qui associent matériel et logiciel, du développement embarqué en C/C++ et Python à l’intégration de capteurs, de plateformes électroniques et d’algorithmes d’intelligence artificielle. À travers mes projets académiques et personnels, j’ai acquis une expérience pratique avec les microcontrôleurs STM32 et ESP32, les plateformes Raspberry Pi, les FPGA et la vision par ordinateur.Curieux, autonome et motivé par les défis techniques, je cherche constamment à approfondir mes compétences et à transformer des idées innovantes en solutions concrètes, fiables et optimisées.",
      en: "I enjoy designing systems that combine hardware and software, ranging from embedded development in C/C++ and Python to the integration of sensors, electronic platforms, and artificial intelligence algorithms. Through my academic and personal projects, I have gained practical experience with STM32 and ESP32 microcontrollers, Raspberry Pi platforms, FPGAs, and computer vision. Curious, self-reliant, and driven by technical challenges, I constantly seek to improve my skills and transform innovative ideas into concrete, reliable, and optimized solutions."
    }
  ],

  /* Les catégories des filtres. La clé (iot, vision, fpga) est utiliséeDescrip
     dans le champ "domains" de chaque projet. */
  domains: {
    iot:    { fr: "Embarqué et IoT", en: "Embedded and IoT" },
    vision: { fr: "Vision et IA",    en: "Vision and AI" },
    fpga:   { fr: "FPGA et VHDL",    en: "FPGA and VHDL" }
  },

  /* ======================================================================
     PROJETS
     Pour AJOUTER un projet : copie un bloc { ... } entier (avec sa virgule),
     colle-le dans la liste, puis change les textes.
     Pour SUPPRIMER : efface le bloc entier.

     Champs :
       slug     identifiant unique, sans espace ni accent (utilisé dans l'adresse)
       title    titre du projet
       domains  une ou plusieurs clés : "iot", "vision", "fpga"
       tags     plateforme et outils (affichés en étiquettes)
       planned  true si le projet est seulement planifié, sinon false
       summary  les points clés (carte + fiche détaillée)
       overview le paragraphe d'aperçu de la fiche
       sections (optionnel) remplace les "Points clés" par tes propres sections.
                Un item peut avoir un champ "code" pour afficher une étiquette.
       links    (optionnel) liens vers GitHub, un PDF, une démo, etc.
       photos   (optionnel) liste de photos, voir l'exemple ci-dessous.

     PHOTOS : mets tes images dans le dossier "images" du dépôt, puis écris :
       photos: [
         { src: "images/gimbal-1.jpg", caption: { fr: "Vue d'ensemble", en: "Overview" } },
         { src: "images/gimbal-2.jpg" }
       ],
     (sans photos, la fiche n'affiche pas de galerie)
     ====================================================================== */
  projects: [
    {
      slug: "risc16",
      title: { fr: "Processeur RISC 16 bits", en: "16-bit RISC processor" },
      domains: ["fpga"],
      tags: ["VHDL", "Vivado", "ModelSim"],
      planned: false,
      overview: {
        fr: "Processeur RISC 16 bits décrit en VHDL et réparti sur six fichiers, vérifié avec les testbenches fournies pour le cours de modélisation de systèmes, sous Vivado et ModelSim.",
        en: "A 16-bit RISC processor described in VHDL and split across six files, verified against the testbenches provided for the System Modeling course, in Vivado and ModelSim."
      },
      summary: [
        { fr: "Six modules : registre d'instructions, registre d'état, banc de registres, ALU, unité de contrôle et processeur", en: "Six modules: instruction register, status register, register file, ALU, control unit and processor" },
        { fr: "Vérifié avec les testbenches du cours de modélisation de systèmes", en: "Verified against the System Modeling course testbenches" }
      ],
      sections: [
        {
          title: { fr: "Modules", en: "Modules" },
          items: [
            { code: "instr_reg",    fr: "registre d'instructions", en: "instruction register" },
            { code: "status_reg",   fr: "registre d'état", en: "status register" },
            { code: "reg_file",     fr: "banc de registres", en: "register file" },
            { code: "alu",          fr: "unité arithmétique et logique", en: "arithmetic logic unit" },
            { code: "control_unit", fr: "unité de contrôle", en: "control unit" },
            { code: "proc",         fr: "processeur (assemblage des modules)", en: "processor (top-level assembly)" }
          ]
        }
      ],
      documents: [
          { titre: "Rapport technique (PDF)", fichier: "risc-processeur-rapport.pdf" }
      ],
      photos: []
    },
    {
      slug: "gimbal",
      title: { fr: "Nacelle laser de suivi de ballons", en: "Balloon-tracking laser gimbal" },
      domains: ["vision", "iot"],
      tags: ["Jetson Nano", "Servo Motors", "YOLOv5", "3D design"],
      planned: false,
      overview: {
        fr: "Nacelle à deux axes qui suit des ballons et pointe un laser sur eux. La détection repose sur YOLOv5, exécuté sur un Jetson Nano, et deux servomoteurs orientent la nacelle.",
        en: "A dual-axis gimbal that tracks balloons and points a laser at them. Detection relies on YOLOv5 running on a Jetson Nano, and two servo motors move the gimbal."
      },
      summary: [
        { fr: "Détection d'objets YOLOv5 exécutée sur le Jetson Nano", en: "YOLOv5 object detection running on the Jetson Nano" },
        { fr: "Orientation de la nacelle sur deux axes par servomoteurs", en: "Two-axis gimbal orientation driven by servo motors" },
        { fr: "Développement dans les contraintes de JetPack 4.6 et Python 3.6, qui ont imposé des contournements", en: "Development within the JetPack 4.6 and Python 3.6 constraints, which required workarounds" }
      ],
      photos: [{ src: "Capture_gimbal.png" }]
    },
    {
      slug: "parking",
      title: { fr: "Gestion de parking sur FPGA", en: "FPGA parking management system" },
      domains: ["fpga"],
      tags: ["VHDL", "Basys3", "Artix-7"],
      planned: false,
      overview: {
        fr: "Système de gestion de parking décrit en VHDL et déployé sur une carte Basys3 (FPGA Artix-7).",
        en: "A parking management system described in VHDL and deployed on a Basys3 board (Artix-7 FPGA)."
      },
      summary: [
        { fr: "Simulation par testbench, synthèse puis déploiement sur la carte", en: "Testbench simulation, synthesis, then deployment on the board" },
        { fr: "Vérification avec les boutons et l'afficheur 7 segments", en: "Verified with the onboard buttons and 7-segment display" }
      ],
      sections: [
        {
          title: { fr: "Validation", en: "Validation" },
          ordered: true,
          items: [
            { fr: "Simulation par testbench", en: "Testbench simulation" },
            { fr: "Synthèse", en: "Synthesis" },
            { fr: "Déploiement sur la carte", en: "Deployment on the board" },
            { fr: "Vérification avec les boutons et l'afficheur 7 segments de la carte", en: "Verification with the board's buttons and 7-segment display" }
          ]
        }
      ],
      photos: []
    },
    {
      slug: "robot-vocal",
      title: { fr: "Robot IoT à commande vocale", en: "Voice-controlled IoT robot" },
      domains: ["iot"],
      tags: ["Raspberry Pi", "ESP32", "Vosk", "LLaMA", "DC Motors", "BMC", "MQTT"],
      planned: false,
      overview: {
        fr: "Robot IoT que l'on commande à la voix, construit autour de deux cartes : un Raspberry Pi, qui est le cerveau du système, et un ESP32, qui commande les moteurs de déplacement. Il combine la reconnaissance vocale Vosk et un modèle de langage LLaMA.",
        en: "An IoT robot controlled by voice, built around two boards: a Raspberry Pi, the brain of the system, and an ESP32 that drives the movement motors. It combines Vosk speech recognition with a LLaMA language model."
      },
      summary: [
        { fr: "Raspberry Pi comme unité centrale du robot", en: "Raspberry Pi as the robot's central unit" },
        { fr: "ESP32 pour la commande des roues motrices", en: "ESP32 for controlling the drive wheels" },
        { fr: "Vosk pour la reconnaissance vocale", en: "Vosk for speech recognition" },
        { fr: "Modèle LLaMA intégré au robot", en: "LLaMA model integrated into the robot" }
      ],
      photos: [{ src: "Robot_home.jpeg" }]
    },
        {
      slug: "domotique",
      title: { fr: "Système de sécurité et de contrôle de climatisation par application mobile", en: "Security and climate control system with a mobile app" },
      domains: ["iot"],
      tags: ["Angular", "Ionic", "Firebase", "Android", "ESP32", "EasyEDA", { fr: "Carte PCB", en: "PCB board" }, "SolidWorks"],
      planned: false,
      overview: {
        fr: "Le système est composé de deux boîtiers : un boîtier actionneur, qui ouvre, ferme et calcule la consommation, et un boîtier capteur, qui fournit toutes les caractéristiques de l'environnement. Une application mobile permet de suivre la consommation et la sécurité de la chambre face à la toxicité de l'air (CO et CO2), ainsi que la température et l'humidité.",
        en: "The system consists of two units: an actuator unit, which opens, closes and computes energy consumption, and a sensor unit, which provides all the characteristics of the environment. A mobile app tracks consumption and the room's safety against air toxicity (CO and CO2), as well as temperature and humidity."
      },
      summary: [
        { fr: "Boîtier actionneur : ouvre, ferme et calcule la consommation", en: "Actuator unit: opens, closes and computes consumption" },
        { fr: "Boîtier capteur : fournit toutes les caractéristiques de l'environnement", en: "Sensor unit: provides all environment characteristics" },
        { fr: "Application mobile Angular et Ionic pour le suivi en temps réel", en: "Angular and Ionic mobile app for real-time monitoring" }
      ],
      sections: [
        {
          title: { fr: "Architecture", en: "Architecture" },
          items: [
            { fr: "Deux ESP32 communiquant en HTTP", en: "Two ESP32 boards communicating over HTTP" },
            { fr: "Firebase pour le stockage des données", en: "Firebase for data storage" },
            { fr: "Application Angular et Ionic", en: "Angular and Ionic application" }
          ]
        },
        {
          title: { fr: "Boîtier actionneur", en: "Actuator unit" },
          items: [
            { fr: "Ouverture et fermeture (commande de la climatisation)", en: "Opening and closing (air conditioning control)" },
            { fr: "Calcul de la consommation", en: "Energy consumption calculation" }
          ]
        },
        {
          title: { fr: "Boîtier capteur", en: "Sensor unit" },
          items: [
            { fr: "Fournit toutes les caractéristiques de l'environnement", en: "Provides all the characteristics of the environment" },
            { fr: "Mesures : température, humidité, CO2 et CO", en: "Measurements: temperature, humidity, CO2 and CO" },
            { fr: "Sécurité de la chambre contre la toxicité de l'air et contre les incendies", en: "Room safety against air toxicity and fire" }
          ]
        },
        {
          title: { fr: "Application mobile", en: "Mobile app" },
          items: [
            { fr: "Connexion et inscription des utilisateurs", en: "User sign-in and sign-up" },
            { fr: "Suivi de la consommation en kWh", en: "Consumption tracking in kWh" },
            { fr: "Suivi de la qualité de l'air : CO2 en ppm et CO", en: "Air quality tracking: CO2 in ppm and CO" },
            { fr: "Température en °C et humidité en %", en: "Temperature in °C and humidity in %" }
          ]
        }
      ],
      photos: [
        { src: "3D_boitie.png" },
        { src: "landing_page.jpeg", caption: { fr: "Application : page d'accueil", en: "App: landing page" } },
        { src: "welcom_page.jpeg", caption: { fr: "Application : connexion", en: "App: sign-in" } },
        { src: "info_page.jpeg", caption: { fr: "Application : consommation, température, humidité, CO2 et CO", en: "App: consumption, temperature, humidity, CO2 and CO" } }
      ]
    },
       {
      slug: "bras",
      title: { fr: "Bras robotique avec vision par ordinateur", en: "Robotic arm with computer vision" },
      domains: ["vision"],
      tags: ["Raspberry Pi", "OpenCV"],
      planned: false,
      overview: {
        fr: "Bras robotique doté de vision par ordinateur. Une caméra fixe observe la scène, et le bras identifie chaque objet grâce à un code-barres collé dessus. Il le ramasse puis le dépose en dehors d'une zone prédéfinie. Le traitement d'image OpenCV est exécuté sur Raspberry Pi.",
        en: "A robotic arm with computer vision. A fixed camera observes the scene, and the arm identifies each object through a barcode stuck on it. It picks the object up and places it outside a predefined zone. OpenCV image processing runs on a Raspberry Pi."
      },
      summary: [
        { fr: "Caméra fixe observant la scène", en: "Fixed camera observing the scene" },
        { fr: "Identification des objets par un code-barres collé dessus", en: "Objects identified through a barcode stuck on them" },
        { fr: "Ramassage de l'objet puis dépôt en dehors d'une zone prédéfinie", en: "Picks up the object and places it outside a predefined zone" },
        { fr: "Traitement d'image avec OpenCV sur Raspberry Pi", en: "Image processing with OpenCV on Raspberry Pi" }
      ],
      photos: [
        { src: "Bras_robot.png" }
      ]
    },
    {
      slug: "fifo",
      title: { fr: "Contrôleur FIFO synchrone", en: "Synchronous FIFO controller" },
      domains: ["fpga"],
      tags: ["VHDL", "RTL"],
      planned: false,
      overview: {
        fr: "Contrôleur de FIFO synchrone (sync_fifo_ctrl) décrit en VHDL au niveau RTL.",
        en: "A synchronous FIFO controller (sync_fifo_ctrl) described in VHDL at RTL level."
      },
      summary: [
        { fr: "Architecture à cinq processus", en: "Five-process architecture" },
        { fr: "Logique des pointeurs d'écriture et de lecture", en: "Write and read pointer logic" },
        { fr: "Drapeaux plein et vide calculés par signaux d'anticipation", en: "Full and empty flags computed from lookahead signals" },
        { fr: "Compteur de niveau", en: "Level counter" }
      ],
      photos: []
    },
    {
      slug: "drivers",
      title: { fr: "Pilotes FPGA I2C et SPI", en: "FPGA I2C and SPI drivers" },
      domains: ["fpga"],
      tags: ["VHDL", "FSM", "I2C", "SPI"],
      planned: false,
      overview: {
        fr: "Deux pilotes écrits en VHDL sous forme de machines à états, réalisés dans le cadre d'exercices de la plateforme FPGA pour tous.",
        en: "Two drivers written in VHDL as state machines, built as exercises on the FPGA pour tous platform."
      },
      summary: [
        { fr: "MCP23017 (expandeur GPIO, I2C) : machine à états du pilote", en: "MCP23017 (GPIO expander, I2C): driver state machine" },
        { fr: "ADS7057 (convertisseur analogique-numérique, 2,5 MSPS) : acquisition 14 bits avec calibration à la mise sous tension", en: "ADS7057 (analog-to-digital converter, 2.5 MSPS): 14-bit acquisition with power-up calibration" }
      ],
      sections: [
        {
          title: "MCP23017",
          items: [
            { fr: "Expandeur de GPIO piloté en I2C", en: "GPIO expander driven over I2C" }
          ]
        },
        {
          title: "ADS7057",
          items: [
            { fr: "Convertisseur analogique-numérique 2,5 MSPS piloté en SPI", en: "2.5 MSPS analog-to-digital converter driven over SPI" },
            { fr: "Échantillons de 14 bits étendus en signe sur 16 bits", en: "14-bit samples sign-extended to 16 bits" },
            { fr: "États : calibration à la mise sous tension, temporisation de calibration, calibration, acquisition, conversion", en: "States: power-up calibration, calibration timing, calibration, acquisition, conversion" }
          ]
        }
      ],
      links: [
        { label: { fr: "Voir mon profil FPGA pour tous", en: "See my FPGA pour tous profile" }, href: "https://fpgapourtous.fr/fr/profile/104" }
      ],
      photos: []
    },
    {
      slug: "zephyr",
      title: { fr: "Projet Zephyr multi-cartes", en: "Zephyr multi-board project" },
      domains: ["iot"],
      tags: ["Zephyr", "STM32F407G-DISC1", "CMake"],
      planned: false,
      overview: {
        fr: "Projet Zephyr RTOS pensé pour plusieurs cartes, auquel j'ai ajouté la cible STM32F407G-DISC1 (stm32f4_disco).",
        en: "A Zephyr RTOS project designed for several boards, to which I added the STM32F407G-DISC1 target (stm32f4_disco)."
      },
      summary: [
        { fr: "Ajout de la cible STM32F407G-DISC1", en: "Added the STM32F407G-DISC1 target" },
        { fr: "Résolution d'une incompatibilité de version du SDK", en: "Fixed an SDK version incompatibility" },
        { fr: "Exclusion via CMake des sources réseau C++ inutiles", en: "Excluded unneeded C++ networking sources via CMake" }
      ],
      photos: []
    }
  ],

  /* COMPÉTENCES : une ligne par famille. Les éléments sont des textes simples. */
  skills: [
    { family: { fr: "Cartes et cibles", en: "Boards and targets" }, items: ["STM32", "ESP32", "ESP32-S3", "Raspberry Pi", "Jetson Nano"] },
    { family: { fr: "Langages", en: "Languages" }, items: ["C", "C++", "Python"] },
    { family: { fr: "Bus et protocoles", en: "Buses and protocols" }, items: ["UART", "SPI", "I2C", "CAN", "MQTT"] },
    { family: { fr: "Temps réel", en: "Real-time" }, items: ["FreeRTOS", "Zephyr"] },
    { family: { fr: "FPGA et HDL", en: "FPGA and HDL" }, items: ["VHDL", "Vivado", "ModelSim"] },
    { family: { fr: "Vision et IA embarquée", en: "Vision and embedded AI" }, items: ["OpenCV", "YOLO", "ONNX Runtime", { fr: "Déploiement edge AI", en: "Edge AI deployment" }] },
    { family: { fr: "Robotique", en: "Robotics" }, items: ["ROS 2", "Gazebo", "SLAM"] },
    { family: { fr: "Conception PCB", en: "PCB design" }, items: ["EasyEDA"] },
    { family: { fr: "En exploration", en: "Exploring" }, items: [{ fr: "Agents IA", en: "AI agents" }, "ReAct", "LangChain", "RAG"] }
  ],

  /* PARCOURS : une ligne par étape, du plus récent au plus ancien. */
  background: [
    {
      period: { fr: "2024 – 2027 (en cours)", en: "2024 – 2027 (ongoing)" },
      role: { fr: "Cycle ingénieur", en: "Engineering degree" },
      desc: { fr: "Systèmes embarqués et IoT, Institut Supérieur d'Informatique (ISI), Université Tunis El Manar.", en: "Embedded Systems and IoT, Institut Supérieur d'Informatique (ISI), Université Tunis El Manar." }
    },
    {
      period: "2021 – 2024",
      role: { fr: "Licence", en: "Bachelor's degree" },
      desc: { fr: "Systèmes embarqués, électronique et électrotechnique.", en: "Embedded systems, electronics and electrical engineering." }
    },
    {
      period: "2021",
      role: { fr: "Baccalauréat sciences techniques", en: "Technical Sciences Baccalaureate" },
      desc: { fr: "Moyenne de 15,5/20.", en: "Overall grade of 15.5/20." }
    }
  ],

  /* CONTACT : label = le canal, text = ce qui est affiché, href = le lien.
     Sans href, le texte n'est pas cliquable. */
  contact: [
    { label: "Email", text: "medomarkah@gmail.com", href: "mailto:medomarkah@gmail.com" },
    { label: "WhatsApp", text: "+216 98 327 912", href: "https://wa.me/21698327912" },
    { label: "LinkedIn", text: "linkedin.com/in/mohamad-omar-kahloun-b96a9b26a", href: "https://www.linkedin.com/in/mohamad-omar-kahloun-b96a9b26a/" },
    { label: "GitHub", text: "github.com/kahlono", href: "https://github.com/kahlono" },
    { label: "FPGA pour tous", text: "fpgapourtous.fr/fr/profile/104", href: "https://fpgapourtous.fr/fr/profile/104" },
    { label: { fr: "Langues", en: "Languages" }, text: { fr: "Français, anglais", en: "French, English" } }
  ]
};
