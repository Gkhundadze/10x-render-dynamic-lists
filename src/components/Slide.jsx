import React from 'react'
import CodeBlock from './CodeBlock'
import InteractiveDemo from './InteractiveDemo'

function Slide({ slide, slideIndex, totalSlides }) {
  const renderContent = (content) => {
    try {
      if (typeof content === 'string') {
        return <p>{content}</p>
      }
      
      if (Array.isArray(content)) {
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{typeof item === 'string' ? item : renderContent(item)}</li>
            ))}
          </ul>
        )
      }
      
      if (content && content.type === 'code') {
        return <CodeBlock code={content.code} language={content.language || 'javascript'} />
      }
      
      if (content && content.type === 'comparison') {
        return (
          <div className="comparison">
            <div className="before">
              <h3>{content.before.title}</h3>
              {renderContent(content.before.content)}
            </div>
            <div className="after">
              <h3>{content.after.title}</h3>
              {renderContent(content.after.content)}
            </div>
          </div>
        )
      }
      
      if (content && content.type === 'highlight') {
        return (
          <div className="highlight">
            {Array.isArray(content.content) ? renderContent(content.content) : <p>{content.content}</p>}
          </div>
        )
      }
      
      if (content && content.type === 'demo') {
        return <InteractiveDemo demo={content} />
      }
      
      return <p>Content not rendered</p>
    } catch (error) {
      console.error('Error rendering content:', error, content)
      return <p style={{color: 'red'}}>Error rendering content: {error.message}</p>
    }
  }

  if (!slide) {
    return <div className="slide"><h1>Slide not found</h1></div>
  }

  return (
    <div className="slide">
      <h1>{slide.title}</h1>
      
      {slide.content && slide.content.map((content, index) => (
        <div key={index}>
          {renderContent(content)}
        </div>
      ))}
      
      {slide.script && (
        <div className="script">
          {slide.script}
        </div>
      )}
    </div>
  )
}

export default Slide