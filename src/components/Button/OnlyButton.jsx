import React from "react";

const TwoButton = ({ plus, minus }) => {
    return (
        <div>
                <button type="button" onClick={plus}>Plus</button>

                <button type="button" onClick={minus}>Minus</button>

            </div>
    )
}

export default TwoButton