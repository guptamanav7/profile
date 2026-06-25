document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Toggle Setup ---
  const themeToggleBtn = document.querySelector('[data-testid="button-theme-toggle"]');
  const themeToggleContainer = document.querySelector(".theme-toggle-container");
  const contentContainer = document.querySelector(".content-container");

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  let isDark = getInitialTheme();

  const updateTheme = (dark, animate = true) => {
    const root = document.documentElement;
    if (!animate) {
      root.style.setProperty("transition", "none");
    }

    if (dark) {
      root.classList.add("dark");
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-label", "Switch to light mode");
        // Set Sun SVG
        themeToggleBtn.innerHTML = `
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      }
    } else {
      root.classList.remove("dark");
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-label", "Switch to dark mode");
        // Set Moon SVG
        themeToggleBtn.innerHTML = `
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 15.07A9.004 9.004 0 0 1 8.93 2.25 9 9 0 1 0 21.75 15.07z"></path>
          </svg>
        `;
      }
    }

    if (!animate) {
      // Force repaint then restore transitions
      root.offsetHeight;
      root.style.removeProperty("transition");
    }

    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  // Initialize theme (without transition animation for instant load)
  updateTheme(isDark, false);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      isDark = !isDark;
      updateTheme(isDark, true);
    });
  }

  // --- PDF Print Trigger ---
  const downloadPdfBtn = document.querySelector('[data-testid="button-download-pdf"]');
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // --- Email Copy to Clipboard ---
  const emailBtn = document.querySelector('[data-testid="link-email"]');
  if (emailBtn) {
    const tooltip = emailBtn.querySelector("span");
    emailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("contact@guptamanav.me").then(() => {
        if (tooltip) {
          tooltip.textContent = "Copied!";
          setTimeout(() => {
            tooltip.textContent = "Email";
          }, 2000);
        }
      });
    });
  }

  // --- Persistent Header Active Section ---
  const headerLinks = Array.from(document.querySelectorAll(".site-header-nav a"));
  const sectionLinks = headerLinks
    .map((link) => {
      const id = link.getAttribute("href")?.replace("#", "");
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const setActiveHeaderLink = (activeLink) => {
    headerLinks.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if (sectionLinks.length) {
    const updateActiveHeaderLink = () => {
      const headerOffset = 180;
      const current = sectionLinks.reduce((active, item) => {
        const distance = item.section.getBoundingClientRect().top - headerOffset;
        return distance <= 0 ? item : active;
      }, sectionLinks[0]);

      setActiveHeaderLink(current.link);
    };

    sectionLinks.forEach(({ link, section }) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", link.getAttribute("href"));
        setActiveHeaderLink(link);
      });
    });

    updateActiveHeaderLink();
    window.addEventListener("scroll", updateActiveHeaderLink, { passive: true });
    window.addEventListener("resize", updateActiveHeaderLink);
  }

  // --- Entry Reveal & Scroll Stagger Animations ---
  // Setup intersection observer for scroll animations
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px 0px -10% 0px", // triggers slightly before entering viewport fully
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        self.unobserve(entry.target); // Animates only once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".fade-in-section");

  // Determine initial elements visible on screen and animate them with a stagger delay
  let staggerDelay = 150;
  let initialDelay = 250;

  animatedElements.forEach((el) => {
    // If the element is near the top of the page, trigger immediately with stagger delay
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => {
        el.classList.add("is-visible");
      }, initialDelay);
      initialDelay += staggerDelay;
    } else {
      // Otherwise, observe for scroll entry
      observer.observe(el);
    }
  });
});
