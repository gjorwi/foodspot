'use client';

import { useState } from 'react';
import LogoInitials from './components/LogoInitials';
import { 
  MapPin, 
  Star, 
  TrendingUp, 
  Heart, 
  Search, 
  Bell, 
  User, 
  Compass,
  Filter,
  ChevronRight,
  Clock,
  Navigation,
  Bookmark
} from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchFocused, setSearchFocused] = useState(false);

  // Datos de ejemplo
  const featuredPlaces = [
    {
      id: 1,
      name: "La Trattoria Italiana",
      rating: 4.8,
      reviews: 234,
      category: "Italiana",
      distance: "0.8 km",
      image: "🍝",
      priceRange: "$$",
      openNow: true
    },
    {
      id: 2,
      name: "Sushi Master",
      rating: 4.9,
      reviews: 456,
      category: "Japonesa",
      distance: "1.2 km",
      image: "🍣",
      priceRange: "$$$",
      openNow: true
    },
    {
      id: 3,
      name: "Taquería El Sabor",
      rating: 4.7,
      reviews: 189,
      category: "Mexicana",
      distance: "0.5 km",
      image: "🌮",
      priceRange: "$",
      openNow: false
    },
    {
      id: 4,
      name: "Burger House",
      rating: 4.6,
      reviews: 312,
      category: "Americana",
      distance: "1.5 km",
      image: "🍔",
      priceRange: "$$",
      openNow: true
    }
  ];

  const trendingCategories = [
    { name: "Pizza", icon: "🍕", count: 45 },
    { name: "Sushi", icon: "🍣", count: 32 },
    { name: "Tacos", icon: "🌮", count: 28 },
    { name: "Hamburguesas", icon: "🍔", count: 38 },
    { name: "Postres", icon: "🍰", count: 25 },
    { name: "Café", icon: "☕", count: 41 }
  ];

  const nearbyPlaces = [
    { id: 5, name: "Café Central", category: "Café", distance: "0.3 km", rating: 4.5, image: "☕" },
    { id: 6, name: "Pizza Napoli", category: "Italiana", distance: "0.6 km", rating: 4.7, image: "🍕" },
  ];

  return (
    <div className={styles.mobileApp}>
      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <div className={styles.headerTop}>
          <LogoInitials size="medium" />
          <div className={styles.locationBar}>
            <MapPin size={18} color="var(--primary)" />
            <span className={styles.locationText}>Tu ubicación actual</span>
            <ChevronRight size={16} />
          </div>
          <button className={styles.notificationButton}>
            <Bell size={20} />
            <span className={styles.notificationDot}></span>
          </button>
        </div>
        
        <div className={styles.mobileSearchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Buscar restaurantes o comidas..."
            className={styles.mobileSearchInput}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <button className={styles.filterButton}>
            <Filter size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mobileContent}>
        {/* Sponsors Section */}
        <div className={styles.sponsorsSection}>
          <div className={styles.sponsorsTrack}>
            {/* Duplicamos los logos para crear el efecto infinito */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍕</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍔</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍗</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🥗</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🌮</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>☕</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍜</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍰</span></div>
            </div>
            {/* Duplicado para scroll infinito */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍕</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍔</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍗</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🥗</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🌮</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>☕</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍜</span></div>
              <div className={styles.sponsorCard}><span className={styles.sponsorEmoji}>🍰</span></div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          {/* <button className={styles.quickActionButton}>
            <div className={styles.quickActionIcon}>
              <Navigation size={20} />
            </div>
            <span>Cerca de mí</span>
          </button> */}
          <button className={styles.quickActionButton}>
            <div className={styles.quickActionIcon}>
              <TrendingUp size={30} />
            </div>
            <span>Populares</span>
          </button>
          <button className={styles.quickActionButton}>
            <div className={styles.quickActionIcon}>
              <Star size={30} />
            </div>
            <span>Top Rated</span>
          </button>
          <button className={styles.quickActionButton}>
            <div className={styles.quickActionIcon}>
              <Clock size={30} />
            </div>
            <span>Abierto</span>
          </button>
        </div>

        {/* Categories Carousel */}
        <section className={styles.mobileSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Categorías</h2>
          </div>
          <div className={styles.categoriesCarousel}>
            {trendingCategories.map((category, index) => (
              <div key={index} className={styles.categoryChip}>
                <span className={styles.categoryChipIcon}>{category.icon}</span>
                <span className={styles.categoryChipName}>{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Places */}
        <section className={styles.mobileSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cerca de ti</h2>
            <button className={styles.seeAllButton}>Ver todo</button>
          </div>
          <div className={styles.horizontalScroll}>
            {nearbyPlaces.map((place) => (
              <div key={place.id} className={styles.nearbyCard}>
                <div className={styles.nearbyEmoji}>{place.image}</div>
                <div className={styles.nearbyInfo}>
                  <h3 className={styles.nearbyName}>{place.name}</h3>
                  <div className={styles.nearbyMeta}>
                    <Star size={12} fill="var(--accent)" color="var(--accent)" />
                    <span>{place.rating}</span>
                    <span className={styles.nearbyDot}>•</span>
                    <span>{place.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Places */}
        <section className={styles.mobileSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Destacados</h2>
            <button className={styles.seeAllButton}>Ver todo</button>
          </div>
          <div className={styles.mobilePlacesList}>
            {featuredPlaces.map((place) => (
              <div key={place.id} className={styles.mobilePlaceCard}>
                <div className={styles.mobilePlaceImage}>
                  <span className={styles.mobilePlaceEmoji}>{place.image}</span>
                  {place.openNow && (
                    <span className={styles.mobileOpenBadge}>Abierto</span>
                  )}
                </div>
                <div className={styles.mobilePlaceInfo}>
                  <div className={styles.mobilePlaceHeader}>
                    <h3 className={styles.mobilePlaceName}>{place.name}</h3>
                    <button className={styles.mobileFavoriteButton}>
                      <Heart size={18} />
                    </button>
                  </div>
                  <div className={styles.mobilePlaceCategory}>{place.category}</div>
                  <div className={styles.mobilePlaceMeta}>
                    <div className={styles.mobilePlaceRating}>
                      <Star size={14} fill="var(--accent)" color="var(--accent)" />
                      <span>{place.rating}</span>
                      <span className={styles.mobilePlaceReviews}>({place.reviews})</span>
                    </div>
                    <div className={styles.mobilePlaceDistance}>
                      <MapPin size={12} />
                      <span>{place.distance}</span>
                    </div>
                    <div className={styles.mobilePlacePrice}>{place.priceRange}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Spacing for Nav */}
        <div className={styles.bottomSpacer}></div>
      </main>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <button 
          className={`${styles.navButton} ${activeTab === 'explore' ? styles.navButtonActive : ''}`}
          onClick={() => setActiveTab('explore')}
        >
          <Compass size={24} />
          <span>Explorar</span>
        </button>
        <button 
          className={`${styles.navButton} ${activeTab === 'map' ? styles.navButtonActive : ''}`}
          onClick={() => setActiveTab('map')}
        >
          <MapPin size={24} />
          <span>Mapa</span>
        </button>
        <button 
          className={`${styles.navButton} ${activeTab === 'favorites' ? styles.navButtonActive : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          <Bookmark size={24} />
          <span>Guardados</span>
        </button>
        <button 
          className={`${styles.navButton} ${activeTab === 'profile' ? styles.navButtonActive : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={24} />
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  );
}
