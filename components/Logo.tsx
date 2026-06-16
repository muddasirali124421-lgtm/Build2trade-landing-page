import Image from 'next/image';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Build2Trade Logo"
        width={200}
        height={80}
        className="h-10 sm:h-14 md:h-20 w-auto object-contain"
        priority
      />
    </div>
  );
};
