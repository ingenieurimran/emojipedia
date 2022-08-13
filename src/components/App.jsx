import React from "react";
import Emojilist from "./Emojilist";
import Emojipedia from "./Emojipedia";

function App(params) {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {Emojipedia.map(params => (
                    <Emojilist
                        id={params.id}
                        emoji={params.emoji}
                        name={params.name}
                        meaning={params.meaning}
                    />
                ))}
            </dl>
        </div>
    )

}

export default App











