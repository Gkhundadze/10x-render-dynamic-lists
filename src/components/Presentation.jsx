import { useState } from 'react'
import Slide from './Slide'
import Navigation from './Navigation'
import slides from '../data/slides'
import './Presentation.css'

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="presentation">
      <Slide 
        slide={slides[currentSlide]} 
        slideIndex={currentSlide}
        totalSlides={slides.length}
      />
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
      />
    </div>
  )
}

export default Presentation