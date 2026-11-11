import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Buffer } from 'node:buffer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Referer': 'https://venturechessacademy.com/'
};

const WP_HOST = 'https://dashboard.venturechessacademy.com';

const items = [
  // Logo
  {
    url: `${WP_HOST}/wp-content/uploads/2025/04/Venture-Chess-Academy.png`,
    dest: 'public/images/logo.png'
  },
  // Benefits
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/school-boys-playing-chess-e1698161918720.jpg`,
    dest: 'public/images/benefits/flexible-schedule.jpg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/selective-focus-of-wooden-chess-board-with-seniors-playing-chess-at-home-e1697916079176.jpg`,
    dest: 'public/images/benefits/weekly-tournaments.jpg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/smart-boy-playing-chess-and-staring-at-the-chessboard-e1698161801842.jpg`,
    dest: 'public/images/benefits/weekly-puzzle-quest.jpg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/game-of-chess-e1698161986705.jpg`,
    dest: 'public/images/benefits/custom-position-drills.jpg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/one-to-one-class.webp`,
    dest: 'public/images/benefits/assignments.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/teenager-playing-chess.jpg`,
    dest: 'public/images/benefits/video-courses.jpg'
  },
  // Student Achievements
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-11.48.41-AM.jpeg`,
    dest: 'public/images/achievements/nidvik-d.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-11.48.47-AM.jpeg`,
    dest: 'public/images/achievements/navya-nagarajan.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-11.48.52-AM-1.jpeg`,
    dest: 'public/images/achievements/amrienta-gabriel.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-11.48.55-AM.jpeg`,
    dest: 'public/images/achievements/shreyansh-das.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Yashasree-Sabui.jpeg`,
    dest: 'public/images/achievements/yashasree-sabui.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-11.48.39-AM.jpeg`,
    dest: 'public/images/achievements/arin.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-11.48.50-AM.jpeg`,
    dest: 'public/images/achievements/viyaan-shrikantappa.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-11.48.45-AM.jpeg`,
    dest: 'public/images/achievements/muriel-fernandes.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-17-at-5.15.02-PM-1.jpeg`,
    dest: 'public/images/achievements/snehin.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-11.48.37-AM.jpeg`,
    dest: 'public/images/achievements/lishan-dhanvin.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-17-at-5.57.28-PM.jpeg`,
    dest: 'public/images/achievements/kiyaansh-gowda.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/04/Viva-Pujari.webp`,
    dest: 'public/images/achievements/viva-pujari.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-9.36.55-AM.jpeg`,
    dest: 'public/images/achievements/vivaan-sahu.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-11.48.34-AM.jpeg`,
    dest: 'public/images/achievements/vansh-yadav.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/905d1ae2-5b37-4158-9a76-42ca9743cc0c.webp`,
    dest: 'public/images/achievements/aamna-poojary.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Poorva-D.webp`,
    dest: 'public/images/achievements/poorva-d.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Niranjana-Inbasekar.webp`,
    dest: 'public/images/achievements/niranjana-inbasekar.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Ian-Menezes.webp`,
    dest: 'public/images/achievements/ian-menezes.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Mukundh.webp`,
    dest: 'public/images/achievements/mukundh.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Vedh-Shetty.webp`,
    dest: 'public/images/achievements/vedh-shetty.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/Saishn-Surya.webp`,
    dest: 'public/images/achievements/saishn-surya.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-11.48.53-AM-1.jpeg`,
    dest: 'public/images/achievements/navya.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-11.48.53-AM.jpeg`,
    dest: 'public/images/achievements/arin-kavala.jpeg'
  },
  // Courses
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/Pawn-Batch-rhz7ir2vimi8l8jrxxqscmnywr0379k7hqtks5vmvk.webp`,
    dest: 'public/images/courses/pawn-batch.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/Knight-rntfyfoekqqy6tuied309v95yq6rpchwrrnq8j9ci8.jpg`,
    dest: 'public/images/courses/knight-batch.jpg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/ChatGPT-Image-May-20-2026-12_12_47-PM-1-rntfwbjh75uq2ex3qy685wgtuim1dv3nhated4e8i8.png`,
    dest: 'public/images/courses/bishop-batch.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/rook_chess_HD_images_1024_202605201205-scaled-rntfxzp5ck52pghpzo6clhabv6dj2hqh1kkh2tx1g0.jpeg`,
    dest: 'public/images/courses/rook-batch.jpeg'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/ChatGPT-Image-May-20-2026-12_20_06-PM-rntfu3n728tcnk55phmxrymncrju7lagubd4klop74.png`,
    dest: 'public/images/courses/queen-batch.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/White-Chess-King-Piece-On-A-Chessboard-With-Smoke-In-The-Background-Photo-And-Picture-For-Free-Download-Pngtree-rntfu1riokqs0c7w0gtomz3q5zt3s7306225m1rhjk.jpg`,
    dest: 'public/images/courses/king-batch.jpg'
  },
  // Mini Games
  {
    url: `${WP_HOST}/wp-content/uploads/2026/04/Chess-Coordinate-Trainer.png`,
    dest: 'public/images/games/chess-coordinate-trainer.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/04/Blindfold-chess-Trainer.png`,
    dest: 'public/images/games/blindfold-chess-trainer.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/04/JigSaw-Chess.png`,
    dest: 'public/images/games/jigsaw-chess.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/04/Chess-quiz-2.png`,
    dest: 'public/images/games/chess-quiz.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/04/Chess-Maze.png`,
    dest: 'public/images/games/chess-maze.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/04/Memory-Trainer-2.png`,
    dest: 'public/images/games/memory-trainer.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/06/dice-chess-1.webp`,
    dest: 'public/images/games/dice-chess.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/08/snake-chess-3.webp`,
    dest: 'public/images/games/snake-chess.webp'
  },
  // About Page
  {
    url: `${WP_HOST}/wp-content/uploads/2026/03/Chess-Academy-2.webp`,
    dest: 'public/images/about/chess-class.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2025/04/IMG-20240317-WA0062.webp`,
    dest: 'public/images/about/shriram-ponnengala.webp'
  },
  // Services
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/individual-class-ri9r6u0q7p2vq6wby1gxbjbp4yrmuawc0guv8c2suo.webp`,
    dest: 'public/images/services/free-trial.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/one-to-one-class-ri9s27uqek1jdhb6oluhkm7r642tuhhozt0i2xjl3k.webp`,
    dest: 'public/images/services/one-to-one.webp'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/elementor/thumbs/businessman-moving-chess-piece-and-checkmate-during-competition-e1650353837359-r7kv5k0m1ztxg8tpi10i0u7u57mzelvqo65t8jfekw.jpg`,
    dest: 'public/images/services/group-classes.jpg'
  },
  // Why Venture Section
  {
    url: `${WP_HOST}/wp-content/uploads/2026/05/venture-website-images-4.png`,
    dest: 'public/images/home/why-venture.png'
  },
  // Testimonials
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-11.png`,
    dest: 'public/images/testimonials/avatar-1.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-9.png`,
    dest: 'public/images/testimonials/avatar-2.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-10.png`,
    dest: 'public/images/testimonials/avatar-3.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-14.png`,
    dest: 'public/images/testimonials/avatar-4.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-15.png`,
    dest: 'public/images/testimonials/avatar-5.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-16.png`,
    dest: 'public/images/testimonials/avatar-6.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-12.png`,
    dest: 'public/images/testimonials/avatar-7.png'
  },
  {
    url: `${WP_HOST}/wp-content/uploads/2026/02/unnamed-13.png`,
    dest: 'public/images/testimonials/avatar-8.png'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${items.length} images from WordPress...`);
  let successCount = 0;
  let failCount = 0;

  for (const item of items) {
    const fullDest = path.resolve(projectRoot, item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      const res = await fetch(item.url, { headers });
      if (!res.ok) {
        console.error(`❌ Failed (${res.status} ${res.statusText}): ${item.url}`);
        failCount++;
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(fullDest, buffer);
      console.log(`✅ Saved: ${item.dest} (${buffer.length} bytes)`);
      successCount++;
    } catch (err) {
      console.error(`❌ Error fetching ${item.url}:`, err.message);
      failCount++;
    }
  }

  console.log(`\nFinished! Successfully downloaded: ${successCount}, Failed: ${failCount}`);
}

downloadAll();
