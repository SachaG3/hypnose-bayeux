# Suivi SEO — Search Console

## Référence avant déploiement

Export Google Search Console reçu le 31 août 2026, couvrant la période du 29 mai au 28 août 2026 :

- 118 clics ;
- 2 308 impressions ;
- CTR moyen : 5,11 % ;
- 11 pages indexées ;
- 4 URL non indexées.

### Requêtes prioritaires

| Requête | Clics | Impressions | CTR | Position moyenne | Action |
|---|---:|---:|---:|---:|---|
| hypnose bayeux | 23 | 337 | 6,82 % | 6,88 | Accueil : title, H1, localisation et confiance |
| hypnothérapeute bayeux | 3 | 96 | 3,12 % | 15,51 | Accueil + page À propos + maillage |
| hypnotiseur bayeux | 2 | 79 | 2,53 % | 4,41 | Vocabulaire naturel sur l’accueil, sans page dupliquée |
| arreter de fumer bayeux | 0 | 21 | 0 % | 3,95 | Title, description et contenu de la page arrêt du tabac |
| arret du tabac bayeux | 0 | 21 | 0 % | 7,33 | Même page, intention locale et tarif visible |

### Pages prioritaires

| Page | Clics | Impressions | CTR | Position moyenne |
|---|---:|---:|---:|---:|
| Accueil www | 54 | 1 177 | 4,59 % | 12,02 |
| Séance d’hypnose | 1 | 202 | 0,50 % | 16,26 |
| Arrêt du tabac | 0 | 92 | 0 % | 13,90 |
| Tarifs | 11 | 222 | 4,95 % | 31,56 |

Les versions `www` et sans `www` présentes dans l’export constituent une photographie historique. Le site doit conserver une seule URL canonique `https://www.hypnose-bayeux.fr` et une redirection permanente vers celle-ci.

## Après mise en production

### Jour du déploiement

1. Vérifier `https://www.hypnose-bayeux.fr/sitemap.xml`.
2. Soumettre ce sitemap dans Search Console.
3. Inspecter puis demander l’indexation de l’accueil, `/a-propos`, `/arret-tabac`, `/seance-hypnose` et `/tarifs`.
4. Ouvrir le détail de « Explorée, actuellement non indexée » et noter l’URL exacte.
5. Vérifier que Google déclare la canonique `www` comme canonique choisie.

### Contrôle à J+7

- vérifier que les cinq pages ont été explorées après le déploiement ;
- relever les canoniques choisies par Google ;
- contrôler les erreurs d’enrichissement et de données structurées ;
- ne pas conclure sur les positions à ce stade.

### Comparaison à J+28

Comparer exactement 28 jours avant et 28 jours après le déploiement, avec le même type de recherche Web et le même pays :

- clics, impressions, CTR et position de chaque requête prioritaire ;
- performances de l’accueil, `/arret-tabac`, `/seance-hypnose`, `/tarifs` et `/a-propos` ;
- répartition mobile / ordinateur ;
- nouvelles requêtes non marquées générant au moins 10 impressions.

Objectifs de lecture, sans garantie de résultat :

- hausse du CTR sur `arreter de fumer bayeux` et `arret du tabac bayeux` ;
- progression des impressions et de la position de `hypnothérapeute bayeux` ;
- consolidation des signaux de l’accueil sur la version `www` ;
- hausse du CTR de `/seance-hypnose` par rapport au niveau de référence de 0,50 %.

## Règles pour les itérations suivantes

- modifier une intention ou un groupe de pages à la fois ;
- conserver la date de déploiement dans les annotations Search Console ;
- attendre au minimum 28 jours avant d’attribuer une évolution aux métadonnées ;
- ne créer une nouvelle page que si une intention distincte apparaît de manière répétée ;
- ne jamais créer de pages locales clonées par commune ;
- ne pas utiliser de taux de réussite, d’avis, de certification ou de promesse non vérifiable dans les extraits Google.

Les clics téléphone et formulaires pourront être ajoutés comme conversions après validation de la destination Google Ads/Analytics et de son identifiant de conversion. Aucun événement n’est envoyé sans consentement explicite.
