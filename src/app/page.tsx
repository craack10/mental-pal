'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter()
  return (
    <div className="h-lvh flex flex-col items-center justify-end md:justify-center">
      <div className='flex flex-col gap-6 items-center'>
        <div className='font-medium text-2xl'>Need someone to talk to ?</div>
        <div className='font-light text-lg text-[#9D9D9D] text-center'>Click the button for a life changing experience</div>
        <Button className='bg-[#BF9AFF] w-full h-10 rounded-xl md:w-32' onClick={() => router.push("./chat")}>Get Started</Button>
      </div>
    </div>
  );
}
