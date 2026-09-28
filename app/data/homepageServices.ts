export type HomepageService = {
  id: number;
  number: string;
  title: string[];
  description: string;
};

/** Homepage “What We Build & Support” cards — separate from /services catalog. */
export const homepageServices: HomepageService[] = [
  {
    id: 1,
    number: "01",
    title: ["Agentic AI"],
    description:
      "Intelligent AI agents that can reason, plan, and execute complex tasks autonomously. Our solutions automate workflows and help businesses operate more efficiently.",
  },
  {
    id: 2,
    number: "02",
    title: ["Fine-tuning Models"],
    description:
      "We fine-tune AI models to understand your domain, data, terminology, and specific business requirements.",
  },
  {
    id: 3,
    number: "03",
    title: ["Generative AI"],
    description:
      "We develop Generative AI solutions that create text, images, code, and other content tailored to your business.",
  },
  {
    id: 4,
    number: "04",
    title: ["AI Chatbots &", " Autonomous Agents"],
    description:
      "We create intelligent chatbots and autonomous agents that interact naturally with customers and systems.",
  },
  {
    id: 5,
    number: "05",
    title: ["Data Engineering", " & Integration"],
    description:
      "We design reliable data pipelines and integrations that connect your AI with the systems and data you already use.",
  },
  {
    id: 6,
    number: "06",
    title: ["Prototyping", " & MVPs"],
    description:
      "We turn AI ideas into functional prototypes and MVPs designed to validate concepts quickly. Build, test, and iterate faster before investing in a full-scale product.",
  },
];
