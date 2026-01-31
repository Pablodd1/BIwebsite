"use client";
import Image from "next/image";
import { useBrand } from "lib/BrandContext";

const Logo = ({ size = 250, className }) => {
    const { brand } = useBrand();
    return (
        <Image
            src={brand.logoImage}
            priority
            alt={`${brand.name} logo`}
            className={className}
            width={size}
            height={Number(size) * 250 / 163}
        />
    );
};
export default Logo;