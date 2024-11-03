'use client';

import { useChat } from 'ai/react';
import { CaretLeft, DotsThreeVertical, PaperPlaneTilt } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge';
import Bot from '@/components/ui/components/conversation/Bot';
import User from '@/components/ui/components/conversation/User';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useScrollToBottom } from '@/components/use-scroll-to-bottom';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { saveToken } from '@/lib/users';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });
  const { data: session } = useSession()
  useEffect(() => {
    saveToken(session?.accessToken);
  }, [])
  const [messageContainerRef, endMessageRef] = useScrollToBottom<HTMLDivElement>()
  return (
    <div className='flex flex-col gap-5 items-center h-[780px] overflow-hidden md:px-96'>
      <div className='w-full flex flex-row justify-between items-center md:justify-center'>
        <CaretLeft size={32} fill='#838383' className='md:hidden' />
        <span className='text-[#838383] font-regular text-xl'>MentalPal.Ai</span>
        <DotsThreeVertical size={32} fill='#838383' className='md:hidden' />
      </div>
      <Badge className='bg-[#D7C0FF]/[.4] h-8 w-24 rounded-2xl flex flex-row text-black font-medium gap-2 justify-center'><div className='w-4 h-4 bg-[#35C716] rounded-full'></div> Online</Badge>
      <div className='flex flex-col gap-5 mb-16 h-[700px] '  >
        <div className='overflow-scroll flex flex-col' ref={messageContainerRef}>
          {messages.map(message => (
            message.role === 'user' ? <User key={message.id} message={message.content} /> : <Bot key={message.id} message={message.content} />
          ))}
          <div ref={endMessageRef} />
        </div>
      </div>
      <form className='fixed bottom-10 w-full flex flex-row gap-2 px-7 md:px-[500px]' onSubmit={handleSubmit}>
        <Input name="prompt" value={input} onChange={handleInputChange} placeholder='Enter a prompt here ...' className='rounded-xl border-[#9D9D9D] bg-white' />
        <Button type='submit' className='bg-[#BF9AFF] rounded-xl flex items-center justify-center p-3'>
          <PaperPlaneTilt size={21} fill='white' />
        </Button>
      </form>
    </div >
  );
}
