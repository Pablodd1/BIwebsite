"use client";
import Image from "next/image";
import { useBrand } from "lib/BrandContext";

const Logo = ({ size = 250, className }) => {
    const { brand } = useBrand();
    return (
        <Image
            key={brand.id}
            src={brand.logoImage}
            priority
            alt={`${brand.name} logo`}
            className={className} style={{ width: 'auto', height: 'auto' }}
            width={size}
            height={Number(size) * 250 / 163}
        />
    );
};
export default Logo;
