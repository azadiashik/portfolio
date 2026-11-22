// EDIT THIS FILE (or use Sanity) to update the site. Only facts from the CV are included.
export const site = {
  name: "Md. Ashikul Islam",
  headline: "Building and stress-testing valuation models for Bangladesh’s capital markets",
  subtitle: "Investment Banking Analyst-in-Training",
  intro: "I’m a Finance graduate of the University of Dhaka working in investment banking at BRAC EPL Investments. I build three-statement, DCF and multiples-based models, review startup financials, and analyze regulatory shifts such as Bangladesh Bank’s IFRS 9 ECL roadmap.",
  email: "mdashikulislam309@gmail.com",
  linkedin: "https://www.linkedin.com/in/mdashikul-islam/",
  location: "Dhaka, Bangladesh",
  cv: "/Md_Ashikul_Islam_CV.pdf",
  url: "https://YOUR-DOMAIN.com", // change after you buy a domain
  about: [
    "I studied BBA in Finance at the University of Dhaka, with a focus on financial statement analysis, equity valuation and data analytics.",
    "At BRAC EPL Investments Limited I work on live investment banking assignments: reviewing a startup’s financial model, building an independent valuation, analyzing Bangladesh Bank’s IFRS 9 ECL roadmap and modelling a Green Bond for investors.",
    "I want to build a career in investment banking and equity research in Bangladesh. Earlier work leading a five-person SEO and social media team taught me to deliver to deadlines.",
  ],
};
export const experience = [
  { org: "BRAC EPL Investments Limited", role: "Investment Banking Intern", period: "October 15 – Present", points: [
    "Reviewed the financial model of a Bangladeshi telecom-services startup raising growth equity; traced capex, working-capital and funding logic and flagged overstated cash flow, including a receivables build understated by about BDT 2 crore in FY27.",
    "Built an independent valuation of the startup in Excel: three-scenario FCFF DCF, trading comparables, venture-capital method and liquidation floor, with a Bangladesh WACC from the BGTB yield and country risk premium.",
    "Analyzed Bangladesh Bank’s IFRS 9 ECL roadmap (BRPD Circular No. 03/2025): mapped the 2025–2027 implementation phases and assessed the provisioning and capital implications for banks, supported by sector NPL data.",
    "Developed a 17-sheet Excel model to analyze and market BRAC Bank’s Green Bond to investors, benchmarked against T-bills, T-bonds, FDRs and corporate and subordinated bonds, with scenarios and a source log." ] },
  { org: "MiniSpark Digital", role: "SEO-SMM Project Manager (Part-Time)", period: "2023 – 2025", points: [
    "Led a 5-member team across SEO and Social Media projects, managing client strategy, execution, quality control and delivery with 100% on-time completion.",
    "Conducted competitor research, SEO audits and campaign analysis to identify growth opportunities and deliver data-driven strategies." ] },
];
export type Project = { slug: string; title: string; category: string; summary: string; objective: string; methodology: string[]; outputs: string[]; tools: string[]; context: string };
export const projects: Project[] = [
  { slug: "telecom-startup-valuation", title: "Independent valuation of a telecom-services startup", category: "Financial Modelling & Valuation", context: "BRAC EPL Investments",
    summary: "Four-method valuation of a Bangladeshi startup raising growth equity.",
    objective: "Form an independent view of value for a startup raising growth equity.",
    methodology: ["Three-scenario FCFF DCF", "Trading comparables", "Venture-capital method", "Liquidation floor", "Bangladesh WACC built from the BGTB yield and a country risk premium"],
    outputs: ["Excel valuation model across four methods"], tools: ["Excel"] },
  { slug: "startup-model-review", title: "Financial model review of a growth-equity raise", category: "Corporate Finance", context: "BRAC EPL Investments",
    summary: "Traced capex, working-capital and funding logic in a startup’s model.",
    objective: "Test whether the startup’s model could support the raise.",
    methodology: ["Traced capex, working-capital and funding logic through the model"],
    outputs: ["Flagged overstated cash flow, including a receivables build understated by about BDT 2 crore in FY27"], tools: ["Excel"] },
  { slug: "brac-bank-green-bond-model", title: "BRAC Bank Green Bond investor model", category: "Investment Analysis", context: "BRAC EPL Investments",
    summary: "17-sheet Excel model to analyze and market the bond to investors.",
    objective: "Show investors how the Green Bond compares with alternative fixed-income options.",
    methodology: ["Benchmarked against T-bills, T-bonds, FDRs, and corporate and subordinated bonds", "Scenario analysis", "Source log"],
    outputs: ["17-sheet Excel model"], tools: ["Excel"] },
  { slug: "ifrs-9-ecl-roadmap", title: "Bangladesh Bank IFRS 9 ECL roadmap analysis", category: "Banking & Financial Analysis", context: "BRAC EPL Investments",
    summary: "Provisioning and capital implications of BRPD Circular No. 03/2025.",
    objective: "Assess what the ECL transition means for banks’ provisioning and capital.",
    methodology: ["Mapped the 2025–2027 implementation phases", "Assessed provisioning and capital implications", "Supported by sector NPL data"],
    outputs: ["Regulatory roadmap and implications analysis"], tools: ["Excel"] },
  { slug: "city-bank-valuation", title: "City Bank equity valuation", category: "Equity Research", context: "Independent project",
    summary: "Integrated forecasts and valuation to estimate intrinsic equity value.",
    objective: "Estimate the intrinsic equity value of City Bank.",
    methodology: ["Three-statement modelling", "DCF", "Multiples"], outputs: ["Integrated financial forecasts and valuation model"], tools: ["Excel"] },
  { slug: "brac-bank-equity-risk", title: "BRAC Bank stock analytics and equity risk analysis", category: "Equity Research", context: "Independent project",
    summary: "Beta, correlation and CAPM estimated with Python OLS regression.",
    objective: "Assess the stock’s market risk.",
    methodology: ["OLS regression to estimate beta", "Correlation analysis", "CAPM"], outputs: ["Python analysis of market risk"], tools: ["Python", "Pandas", "NumPy"] },
  { slug: "sales-dashboard", title: "Sales performance dashboard and forecasting", category: "Business Analysis", context: "Independent project",
    summary: "Interactive Power BI dashboard with KPI tracking and sales forecasts.",
    objective: "Give a single view of sales performance.",
    methodology: ["KPI tracking", "Regional analysis", "Sales forecasting"], outputs: ["Interactive Power BI dashboard"], tools: ["Power BI", "Power Query"] },
];
export const skills = [
  { group: "Valuation & financial modelling", items: ["Three-statement models", "DCF", "DDM", "Multiples", "Scenario and sensitivity analysis"] },
  { group: "Financial analysis", items: ["Financial statement analysis", "Equity valuation", "Investment assessment", "IFRS exposure", "Regulatory capital assessment"] },
  { group: "Data analysis", items: ["Power BI", "Power Query", "Python (Pandas, NumPy)", "Data visualization"] },
  { group: "Software & tools", items: ["Excel", "PowerPoint", "MS Office", "Google Workspace", "Canva"] },
];
export const education = [
  { school: "University of Dhaka", degree: "BBA, Finance", score: "CGPA 3.30 / 4.00" },
  { school: "Nizampur Govt. College", degree: "HSC, Business Studies", score: "GPA 4.58 / 5.00" },
  { school: "Mirsarai Govt. High School", degree: "SSC, Business Studies", score: "GPA 4.50 / 5.00" },
];
export const certifications = ["Data Analysis and Visualization with Power BI", "Excel Skills for Business: Essentials", "Fundamentals of Financial Analysis", "Business English: Networking", "Investment Risk Management", "Stock Valuation with Dividend Discount Model", "Discounted Cash Flow Modeling", "Python for Data Analysis: Pandas & NumPy"];
export const achievements = [
  { title: "Competitions", text: "Semifinalist, NexTor (DCF & Comparable Valuation) and Vitalizers (Go-to-Market). Participant, CFA Research Challenge and Over The Wall." },
  { title: "Campus Ambassador, English Olympiad", text: "Supported two nationwide seasons engaging 50,000+ students." },
  { title: "General Member, DU Career Club", text: "Co-organized a CV workshop and career seminar for 100+ attendees." },
  { title: "Executive, Voice of Business", text: "Published feature interviews and cultural bulletins for the club magazine." },
];
export type Article = { slug: string; title: string; date: string; summary: string; body: string };
export const articles: Article[] = []; // add articles in Sanity, or here
