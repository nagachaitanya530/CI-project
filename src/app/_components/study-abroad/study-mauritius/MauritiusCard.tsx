import Image from "next/image";


interface MauritiusCardProps {
  title: string;
  image: string;
}

export default function MauritiusCard({ title, image }: MauritiusCardProps) {
  return (
    <div className="border border-blue-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-center font-semibold text-gray-800">
        {title}
      </div>
    </div>
  );
}
