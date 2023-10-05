## Expo Application Template (TypeScript)
- By [n0xgg04](https://github.com/n0xgg04)

> This is a template for Expo applications. It includes the following:
> 
> - [x] React Navigation
> - [x] Redux
> - [x] React Tookit
> - [x] Apollo Client, GraphQL
> - [x] React Query
> - [x] Axios
> - [x] TailwindCSS (JIT)



### Installation

```sh
yarn install
```

### Usage

- Run on Android Emulator
```sh
yarn android
```

- Run on iOS Simulator
```sh
yarn ios
```


### Using Redux
- useDispatch
```ts
import { useDispatch, useSelector } from '@Hooks/redux';
```

### Global config
- `src/config/ApplicationConfig.ts`

### Add new screen
- Step 1 : Create new screen in `src/screens`
- Step 2: Add new screen to `src/config/ScreenRegister.ts`

```js
const ScreenRegisterList: ScreenInfo[] = [
    {
        name: ScreenNameEnum.HOME,
        component: HomeScreen,
    },
    {
        name: ScreenNameEnum.DASHBOARD,
        component: HomeScreen,
    },
    {
        ...new screen here
    }
];
```

Don't forget add name for screen in ScreenNameEnum

### GraphQL
- Schema : `src/graphql/schema.graphql`
- Query : `src/graphql/queries`
- Mutation : `src/graphql/mutations`
- Subscription : `src/graphql/subscriptions`
- Fragment : `src/graphql/fragments`

#### Run Codegen: 
```sh
yarn codegen
```

Generated files save in `src/graphql/__generated__`
