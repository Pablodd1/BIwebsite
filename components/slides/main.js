'use client'
import React from 'react'
import { DotButton, useDotButton } from './dots'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './buttons'
import useEmblaCarousel from 'embla-carousel-react'
import './css/embla.css'
import Image from 'next/image'
import Link from 'next/link'
import GetFinalPrice from '@My_UIgetFinalPrice'

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, i) => (
                        <Link href={`/products/${item.category}/${item.ID}`} key={item.ID} className="embla__slide text-center rounded-xl shadow-md shadow-gray-400 hover:shadow-lg hover:translate-y-1.5 ease-in transition-all duration-300 m-5">
                            <Image
                                width={512} height={512}
                                src={item.image.url || '/raster/product.jpg'}
                                alt={item.name || 'Product image '}
                                className="mb-4 mx-auto"
                            />
                            <p className="text-sm mb-1">{item.name}</p>

                            <div className="text-sm">
                                <GetFinalPrice basePrice={item.basePrice} discountPercent={item.discountPercent} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

            </div>
        </section>
    )
}

export default EmblaCarousel
