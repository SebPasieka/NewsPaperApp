API calls
=========

die Bibliothek jquery hast du schon kennengelernt. Mit jquery kannst du ajax Anfragen machen. AJAX ist eine Abkürzung für "Asynchronous JavaScript + XML" und schon relativ alt (1999) und hat die Art und Weise wie wir Webseiten bauen komplett verändert.

Mit AJAX kannst du Anfragen an einen Server asynchron im Hintergrund machen, ohne dass der Nutzer die Seite verlassen kann.


Aufgabe 1
---------

HTTP Status codes kennst du schon. Kennst du auch die Verben? Wann verwendet man folgende Verben?

#### GET
  GET fordert eine Darstellung der angegebenen Ressource an, diese können lediglich gelesen werden. GET gibt eine Darstellung in XML oder JSON und einen HTTP-Antwortcode von 200 (OK) zurück. Im Fehlerfall wird meistens ein 404 (NOT FOUND) oder 400 (BAD REQUEST) zurückgegeben. 
#### POST
POST wird verwendet, um eine Entität an die angegebene Ressource zu senden. (Erstellung von neuen Daten)
#### PUT 
PUT ersetzt alle aktuellen Darstellungen der Zielressource durch den request payload. PUT wird üblich genutzt, um Änderungen vorzunehmen. 
#### DELETE 
DELETE löscht die durch eine URI identifizierte Ressource. 
#### PATCH 
PATCH wird verwendet, um partielle Änderungen an einer Ressource vorzunehmen. Der Request muss nur die Änderungen an der Ressource enthalten, nicht die vollständige Ressource.
#### HEAD 
HEAD fordert eine Antwort an, die mit der einer GET-Anfrage identisch ist, jedoch ohne den Antworttext.


Aufgabe 2
-----------

Unter https://www.w3schools.com/jquery/jquery_ajax_get_post.asp sind ein paar Beispiele von GET und POST Anfragen, die mit jquery gemacht werden.

Unter folgender URL findest du die aktuellen Sonnen auf und Untergang von Berlin: http://wxdata.weather.com/wxdata/weather/local/GMXX0007:1:GM

Erstelle eine html seite, in der du mit jquery einen GET request machst und das Ergebnis
- auf der Console ausgibt
- den Sonnenaufgang und Untergang auf der Webseite zeigt


Aufgabe 3
---------

Erkläre den Unterschied zwischen Synchron und Asynchron. Was gefällt dir mehr?