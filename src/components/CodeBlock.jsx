function CodeBlock({ code, language = 'javascript' }) {
  return (
    <div className="code-block">
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock