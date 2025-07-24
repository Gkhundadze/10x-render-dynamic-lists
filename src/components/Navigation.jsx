import { useEffect } from 'react'
import './Navigation.css'

function Navigation({ currentSlide, totalSlides, onNext, onPrev, onGoTo }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
          e.preventDefault()
          onPrev()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [onNext, onPrev])

  return (
    <div className="navigation">
      <div className="nav-buttons">
        <button 
          className="nav-btn" 
          onClick={onPrev} 
          disabled={currentSlide === 0}
        >
          ⬅ Previous
        </button>
        <button 
          className="nav-btn" 
          onClick={onNext} 
          disabled={currentSlide === totalSlides - 1}
        >
          Next ➡
        </button>
      </div>
      
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="slide-counter">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}

export default Navigation