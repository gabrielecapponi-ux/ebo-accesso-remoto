# EBO, anche fuori casa

Pagina pubblica statica per aprire un pannello protetto ospitato sul Mac di casa. GitHub Pages ospita soltanto questo ingresso.

## Collegamento

In `connection.json`, sostituire `null` con l’indirizzo HTTPS del collegamento protetto. Il formato accettato è un singolo sottodominio di `trycloudflare.com`, senza porta, credenziali, percorso, parametri o frammento. È ammessa la barra finale.

Il browser legge soltanto `connection.json` dalla stessa origine. Non contatta il pannello automaticamente e non verifica che il Mac sia acceso. “Link disponibile” indica che il collegamento è configurato; la disponibilità si verifica aprendolo.

Il pulsante apre il pannello nella stessa scheda. L’autenticazione avviene sul pannello protetto. Il Mac deve restare acceso e collegato a Internet.

## Contenuti pubblici

Pubblicare soltanto i file di questa pagina. Non inserire password, codici di accesso, indirizzi del robot, identificatori, account, configurazioni delle sessioni, immagini o altri dati privati. Il collegamento è pubblico; la protezione dell’accesso è responsabilità del pannello di destinazione.

La pagina usa font di sistema e forme CSS. Non carica risorse, analisi o SDK esterni.
