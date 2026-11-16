const projects = [
  {
    id: 1,
    title: "Portal Pengajuan Kredit PT. JKL",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    desc: {
      ID: "Aplikasi web untuk mendigitalisasi pengajuan kredit kendaraan dari Sales Dealer hingga pencairan dana, dengan alur Sales Dealer, Marketing, Atasan Marketing, Admin Backoffice, dan Konsumen.",
      EN: "A web application that digitizes vehicle credit applications from Dealer Sales through fund disbursement, with a workflow for Dealer Sales, Marketing, Marketing Supervisor, Back-office Admin, and Customer.",
    },
    image: "/projects/jkl-kredit/jkl.png",
    screenshots: ["/projects/jkl-kredit/jkl.png"],
    live: "https://project-pdp-fauzan-ar-royyan.vercel.app/",
    repo: "https://github.com/fauzanarroyyan19/ProjectPDP_FauzanArRoyyan.git",
  },
  {
    id: 2,
    title: "FaceGuard-AI",
    tech: ["Figma"],
    desc: {
      ID: "Prototype sistem proteksi identitas berbasis AI dan anti-deepfake. Menampilkan alur deteksi wajah, perlindungan privasi media, dan analisis suara sintetis.",
      EN: "An AI-based identity protection and anti-deepfake prototype featuring face detection, media privacy protection, and synthetic audio analysis flows.",
    },
    image: "/projects/faceguard.png",
    screenshots: [
      "/projects/faceguard-ai/halamanfcguard.png",
      "/projects/faceguard-ai/halamanutamafcguard.png",
      "/projects/faceguard-ai/registerfcguard.png",
      "/projects/faceguard-ai/fiturdetect.png",
      "/projects/faceguard-ai/hasildetect.png",
      "/projects/faceguard-ai/halamanprivacy.png",
      "/projects/faceguard-ai/hasilprivacy.png",
      "/projects/faceguard-ai/halamansound.png",
      "/projects/faceguard-ai/hasilsound.png",
    ],
    live: "https://www.figma.com/proto/nWVaBgK2d2v8KGGhHwudbI/PROJEK--TEKNO?node-id=58-80&starting-point-node-id=58%3A80&t=efcnpWP4V7xGZkGJ-1",
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
    screenshots: [
      "/projects/blockchain-voting/halamanutama.png",
      "/projects/blockchain-voting/halamanuser.png",
      "/projects/blockchain-voting/halamanadmin.png",
      "/projects/blockchain-voting/konfrimmetamask.png",
    ],
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
    image: "/projects/handdt/handdtdashboard.png",
    screenshots: [
      "/projects/handdt/handdtdashboard.png",
      "/projects/handdt/handdtstudio.png",
    ],
    live: "https://handflow-studio.vercel.app/",
    repo: "https://github.com/fauzanarroyyan19/HandDT",
  },
  {
    id: 7,
    title: "WeatherNow",
    tech: ["React 19", "TypeScript", "Vite", "Go", "OpenWeather API", "Telegram Bot API"],
    desc: {
      ID: "Aplikasi pemantauan cuaca melalui dashboard web dan bot Telegram. WeatherNow menampilkan cuaca terkini, prakiraan, riwayat suhu, kota favorit, serta notifikasi harian melalui backend Go terpusat.",
      EN: "A weather monitoring application with a web dashboard and Telegram bot. WeatherNow provides current conditions, forecasts, temperature history, favorite cities, and daily notifications through a centralized Go backend.",
    },
    image: "/projects/weathernow/halamancuaca.png",
    screenshots: [
      "/projects/weathernow/halamancuaca.png",
      "/projects/weathernow/halamanprediksidanriwayatsuhu.png",
      "/projects/weathernow/telecuaca.png",
    ],
    live: "",
    repo: "https://github.com/fauzanarroyyan19/WheatherZyn",
  },
];

export default projects;
