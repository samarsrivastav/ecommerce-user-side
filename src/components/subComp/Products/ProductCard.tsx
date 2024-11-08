interface item {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageUrl2?:string
    imageUrl3?:string
}

import { Card} from "flowbite-react";
import { useState } from "react";
import { Modal } from "./Modal";

export const ProductCard = ({ item }: { item: item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
      item.imageUrl,
      item.imageUrl2?item.imageUrl2:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      item.imageUrl3?item.imageUrl3:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
    ];
  
    return (
        <div className="my-5 ">
            <Card onClick={() => setIsModalOpen(true)}
                className="max-w-sm h-full"
                imgAlt="card image"
                imgSrc={item.imageUrl}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
                    <p>{item.title}</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                </p>
            </Card>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                images={images}
                title={item.title}
                description={item.description}
            />
        </div>
    )
}
