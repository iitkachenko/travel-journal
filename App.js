import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data"

export default function App() {
    const cards = data.map(card => 
        <Card
            key={card.id}
            {...card}
        />
    );
    return (
        <div className="container">
            <Header />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}