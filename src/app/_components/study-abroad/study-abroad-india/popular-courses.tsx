import Image from "next/image";


interface PopularCourseCardProps {
  title: string;
  image: string;
}

export default function PopularCourseCard({ title, image }: PopularCourseCardProps) {
  return (
    <div className="border border-blue-100  bg-gradient-to-br from-white via-red-50 to-green-300rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
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