import Image from "next/image";
import { 
  MessageSquare, 
  Video, 
  Workflow, 
  Sparkles,
  Globe,
  Smartphone,
  Code,
  Palette,
  Package,
  Monitor,
  Layout,
  Paintbrush,
  RefreshCw,
  FileCode,
  Zap,
  Settings,
  ShoppingCart,
  CreditCard,
  Database,
  Server,
  Cpu,
  Network,
  Shield,
  BarChart3,
  Calendar,
  Bot,
  FileText,
  Layers,
  Users,
  Cloud,
  Wrench,
  Bug
} from "lucide-react";
import { NestedService } from "../../data/servicesSection";

// Icon mapping function
const getServiceIcon = (title: string) => {
  const iconMap: { [key: string]: any } = {
    // AI/GenAI
    "AI Chatbot Integration": MessageSquare,
    "AI-Based Image/Video Analysis": Video,
    "Workflow Automation Tools": Workflow,
    "Recommendation Systems": Sparkles,
    "AI-Powered Web Applications": Globe,
    
    // Mobile
    "Android & iOS Apps": Smartphone,
    "React Native Apps": Code,
    "Cross-Platform Mobile Apps": Smartphone,
    "API Integration for Apps": Network,
    "App UI/UX Design": Palette,
    "App Publishing & Maintenance": Package,
    
    // Web Development
    "Custom Web Design": Paintbrush,
    "Responsive Website Development": Monitor,
    "Landing Pages": Layout,
    "UI/UX Design": Palette,
    "Website Redesign": RefreshCw,
    "Figma/PSD to Website": FileCode,
    "Performance Optimization": Zap,
    "WordPress Website Setup": Settings,
    "Custom Theme Development": Layers,
    "Custom Plugin Development": Code,
    "WooCommerce Store": ShoppingCart,
    "Shopify Store": ShoppingCart,
    "Multi-Vendor Marketplaces": ShoppingCart,
    "Speed Optimization": Zap,
    "Security & Maintenance": Shield,
    "Custom eCommerce Websites": ShoppingCart,
    "Payment Gateway Integration": CreditCard,
    "Product Management Systems": Database,
    "MERN Web Applications": Server,
    "Next.js Full-Stack Apps": Code,
    "REST & GraphQL APIs": Network,
    "Admin Dashboards": BarChart3,
    "Role-Based Authentication Systems": Shield,
    "Real-Time Apps (Chat, Notifications)": MessageSquare,
    "API Integrations": Network,
    
    // Cloud & DevOps
    "Hosting & Deployment": Cloud,
    "Server Setup & Management": Server,
    "CI/CD Integration": Workflow,
    "Website/App Maintenance": Wrench,
    "Bug Fixing & Updates": Bug,
    
    // UI/UX
    "Inventory & POS Systems": Database,
    "CRM / ERP Solutions": BarChart3,
    "Booking & Appointment Systems": Calendar,
    "Business Automation Tools": Bot,
    "Analytics & Reporting Systems": BarChart3,
    "Website UI/UX": Palette,
    "App UI/UX": Palette,
    "Dashboard UX": BarChart3,
    "Wireframing & Prototyping": FileText,
    "Design Systems": Layers,
    
    // Staff Augmentation
    "Onshoring": Users,
    "Offshoring": Globe,
    "Nearshoring": Users,
  };
  
  // Find matching icon
  for (const [key, Icon] of Object.entries(iconMap)) {
    if (title.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(title.toLowerCase())) {
      return Icon;
    }
  }
  
  // Default icon
  return Code;
};

type NestedServiceCardProps = {
  service: NestedService;
  fallbackImage?: string;
};

export default function NestedServiceCard({ service, fallbackImage }: NestedServiceCardProps) {
  const IconComponent = getServiceIcon(service.title);

  return (
    <div className="group flex flex-col sm:flex-row gap-6 sm:gap-16 items-start rounded-2xl bg-background/80 p-6 shadow-sm transition hover:shadow-lg">
      {/* Mobile: Centered icon, then title and description, then image */}
      {/* Desktop: Icon + Text on left, Image on right */}
      
      {/* Left side: Icon + Text (stacked on mobile, side-by-side on desktop) */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start w-full sm:flex-1">
        {/* Icon - left-aligned on mobile and desktop */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <IconComponent className="w-8 h-8" />
          </div>
        </div>
        
        {/* Text content - full width on mobile, flex-1 on desktop */}
        <div className="flex-1 flex flex-col gap-3 w-full sm:w-auto text-left">
          <h3 className="text-2xl font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="text-base text-foreground/70 leading-relaxed text-justify">
            {service.description}
          </p>
        </div>
      </div>
      
      {/* Image - full width on mobile, fixed width on desktop */}
      <div className="flex-shrink-0 w-full sm:w-80">
        <div className="relative w-full aspect-[5/3] rounded-xl overflow-hidden">
          <Image
            src={service.image || fallbackImage || "/services/web-development.jpg"}
            alt={service.title}
            fill
            sizes="(min-width: 640px) 320px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

