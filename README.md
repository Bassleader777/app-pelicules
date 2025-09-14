# Cartellera Interactiva de Pel·lícules - Prova Tècnica

**Demo en Viu:** [**aquí-va-el-teu-enllaç-a-vercel.app**](https://aquí-va-el-teu-enllaç-a-vercel.app)

## Descripció del Projecte

Aquest projecte és una aplicació web moderna desenvolupada amb React com a resposta a una prova tècnica. L'objectiu era construir una aplicació per gestionar una llista de pel·lícules, anant més enllà dels requisits bàsics per crear una experiència d'usuari rica, interactiva i visualment atractiva.

L'aplicació presenta una cartellera de cinema sencilla, permetent a l'usuari buscar títols, veure informació detallada i visualitzar tràilers.

## Funcionalitats Implementades

- [✅] **Galeria Visual Responsive:** Les pel·lícules es mostren en una graella (grid) que s'adapta perfectament a diferents mides de pantalla (mòbil, tauleta i escriptori responsive).
- [✅] **Cerca en Temps Real:** Un buscador intuïtiu permet filtrar la llista de pel·lícules instantàniament per **títol** o per **any**.
- [✅] **Interactivitat Avançada:**
    - **Efecte *Hover*:** En passar el ratolí sobre un pòster, apareix una capa interactiva amb opcions de "Tràiler" i "Info".
    - **Tràilers en Finestra Modal:** En clicar el botó "TRÀILER", s'obre una finestra emergent (modal) amb el tràiler de la pel·lícula incrustat des de YouTube, sense sortir de la pàgina.
    - **Pàgines de Detall:** L'aplicació compta amb un sistema de ruteig que porta a una pàgina dedicada per a cada pel·lícula.
- [✅] **Informació Completa:** La pàgina de detalls mostra la sinopsi de la pel·lícula, director, actors principals i gènere.
- [✅] **Gestió de la Llista:** L'usuari pot eliminar pel·lícules de la llista de manera persistent.
- [✅] **Persistència de Dades:** Les pel·lícules (i les seves eliminacions) es guarden al `localStorage` del navegador, de manera que l'estat de la llista es manté entre sessions.
- [✅] **Atenció al Detall:** S'han implementat petits detalls d'experiència d'usuari, com un *tooltip* informatiu al botó d'eliminar.

## Decisions Tècniques i Arquitectura

- **Framework i Eines:** S'ha utilitzat **React** amb **Vite** per la seva rapidesa a part també perqué és un dels frameworks que he utilitzat més últimament a les pràctiques que vaig realitzar, el seu entorn de desenvolupament modern i la seva eficiència en la construcció d'interfícies d'usuari.
- **Estructura de Components i rutes:** L'aplicació s'ha organitzat en components reutilitzables i pàgines (`Home`, `MovieDetails`), amb un component principal (`App`) que gestiona les rutes. Aquesta arquitectura, juntament amb la llibreria **React Router DOM**, permet una bona separació de responsabilitats i un codi més mantenible.
- **Gestió de l'Estat:** S'ha gestionat l'estat local dels components mitjançant els hooks de React (`useState`, `useEffect` que son els que he utilitzat més). Per a la persistència de dades, s'ha implementat **`localStorage`**, una solució lleugera i efectiva per a l'escala d'aquest projecte, complint amb els requisits de la prova sense necessitat de sobreenginyeria.
- **Decisió de Disseny: Absència del Formulari "Afegir Pel·lícula"**: Tot i ser un requisit bàsic inicial, es va prendre la decisió conscient de no incloure un formulari per afegir pel·lícules a la versió final. El projecte va evolucionar cap a una **experiència de cartellera curada i rica en contingut** (pòsters, tràilers, sinopsis). Un formulari simple per afegir només títol i any hauria creat entrades inconsistents i visualment trencades, degradant l'experiència d'usuari. Es va prioritzar la qualitat i la coherència del producte final. La capacitat de gestionar l'estat queda demostrada amb la funcionalitat d'eliminar pel·lícules.
- **Estils i Format:** S'ha utilitzat **CSS Pur** per demostrar un domini sòlid de les bases del disseny web (Flexbox, Grid, Media Queries, pseudo-elements). El codi s'ha formatat amb **Prettier** per garantir un estil consistent i professional.

## Tecnologies Utilitzades

- React 18
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3 (Flexbox, Grid, Media Queries) Podria haver utilitzat Tailwind, però vaig preferir desenvolupar el projecte amb CSS pur per demostrar un sòlid domini de les bases, tecnologia amb la qual em sentia més còmode.
- HTML5
- Prettier

També he treballat amb Chatgpt i Gemini.

## Com Executar el Projecte en Local

1.  Clona aquest repositori al teu ordinador.
    ```bash
    git clone [https://github.com/Bassleader777/app-peliculas.git](https://github.com/Bassleader777/app-peliculas.git)
    ```
2.  Navega a la carpeta del projecte.
    ```bash
    cd app-peliculas
    ```
3.  Instal·la les dependències.
    ```bash
    npm install
    ```
4.  Executa l'aplicació en mode de desenvolupament.
    ```bash
    npm run dev
    ```
5.  Obre [http://localhost:5173](http://localhost:5173) al teu navegador.