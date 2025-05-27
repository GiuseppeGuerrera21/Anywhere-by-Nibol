# Auth UI - Next.js Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

Un'interfaccia utente moderna e responsive per autenticazione, con schermate di **Login** e **Registrazione**, sviluppata con Next.js e Tailwind CSS.

⚠️ **Nota**: Questo è un progetto puramente frontend senza logica di backend o connessione a database.

## ✨ Funzionalità

- Design moderno e pulito
- Completamente responsive
- Validazione lato client dei form
- Facilmente estendibile

## 🚀 Come iniziare

### Prerequisiti
- React ^19.0.0
- Next ^15.3.2

### Installazione

1. **Clona il repository**:
   ```bash
   git clone git@github.com:GiuseppeGuerrera21/Anywhere-by-Nibol.git
Accedi alla cartella del progetto:

bash
cd Anywhere-by-Nibol
Installa le dipendenze:

bash
npm install
Avvia il server di sviluppo:

bash
npm run dev
Apri nel browser:

http://localhost:3000


📂 Struttura del progetto
`
root/
├── .next/                        # Cartella generata automaticamente da Next.js (build/cache)
├── app/                          # Directory principale delle route (Next.js App Router)
│   ├── login/
│   │   └── page.jsx              # Pagina per la route "/login"
│   ├── signup/
│   │   └── page.jsx              # Pagina per la route "/signup"
│   ├── globals.css               # Foglio di stile globale (forse solo per la signup?)
│   └── layout.js                 # Layout per la route "/signup" (wrapper comune)
│   └── page.jsx                  # Probabile home page ("/")
├── components/                   # Componenti riutilizzabili dell'interfaccia
│   ├── AuthForm.jsx
│   ├── InputField.jsx
│   ├── PasswordStrengthBar.jsx
│   ├── SuccessModal.jsx
│   └── TermsCheckbox.jsx
├── node_modules/                # Dipendenze npm installate
├── public/                      # File statici accessibili pubblicamente
│   └── favicon.png
├── .gitignore                   # File per ignorare file/folder nel versionamento Git
├── eslint.config.mjs           # Configurazione ESLint per il linting del codice
├── jsconfig.json               # Configurazione per alias o suggerimenti JS/TS
├── next.config.mjs             # Configurazione di Next.js
├── package-lock.json           # Lockfile per la gestione delle versioni dei pacchetti
└── package.json                # File principale delle dipendenze e script del progetto`

📜 Licenza
Distribuito con licenza MIT. Vedi LICENSE per maggiori informazioni.

✉️ Contatti
Giuseppe Guerrera

GitHub: GiuseppeGuerrera21

Email: giuseppegue00@gmail.com

LinkedIn: www.linkedin.com/in/giuseppe-guerrera-139858320

Portfolio: [giuseppeguerrera.com](https://giuseppeguerrera.com/)

