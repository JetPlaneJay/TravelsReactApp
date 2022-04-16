import React from "react"

export default function Card(props) {

    return (
        <div className="card">
            <img src={`${props.imageUrl}`}
            className="card--image" alt="Site in Country" />
            <article>
                <section>
                    <p className="card--country">{props.location}  
                        <a href="{props.googleMapsUrl}">View on Google Maps</a> 
                    </p>
                </section>
                <section>
                <h1 className="card--title">{props.title}</h1>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                </section>
                <section>
                    <p>{props.description}</p>
                </section>
            </article>
        </div>
    )
}

