
import { icons } from "../data/icons";

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  return (
    <span className={className}>
      {icons[name]}
    </span>
  );
}
