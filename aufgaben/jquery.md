jquery
======


Aufgabe 1
---------
Zur Unterstützung deiner Arbeit kannst du ein Framework oder eine Bibliothek verwenden.

Wo ist der Unterschied zwischen einem Framework und einer Bibliothek?

Frameworks und Bibliotheken unterscheiden sich in der Art und Weise, wie sie sich in den Flow des Programmierers einmischen.
Bibliotheken bieten den Programmierer eine Sammlung von Unterprogrammen, welche bei der Lösung von Problemen Lösungswege bieten und diese können frei angewendet werden.
Frameworks stellen ebenfalls für den Programmierer Programmiergerüste zur Verfügung.
Wenn ein Framework verwendet wird, ist es für den Flow verantwortlich, d.h, dass das Framework, wenn nötig, selbstständig agiert.

Aufgabe 2
---------

Einer der wichtigsten Bibliotheken im Internet ist jquery. Jquery unterstützt dich dabei, den DOM zu manipulieren.

Was ist der DOM?

Der DOM ist die Schnittstelle für den Zugriff auf Tags, Attribute und Inhalte von HTML-Seiten.
DOM verbindet JS mit den HTML-Elementen und erzeugt eine Baumstruktur, in der jedes HTML-Element eindeutig erreicht wird.

Aufgabe 3
---------

Gehe über die w3c Dokumentation (https://www.w3schools.com/jquery/jquery_intro.asp) von jquery und beantworte danach folgende Fragen:

Welche Farbe hat welche Überschrift?

"Hello" und "Hello again" sind rot.

```html
<h1 class="headline">Hello</h1>
<h2 class="headline">Hello again</h2>
<h2 class="not_headline">Hello again again</h3>
<script>
$(".headline").css("color", "red");
</script>
``` 

Wenn ich den button "show b" und danach "show a" clicke, welcher Text wird angezeigt?

Es werden beide Texte angezeigt.

```html
<button id="showA"> show a</button>
<button id="showB"> show b</button>
<article class="screen" id="screen_A"> hi there from A</article>
<article class="screen" id="screen_B"> hi there from B</article>
<script>
    $(".screen").hide();
    $("#showA").click(() => {
        $("#screen_A").show();
    });

    $("#showB").click(() => {
        $("#screen_B").show();
    });
    </script>
```