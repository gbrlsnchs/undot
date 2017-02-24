# Undot

This module allows users to avoid relative path dots hell.

# Installation

```
npm i -S undot
```

# Usage
## Without Undot
```js
var User = require('../../../../../models/user');
```

## With Undot
```js
var User = require('undot')('models/user');
```