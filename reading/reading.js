const categories = [
  "Finance & Investing",
  "Health & Longevity",
  "Leadership & Business",
  "Productivity & Habits",
  "Communication & Negotiation",
  "Biography",
  "Psychology & Behavior",
  "Reference"
];

const themes = [
  {
    title: "Financial independence",
    body: "Books that emphasize compounding, behavior, and intentional spending."
  },
  {
    title: "Better decision-making",
    body: "Books that help separate signal from noise."
  },
  {
    title: "Health as a foundation",
    body: "Books focused on longevity, metabolic health, fasting, and prevention."
  },
  {
    title: "Systems thinking",
    body: "Books about operations, constraints, incentives, and organizational scale."
  },
  {
    title: "Human communication",
    body: "Books about empathy, negotiation, conflict, and emotional connection."
  }
];

const books = [
  { title: "The Richest Man in Babylon", author: "George S. Clason", year: 1926, asin: "0451205367", isbn: "978-0451205360", category: "Finance & Investing", summary: "Through timeless parables set in ancient Babylon, Clason reveals the secrets to acquiring money, keeping money, and making money earn more money — principles as relevant today as when they were first written.", why: "It reinforces the value of simple rules followed consistently. For me, it is a reminder that financial independence begins with behavior before it becomes strategy." },
  { title: "Rich Dad Poor Dad", subtitle: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not", author: "Robert T. Kiyosaki", year: 1997, asin: "1612680194", isbn: "978-1612680194", category: "Finance & Investing", summary: "Kiyosaki challenges conventional wisdom about money using contrasting lessons from his rich dad and poor dad, arguing that financial literacy — not a high salary — is the key to lasting wealth.", why: "It pushed me to think more deliberately about ownership, financial education, and building optionality. I value books that change the questions I ask, and this one does that." },
  { title: "The Intelligent Investor", subtitle: "Rev. Ed.", author: "Benjamin Graham", year: 1949, asin: "0060555661", isbn: "978-0060555665", category: "Finance & Investing", summary: "The definitive guide to value investing. Graham's timeless principles for analyzing stocks and building a long-term portfolio remain as relevant in today's volatile markets as when first published.", why: "The book connects investing to judgment. I appreciate its insistence that risk management, humility, and process matter more than prediction." },
  { title: "The Intelligent Investor, Third Revised Edition", subtitle: "The Definitive Book on Value Investing", author: "Benjamin Graham & Jason Zweig", year: 2024, asin: "0063423529", isbn: "978-0063423527", category: "Finance & Investing", summary: "The 2024 Third Revised Edition updates Graham's value-investing classic with Jason Zweig's commentary, preserving the core principles of margin of safety, discipline, and long-term judgment.", why: "It keeps a foundational investing text current while preserving the temperament and risk-management lessons that make the original so durable." },
  { title: "The Only Investment Guide You'll Ever Need", subtitle: "Revised Edition", author: "Andrew Tobias", year: 2016, asin: "0544781937", isbn: "978-0544781931", category: "Finance & Investing", summary: "A witty, practical guide to personal finance covering spending, saving, insurance, and investing — making the complex world of money management accessible to everyone.", why: "I like its bias toward clarity over complexity. It reflects a principle I admire in work as well: make the right behavior easier to understand and easier to repeat." },
  { title: "The Psychology of Money", subtitle: "Timeless Lessons on Wealth, Greed, and Happiness", author: "Morgan Housel", year: 2020, asin: "0857197681", isbn: "978-0857197689", category: "Finance & Investing", summary: "Housel explores the strange ways people think about money through 19 short stories, showing how success with wealth is less about intelligence and more about behavior.", why: "It aligns with how I think about leadership and operations: human behavior is usually the hardest part of any system." },
  { title: "Die with Zero", subtitle: "Getting All You Can from Your Money and Your Life", author: "Bill Perkins", year: 2020, asin: "0358099765", isbn: "978-0358099765", category: "Finance & Investing", summary: "A provocative argument for living fully rather than hoarding wealth — making the case that the goal of life is to maximize experiences, not the number in your bank account at death.", why: "It balances the discipline of saving with the wisdom of intentional living." },
  { title: "Same as Ever", subtitle: "A Guide to What Never Changes", author: "Morgan Housel", year: 2023, asin: "0593332709", isbn: "978-0593332702", category: "Finance & Investing", summary: "While the future is unpredictable, human behavior is remarkably consistent. Housel identifies the timeless patterns that shape history, markets, and personal success.", why: "It helps me slow down and look for durable truths." },
  { title: "The Cancer Code", subtitle: "A Revolutionary New Understanding of a Medical Mystery", author: "Dr. Jason Fung", year: 2020, asin: "0062894005", isbn: "978-0062894007", category: "Health & Longevity", summary: "Dr. Fung presents an evolutionary theory of cancer, reframing it as a survival program gone wrong and exploring new paradigms for prevention and treatment beyond conventional approaches.", why: "I appreciate books that make complex science understandable without losing the bigger picture." },
  { title: "The Diabetes Code", subtitle: "Prevent and Reverse Type 2 Diabetes Naturally", author: "Dr. Jason Fung", year: 2018, asin: "1771642653", isbn: "978-1771642651", category: "Health & Longevity", summary: "Dr. Fung argues that Type 2 diabetes is a dietary disease — not a permanent condition — and lays out a practical plan using diet and intermittent fasting to reverse it naturally.", why: "It reinforces the importance of understanding root causes." },
  { title: "The Obesity Code", subtitle: "Unlocking the Secrets of Weight Loss", author: "Dr. Jason Fung", year: 2016, asin: "1771641258", isbn: "978-1771641258", category: "Health & Longevity", summary: "Dr. Fung dismantles common weight-loss myths and explains how insulin — not calories — is the root hormonal driver of excess weight and why most diets fail.", why: "It helped sharpen my thinking about health beyond willpower." },
  { title: "Complete Guide to Fasting", subtitle: "Heal Your Body Through Intermittent, Alternate-Day, and Extended Fasting", author: "Dr. Jason Fung & Jimmy Moore", year: 2016, asin: "1628600012", isbn: "978-1628600018", category: "Health & Longevity", summary: "A comprehensive resource covering the science, history, and practice of fasting — from intermittent to extended — with practical protocols and evidence-based answers to common concerns.", why: "I’m interested in practices that are simple, measurable, and behavior-changing." },
  { title: "Outlive", subtitle: "The Science and Art of Longevity", author: "Peter Attia MD & Bill Gifford", year: 2023, asin: "0593236599", isbn: "978-0593236598", category: "Health & Longevity", summary: "Dr. Attia presents a proactive, evidence-based approach to living longer and better, focusing on exercise, nutrition, sleep, and emotional health as the four pillars of longevity.", why: "It matches my belief that health is infrastructure." },
  { title: "The Circadian Code", subtitle: "Lose Weight, Supercharge Your Energy, and Transform Your Health from Morning to Midnight", author: "Satchin Panda PhD", year: 2019, asin: "1684412927", isbn: "978-1684412921", category: "Health & Longevity", summary: "Pioneering researcher Satchin Panda explains how aligning eating, sleeping, and exercise to your circadian clock can optimize metabolism, brain function, and overall health.", why: "It connects health to daily systems, rhythm, and repeatable behavior." },
  { title: "Saving My Neck", subtitle: "A Doctor's East/West Journey Through Cancer", author: "Timothy McCall", year: 2019, asin: "B07KJDNDZP", isbn: "978-1733652100", category: "Health & Longevity", summary: "A physician diagnosed with a rare cancer documents his journey integrating conventional oncology with yoga, Ayurveda, and mind-body practices — a compelling account of healing across paradigms.", why: "It is a reminder that health decisions often require both evidence and personal agency." },
  { title: "Principles", subtitle: "Life and Work", author: "Ray Dalio", year: 2017, asin: "1501124021", isbn: "978-1501124020", category: "Leadership & Business", summary: "Bridgewater founder Ray Dalio shares the principles behind his extraordinary success, emphasizing radical transparency, systematic decision-making, and learning from failure at every level.", why: "I am drawn to operating models that scale judgment." },
  { title: "Measure What Matters", subtitle: "How Google, Bono, and the Gates Foundation Rock the World with OKRs", author: "John Doerr", year: 2018, asin: "0525536221", isbn: "978-0525536222", category: "Leadership & Business", summary: "The definitive guide to OKRs — Objectives and Key Results. Doerr explains how this goal-setting system drives focus, alignment, and accountability in organizations of every size.", why: "Good teams need ambition, but they also need shared language for what progress actually means." },
  { title: "The Goal", subtitle: "A Process of Ongoing Improvement", author: "Eliyahu M. Goldratt & Jeff Cox", year: 1984, asin: "0884271951", isbn: "978-0884271956", category: "Leadership & Business", summary: "A business novel that introduces the Theory of Constraints, following a plant manager who discovers that identifying and resolving bottlenecks is the key to unlocking dramatic improvement.", why: "It is one of the clearest books on operations thinking." },
  { title: "Good to Great", subtitle: "Why Some Companies Make the Leap...And Others Don't", author: "Jim Collins", year: 2001, asin: "0066620996", isbn: "978-0066620992", category: "Leadership & Business", summary: "Based on a five-year research study, Collins identifies the factors that enabled ordinary companies to make the leap to outstanding, sustained performance — and what held others back.", why: "The book reinforces that durable excellence usually comes from consistency, humility, focus, and momentum." },
  { title: "The Effective Executive", subtitle: "The Definitive Guide to Getting the Right Things Done", author: "Peter F. Drucker", year: 1967, asin: "0060833459", isbn: "978-0060833459", category: "Leadership & Business", summary: "Drucker's classic explores what effectiveness means for knowledge workers and how to develop the five practices and eight habits that enable executives to be genuinely productive.", why: "It sharpens the difference between activity and effectiveness." },
  { title: "The Toyota Way", subtitle: "14 Management Principles from the World's Greatest Manufacturer", author: "Jeffrey K. Liker", year: 2004, asin: "1260468518", isbn: "978-1260468519", category: "Leadership & Business", summary: "An in-depth look at the operational philosophy behind Toyota's legendary manufacturing system — a model for continuous improvement, respect for people, and long-term thinking.", why: "It shows how operational excellence is built into culture and habits." },
  { title: "Unreasonable Hospitality", subtitle: "The Remarkable Power of Giving People More Than They Expect", author: "Will Guidara", year: 2022, asin: "0593418573", isbn: "978-0593418574", category: "Leadership & Business", summary: "Former restaurateur Will Guidara reveals how Eleven Madison Park became the world's best restaurant by making every guest feel like the most important person in the room.", why: "Great systems should create room for judgment, empathy, and moments that feel personal." },
  { title: "Atomic Habits", subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones", author: "James Clear", year: 2018, asin: "0735211299", isbn: "978-0735211292", category: "Productivity & Habits", summary: "Clear presents a proven system for building good habits and breaking bad ones, showing how tiny 1% improvements compound into remarkable results over time.", why: "It is one of the clearest books on turning intent into action." },
  { title: "The 4-Hour Workweek", subtitle: "Escape 9-5, Live Anywhere, and Join the New Rich", author: "Tim Ferriss", year: 2007, asin: "0307465357", isbn: "978-0307465351", category: "Productivity & Habits", summary: "Ferriss challenges the deferred life plan and presents a step-by-step guide to designing a luxury lifestyle in the present through automation, delegation, and ruthless prioritization.", why: "It asks a strong question: what would I change if time, energy, and attention were treated as design constraints?" },
  { title: "Never Split the Difference", subtitle: "Negotiating as if Your Life Depended on It", author: "Chris Voss & Tahl Raz", year: 2016, asin: "0062407805", isbn: "978-0062407801", category: "Communication & Negotiation", summary: "Former FBI hostage negotiator Chris Voss shares nine field-tested negotiation principles — techniques that work in high-stakes business deals, salary discussions, and everyday conversations.", why: "In leadership, partnerships, and conflict, people move when they feel understood, not cornered." },
  { title: "Crucial Communication", subtitle: "Tools for Navigating High-Stakes Conversations", author: "Kerry Patterson, Joseph Grenny, Ron McMillan & Al Switzler", year: 2013, asin: "0071830987", isbn: "978-0071830980", category: "Communication & Negotiation", summary: "Practical tools for navigating the most difficult workplace conversations — including how to address violated expectations, broken commitments, and accountability challenges with clarity and care.", why: "Communication is an operating system for teams." },
  { title: "Crucial Conversations", subtitle: "Tools for Talking When Stakes Are High", author: "Kerry Patterson, Joseph Grenny, Ron McMillan & Al Switzler", year: 2011, asin: "1260474186", isbn: "978-1260474183", category: "Communication & Negotiation", summary: "A landmark guide for navigating high-stakes conversations — covering how to stay in dialogue, share facts without triggering defensiveness, and turn charged disagreements into productive outcomes.", why: "Leadership often comes down to the conversations people avoid." },
  { title: "Nonviolent Communication", subtitle: "A Language of Life", author: "Marshall B. Rosenberg PhD", year: 2003, asin: "189200528X", isbn: "978-1892005281", category: "Communication & Negotiation", summary: "Rosenberg presents a transformative approach to communication that centers feelings and needs over judgments — enabling compassionate connection even in the most charged interpersonal situations.", why: "It matters because it improves both listening and speaking." },
  { title: "The 5 Love Languages", subtitle: "The Secret to Love that Lasts", author: "Gary Chapman", year: 1992, asin: "080241270X", isbn: "978-0802412706", category: "Communication & Negotiation", summary: "Chapman identifies five distinct ways people express and receive love, showing how understanding your partner's primary language transforms relationships and deepens lasting connection.", why: "Understanding how people experience support is central to empathy, leadership, and trust." },
  { title: "Elon Musk", author: "Walter Isaacson", year: 2023, asin: "1982181281", isbn: "978-1982181284", category: "Biography", summary: "Based on three years of unprecedented access, Isaacson traces how Musk's turbulent childhood shaped a relentless drive to transform transportation, energy, and humanity's future in space.", why: "Biographies are useful because they reveal tradeoffs, not just outcomes." },
  { title: "Careless People", subtitle: "A Cautionary Tale of Power, Greed, and Lost Idealism", author: "Sarah Wynn-Williams", year: 2025, asin: "1250391237", isbn: "978-1250391230", category: "Biography", summary: "A former Facebook executive offers a searing insider account of the social network's rise, exposing the decision-making culture that consistently prioritized growth over societal consequences.", why: "It is a case study in power, incentives, and governance at scale." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, asin: "0374533555", isbn: "978-0374533557", category: "Psychology & Behavior", summary: "Nobel laureate Kahneman explores the two systems that drive thought — fast intuitive System 1 and slower deliberate System 2 — revealing the biases and heuristics that shape every decision we make.", why: "It is foundational for understanding judgment, bias, and decision quality." },
  { title: "The New Oxford American Dictionary", subtitle: "Revised Edition", author: "Erin McKean (Editor)", year: 2005, asin: "0195392884", isbn: "978-0195392883", category: "Reference", summary: "The authoritative American English dictionary with over 350,000 words and phrases, featuring clear current definitions, rich usage examples, and extensive etymological notes.", why: "Clear language is a leadership tool." }
];

const amazonBookUrl = (asin) => `https://www.amazon.com/dp/${asin}`;
const amazonThumbnailUrl = (asin) => `https://m.media-amazon.com/images/P/${asin}.01._SX300_.jpg`;
const sortBooksByTitle = (bookList) => [...bookList].sort((a, b) => a.title.localeCompare(b.title));

const iconForCategory = (category) => ({
  "Finance & Investing": "$",
  "Health & Longevity": "H",
  "Leadership & Business": "L",
  "Productivity & Habits": "P",
  "Communication & Negotiation": "C",
  "Biography": "B",
  "Psychology & Behavior": "Y",
  "Reference": "R"
}[category] || "R");

const CategoryBadge = (category) => `
  <a class="reading-badge" href="#${category.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}" aria-label="Jump to ${category}">
    <span aria-hidden="true">${iconForCategory(category)}</span>
    ${category}
  </a>
`;

const BookCard = (book, index) => `
  <article class="reading-book-card">
    <div class="reading-book-topline">
      <span class="reading-book-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="reading-book-tag">${book.category}</span>
    </div>
    <div class="reading-book-layout">
      <a class="reading-book-cover-link" href="${amazonBookUrl(book.asin)}" target="_blank" rel="noopener noreferrer" aria-label="View ${book.title} on Amazon Kindle">
        <img class="reading-book-cover" src="${amazonThumbnailUrl(book.asin)}" alt="Cover of ${book.title}" loading="lazy" onerror="this.closest('.reading-book-cover-link').classList.add('reading-book-cover-missing')" />
      </a>
      <div class="space-y-3">
        <div class="space-y-1">
          <h3><a class="reading-book-title-link" href="${amazonBookUrl(book.asin)}" target="_blank" rel="noopener noreferrer" aria-label="View ${book.title} on Amazon">${book.title}</a></h3>
          ${book.subtitle ? `<p class="reading-book-subtitle">${book.subtitle}</p>` : ""}
          <p class="reading-book-author">${book.author} · ${book.year}</p>
        </div>
        <p class="reading-book-summary">${book.summary}</p>
        <p class="reading-book-meta">
          <span>ISBN ${book.isbn}</span>
          <span>ASIN ${book.asin}</span>
        </p>
      </div>
    </div>
    <div class="reading-book-why">
      <p class="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">Why it matters to me</p>
      <p>${book.why}</p>
    </div>
  </article>
`;

const ThemeCard = (theme, index) => `
  <article class="reading-theme-card">
    <span class="reading-theme-index">${String(index + 1).padStart(2, "0")}</span>
    <h3>${theme.title}</h3>
    <p>${theme.body}</p>
  </article>
`;

const renderReadingPage = () => {
  const categoryBadges = document.getElementById("category-badges");
  const bookSections = document.getElementById("book-sections");
  const themeCards = document.getElementById("theme-cards");

  if (categoryBadges) {
    categoryBadges.innerHTML = categories.map(CategoryBadge).join("");
  }

  if (bookSections) {
    bookSections.innerHTML = categories.map((category) => {
      const categoryBooks = sortBooksByTitle(books.filter((book) => book.category === category));
      if (!categoryBooks.length) return "";

      const slug = category.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-");
      return `
        <section class="reading-book-category" id="${slug}" aria-labelledby="${slug}-title">
          <div class="reading-category-heading">
            <p class="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">${categoryBooks.length} books</p>
            <h3 id="${slug}-title">${category}</h3>
          </div>
          <div class="reading-book-grid">
            ${categoryBooks.map(BookCard).join("")}
          </div>
        </section>
      `;
    }).join("");
  }

  if (themeCards) {
    themeCards.innerHTML = themes.map(ThemeCard).join("");
  }
};

document.addEventListener("DOMContentLoaded", renderReadingPage);
