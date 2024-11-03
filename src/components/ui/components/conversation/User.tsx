import Image from "next/image"
import avatar from "../../../../../assets/avatar.svg"

export default function Bot({ message }: { message: string }) {
  return (
    <div className="flex flex-row gap-2 w-full justify-end text-[#3D3D3D] mt-4">
      <div style={{ borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} className=" p-3 justify-center">
        {message}
      </div>
      <div className="flex items-center">
        <Image src={avatar} width={32} height={32} alt="avatar"></Image>
      </div>
    </div>
  )
}
