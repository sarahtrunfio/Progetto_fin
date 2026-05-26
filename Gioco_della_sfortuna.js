import React, {useState, useEffect}from "react";
import { StyleSheet, Text, View, Button, Image, SafeAreaView} from 'react-native';
//tema: trame giochi & serie tv
const carte=[
  {id: 1, storia: "Tuo zio ti lascia la sua fattoria da poter decorare e gestire.", immagine: "https://i.pinimg.com/1200x/08/79/bb/0879bbe115f34e341421cf3da7d4d634.jpg", indice: 4.5},
  {id: 2, storia: "Scopri di poter ritornare indietro nel tempo per salvare la tua migliore amica.", immagine: "https://i.pinimg.com/736x/29/d8/e5/29d8e53edf3980d51b8cbc209ff09bce.jpg", indice: 60.0},
  {id: 3, storia: "Sei intrappolato in un loop temporale infinito e devi trovare un modo per uscirne.", immagine: "https://i.pinimg.com/1200x/42/b0/58/42b05868e45ee9bd3c35e90cb94c696d.jpg", indice: 80.0},
  {id: 4, storia: "Ti sei ritirato dall'università e devi affrontare i vari temi della vita che ti circondano.", immagine: "https://i.pinimg.com/736x/98/a6/ee/98a6ee59e164dd3a7a6a237200fd1dee.jpg", indice: 35.0},
  {id: 5, storia: ".", immagine: "https://i.pinimg.com/1200x/42/b0/58/42b05868e45ee9bd3c35e90cb94c696d.jpg", indice: 80.0},
  {id: 6, storia: "Ti ritrovi in un mondo post-apocalittico devastata da una pandemia che trasforma gli esseri umani in zombie.", immagine: "https://i.pinimg.com/736x/7a/c1/01/7ac10178ef1bc1bc1bf4ccd5d86f712f.jpg", indice: 98.0},
  {id: 7, storia: "Sei a bordo di un astronave per lavoro, dove un incidente catastrofico mette a dura prova l’equipaggio e la vostra sanità mentale.", immagine: "https://legacyofgames.com/wp-content/uploads/2024/12/20241210184010_1.jpg", indice: 60.5},
  {id: 8, storia: "Le temperature si alzano così tanto da causare una quarantena diurna e appaiono creature che provano a far estinguere l'umanità.", immagine: "https://i.pinimg.com/736x/59/13/6b/59136be4517efa5b1a4c37003afcc018.jpg", indice: 90.0},
  {id: 9, storia: "Sei un proprietario di una pizzeria e devi cercare di soddisfare i clienti al meglio.", immagine: "https://i.pinimg.com/736x/32/1e/44/321e4425f62a3c0b6c7778eca7afb780.jpg", indice: 5.0},
  {id: 10, storia: "Dopo esserti trasferito in un appartamento con tuo padre, scopri segreti inimmaginabili sul tuo quartiere.", immagine: "https://i.pinimg.com/736x/ac/15/71/ac15717ebfe08befb220836fb36fb34b.jpg", indice: 50.0},
  {id: 11, storia: "Ricevi una lettera da tua moglie morta che ti chiede di raggiungerla in una città piena di nebbia e mostri.", immagine: "https://i.pinimg.com/736x/af/5e/b9/af5eb96de46a4864d37c5160d0d59b17.jpg", indice: 70.0},
  {id: 12, storia: "Ti offrono un turno di notte in una pizzeria con dei robot apparentemente posseduti.", immagine: "https://i.pinimg.com/736x/90/bc/32/90bc32a1be8722a8bdb9cf4e575c8fa8.jpg", indice: 65.0},
  {id: 13, storia: "Devi gestire un gruppo di ex-cattivi per affrontare crimini e situazioni complesse.", immagine: "https://i.pinimg.com/1200x/01/3d/15/013d15016a35d7982bf021ed497067b9.jpg", indice: 30.0},
  {id: 14, storia: "Eri un attore famoso e talentuoso decenni fa, trovandoti ora a dover affrontare una lunga battaglia con te stesso.", immagine: "https://i.pinimg.com/1200x/65/6b/a6/656ba6b581717ee5ef636b9502c04dd0.jpg", indice: 50.0},
  {id: 15, storia: "dopo il divorzio con tuo marito, ti ritrovi a dover riparare e gestire la tua caffetteria.", immagine: "https://cdn-www.bluestacks.com/bs-images/featured_com.mergegames.gossipharbor.jpg", indice: 25.0},
]