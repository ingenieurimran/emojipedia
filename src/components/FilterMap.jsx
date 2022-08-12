import React from "react";
import Emojipedia from "./Emojipedia";


// console.log(Emojipedia)


function EmojipediaFilter(params) {
    return (
        <div>
            {/* {Emojipedia.filter(emojiMeaning => emojiMeaning.id > 0).map(filetrEmojiMeaning => (
                <li>
                    {filetrEmojiMeaning.meaning.substring(0, 100)}
                </li>
            ))} */}
            {Emojipedia.map(filetrEmojiMeaning => (
                <li>
                    {filetrEmojiMeaning.meaning.substring(0, 100)}
                </li>
            ))}
        </div>
    )
}


export default EmojipediaFilter