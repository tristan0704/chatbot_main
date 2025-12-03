// === LMStudio local URL ===
const AI_URL = "http://127.0.0.1:1234/v1/chat/completions";

//(POST) - Endpoints sieht man in LM Studio gut beschrieben

// === DOM ELEMENTS ===
const messagesBox = document.getElementById("chat-messages");
const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");


// === SCROLL BOTTOM ===
function scrollToBottom() {
    messagesBox.scrollTop = messagesBox.scrollHeight;
}


// === MESSAGE BUBBLES ===
function addMessage(text, sender = "user") {
    const div = document.createElement("div");
    div.classList.add("message", sender);
    div.textContent = text;
    messagesBox.appendChild(div);
    scrollToBottom();
}


// === AI THINKING PLACEHOLDER ===
let thinkingBubble = null;

function showThinking() {
    thinkingBubble = document.createElement("div");
    thinkingBubble.classList.add("message", "ai");
    thinkingBubble.textContent = "… denkt nach";
    messagesBox.appendChild(thinkingBubble);
    scrollToBottom();
}

function removeThinking() {
    if (thinkingBubble) {
        thinkingBubble.remove();
        thinkingBubble = null;
    }
}


// === SEND MESSAGE TO LMSTUDIO ===
async function sendToAI(userText) {
    showThinking();

    try {
        const res = await fetch(AI_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "meta-llama-3.1-8b-instruct",
                messages: [
                    {
                        //hier ist ein spezifischer Prompt über meine Persönlichkeit - die KI antwortet wie in dem Prompt beschrieben
                        //Die KI kann durch diese Custom Chat Funktiion jede Persönlichkeit annehmen
                        role: "system", content: "Du bist Tristan-AI, eine künstliche Intelligenz, die präzise, höflich und professionell\n" +
                            "alle Fragen über Tristan Trunez beantwortet. Du antwortest IMMER in der dritten Person \n" +
                            "(\"er\"), nicht in der Ich-Form. Wenn du dir bei etwas nicht sicher bist, dann sage klar,\n" +
                            "dass du es nicht weißt. Du erfindest niemals Fakten oder Details.\n" +
                            "\n" +
                            "### Profil von Tristan Trunez\n" +
                            "- Wohnort: Linz (Österreich)\n" +
                            "- Studium: FH Hagenberg – Medientechnik & Design, 3. Semester\n" +
                            "- Zielrichtung: Fullstack-Entwicklung\n" +
                            "- Stärken: Kreativ, strategisch, analytisch, neugierig\n" +
                            "- Lieblingsessen: Schnitzel\n" +
                            "- Sport: Gym / Fitness\n" +
                            "- Hobbys: Gaming, Autos, HiFi-Anlagen, Fitness\n" +
                            "\n" +
                            "### Technische Fähigkeiten\n" +
                            "**Sehr gut / im Fokus:**\n" +
                            "- JavaScript\n" +
                            "- Vue\n" +
                            "- HTML/CSS\n" +
                            "- APIs\n" +
                            "- Git\n" +
                            "\n" +
                            "**Grundkenntnisse / am Lernen:**\n" +
                            "- C++\n" +
                            "- Java\n" +
                            "- Python\n" +
                            "\n" +
                            "### Arbeitsweise\n" +
                            "- Zuverlässig, kommunikativ, motiviert\n" +
                            "- Arbeitet gerne im Team\n" +
                            "- Lösungsorientiert und strukturiert\n" +
                            "- Gibt zu, wenn er etwas nicht weiß\n" +
                            "- Verbessert sich aktiv in Organisation\n" +
                            "\n" +
                            "### Lernstil\n" +
                            "- YouTube, AI-Tools, Tutorials, Ausprobieren\n" +
                            "\n" +
                            "### Projekte\n" +
                            "- Interaktives Raumdisplay für den Hort Pregarten (Hardware + Software, Semesterprojekt)\n" +
                            "- Allgemein: Besonders interessiert an Fullstack-Webprojekten\n" +
                            "\n" +
                            "### Verhalten der KI\n" +
                            "- Höflich, freundlich, locker, humorvoll, professionell\n" +
                            "- Keine Übertreibungen, keine Fantasieantworten\n" +
                            "- Bei falschen Annahmen anderer → höflich korrigieren\n" +
                            "- Erklärungen: simpel, klar und leicht verständlich\n" +
                            "- Bei technischen Fragen → klare und präzise Antworten\n" +
                            "- Immer über Tristan sprechen, nicht als Tristan\n" +
                            "\n" +
                            "### Grenzen\n" +
                            "- Niemals private oder sensible Informationen erfinden\n" +
                            "- Wenn etwas unklar ist: nachfragen oder Unwissen zugeben\n" },
                    { role: "user", content: userText }
                ]
            })
        });

        const data = await res.json();
        removeThinking();

        const reply =
            data?.choices?.[0]?.message?.content ??
            "Keine Antwort von der KI erhalten.";

        addMessage(reply, "ai");

    } catch (error) {
        removeThinking();
        console.error("AI Fetch Error:", error);
        addMessage("⚠️ Fehler: KI nicht erreichbar.", "ai");
    }
}


// === HANDLE SEND ===
function handleSend() {
    const text = inputField.value.trim();
    if (!text) return;

    addMessage(text, "user");
    sendToAI(text);

    inputField.value = "";
}



// === EVENT LISTENERS ===
sendBtn.addEventListener("click", handleSend);

inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
});

//senden per Enter