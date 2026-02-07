// ============================================
// API CONFIGURATION
// ============================================
// This file automatically detects the environment and uses the correct API URL

const API_CONFIG = {
  // Production backend URL (deployed on Render)
  production: 'https://online-skill-platform-1.onrender.com',
  
  // Development backend URL (local)
  development: 'http://localhost:5000',
  
  // Get the current API URL based on environment
  getApiUrl: function() {
    // Check if we're on GitHub Pages (production)
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // Check if we're on localhost (development)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1' ||
                        window.location.hostname === '';
    
    // Return appropriate URL
    if (isGitHubPages) {
      console.log('🌐 Environment: Production (GitHub Pages)');
      console.log('🔗 API URL:', this.production);
      return this.production;
    } else if (isLocalhost) {
      console.log('🌐 Environment: Development (Local)');
      console.log('🔗 API URL:', this.development);
      return this.development;
    } else {
      // Default to production for any other domain
      console.log('🌐 Environment: Production (Unknown Host)');
      console.log('🔗 API URL:', this.production);
      return this.production;
    }
  }
};

// Export the base URL
const API_BASE_URL = API_CONFIG.getApiUrl();

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.API_BASE_URL = API_BASE_URL;
  window.API_CONFIG = API_CONFIG;
}

console.log('✅ API Configuration loaded');
