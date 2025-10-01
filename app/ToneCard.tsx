// ToneCard.tsx
import { Card } from "@/components/ui/card";

export function ToneCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </Card>
  );
}
