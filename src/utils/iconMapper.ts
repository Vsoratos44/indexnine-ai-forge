import {
  Zap,
  Target,
  Settings,
  Sparkles,
  Repeat2,
  LandPlot,
  NotepadText,
  CalendarCheck2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap,
  Target,
  Settings,
  Sparkles,
  Repeat2,
  LandPlot,
  NotepadText,
  CalendarCheck2,
};

export const getIconComponent = (iconName: string) => {
  return iconMap[iconName] || Zap;
};
