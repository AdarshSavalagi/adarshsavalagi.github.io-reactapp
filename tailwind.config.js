/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '50': 50,
      },
      colors: {
        'neutralSilver':'#F5f2fa',
        'neutralDFrey':'#4d4d4d',
        'brandPrimary':'#4caf4f',
        'neutralGrey':'#717171',
        'gray-900':'#18191f',
      },
      fontFamily: {
        "body-medium-body-1": "var(--body-medium-body-1-font-family)",
        "body-medium-body-2": "var(--body-medium-body-2-font-family)",
        "body-medium-body-3": "var(--body-medium-body-3-font-family)",
        "body-medium-body-4": "var(--body-medium-body-4-font-family)",
        "body-regular-body-1": "var(--body-regular-body-1-font-family)",
        "body-regular-body-2": "var(--body-regular-body-2-font-family)",
        "body-regular-body-3": "var(--body-regular-body-3-font-family)",
        "body-regular-body-4": "var(--body-regular-body-4-font-family)",
        "heading-headline-1": "var(--heading-headline-1-font-family)",
        "heading-headline-2": "var(--heading-headline-2-font-family)",
        "heading-headline-3": "var(--heading-headline-3-font-family)",
        "heading-headline-4": "var(--heading-headline-4-font-family)",
        "label-medium-label": "var(--label-medium-label-font-family)",
      },
      boxShadow: {
        "shadow-16px": "var(--shadow-16px)",
        "shadow-2px": "var(--shadow-2px)",
        "shadow-4px": "var(--shadow-4px)",
        "shadow-6px": "var(--shadow-6px)",
        "shadow-8px": "var(--shadow-8px)",
      },
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
};
