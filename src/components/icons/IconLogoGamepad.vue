<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="url(#redblack-logo)"
    stroke="#ff2222"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="quirky-gamepad"
  >
    <defs>
      <radialGradient id="redblack-logo" cx="50%" cy="50%" r="80%">
        <stop offset="0%" stop-color="#ff2222" />
        <stop offset="100%" stop-color="#1a1a1a" />
      </radialGradient>
    </defs>
    <rect x="6" y="14" width="36" height="20" rx="10" fill="url(#redblack-logo)" />
    <ellipse cx="24" cy="24" rx="18" ry="10" fill="url(#redblack-logo)" />
    <circle cx="16" cy="24" r="3" fill="#fff" stroke="#ff2222" />
    <circle cx="32" cy="24" r="3" fill="#fff" stroke="#ff2222" />
    <rect x="22" y="20" width="4" height="8" rx="2" fill="#fff" stroke="#ff2222" />
    <circle cx="24" cy="28" r="1.2" fill="#ff2222" />
    <circle cx="20" cy="20" r="1.2" fill="#ff2222" />
    <circle cx="28" cy="20" r="1.2" fill="#ff2222" />
    <!-- Quirky details: smile and eyes -->
    <ellipse cx="24" cy="32" rx="4" ry="1.2" fill="#fff" opacity="0.7" />
    <circle cx="18" cy="18" r="0.7" fill="#fff" />
    <circle cx="30" cy="18" r="0.7" fill="#fff" />
  </svg>
</template>