// Wartet darauf, dass das DOM vollständig geladen ist, bevor das Skript ausgeführt wird
document.addEventListener("DOMContentLoaded", () => {
    // Alle Elemente mit der Klasse "block" werden ausgewählt und in der Variablen "blocks" gespeichert
    const blocks = document.querySelectorAll(".block");
    // Das Element mit der Klasse "grid" wird ausgewählt und in der Variablen "grid" gespeichert
    const grid = document.querySelector(".grid");
    // Das Element mit der Klasse "container" wird ausgewählt und in der Variablen "container" gespeichert
    const container = document.querySelector(".container");

    // Funktion zum Festlegen des Abstands zwischen aktiven Blöcken
    const setBlockSpacing = (activeBlock) => {
        blocks.forEach((b, index) => {
            if (!b.classList.contains("active")) {
                // Berechne die Position des Blocks basierend auf seinem Index im Grid
                b.style.order = index < activeBlock ? index : index - 1;
            }
        });
    };

    // Für jedes Block-Element wird folgende Funktion ausgeführt
    blocks.forEach(block => {
        // Ein Klick-Eventlistener wird für jedes Block-Element hinzugefügt
        block.addEventListener("click", (event) => {
            // Die Propagierung des Klick-Events wird gestoppt, um zu verhindern, dass es den Container erreicht
            event.stopPropagation();

            // Alle Block-Elemente verlieren die Klassen "active" und "shrink", um sie zurückzusetzen
            blocks.forEach(b => b.classList.remove("active", "shrink"));
            // Dem angeklickten Block wird die Klasse "active" hinzugefügt, um ihn als aktiv zu markieren
            block.classList.add("active");
            // Dem Grid-Element wird die Klasse "inactive" hinzugefügt, um eine Animation auszulösen
            grid.classList.add("inactive");

            // Funktionsaufruf zum Festlegen des Abstands zwischen aktiven Blöcken
            setBlockSpacing(Array.from(blocks).indexOf(block));
        });
    });

    // Ein Klick-Eventlistener wird für das gesamte Dokument hinzugefügt
    document.addEventListener("click", () => {
        // Für jedes Block-Element wird folgende Funktion ausgeführt
        blocks.forEach(b => {
            // Alle Block-Elemente verlieren die Klassen "active" und "shrink", um sie zurückzusetzen
            b.classList.remove("active", "shrink");
        });
        // Dem Grid-Element wird die Klasse "inactive" entfernt, um die Animation zurückzusetzen
        grid.classList.remove("inactive");

        // Funktionsaufruf zum Festlegen des Abstands zwischen aktiven Blöcken (zurücksetzen)
        setBlockSpacing(-1);
    });
});
