import Image from "next/image";

const Logo = ({ size = 250, className }) => <Image src={'/logo.png'} alt='Builiding innovation logo' className={className} width={size} height={Number(size) * 250 / 163} />
export default Logo;