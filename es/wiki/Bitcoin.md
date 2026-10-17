---
title: Bitcoin
ref: Bitcoin
description: Primera criptomoneda descentralizada, lanzada en 2009
categories: [Cryptocurrencies, Bitcoin, Proof-of-work cryptocurrencies]
updated: 2026-10-17
hatnote: "Este artículo trata sobre la criptomoneda. Para la tecnología en la que se basa, véase [Blockchain](../Blockchain/)."
infobox:
  image: bitcoin.svg
  caption: Símbolo de bitcoin
  rows:
    - header: Denominaciones
    - Plural: bitcoins
    - Símbolo: "₿"
    - Código: "BTC, XBT"
    - Unidad mínima: "satoshi (0,000 000 01 BTC)"
    - header: Desarrollo
    - Autor original: "[Satoshi Nakamoto](../Satoshi_Nakamoto/)"
    - Libro blanco: "«Bitcoin: A Peer-to-Peer Electronic Cash System»"
    - Lanzamiento inicial: "0.1 / 9 de enero de 2009"
    - Software: "Bitcoin Core (cliente de referencia)"
    - Escrito en: C++
    - Licencia: Licencia MIT
    - header: Registro
    - Inicio del registro: 3 de enero de 2009
    - Sellado de tiempo: "[Prueba de trabajo](../Proof_of_work/)"
    - Función hash: "SHA-256 (aplicada dos veces)"
    - Tiempo de bloque: Unos 10 minutos
    - Recompensa por bloque: "₿3,125 (desde abril de 2024)"
    - Suministro máximo: "₿21 000 000"
---
**Bitcoin** (abreviatura: **BTC**; signo: **₿**) es la primera [criptomoneda](../Cryptocurrency/) descentralizada. Fue descrita en un libro blanco de 2008 por una persona o grupo que usaba el seudónimo [Satoshi Nakamoto](../Satoshi_Nakamoto/), y la red empezó a funcionar en enero de 2009.[^whitepaper] Bitcoin permite que las personas se envíen valor directamente a través de internet sin depender de un banco, una empresa de pagos ni ningún otro intermediario de confianza.

Las transacciones son verificadas por una red de ordenadores, llamados *nodos*, y se registran en un libro contable público al que solo se pueden añadir datos, conocido como [cadena de bloques](../Blockchain/) (*blockchain*). Los nuevos bloques los añaden los *mineros*, que compiten por resolver un problema computacional mediante un proceso llamado [prueba de trabajo](../Proof_of_work/) y reciben como recompensa bitcoins recién creados y comisiones por transacción. El suministro total está limitado a algo menos de 21 millones de bitcoins, y el ritmo al que se crean nuevas monedas se [reduce a la mitad](../Bitcoin_halving/) aproximadamente cada cuatro años.[^supply]

Bitcoin ha sido elogiado como una alternativa resistente a la censura frente al dinero emitido por los gobiernos, y criticado por la volatilidad de su precio, su consumo de energía y su uso en transacciones ilícitas. Es, con diferencia, la criptomoneda más conocida.

## Historia

### Creación

El nombre de dominio *bitcoin.org* se registró el 18 de agosto de 2008. El 31 de octubre de 2008, Satoshi Nakamoto publicó en una lista de correo sobre criptografía un artículo titulado *Bitcoin: A Peer-to-Peer Electronic Cash System*.[^mailing-list] En él describía un sistema de pagos electrónicos que resolvía el problema del *doble gasto* sin una autoridad central, haciendo que los participantes acordaran un único historial de transacciones protegido mediante prueba de trabajo.

Nakamoto minó el primer bloque, conocido como *bloque génesis*, el 3 de enero de 2009. En él incluyó el texto «The Times 03/Jan/2009 Chancellor on brink of second bailout for banks», un titular del periódico británico *The Times* que sirve como sello de tiempo y que suele interpretarse como un comentario sobre la fragilidad del sistema bancario.[^genesis] La primera versión del software se publicó el 9 de enero de 2009. Tres días después, Nakamoto envió 10 bitcoins al informático Hal Finney, en la primera transacción entre dos personas.

