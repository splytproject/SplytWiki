---
title: Ethereum
ref: Ethereum
description: Plataforma descentralizada de cadena de bloques para contratos inteligentes, con su propia moneda, el ether
categories: [Cryptocurrencies, Ethereum, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-17
infobox:
  image: ethereum.svg
  image_width: 90
  caption: El diamante de ether
  rows:
    - header: Denominaciones
    - Moneda: ether
    - Código: ETH
    - Símbolo: "Ξ"
    - Unidad mínima: "wei (10⁻¹⁸ ETH)"
    - Otras unidades: "gwei (10⁻⁹ ETH)"
    - header: Desarrollo
    - Propuesto por: Vitalik Buterin
    - Libro blanco: 2013–2014
    - Lanzamiento de la red principal: 30 de julio de 2015
    - Desarrollador: "Ethereum Foundation y la comunidad"
    - header: Registro
    - Consenso: "[Prueba de participación](../Proof_of_stake/) (desde septiembre de 2022)"
    - Consenso anterior: "[Prueba de trabajo](../Proof_of_work/) (2015–2022)"
    - Tiempo de bloque: "12 segundos (un slot)"
    - Suministro máximo: "Ninguno (la quema de comisiones compensa la emisión)"
---
**Ethereum** es una plataforma descentralizada de [cadena de bloques](../Blockchain/) que permite a cualquiera crear y ejecutar programas llamados [contratos inteligentes](../Smart_contract/) (*smart contracts*). Su moneda nativa es el **ether** (código **ETH**, símbolo **Ξ**), que se usa para pagar el cómputo en la red y es la segunda [criptomoneda](../Cryptocurrency/) más grande después de [bitcoin](../Bitcoin/).

Ethereum fue propuesto en 2013 por el programador Vitalik Buterin y entró en funcionamiento el 30 de julio de 2015.[^history] Mientras que Bitcoin se diseñó principalmente como dinero digital, Ethereum se concibió como un «ordenador mundial» de uso general: su cadena de bloques no solo guarda saldos, sino también código y datos que cualquier usuario puede invocar. Esto lo convirtió en la base de la mayoría de las aplicaciones de [finanzas descentralizadas](../Decentralized_finance/) (DeFi), [monedas estables](../Stablecoin/) y [tokens no fungibles](../Non-fungible_token/) que surgieron después.

En septiembre de 2022, Ethereum pasó de la [prueba de trabajo](../Proof_of_work/) a la [prueba de participación](../Proof_of_stake/) mediante una actualización conocida como **The Merge** («la Fusión»), que redujo su consumo de energía en aproximadamente un 99,95 %.[^energy]

## Historia

### Concepción y venta colectiva

Buterin, cofundador de *Bitcoin Magazine*, describió Ethereum en un libro blanco a finales de 2013. Argumentaba que las cadenas de bloques necesitaban un lenguaje de programación integrado para que los desarrolladores no tuvieran que crear una cadena nueva para cada aplicación.[^whitepaper] El proyecto se anunció públicamente en enero de 2014. Entre sus primeros cofundadores estaban Gavin Wood, autor de la especificación técnica formal conocida como *Yellow Paper*,[^yellowpaper] así como Charles Hoskinson, Anthony Di Iorio, Joseph Lubin, Mihai Alisie, Amir Chetrit y Jeffrey Wilcke.

El desarrollo se financió con una venta colectiva en línea en julio y agosto de 2014, en la que los participantes compraron ether con bitcoin. Para apoyar el proyecto se creó la **Ethereum Foundation**, una organización sin ánimo de lucro con sede en Zug (Suiza).

### Lanzamiento y The DAO

La red se lanzó el 30 de julio de 2015 con una versión llamada *Frontier*. En 2016, un fondo de inversión basado en un contrato inteligente, **The DAO**, recaudó ether por valor de unos 150 millones de dólares. En junio de 2016, un atacante aprovechó un fallo en su código y sustrajo alrededor de 3,6 millones de ether. Tras un intenso debate, la comunidad adoptó el 20 de julio de 2016 una *bifurcación dura* (*hard fork*) que trasladó los fondos robados a un contrato de recuperación. Una minoría que rechazaba el cambio por principio siguió ejecutando la cadena original, que continúa existiendo como **Ethereum Classic**.

### Crecimiento

El estándar de tokens ERC-20, propuesto en 2015, facilitó la creación de nuevos tokens en Ethereum y alimentó el auge de las «ofertas iniciales de monedas» (ICO) de 2017. Los auges de DeFi y de los NFT en 2020–2021 dispararon la demanda de espacio en los bloques, elevando mucho las comisiones por transacción e impulsando el crecimiento de las redes de *capa 2*.

### Paso a la prueba de participación

Una cadena independiente de prueba de participación, la **Beacon Chain**, se lanzó el 1 de diciembre de 2020. El 15 de septiembre de 2022, con **The Merge**, la cadena original de Ethereum dejó de usar minería y se unió a la Beacon Chain, de modo que desde entonces los bloques los producen validadores que bloquean ether, es decir, lo *ponen en staking*.[^merge] La actualización Shanghái-Capella de abril de 2023 permitió a los validadores retirar el ether depositado.

## Tecnología

### Máquina Virtual de Ethereum

Todos los nodos de Ethereum ejecutan la **Máquina Virtual de Ethereum** (EVM), un entorno estandarizado que ejecuta el código de los contratos inteligentes. Como todos los nodos ejecutan el mismo código con los mismos datos, llegan al mismo resultado. Los contratos suelen escribirse en el lenguaje de alto nivel **Solidity** (o en alternativas como Vyper) y se compilan a código de bytes de la EVM. Muchas otras cadenas de bloques son «compatibles con la EVM», es decir, pueden ejecutar los mismos contratos.

Ethereum tiene dos tipos de cuentas: las *cuentas de propiedad externa*, controladas por personas mediante claves privadas, y las *cuentas de contrato*, controladas por su código.

### Gas y comisiones

Cada operación en la EVM cuesta una cantidad fija de **gas**, una unidad de trabajo computacional. Los usuarios pagan el gas en ether, lo que evita los bucles infinitos y el spam. Desde la actualización London de agosto de 2021 (EIP-1559), cada bloque tiene una *comisión base* que sube y baja según la demanda y que se **quema** (se destruye de forma permanente), además de una *propina* opcional para el validador.[^eip1559] Cuando la actividad de la red es alta, la cantidad de ether quemada puede superar a la recién emitida, con lo que el suministro disminuye.

El ether se divide en unidades más pequeñas. La más pequeña, el **wei** (10<sup>−18</sup> ether), lleva el nombre del informático Wei Dai. Los precios del gas suelen expresarse en **gwei** (10<sup>−9</sup> ether).

### Consenso

Ethereum utiliza un protocolo de prueba de participación llamado *Gasper*. Los validadores deben depositar 32 ETH para participar. El tiempo se divide en *slots* de 12 segundos; en cada uno se elige al azar a un validador para que proponga un bloque, mientras comités de otros validadores votan, o *certifican*, ese bloque. Cada 32 slots forman una *época*, y los bloques quedan *finalizados* —en la práctica, irreversibles— tras unas dos épocas. A los validadores que actúan de forma deshonesta se les puede destruir parte de su depósito, una penalización llamada *slashing*.[^pos]

### Escalabilidad y capa 2

Para procesar más transacciones sin encarecer el funcionamiento de un nodo, la hoja de ruta de Ethereum se centra en los **rollups**: redes independientes de «capa 2», como Arbitrum, Optimism y Base, que ejecutan las transacciones fuera de la cadena principal y publican en ella datos comprimidos y pruebas. La actualización Dencun de marzo de 2024 (EIP-4844) introdujo un tipo de almacenamiento de datos más barato llamado *blobs*, pensado específicamente para los rollups, que redujo mucho sus comisiones.[^eip4844]

## Actualizaciones

| Actualización | Fecha | Cambio principal |
|---|---|---|
| Frontier | 30 de julio de 2015 | Lanzamiento de la red |
| Bifurcación de The DAO | 20 de julio de 2016 | Revirtió el hackeo de The DAO |
| Byzantium | octubre de 2017 | Mejoras del protocolo; menor recompensa de minería |
| London | 5 de agosto de 2021 | Quema de comisiones (EIP-1559) |
| The Merge | 15 de septiembre de 2022 | Paso a la prueba de participación |
| Shanghái-Capella | 12 de abril de 2023 | Retiradas del staking habilitadas |
| Dencun | 13 de marzo de 2024 | Datos en blobs para rollups (EIP-4844) |
| Pectra | 7 de mayo de 2025 | Mejoras en el staking y las cuentas |

## Críticas

Los críticos señalan las altas comisiones de Ethereum en los periodos de mucha actividad, la complejidad de su proceso de actualización y los riesgos de seguridad de los contratos inteligentes, cuyos errores y explotaciones han costado a los usuarios miles de millones de dólares. Algunos sostienen que el staking concentra la influencia en los grandes tenedores y en los servicios de staking. Sus defensores responden que la red funciona sin interrupción desde 2015 y que los sistemas de capa 2 han reducido considerablemente las comisiones.

## Véase también

- [Contrato inteligente](../Smart_contract/)
- [Prueba de participación](../Proof_of_stake/)
- [Finanzas descentralizadas](../Decentralized_finance/)
- [Token no fungible](../Non-fungible_token/)
- [Solana](../Solana/)

## Referencias

[^history]: ["The history of Ethereum"](https://ethereum.org/en/history/) (en inglés). *ethereum.org*.
[^energy]: ["Ethereum energy consumption"](https://ethereum.org/en/energy-consumption/) (en inglés). *ethereum.org*.
[^whitepaper]: Buterin, Vitalik (2014). ["Ethereum Whitepaper"](https://ethereum.org/en/whitepaper/) (en inglés). *ethereum.org*.
[^yellowpaper]: Wood, Gavin. ["Ethereum: A Secure Decentralised Generalised Transaction Ledger"](https://ethereum.github.io/yellowpaper/paper.pdf) (PDF, en inglés). *Ethereum Yellow Paper*.
[^merge]: ["The Merge"](https://ethereum.org/en/roadmap/merge/) (en inglés). *ethereum.org*.
[^eip1559]: Buterin, Vitalik; et al. (2019). ["EIP-1559: Fee market change for ETH 1.0 chain"](https://eips.ethereum.org/EIPS/eip-1559) (en inglés). *Ethereum Improvement Proposals*.
[^pos]: ["Proof-of-stake (PoS)"](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/) (en inglés). *ethereum.org*.
[^eip4844]: Buterin, Vitalik; et al. (2022). ["EIP-4844: Shard Blob Transactions"](https://eips.ethereum.org/EIPS/eip-4844) (en inglés). *Ethereum Improvement Proposals*.

## Enlaces externos

- [ethereum.org](https://ethereum.org/), sitio web oficial
- [Ethereum Improvement Proposals](https://eips.ethereum.org/)
