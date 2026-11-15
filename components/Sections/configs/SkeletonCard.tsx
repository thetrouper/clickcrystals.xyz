import { Card, CardContent } from '@/components/ui/card';

export default function SkeletonCard() {
  return (
    <Card className="cursor-pointer transition-colors flex flex-col animate-pulse bg-[#14213A] border-[#276CB0]/40">
      <CardContent className="h-[200px] flex items-center justify-center text-muted-foreground/20 p-3"></CardContent>
    </Card>
  );
}
