# gra-snake
![Zrzut ekranu 2025-02-04 195359](https://github.com/user-attachments/assets/583a0dc8-83a0-4d70-a354-a5e0ced30448)

Funkcjonalności gry:
Rozgrywka: Gracz steruje wężem na planszy, jedząc jedzenie, aby zdobywać punkty. Im więcej jedzenia zjedzą, tym dłuższy staje się wąż.

Zapis wyników: Po zakończeniu gry, wynik gracza (jego nazwa użytkownika i zdobyte punkty) jest zapisywany w bazie danych MongoDB na serwerze.

Podgląd wyników: Gracze mogą przeglądać najlepsze wyniki (top scorers) zapisane w bazie danych, co motywuje do rywalizacji.

Prosta rozgrywka: Gra jest bardzo łatwa do zrozumienia, ale wyzwaniem jest zdobycie jak najwyższego wyniku. Gracze mogą poruszać wężem w czterech kierunkach (góra, dół, lewo, prawo) i muszą unikać zderzenia z własnym ciałem oraz ścianami planszy.

Technologie użyte w projekcie:

Frontend:

Vue.js: Użyte do stworzenia dynamicznej aplikacji, która obsługuje całą logikę gry oraz interakcje z użytkownikiem. Vue.js zapewnia szybkie renderowanie komponentów i obsługę danych.

CSS/HTML: Do stylowania strony i samej gry, z wykorzystaniem nowoczesnych technik, takich jak Flexbox i CSS Grid.

Backend:

Node.js z Express: Użyte do stworzenia serwera, który obsługuje logikę zapisywania wyników graczy i ich pobierania z bazy danych.

MongoDB: Służy do przechowywania wyników graczy. MongoDB jest bazą NoSQL, która pozwala na przechowywanie danych w formacie dokumentów JSON, co czyni ją elastyczną i wydajną do przechowywania danych wyników.

Bezpieczeństwo i API:

Serwer korzysta z Express do utworzenia API, które umożliwia zapis i odczyt danych w bazie MongoDB.

Używamy CORS (Cross-Origin Resource Sharing), aby zapewnić możliwość komunikacji między frontendem a backendem bez problemów z bezpieczeństwem pochodzącym z różnych źródeł.

Jak działa gra:

Początek gry: Po uruchomieniu aplikacji, gracz może rozpocząć nową grę. Gra jest wyświetlana w formie planszy, na której porusza się wąż, zjadając pojawiające się jedzenie.

Każde zjedzenie jedzenia sprawia, że wąż rośnie, a gracz zdobywa punkty.

Zakończenie gry: Gra kończy się, gdy wąż zderzy się z własnym ciałem lub ścianą. Po zakończeniu gry, gracz wprowadza swoje imię i wynik zostaje zapisany w bazie danych.

Wyniki: Gracz może sprawdzić wyniki innych użytkowników, przeglądając najlepsze wyniki (tzw. ranking).

Połączenie z serwerem: Po zakończeniu gry, dane o wyniku (imię użytkownika i zdobyte punkty) są wysyłane na serwer, gdzie są zapisywane w bazie MongoDB. Można je później pobrać i wyświetlić na stronie w postaci rankingu.

Jak uruchomić aplikację:
Frontend (Vue.js):

Zainstaluj zależności:

npm install

Uruchom aplikację:
npm run serve

Otwórz przeglądarkę i wejdź na adres http://localhost:8080.

Backend (Node.js + MongoDB):

Zainstaluj zależności:

npm install

Uruchom serwer:

npm start

Serwer będzie dostępny pod adresem http://localhost:3000.
