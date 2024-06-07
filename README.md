This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
```

Ouvrez l'adresse [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir les résultats..


## Tests

# API Star Wars

Afin de lancer les tests relatifs à l'API Star Wars, utilisez la commandes suivante :

```bash
npx cypress run
```

Le serveur de développement doit tourner lors de ces tests. Pour rappel :

```bash
npm run dev
```


# Calculatrice

Afin de lancer les tests relatifs à la calculatrice, utilisez la commandes suivante :

```bash
npm run dev
```

Des problèmes peuvent apparaître lors du lancement des tests, pour cela, modifiez le fichier 'tsconfig.json'

```json
// tsconfig.json
16    [...]
17   "jsx": "react",
18    [...]
```