var synth = new Tone.Synth().toMaster();
var notes = ["C", "D", "E", "F", "G", "A", "B"];
var html = "";

for (var octave = 0; octave < 2; octave++)
{
    for (var i = 0; i < notes.length; i++) {
        var hasSharp = true;
        var note = notes[i];

        if (note == "E" || note == "B")
            hasSharp = false;

        html += `<div class="whiteNote"
            onmousedown="noteDown(this, false)" 
            onmouseup="noteUp(this, false)"
            onmouseleave="noteUp(this, false)" 
            data-note="${note + (octave + 4)}">`;

        if (hasSharp) {    
            html += `<div class="blackNote"
            onmousedown="noteDown(this, true)" 
            onmouseup="noteUp"(this, true)"
            onmouseleave="noteUp(this, true)"
            data-note="${note + "#" + (octave + 4)}"></div>`;
        }

        html += "</div>";

        document.addEventListener("keydown", e => {
            switch (e.key) {
                case "w":
                    return synth.triggerAttack("C4");
                case "3":
                    return synth.triggerAttack("C#4");
                case "e":
                    return synth.triggerAttack("D4");
                case "4":
                    return synth.triggerAttack("D#4");
                case "r":
                    return synth.triggerAttack("E4");
                case "t":
                    return synth.triggerAttack("F4");
                case "6":
                    return synth.triggerAttack("F#4");
                case "y":
                    return synth.triggerAttack("G4");
                case "7":
                    return synth.triggerAttack("G#4");
                case "u":
                    return synth.triggerAttack("A4");
                case "8":
                    return synth.triggerAttack("A#4");
                case "i":
                    return synth.triggerAttack("B4");
                // press q to stop note from playing
                case "q":
                    return synth.triggerRelease();
                case "z":
                    return synth.triggerAttack("C5");
                case "s":
                    return synth.triggerAttack("C#5");
                case "x":
                    return synth.triggerAttack("D5");
                case "d":
                    return synth.triggerAttack("D#5");
                case "c":
                    return synth.triggerAttack("E5");
                case "v":
                    return synth.triggerAttack("F5");
                case "g":
                    return synth.triggerAttack("F#5");
                case "b":
                    return synth.triggerAttack("G5");
                case "h":
                    return synth.triggerAttack("G#5");
                case "n":
                    return synth.triggerAttack("A5");
                case "j":
                    return synth.triggerAttack("A#5");
                case "m":
                    return synth.triggerAttack("B5");
                // press a to stop note from playing
                case "a":
                    return synth.triggerRelease();
                default:
                    return;    
            }
        })
    }
}

document.getElementById("container").innerHTML = html;

function noteUp(elem, isSharp) {
    elem.style.background = isSharp ? "black" : "white";
}

function noteDown(elem, isSharp) {
    var note = elem.dataset.note;
    //alert(note);
    elem.style.background = isSharp ? "#777" : "#ccc";
    synth.triggerAttackRelease(note, "16n");
    event.stopPropagation();
}
