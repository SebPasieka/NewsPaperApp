#Testing

“Program testing can be used to show the presence of bugs, but never to show their absence!” -― Edsger W. Dijkstra

##Aufgabe 1:

###Was hat zur Software-Crisis geführt?
Software-Chrisis bezeichnet das erstmals Mitte der 1960er-Jahre aufgetretene Phänomen.
Diese Kriese entstand dadurch, dass die Leistungsfähigkeit der Software der von der Hardware hinterher hinkte.
Man erkannte, dass die bisher genutzten Techniken mit dem Umfang und der Komplexität der Software nicht Schritt gehalten hatten.

###Was bedeutet für dich Software-Engineering?
Software Engineering ist die Erstellung und Verwaltung großer Softwareprojekte.

###Wo ist der Unterschied zwischen Programmieren und Software-Engineering?
Beim programmieren wird der fokus auf die Erstellung des Funktionscodes gelegt, während Softwareentwickler Software aus technischer Sicht unter Berücksichtigung von Endbenutzern, Kunden und Geschäftsanforderungen entwerfen.

###Beschreibe den Wasserfall Entwicklungs Prozess!
Das Wasserfallmodell ist ein lineares Vorgehensmodell, das Entwicklungsprozesse in aufeinanderfolgende Projektphasen unterteilt.

###Beschreibe das V-Modell!
Das V-Modell organisiert Ähnlich dem Wasserfallmodell Softwareentwicklungsprozess in Phasen. Zusätzlich zu diesen Entwicklungsphasen definiert das V-Modell auch das Vorgehen zur Qualitätssicherung (Testen), indem den einzelnen Entwicklungsphasen Testphasen gegenüber gestellt werden.

##Aufgabe 2:

###Was ist TDD?
TDD steht für test-driven development und beschreibt eine Methode, bei der Tests dazu genutzt werden um Softwareentwicklung zu steuern.
Tests werden geschrieben, die zu beginn alle fehlschlagen.
Anschließend wird Code geschrieben, damit die Tests erfolgreich durchlaufen.

###Wie heißen die Phasen des TDD Cycles?
Die Phasen des TDD Cycles sind "test fails", "test passes" und "refactor".

###Erkläre an einem Beispiel deiner Wahl den Prozess TDD.
Eine Klasse soll implementiert werden, die überprüft, ob der eingegebene Username in der Datenbank bereits vorhanden ist. 
Dafür werden zuerst Tests geschrieben, die den positiven und negativen Case erwarten.
Anschließend wird die Klasse implementiert, bis die Tests erfolgreich durchlaufen.

##Aufgabe 3:

###Was bedeutet die Aussage von Dijkstra für das Schreiben von Tests und die Korrektheit deiner Software?
Dijkstra könnte damit ausdrücken wollen, dass Tests Fehler anzeigen, jedoch das fehlen von Tests (bestimmter Cases) kein Beweis dafür ist, dass es keine Fehler gibt.
Je besser und umfangreicher die Tests desto fehlerfreier ist die Software

###Erkläre die verschiedenen Arten von Tests anhand der 'Testing Pyramid'?
Die unterste Schicht der Pyramide umfasst die "Unit Tests".
Bei diesen Tests wird ein Einzelteil der Software getestet (zb. eine Methode).
Die mittlere Schicht der Pyramide umfasst die "Integration Tests".
Hierbei werden voneinander abhängige Komponenten einer Software getestet.
Die oberste Schicht der Pyramide umfasst die "UI Tests - E2E".
Diese Tests testen ein bestimmten Workflow, den ein User in der Software durchläuft von Anfang bis zum Ende.
End-to-End Tests sind so Usernah wie möglich und bilden übliche und so viele wie möglich unterschiedliche Ablaufe der Software ab.

###Welche Art von Tests hast du schon geschrieben? Hast du dich an eine bestimmte Struktur gehalten?
###Wie würdest du deine Newspaper App testen?
###Schau dir nochmal die UserStories und Akzeptanzkriterien an. Kannst du etwas davon als 'Testplan' wiederverwenden?

Challenge

Schaue dir das Repo https://github.com/as-ideas/azubi-javascript an und die Array Tests hier an: https://github.com/as-ideas/azubi-javascript/tree/master/src/arrays .

Schreibe einen Test, der die Array funktion includes testet. Du kannst auch gern das Repo forken und den Test erweitern.

Überlege dir vorher was sind die Testfälle sein können? Und dann schreibe dies Tests in folgender Form

describe(‚Array‘, () => {

describe(‚includes‘, () => {

    it(‚ …. Test fall 1 … ‘ () => {})
    it(‚ …. Test fall 2 … ‘ () => {})
    it(‚ …. Test fall  … ‘ () => {})
    it(‚ …. Test fall n … ‘ () => {})

})
})