// Global state
let currentLanguage = 'en';
let isMobileMenuOpen = false;

// Language content
const content = {
  en: {
    title: "Celebration Point",
    subtitle: "Your Dreams, Our Expertise",
    description: "Professional event planning services for all your special moments. From birthday parties to bridal ceremonies, we make your celebrations unforgettable.",
    cta: "Book Your Event",
    stats: [
      { number: "500+", label: "Happy Clients" },
      { number: "50+", label: "Events Monthly" },
      { number: "4.9★", label: "Client Rating" },
      { number: "₹549+", label: "Starting Price" }
    ]
  },
  hi: {
    title: "सेलिब्रेशन पॉइंट",
    subtitle: "आपके सपने, हमारी विशेषज्ञता",
    description: "आपके सभी खुशी के पलों के लिए व्यावसायिक इवेंट प्लानिंग सेवाएं। जन्मदिन की पार्टी से लेकर शादी की रस्में तक, हम आपके उत्सव को अविस्मरणीय बनाते हैं।",
    cta: "अपना इवेंट बुक करें",
    stats: [
      { number: "500+", label: "खुश ग्राहक" },
      { number: "50+", label: "मासिक इवेंट" },
      { number: "4.9★", label: "ग्राहक रेटिंग" },
      { number: "₹549+", label: "शुरुआती कीमत" }
    ]
  },
  mr: {
    title: "सेलिब्रेशन पॉईंट",
    subtitle: "तुमची स्वप्ने, आमची तज्ञता",
    description: "तुमच्या सर्व आनंदाच्या क्षणांसाठी व्यावसायिक इव्हेंट प्लानिंग सेवा. वाढदिवसाच्या पार्टीपासून ते लग्नाच्या विधींपर्यंत, आम्ही तुमचे उत्सव अविस्मरणीय बनवतो.",
    cta: "तुमचा इव्हेंट बुक करा",
    stats: [
      { number: "500+", label: "आनंदी ग्राहक" },
      { number: "50+", label: "मासिक इव्हेंट" },
      { number: "4.9★", label: "ग्राहक रेटिंग" },
      { number: "₹549+", label: "सुरुवातीची किंमत" }
    ]
  }
};

