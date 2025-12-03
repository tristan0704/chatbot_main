📌 Über das Projekt

Tristan-AI ist ein personalisierter Chatbot, der Fragen über Tristan Trunez beantwortet.
Dazu nutzt er ein feingetuntes System-Prompt-Profil, welches seine Skills, Persönlichkeit, Arbeitsweise und Interessen abbildet.

Der Chat läuft vollständig lokal, ohne externe APIs und ohne Internetzugriff.
Das macht ihn besonders datenschutzfreundlich und ideal für Präsentationen, Portfolios und Lernzwecke.

🧠 Technologien
**Frontend:**

- HTML
- CSS
- Vanilla JavaScript

**Backend / KI**

- LMStudio (lokal ausgeführtes LLM)
- Meta-Llama 3.1 8B Instruct

⚠️ Kein externer Server notwendig.
Der Chat verbindet sich direkt mit dem lokalen LMStudio-Endpunkt.

🔌 Architektur
Frontend (HTML/CSS/JS)
        ⬇️ fetch POST
LMStudio (http://127.0.0.1:1234/v1/chat/completions)
        ⬇️ Antwort des LLM
UI zeigt Antwort an


Das Projekt nutzt keinen eigenen Node-Server mehr — alles läuft direkt über LMStudio.

🧩 System Prompt (Tristan-AI Persönlichkeit)

Der Chatbot nutzt einen maßgeschneiderten System-Prompt, der folgende Bereiche abdeckt:

- Studium & Standort
- technische Fähigkeiten
- Stärken & Schwächen
- Arbeitsstil
- Lernstil
- Hobbys
- gewünschter Job (Fullstack)
- wie die KI klingen soll
- wie sie mit Unsicherheit / Fehlern umgeht
- wie sie auf Kritik reagiert
- welche Themen sie vermeiden soll

➡️ Dadurch entsteht ein konsistentes, professionelles und authentisches KI-Verhalten.

🖥️ Installation & Setup
1. Repository klonen
git clone https://github.com/dein-username/tristan-ai-chatbot

2. LMStudio installieren

https://lmstudio.ai/

3. Modell laden

In LMStudio:

- „Browse Models“
- Meta-Llama-3.1-8B-Instruct herunterladen
- Starten

4. OpenAI-kompatiblen Server aktivieren

In LMStudio:

Developer → OpenAI Compatible Server

Aktiviere:

✔ Allow remote connections

✔ Enable CORS

✔ Allow browser access

Der Server läuft standardmäßig unter:

http://127.0.0.1:1234

5. Projekt starten

Öffne einfach die index.html mit Doppelklick:

file:///.../index.html

(Dadurch wird CORS vollständig vermieden.)

🗂️ Projektstruktur
/project-root
│── index.html
│── style.css
│── script.js
│── README.md  (diese Datei)

💬 Funktionen

- Senden von Benutzer-Nachrichten
- Anzeigen von KI-Antworten
- Styling für User- und KI-Bubbles
- „Denkt nach…“-Animation
- Automatisches Scrollen
- Lokale Verarbeitung über LMStudio
- KI versteht Tristan’s Profil durch System Prompt

🎯 Ziel des Projekts

Ziel war es, einen persönlichen KI-Assistenten zu erstellen, der:

- komplett lokal läuft

- keine externen APIs benötigt

- eine individuelle Persönlichkeit hat

- sich für Portfolio, Präsentationen und Praktika eignet

- zeigt, dass der Entwickler mit Frontend, APIs, LLMs und lokalen Modellen umgehen kann

🙋‍♂️ Author

Tristan Trunez
Medientechnik & Design, FH Hagenberg

