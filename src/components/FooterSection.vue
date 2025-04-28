<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <!-- Simplified Logo for Footer -->
          <div class="logo">
            <div class="logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#ff2222"
                stroke="#1a1a1a"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-gamepad-2"
              >
                <line x1="6" x2="10" y1="11" y2="11" />
                <line x1="8" x2="8" y1="9" y2="13" />
                <line x1="15" x2="15.01" y1="12" y2="12" />
                <line x1="18" x2="18.01" y1="10" y2="10" />
                <path
                  d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z"
                />
              </svg>
            </div>
            <span class="logo-text">KraKen</span>
          </div>
          <p>Your ultimate destination for game credits & top-ups.</p>
        </div>
        <div class="footer-links-minimal">
          <div class="footer-column">
            <h3>Quick Links</h3>
            <a href="#">Shop</a>
            <a href="#">Support</a>
            <a href="#">Gift Cards</a>
          </div>
          <div class="footer-column">
            <h3>Legal</h3>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Refunds</a>
          </div>
          <div class="footer-column">
            <h3>Connect</h3>
            <div class="social-links-inline">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                  />
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                  />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 GameVault. All rights reserved.</p>
        <!-- Optional: Add payment icons or other badges here -->
      </div>
    </div>
  </footer>
</template>

<script setup>
// No data needed for this component
</script>

<style scoped>
@import '../assets/styles/components.css';

.footer {
  background: #1a1a1a; /* Dark base */
  color: #ccc; /* Lighter text for readability */
  padding: 3rem 0 1.5rem;
  border-radius: 32px 32px 0 0; /* Keep the top rounding */
  box-shadow: 0 -6px 24px rgba(0, 0, 0, 0.2); /* Subtle top shadow */
  margin-top: 80px; /* Increased spacing */
  width: 100%; /* Full width for modern feel */
  position: relative;
  overflow: hidden;
}

/* Optional: Add a subtle gradient glow at the top */
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #ff2222 0%, #1a1a1a 50%, #ff2222 100%);
  opacity: 0.6;
  filter: blur(3px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-main {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  justify-content: space-between;
}

.footer-brand {
  flex: 1 1 300px; /* Allow shrinking but prefer 300px */
}

.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.logo-icon svg {
  filter: drop-shadow(0 0 8px rgba(255, 34, 34, 0.4));
}

.logo-text {
  font-family: 'Bytesized', sans-serif; /* Match navbar if needed */
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
}

.footer-brand p {
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.6;
  max-width: 300px;
}

.footer-links-minimal {
  flex: 2 1 500px; /* Allow shrinking but prefer 500px */
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: flex-end;
}

.footer-column {
  min-width: 120px;
}

.footer-column h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.3rem;
}

/* Underline effect for headings */
.footer-column h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2.5px;
  background: #ff2222;
}

.footer-column a {
  display: block;
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
  transition: color 0.2s ease; /* Keep color transition */
  position: relative; /* Needed for the underline pseudo-element */
  padding-bottom: 4px; /* Add some space for the underline */
  overflow: hidden; /* Hide underline initially */
  text-decoration: none; /* Remove default underline */
}

/* Add the underline pseudo-element */
.footer-column a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; /* Match navbar underline height */
  background: #ff2222; /* Match navbar underline color */
  transform: translateX(-101%); /* Start off-screen */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Match navbar transition */
}

.footer-column a:hover {
  color: #ff2222;
  /* transform: translateX(3px); */ /* Remove the old transform */
}

/* Animate the underline on hover */
.footer-column a:hover::after {
  transform: translateX(0);
}

.social-links-inline {
  display: flex;
  gap: 0.8rem;
  margin-top: 0.2rem; /* Align with links */
}

.social-link {
  display: flex; /* Ensure flex is active */
  align-items: center; /* Vertically center */
  justify-content: center; /* Horizontally center */
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ccc; /* Default icon color (inherited by stroke/fill) */
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    /* Added color transition */ transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Style the SVG directly for consistent color */
.social-link svg {
  stroke: currentColor; /* Inherit color from parent .social-link */
  transition: stroke 0.2s ease; /* Smooth color transition for SVG */
}

.social-link:hover {
  background-color: #ff2222;
  color: #fff; /* Set parent color to white on hover */
  transform: scale(1.15) rotate(-8deg); /* Quirky animation */
}

/* Ensure SVG stroke remains white on hover by inheriting the parent's white color */
.social-link:hover svg {
  stroke: #fff; /* Explicitly set stroke to white on hover */
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.6;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: 2rem;
  }
  .footer-links-minimal {
    justify-content: flex-start;
    gap: 2rem;
  }
  .footer-column {
    min-width: 140px; /* Allow slightly more space */
  }
  .footer-bottom {
    padding-top: 1rem;
  }
}
</style>
