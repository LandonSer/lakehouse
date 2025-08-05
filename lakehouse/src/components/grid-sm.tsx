 import Image from 'next/image'
 
 export default function GridSm(props: any) {
    return (
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {props.gridValues.cardImg.slice(0, 8).map((item: any, index: number) => (
              <div key={index} className="relative overflow-hidden rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer group h-16 ">
                <Image
                  src={item.url}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
    );
}