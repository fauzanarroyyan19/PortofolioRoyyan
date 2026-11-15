const projects = [
  {
    id: 1,
    title: "Portal Pengajuan Kredit PT. JKL",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    desc: {
      ID: "Web sederhana untuk mendigitalisasi pengajuan kredit kendaraan dengan alur multi-peran (Sales Dealer, Marketing, Atasan Marketing, Admin Backoffice, Konsumen), mulai dari pengajuan hingga pencairan dana. Data disimpan di localStorage.",
      EN: "A simple web app that digitizes vehicle credit applications through a multi-role workflow (Dealer Sales, Marketing, Marketing Manager, Backoffice Admin, Customer), from submission to fund disbursement. Data is stored in localStorage.",
    },
    image: "/projects/jkl-kredit.png",
    live: "https://project-pdp-fauzan-ar-royyan.vercel.app/",
    repo: "https://github.com/fauzanarroyyan19/ProjectPDP_FauzanArRoyyan.git",
  },
  {
    id: 2,
    title: "FaceGuard-AI",
    tech: ["Figma"],
    desc: {
      ID: "Prototype sistem proteksi identitas berbasis AI & anti-deepfake. Dibuat di Figma untuk memvisualisasikan fitur dan UI.",
      EN: "A prototype of an AI-based identity protection and anti-deepfake system, designed in Figma to visualize its features and UI.",
    },
    image: "/projects/faceguard.png",
    live: "", // isi link prototype Figma yang asli
    repo: "",
  },
  {
    id: 3,
    title: "ProtectX",
    tech: ["React", "Express", "Discord.js", "Node.js"],
    desc: {
      ID: "Bot anti-crash untuk Discord.",
      EN: "An anti-crash bot for Discord.",
    },
    image: "/projects/project2.png",
    live: "",
    repo: "",
  },
  {
    id: 4,
    title: "Kahoot Answers Viewer",
    tech: ["CSS", "Express", "Node.js"],
    desc: {
      ID: "Menampilkan jawaban kuis Kahoot.",
      EN: "Shows the answers to a Kahoot quiz.",
    },
    image: "/projects/project3.png",
    live: "",
    repo: "",
  },
  {
    id: 5,
    title: "Blockchain-Based Voting System",
    tech: ["React", "Vite", "Solidity", "Hardhat", "Ethers.js", "MetaMask"],
    desc: {
      ID: "Aplikasi voting terdesentralisasi berbasis smart contract Solidity. Pemilih dapat melihat kandidat, memberikan suara melalui MetaMask, dan memantau hasil; admin dapat mengelola kandidat serta statistik pemilihan. Setiap alamat wallet hanya dapat memilih satu kali. Saat ini berjalan di jaringan Hardhat lokal dan belum dideploy ke blockchain publik.",
      EN: "A decentralized voting application powered by Solidity smart contracts. Voters can view candidates, cast votes through MetaMask, and monitor results; admins can manage candidates and election statistics. Each wallet address can vote only once. It currently runs on a local Hardhat network and has not been deployed to a public blockchain.",
    },
    image: "/projects/blockchain-voting.svg",
    live: "",
    repo: "https://github.com/fauzanarroyyan19/voting-blockchain",
  },
  {
    id: 6,
    title: "HandDT – Hand Detection & Gesture Interaction",
    tech: ["HTML5", "CSS3", "JavaScript", "MediaPipe Hands", "Canvas API"],
    desc: {
      ID: "Dashboard interaktif berbasis browser yang mendeteksi hingga dua tangan secara real-time melalui webcam menggunakan MediaPipe Hands. Kenali berbagai gestur untuk menggambar di kanvas virtual, memilih warna, membatalkan atau menghapus gambar, dan mengunduh hasilnya. Pemrosesan berjalan di browser sehingga video webcam tidak dikirim ke server.",
      EN: "An interactive browser-based dashboard that uses MediaPipe Hands to detect up to two hands in real time through a webcam. Recognize gestures to draw on a virtual canvas, choose colors, undo or clear strokes, and download the result. Processing runs in the browser, so webcam video is not sent to a server.",
    },
    image: "/projects/handdt.svg",
    live: "https://handflow-studio.vercel.app/",
    repo: "https://github.com/fauzanarroyyan19/HandDT",
  },
];

export default projects;
