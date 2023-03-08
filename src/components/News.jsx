import React from 'react'

const News = ({ news }) => {
  return (
    <div className="last-news">
        <h3>{news.title}</h3>
        <p>{news.content}</p>
    </div>
  )
}

export default News