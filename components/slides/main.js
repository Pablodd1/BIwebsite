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
import GetFinalPrice from 'My_UI/getFinalPrice'
import { addOne } from 'lib/cart/cart.actions'
import ProductItem from 'My_UI/product/item'

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
                <ul className="embla__container">
                    {slides.map((item, i) => (
                        <ProductItem isSlides item={item} key={i} />
                    ))}
                </ul>
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
