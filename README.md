# Texas Holdem API

```
 _____    _____    _____    _____    _____
|T _  |  |J _  |  |Q _  |  |K _  |  |A _  |
| ( ) |  | ( ) |  | ( ) |  | ( ) |  | ( ) |
|(_'_)|  |(_'_)|  |(_'_)|  |(_'_)|  |(_'_)|
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|____T|  |____J|  |____Q|  |____K|  |____A|
```

Rest API that returns an automatically generated round of Texas Holdem. The request params may include the number of players. If the request does not have a 'players' param, the request produces a default round for one player. If the number of players in a game exceeds nine, the request will create more tables to support the number of players.

For documentation on how to use the API, please visit https://texas-holdem-hand-generator.herokuapp.com/
