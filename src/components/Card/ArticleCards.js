import React from 'react'
import { truncateText } from '@utils/truncateText.util'
const ArticleCards = () => {
    let hello = cardDetails[0].text
    console.log(hello.length)
    return (
        <div className="grid gap-3.5 lg:grid-cols-4  mt-12 p-8 lg:p-0" >

            {cardDetails.map((card) => (
                <div key={card.id} className='bg-white rounded-xl shadow-lg p-4'>
                    <h1 className='text-lg font-bold'>{card.title}</h1>
                    <div className='flex'>
                        <p className='mb-6'>{card.date} <span className='font-black text-3xl'>.</span> <span className='underline'>{card.underline}</span></p>

                    </div>
                    <p> {truncateText(card.text)}</p>
                </div>
            ))}



        </div>
    )
}

export default ArticleCards




const cardDetails = [
    {
        id: 1,
        title: "Titre de l'article",
        date: "18 mars 2021",
        underline: "Immobilier",
        text: "Deserunt sunt pariatur dolore sit est tempor. Nostrud adipisicing enim nostrud minim ea. Velit duis cupidatat velit elit."
    },
    {
        id: 2,
        title: "Titre de l'article",
        date: "18 mars 2021",
        underline: "Immobilier",
        text: "Deserunt sunt pariatur dolore sit est tempor. Nostrud adipisicing enim nostrud minim ea. Velit duis cupidatat velit elit."
    },
    {
        id: 3,
        title: "Titre de l'article",
        date: "18 mars 2021",
        underline: "Immobilier",
        text: "Deserunt sunt pariatur dolore sit est tempor. Nostrud adipisicing enim nostrud minim ea. Velit duis cupidatat velit elit."
    },
    {
        id: 4,
        title: "Titre de l'article",
        date: "18 mars 2021",
        underline: "Immobilier",
        text: "Deserunt sunt pariatur dolore sit est tempor. Nostrud adipisicing enim nostrud minim ea. Velit duis cupidatat velit elit."
    },
]