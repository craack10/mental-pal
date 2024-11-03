import { Sparkle } from "@phosphor-icons/react";

export default function Bot({ message }: { message: string }) {
  return (
    <div className="flex flex-row gap-2 w-full justify-start text-[#3D3D3D] mt-6">
      <div className="flex items-start">
        <Sparkle size={30} fill="#BF9AFF" weight="fill" />
      </div>
      <div style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderBottomLeftRadius: "10px" }} className="bg-[#D7C0FF]/[.4] p-3 justify-center">
        {message}
      </div>
    </div>
  )
}
