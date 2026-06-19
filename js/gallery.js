/* ==========================================================================
   Elite Vision Photography Academy - JS Gallery Engine
   ========================================================================== */

// Curated 32 Premium Professional Unsplash Photography Images covering 8 categories (4 per category)
const galleryData = [
  // 1. Weddings
  {
    id: 1,
    category: 'weddings',
    title: 'The Eternal Vow',
    caption: 'Classic candid moment during wedding vows in a cathedral.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvSPpFsrxMtg2ouiDWYmDO3l6FCHl7oPtBg&s'
  },
  {
    id: 2,
    category: 'weddings',
    title: 'Golden Embrace',
    caption: 'Newlyweds capturing the sunset in a countryside vineyard.',
    image: 'https://static.vecteezy.com/system/resources/previews/069/505/063/non_2x/tender-embrace-of-two-souls-in-golden-afternoon-glow-surrounded-by-nature-beauty-radiating-love-and-warmth-this-intimate-moment-captures-essence-of-connection-and-joy-free-photo.jpeg'
  },
  {
    id: 3,
    category: 'weddings',
    title: 'A Glimpse of Joy',
    caption: 'Delicate bride portrait showing elegant lace dress detail.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoe3uqRAvgXInTB2XKPu65oKLXbDmxuiNjfg&s'
  },
  {
    id: 4,
    category: 'weddings',
    title: 'Celebration of Love',
    caption: 'Grand sparkler exit celebration at the reception party.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },

  // 2. Portraits
  {
    id: 5,
    category: 'portraits',
    title: 'Grace & Poise',
    caption: 'Elegant studio lighting highlighting expressive human emotion.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'portraits',
    title: 'Thoughtful Reflections',
    caption: 'A classical monochrome character study portrait.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    category: 'portraits',
    title: 'Expressive Eyes',
    caption: 'Detailed close-up showing stunning facial expressions and details.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    category: 'portraits',
    title: 'Studio Tonalities',
    caption: 'Soft studio shadows capturing a natural, authentic expression.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },

  // 3. Fashion
  {
    id: 9,
    category: 'fashion',
    title: 'Neon Couture',
    caption: 'Dramatic neon lighting outlining model garments in a city campaign.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    category: 'fashion',
    title: 'Sunset Runway',
    caption: 'Flowing dress captured in movement against dramatic seaside cliffs.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    category: 'fashion',
    title: 'Monochrome Editorial',
    caption: 'High-contrast studio shoot for premium print publication layouts.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    category: 'fashion',
    title: 'Urban Vogue',
    caption: 'Modern luxury streetwear styling photographed in an industrial setting.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  },

  // 4. Events
  {
    id: 13,
    category: 'events',
    title: 'Synergy Summit',
    caption: 'Professional stage view and keynote capture at a global corporate event.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 14,
    category: 'events',
    title: 'Electric Symphony',
    caption: 'Dynamic stage light captured in front of a live arena concert audience.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 15,
    category: 'events',
    title: 'Luxury Gala Nights',
    caption: 'Table arrangement detail shot capturing premium banquet lighting.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 16,
    category: 'events',
    title: 'Cocktail Reception',
    caption: 'Candid social networking captured elegantly at a brand release party.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
  },

  // 5. Commercial
  {
    id: 17,
    category: 'commercial',
    title: 'Storefront Campaign',
    caption: 'Elegant luxury boutique facade captured for a brand lookup booklet.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 18,
    category: 'commercial',
    title: 'Commercial Interior',
    caption: 'Clean, sleek design architecture captured for a real estate listing.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 19,
    category: 'commercial',
    title: 'Corporate Workspace',
    caption: 'Professional corporate meeting space styled for brand communications.',
    image: 'https://thumbs.dreamstime.com/b/stylish-workspace-featuring-camera-computer-perfect-creativity-355408300.jpg'
  },
  {
    id: 20,
    category: 'commercial',
    title: 'Corporate Headquarters',
    caption: 'Architectural cityscape capturing the modern lines of high-rise offices.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },

  // 6. Product Shoots
  {
    id: 21,
    category: 'product-shoots',
    title: 'Fragrance Luxe',
    caption: 'Moody product photography featuring premium crystal perfume bottles.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 22,
    category: 'product-shoots',
    title: 'Organic Serum Study',
    caption: 'Studio commercial setup of natural skincare ingredients and pipettes.',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 23,
    category: 'product-shoots',
    title: 'Acoustic Mastery',
    caption: 'Sleek texture study highlighting fine leather and copper headphones.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 24,
    category: 'product-shoots',
    title: 'Midnight Chronometer',
    caption: 'Precision close-up showing watch dials under micro lighting modifiers.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
  },

  // 7. Travel
  {
    id: 25,
    category: 'travel',
    title: 'Emerald Canyon Road',
    caption: 'Parallax views of mountain roads curving around pine forests.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 26,
    category: 'travel',
    title: 'Tropical Solitude',
    caption: 'Crystalline ocean waters washing on sandy beaches in Maldives.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 27,
    category: 'travel',
    title: 'Misty Gondola Rides',
    caption: 'Classic atmospheric capture of early mornings on Venice waterways.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 28,
    category: 'travel',
    title: 'Wandering the World',
    caption: 'Adventure backpacker standing looking out over a grand canyon valley.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
  },

  // 8. Wildlife
  {
    id: 29,
    category: 'wildlife',
    title: 'Forest Majesty',
    caption: 'A beautiful portrait of a wild stag in early morning fog.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 30,
    category: 'wildlife',
    title: 'Ascent of the Eagle',
    caption: 'Golden eagle gliding dynamically above snow-covered peaks.',
    image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 31,
    category: 'wildlife',
    title: 'Roar of the Savannah',
    caption: 'Close-up portrait of a male lion scanning the open grass plains.',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 32,
    category: 'wildlife',
    title: 'Eyes of the Tiger',
    caption: 'Stunning close-up view of a Bengal tiger hiding in forest undergrowth.',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80'
  }
];

let activeFilter = 'all';
let filteredImages = [...galleryData];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  initFilters();
  initLightbox();
});

/* 1. Render Gallery Elements */
function renderGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  filteredImages.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('gallery-item');
    itemElement.classList.add('reveal-on-scroll');
    itemElement.setAttribute('data-category', item.category);
    itemElement.setAttribute('data-index', index);

    // Apply staggered entry delays
    const delayClass = `delay-${(index % 4) * 100}`;
    if (delayClass !== 'delay-0') {
      itemElement.classList.add(delayClass);
    }

    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="gallery-item-img" loading="lazy">
      <div class="gallery-item-hover">
        <span class="gallery-item-tag">${item.category.replace('-', ' ')}</span>
        <h3 class="gallery-item-title">${item.title}</h3>
        <span class="category-btn" style="margin-top: 15px;"><i class="fa-solid fa-eye"></i> View Photo</span>
      </div>
      <div class="gallery-item-icon"><i class="fa-solid fa-expand"></i></div>
    `;

    // Hook click to trigger Lightbox
    itemElement.addEventListener('click', () => {
      openLightbox(index);
    });

    galleryGrid.appendChild(itemElement);
  });

  // Re-observe newly created elements for scroll reveal animations
  if (typeof initScrollAnimations === 'function') {
    initScrollAnimations();
  }
}

/* 2. Sort & Filter Buttons */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      activeFilter = e.target.getAttribute('data-filter');
      
      if (activeFilter === 'all') {
        filteredImages = [...galleryData];
      } else {
        filteredImages = galleryData.filter(img => img.category === activeFilter);
      }

      const galleryGrid = document.querySelector('.gallery-grid');
      if (galleryGrid) {
        galleryGrid.style.opacity = '0';
        galleryGrid.style.transform = 'scale(0.98)';
        setTimeout(() => {
          renderGallery();
          galleryGrid.style.opacity = '1';
          galleryGrid.style.transform = 'scale(1)';
          galleryGrid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }, 300);
      }
    });
  });
}

/* 3. Lightbox Engine */
function initLightbox() {
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
      <button class="lightbox-arrow lightbox-arrow-left" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="lightbox-arrow lightbox-arrow-right" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="lightbox-content-wrap">
        <img src="" alt="" class="lightbox-img">
        <div class="lightbox-caption-panel">
          <h4 class="lightbox-title"></h4>
          <span class="lightbox-category"></span>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-arrow-left');
  const nextBtn = lightbox.querySelector('.lightbox-arrow-right');
  
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrap')) {
      closeLightbox();
    }
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scroll

}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Release background scroll

}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  
  if (currentLightboxIndex >= filteredImages.length) {
    currentLightboxIndex = 0;
  } else if (currentLightboxIndex < 0) {
    currentLightboxIndex = filteredImages.length - 1;
  }
  
  updateLightboxContent();
}

function updateLightboxContent() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const imgElement = lightbox.querySelector('.lightbox-img');
  const titleElement = lightbox.querySelector('.lightbox-title');
  const categoryElement = lightbox.querySelector('.lightbox-category');
  
  const currentItem = filteredImages[currentLightboxIndex];
  
  if (currentItem) {
    imgElement.style.opacity = '0';
    imgElement.style.transform = 'scale(0.97)';
    
    setTimeout(() => {
      imgElement.src = currentItem.image;
      imgElement.alt = currentItem.title;
      titleElement.innerText = currentItem.title;
      categoryElement.innerText = currentItem.category.toUpperCase().replace('-', ' ') + ' | ' + currentItem.caption;
      
      imgElement.style.opacity = '1';
      imgElement.style.transform = 'scale(1)';
      imgElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }, 150);
  }
}