Nakamoto siguió trabajando en el software junto con otros voluntarios hasta finales de 2010; después cedió el control del proyecto a otros desarrolladores y en 2011 dejó de comunicarse públicamente.

### Primeros usos

Al principio, bitcoin no tenía precio de mercado. En octubre de 2009, un servicio llamado New Liberty Standard publicó el primer tipo de cambio conocido, que valoraba un dólar estadounidense en 1309,03 bitcoins. El 22 de mayo de 2010, el programador Laszlo Hanyecz pagó 10 000 bitcoins por dos pizzas, la primera compra de bienes con la moneda ampliamente documentada.[^pizza] Los aficionados celebran el aniversario como el «Bitcoin Pizza Day».

En 2011 y 2012, bitcoin quedó asociado a Silk Road, un mercado negro en línea que solo aceptaba bitcoin, hasta que el FBI cerró el sitio en octubre de 2013. La mayor plataforma de intercambio de los primeros años, Mt. Gox, suspendió sus operaciones y se declaró en quiebra en febrero de 2014 tras perder cientos de miles de bitcoins de sus clientes.

### Crecimiento y adopción generalizada

El precio de bitcoin subió en una serie de ciclos de auge y caída: superó por primera vez los 1000 dólares a finales de 2013, se acercó a los 20 000 en diciembre de 2017 y superó los 60 000 en 2021. En septiembre de 2021, El Salvador se convirtió en el primer país en declarar bitcoin moneda de curso legal; en 2025, como parte de un acuerdo con el Fondo Monetario Internacional, modificó la ley para que las empresas dejaran de estar obligadas a aceptarlo.

En enero de 2024, la Comisión de Bolsa y Valores de Estados Unidos (SEC) aprobó los primeros fondos cotizados (ETF) de bitcoin al contado, que permiten a los inversores minoristas invertir en bitcoin a través de cuentas de corretaje normales. El precio superó por primera vez los 100 000 dólares en diciembre de 2024. En marzo de 2025, una orden ejecutiva estadounidense creó una Reserva Estratégica de Bitcoin formada por bitcoins incautados previamente por el gobierno.

## Diseño

{% include figure.html image="blockchain-diagram.svg" caption="Cada bloque de Bitcoin contiene el hash del bloque anterior, formando una cadena." width="300" %}

### Unidades y suministro

La unidad de cuenta es el *bitcoin*. La cantidad más pequeña que puede registrarse en la cadena de bloques es una cienmillonésima de bitcoin (0,00000001 BTC), llamada **satoshi** en honor a su creador.

Los nuevos bitcoins solo se crean como recompensa para el minero de cada bloque. La recompensa empezó en 50 bitcoins por bloque y se reduce a la mitad cada 210 000 bloques, aproximadamente cada cuatro años. Tras la [cuarta reducción a la mitad](../Bitcoin_halving/) (*halving*), en abril de 2024, es de 3,125 bitcoins. Debido a este calendario, el número total de bitcoins nunca superará los 20 999 999,9769, y se espera que las últimas fracciones nuevas se emitan hacia el año 2140.[^supply]

### Cadena de bloques y minería

La [cadena de bloques](../Blockchain/) de Bitcoin es un registro público de todas las transacciones realizadas. Las transacciones se agrupan en bloques, cada uno de los cuales incluye el hash criptográfico del bloque anterior, de modo que modificar cualquier bloque pasado obligaría a rehacer todo el trabajo realizado después.

Para añadir un bloque, un minero debe encontrar un valor (un *nonce*) que haga que el doble hash SHA-256 del bloque quede por debajo de un número objetivo. La única forma conocida de lograrlo es por ensayo y error, lo que exige una enorme capacidad de cálculo. La red ajusta automáticamente el objetivo cada 2016 bloques (unas dos semanas) para que se encuentre un bloque aproximadamente cada diez minutos, independientemente de cuánta potencia de cálculo esté minando.[^whitepaper] Hoy en día la mayor parte de la minería se realiza con chips especializados llamados ASIC, y los mineros suelen combinar su potencia en *pools de minería*.

### Transacciones, claves y direcciones

