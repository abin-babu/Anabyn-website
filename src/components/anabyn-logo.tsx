import Image from 'next/image';
import { cn } from '@/lib/utils';

export function AnabynLogo({
    className,
}: {
    className?: string;
}) {
    return (
        <div className={cn("relative", className)}>
            <Image
                src="/images/logo.png"
                alt="Anabyn Global Ventures LLP Logo"
                fill
                sizes="200px"
                className="object-contain"
            />
        </div>
    );
}