// Services data
const services = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>`,
    title: "Birthday Parties",
    emoji: "🎂",
    description: "Customizable birthday celebration packages for all ages",
    priceRange: "₹549 - ₹1,899",
    features: ["Theme Decorations", "Cake & Snacks", "Games & Activities", "Photography"],
    popular: true
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>`,
    title: "Bridal Rope Ceremony",
    emoji: "👰",
    description: "Traditional and elegant bridal ceremonies",
    priceRange: "Custom Pricing",
    features: ["Traditional Setup", "Floral Arrangements", "Ceremony Coordination", "Photography"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>`,
    title: "Baby Shower",
    emoji: "👶",
    description: "Beautiful baby shower celebrations",
    priceRange: "₹799",
    features: ["Themed Decorations", "Games & Activities", "Refreshments", "Gift Arrangements"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>`,
    title: "Propose Event",
    emoji: "💍",
    description: "Romantic proposal setups and arrangements",
    priceRange: "Custom Pricing",
    features: ["Romantic Setup", "Surprise Elements", "Photography", "Special Arrangements"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>`,
    title: "Farewell & Group Events",
    emoji: "👥",
    description: "Memorable farewell parties and group meetings",
    priceRange: "Custom Pricing",
    features: ["Group Activities", "Memory Books", "Catering Options", "Entertainment"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <point x="12" y="17"></point>
          </svg>`,
    title: "Couple Date",
    emoji: "❤️",
    description: "Romantic date experiences and couple celebrations",
    priceRange: "Custom Pricing",
    features: ["Romantic Ambiance", "Special Dining", "Privacy", "Memorable Experience"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
          </svg>`,
    title: "E-Celebration",
    emoji: "🌐",
    description: "Virtual celebrations and online events",
    priceRange: "Custom Pricing",
    features: ["Virtual Setup", "Online Games", "Digital Invites", "Live Streaming"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="23,7 16,12 23,17"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>`,
    title: "Mini Movie Theatre",
    emoji: "🎥",
    description: "Private movie screening experiences",
    priceRange: "Custom Pricing",
    features: ["Private Screening", "Comfortable Seating", "Snacks & Drinks", "Movie Selection"]
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>`,
    title: "Surprise Date",
    emoji: "🌹",
    description: "Special surprise arrangements and dates",
    priceRange: "Custom Pricing",
    features: ["Surprise Planning", "Special Setup", "Unique Experience", "Memory Creation"]
  }
];

// Utility functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function openLink(url) {
  window.open(url, '_blank');
}

function openWhatsApp(message) {
  const whatsappUrl = `https://wa.me/918805158674?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

// Language switching
function changeLanguage(lang) {
  currentLanguage = lang;
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Update content
  const langContent = content[lang];
  document.getElementById('hero-title').textContent = langContent.title;
  document.getElementById('hero-subtitle').textContent = langContent.subtitle;
  document.getElementById('hero-description').textContent = langContent.description;
  document.getElementById('hero-cta').textContent = langContent.cta;
  
  // Update stats
  langContent.stats.forEach((stat, index) => {
    document.getElementById(`stat-${index + 1}`).textContent = stat.label;
  });
}

// Mobile menu functions
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (isMobileMenuOpen) {
    mobileMenu.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    mobileMenu.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

function closeMobileMenu() {
  isMobileMenuOpen = false;
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  mobileMenu.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

// Services generation
function generateServices() {
  const servicesGrid = document.querySelector('.services-grid');
  
  services.forEach((service, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.className = `service-card${service.popular ? ' popular' : ''}`;
    serviceCard.style.animationDelay = `${index * 0.1}s`;
    
    serviceCard.innerHTML = `
      <div class="service-header">
        <div class="service-icon">
          <div class="service-icon-wrapper">
            ${service.icon}
          </div>
        </div>
        <h3 class="service-title">${service.title} ${service.emoji}</h3>
        <p class="service-description">${service.description}</p>
      </div>
      
      <div class="service-content">
        <div class="service-price">
          <span class="service-price-text">${service.priceRange}</span>
        </div>
        
        <div class="service-features">
          ${service.features.map(feature => `
            <div class="service-feature">
              <div class="service-feature-dot"></div>
              ${feature}
            </div>
          `).join('')}
        </div>
        
        <div class="service-buttons">
          <button class="service-btn service-btn-primary" onclick="openWhatsApp('Hi! I\\'m interested in booking ${service.title} at Celebration Point. Could you please provide more details about pricing and availability?')">
            Book Now via WhatsApp
          </button>
          <button class="service-btn service-btn-outline" onclick="scrollToSection('booking')">
            Get Quote
          </button>
        </div>
      </div>
    `;
    
    servicesGrid.appendChild(serviceCard);
  });
}

// Booking form handling
function handleBookingSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    eventType: formData.get('eventType'),
    eventDate: formData.get('eventDate'),
    guestCount: formData.get('guestCount'),
    location: formData.get('location'),
    budget: formData.get('budget'),
    requirements: formData.get('requirements')
  };
  
  // Validate required fields
  if (!data.name || !data.phone || !data.eventType) {
    showToast('Please fill in all required fields (Name, Phone, Event Type)', 'error');
    return;
  }
  
  // Create WhatsApp message
  const message = `
🎉 *New Booking Request - Celebration Point*

👤 *Client Details:*
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email || 'Not provided'}

🎊 *Event Details:*
• Event Type: ${data.eventType}
• Date: ${data.eventDate || 'To be decided'}
• Guest Count: ${data.guestCount || 'Not specified'}
• Location: ${data.location || 'To be decided'}
• Budget: ${data.budget || 'To be discussed'}

📝 *Special Requirements:*
${data.requirements || 'None specified'}

---
Please contact me to discuss the details and confirm availability.
  `.trim();
  
  // Open WhatsApp
  const whatsappUrl = `https://wa.me/918805158674?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Show success message
  showToast('Booking Request Sent! Your booking request has been sent via WhatsApp. We\'ll contact you shortly!');
  
  // Reset form
  event.target.reset();
}

// Initialize the website
function init() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Generate services
  generateServices();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.getElementById('navigation');
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('mobile-toggle');
    
    if (isMobileMenuOpen && !nav.contains(event.target) && !toggleBtn.contains(event.target)) {
      closeMobileMenu();
    }
  });
  
  // Add loading animation to page
  document.body.style.opacity = '0';
  window.addEventListener('load', function() {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '1';
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}