La propiedad de los bitcoins se controla mediante claves criptográficas. El [monedero](../Cryptocurrency_wallet/) de un usuario guarda *claves privadas*, de las que se derivan las claves públicas y las *direcciones*. Para gastar monedas, el usuario firma una transacción con la clave privada; cualquiera puede verificar la firma con la clave pública, pero nadie puede falsificarla. Bitcoin utilizaba originalmente el esquema de firma ECDSA sobre la curva secp256k1 y añadió firmas Schnorr con la actualización Taproot en 2021.

Las direcciones de Bitcoin son *seudónimas*: en la propia cadena de bloques no están vinculadas a identidades reales, pero como todas las transacciones son públicas, a menudo pueden rastrearse analizando los patrones de uso.

## Software y actualizaciones

La red funciona con software de código abierto. La implementación más utilizada, **Bitcoin Core**, desciende del código original de Nakamoto. Los cambios en el protocolo se proponen mediante *Bitcoin Improvement Proposals* (BIP) y deben ser adoptados voluntariamente por los operadores de nodos y los mineros.

Entre las actualizaciones más importantes están:

- **Segregated Witness (SegWit)**, activada en agosto de 2017, que cambió la forma de almacenar los datos de las firmas y corrigió un fallo conocido como maleabilidad de las transacciones.
- **Taproot**, activada en noviembre de 2021, que añadió las firmas Schnorr e hizo que las transacciones complejas fueran más privadas y eficientes.

Los desacuerdos sobre cómo escalar la red provocaron una división en agosto de 2017, cuando un grupo partidario de bloques más grandes creó una moneda independiente, **Bitcoin Cash**.

La **Lightning Network** es un sistema de «capa 2» construido sobre Bitcoin. Permite a los usuarios abrir canales de pago e intercambiar muchos pagos pequeños y rápidos fuera de la cadena, liquidando solo el saldo final en la cadena de bloques principal.[^lightning]

## Recepción

Sus partidarios sostienen que el suministro fijo de bitcoin lo convierte en una protección frente a la inflación, y a veces lo llaman «oro digital». También afirman que ofrece a las personas excluidas del sistema bancario, o que viven bajo gobiernos represivos, una forma de guardar y enviar valor.

Sus críticos señalan la extrema volatilidad de su precio, su uso limitado para compras cotidianas y la energía que consume la minería por prueba de trabajo, comparable a la de un país mediano según el Cambridge Bitcoin Electricity Consumption Index.[^cbeci] Bitcoin también se ha utilizado para pagos de ransomware y otros delitos, aunque las empresas de análisis de cadenas de bloques afirman que la actividad ilícita representa una pequeña parte del volumen total de transacciones.

## Véase también

- [Cadena de bloques](../Blockchain/)
- [Halving de Bitcoin](../Bitcoin_halving/)
- [Monedero de criptomonedas](../Cryptocurrency_wallet/)
- [Ethereum](../Ethereum/)
- [Satoshi Nakamoto](../Satoshi_Nakamoto/)

## Referencias

[^whitepaper]: Nakamoto, Satoshi (31 de octubre de 2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF, en inglés). *bitcoin.org*.
[^mailing-list]: Nakamoto, Satoshi (31 de octubre de 2008). ["Bitcoin P2P e-cash paper"](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html) (en inglés). *The Cryptography Mailing List*.
[^genesis]: ["Block 0 (genesis block)"](https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f). Explorador de bloques *mempool.space*.
[^pizza]: ["Laszlo Hanyecz"](https://en.bitcoin.it/wiki/Laszlo_Hanyecz) (en inglés). *Bitcoin Wiki*.
[^supply]: ["Controlled supply"](https://en.bitcoin.it/wiki/Controlled_supply) (en inglés). *Bitcoin Wiki*.
[^lightning]: Poon, Joseph; Dryja, Thaddeus (2016). ["The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"](https://lightning.network/lightning-network-paper.pdf) (PDF, en inglés).
[^cbeci]: ["Cambridge Bitcoin Electricity Consumption Index"](https://ccaf.io/cbnsi/cbeci) (en inglés). Cambridge Centre for Alternative Finance.

## Enlaces externos

- [bitcoin.org](https://bitcoin.org/), sitio web del proyecto
- [Bitcoin Core](https://github.com/bitcoin/bitcoin), código fuente en GitHub
