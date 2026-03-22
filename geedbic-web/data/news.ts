export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "professional-network",
    title:
      "What Advice Would You Give Someone Who Wants to Build a Professional Network?",
    excerpt:
      "Building a strong professional network is essential for career growth and new opportunities. Thoughtful outreach, consistency, and genuine curiosity make the biggest difference.",
    content: [
      "Building a professional network starts with being genuinely interested in other people. Meaningful relationships are rarely created by asking for favors too early. They grow when you listen well, stay curious, and look for ways to be useful.",
      "Start with the communities you already have access to, including classmates, coworkers, clients, mentors, and local industry events. Introduce yourself clearly, follow up after conversations, and keep notes so you can reconnect in a thoughtful way later.",
      "Networking works best when it is consistent. Share useful ideas, congratulate people on milestones, and check in from time to time without always asking for something. Over time, that consistency builds trust, and trust creates opportunity.",
    ],
    category: "Business",
    author: "Gemechis Ejeta",
    date: "August 2023",
  },
  {
    slug: "marketing-101",
    title: "Marketing 101",
    excerpt:
      "Marketing works best when it begins with care for the customer. Strategy and analytics matter, but understanding people is the foundation.",
    content: [
      "Marketing is not just promotion. It is the full experience of understanding what people need, communicating clearly, and delivering value consistently.",
      "The strongest marketers ask questions before they make assumptions. They pay close attention to customer frustrations, motivations, and expectations. Those insights help businesses build products and messages that actually connect.",
      "When marketing is rooted in empathy and clarity, analytics become more useful because they are measuring a strategy that already reflects real customer needs.",
    ],
    category: "Marketing",
    author: "Gemechis Ejeta",
    date: "April 2023",
  },
  {
    slug: "biggest-marketing-error",
    title: "Biggest Marketing Error in History: The PepsiCo Case",
    excerpt:
      "A famous promotion became a lesson in risk, responsibility, and the hidden cost of poorly controlled campaigns.",
    content: [
      "One of the biggest lessons in marketing history is that large campaigns can create large consequences when details are not controlled carefully. Promotions may attract attention quickly, but they can also damage trust if execution fails.",
      "The PepsiCo case is often discussed because it shows how public excitement can turn into public anger when expectations are mishandled. Marketing is not only about visibility. It is also about accountability.",
      "Every campaign should be tested against operational risk, legal clarity, and customer impact. A good idea is only good if the organization can deliver it safely and responsibly.",
    ],
    category: "Marketing",
    author: "Gemechis Ejeta",
    date: "August 2023",
  },
  {
    slug: "self-confidence",
    title: "Self Confidence: The Foundation of Success",
    excerpt:
      "Confidence and persistence shape how we respond to setbacks, growth, and opportunity.",
    content: [
      "Self-confidence does not mean pretending to be fearless. It means trusting that you can continue learning, adjusting, and moving forward even when things feel uncertain.",
      "People who build confidence often do it through action. They prepare, they practice, and they keep showing up. That repeated effort becomes evidence that they can handle challenges.",
      "Confidence also influences leadership. When people believe in their ability to contribute, they communicate more clearly, make better decisions, and recover faster from mistakes.",
    ],
    category: "Social",
    author: "Gemechis Ejeta",
    date: "September 2022",
  },
  {
    slug: "inclusive-workplace",
    title: "Build an Inclusive Workplace",
    excerpt:
      "Inclusive teams perform better when people feel respected, heard, and supported across every level of the organization.",
    content: [
      "Inclusion is not a slogan. It is the day-to-day experience of whether people feel safe contributing ideas, raising concerns, and participating fully in the work.",
      "Organizations create stronger workplaces when they design fair processes for hiring, growth, communication, and feedback. Small behaviors from leaders often shape whether inclusion feels real.",
      "A healthier workplace improves trust, retention, and collaboration. That makes inclusion both a human priority and a business priority.",
    ],
    category: "Business",
    author: "Gemechis Ejeta",
    date: "August 2023",
  },
  {
    slug: "business-consultancy-planning",
    title: "Why Business Consultancy Requires Planning and Research",
    excerpt:
      "Consultancy work creates value when it is grounded in evidence, careful planning, and a realistic understanding of the client’s environment.",
    content: [
      "A strong consultancy process begins before implementation. It starts with research, goal-setting, and a clear understanding of the risks, opportunities, and constraints facing the client.",
      "Without planning, businesses may invest time and money in the wrong direction. Research helps leaders weigh possible outcomes, reduce avoidable harm, and focus on decisions that are more likely to produce value.",
      "Good consulting turns complexity into practical next steps. It connects strategy with the realities of operations, markets, and people.",
    ],
    category: "Business",
    author: "Gemechis Ejeta",
    date: "August 2023",
  },
  {
    slug: "how-to-start-a-private-business",
    title: "How Do You Start a Private Business?",
    excerpt:
      "Starting a business takes more than enthusiasm. It requires research, patience, discipline, and a realistic view of the market.",
    content: [
      "Starting a private business can be rewarding, but it is rarely effortless. Before launching, founders should study the market, understand costs, and test whether there is a real customer need.",
      "Successful businesses often begin with a simple model, strong execution, and careful learning. Owners need to pay attention to operations, cash flow, legal requirements, and customer feedback from the beginning.",
      "The more realistic your preparation is, the more flexible and resilient your business can become over time.",
    ],
    category: "Business",
    author: "Gemechis Ejeta",
    date: "August 2023",
  },
  {
    slug: "marketing-is-everything",
    title: "Marketing Is Everything",
    excerpt:
      "Marketing is not a department alone. It includes every action that shapes how customers discover, experience, and remember a business.",
    content: [
      "Marketing includes every interaction that influences a customer relationship. That means service quality, follow-up, communication, reputation, and even small details such as thank-you messages can shape perception.",
      "When teams understand marketing this way, they stop treating it as only advertising. They begin to align operations, sales, support, and product quality around customer experience.",
      "That broader view helps companies build stronger trust and longer-lasting relationships with the people they serve.",
    ],
    category: "Marketing",
    author: "Gemechis Ejeta",
    date: "August 2023",
  },
];
