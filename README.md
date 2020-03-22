# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- 17.a Ajout d'un Item (`app.js`, `party.pug`)
- 17.b Affichage de la liste des items sur la page événément (`app.js`, `party.pug`)
- 17.c Possibilité de supprimer un item (`app.js`, `party.pug`)

## Article personnel

## Introduction
Pendant cette semaine dédiée au responsive Design & Devices, nous avons été confronté à la découverte des Web API's.
Suite à la réalisation des tps, je suis tombé sur la Web API Drag and Drop qui pourrait apporter une plus value à notre application. 
En effet, l'application "Qui prend quoi ?" reposant sur un système de liste, il pourrait être intéressant de faire une liste complète des éléments
à rapporter à un événement pour ensuite utiliser le drag and drop pour les attribuer aux participants.

## Comment l'utiliser ? 

Chaque élément possède grâce à l'api un attribut "draggable". Ainsi, la première étape
consistera à mettre cet attribut à "true" sur notre item pour pouvoir le bouger.
L'API permettra de définir une zone où dropper l'item. Ici on voudra probablement le placer dans une div en face d'un participant. 
 Par défaut, le navigateur affiche un curseur interdisant le  drop, pour autoriser il faudra utiliser :
 e.preventDefault(); dans un listener qui détecte le dragover pour autoriser. 
 L'événement "drop" permettra ensuite de détecter si l'élément a été droppé. 
 
 L'un des éléments majeur de l'API est le dataTransfer. C'est lui qui va permettre de récupérer le text de 
 l'élément draggé avec getData(). 
 
 L'API Drag & Drop sera très utile en restant native, un réel avantage en terme de performances.
 Les Webs APIS offrent un réel panel de fonctionnalités natives qui sont peu connues et pourtant constituent 
 bien souvent de réels avantages. 
 


