## ekstra dependencies
### "uuid": "^3.4.0" 
    - unik id biblioteket - den kan byttes i hjelpers.tsx
### "react-fontawesome": "^1.7.1", "@types/react-fontawesome": "^1.6.4",     "@fortawesome/fontawesome-svg-core": "^1.2.26", "@fortawesome/free-solid-svg-icons": "^5.12.0",  "@fortawesome/react-fontawesome": "^0.1.8",
    - ganske mange biblioteker for å få 6 iconer kan forandres i hjelpers.tsx

### "@types/react-router-dom": "^5.1.3" 
    - nok nødvendig for å få typescript støte med react-router

## Todo App Beskrivelse

    AppContainer - strukturen og logiken 
        - aplikasjons state er lagred i lokal mine med custome hook usePersistentState.ts
        - state og logiken fintes i AppContainer.tsx
        - AppContainer bruker react-router og renderer resten av aplikasjonen
        - Toolbar renderer navigasjonen melom listene
        - Lists.tsx exporterer ListsView der printes og editeres todo listene 
        - List.tsx exporterer ListView der printes og editeres selve todoer 
        - TitleForm.tsx er en universal form. Den brikes til å lage og opprette lister og todoer 
        - hjeplers.js exporter icons (fontawsome) og getId 

