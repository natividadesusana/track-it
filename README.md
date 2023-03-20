# *TrackIt Project*

### *TrackIt is a habit tracking app! With the right to register, login and many libraries.*

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
<img src="https://user-images.githubusercontent.com/95102911/226362966-2285e429-aa5d-4e43-8574-13ec3fa2a918.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226362991-8f79ac8f-d360-4059-9e2b-88e3398b9d2f.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363004-0f72b6aa-3d9a-4db7-aff5-63e697946c9e.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363015-6a984be0-bed3-4762-91b8-b1c3f9293d89.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363020-912efd27-98ea-49b2-acfc-865969f1f61e.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363024-260acb22-4e00-4f54-a10e-0573474fb5c5.png" width="300">
</div>

_____

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

_____

# TrackIt API

- Sign up
    
     To register, make a `POST` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up
     ```
    
     sending a body in the format
    
     ``` jsx
     {
     email: "...",
     name: "...",
     image: "...",
     password: "..."
     }
     ```
- Login
    
     To register, make a `POST` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login
     ```
    
     sending a body in the format
    
     ``` jsx
     {
     email: "...",
     password: "..."
     }
     ```
    
     The server will respond with an object of the form
    
     ```json
     {
         "id": 3,
         "name": "Joe",
         "image": "https://http.cat/411.jpg",
         "email": "joe@respondeai.com.br",
         "password": "123456",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
     }
     ```
- Create habit
    
     To create a habit, make a `POST` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits
     ```
    
     sending a body in the format
    
     ``` jsx
     {
       name: "Habit name",
       days: [1, 3, 5] // Monday, Wednesday and Friday
     }
     ```
    
     and an `Authorization` header with `Bearer TOKEN` format
    
     The server will respond with an object of the form
    
     ```json
     {
       id: 1,
       name: "Habit name",
       days: [1, 3, 5]
     }
     ```
- list habits
    
     To list user habits, make a `GET` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format
    
     The server will respond with an array of the form
    
     ```json
     [
     {
     id: 1,
     name: "Habit name",
     days: [1, 3, 5]
     },
     {
     id: 2,
     name: "Habit 2 name",
     days: [1, 3, 4, 6]
     }
     ]
     ```
- Delete habit
    
     To delete a user habit, make a `DELETE` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format, replacing `HABIT_ID` in the URL with the id of the habit to be deleted.
    
     **Tip**: research how to send a `DELETE` request with axios

- Search for today's habits
    
     To list user habits, make a `GET` request for the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format
    
     The server will respond with an array of the form
    
     ```json
     [
         {
             "id": 3,
             "name": "Wake",
             "done": true,
             "currentSequence": 1,
             "highestSequence": 1
         }
     ]
     ```
- Mark habit as done
    
     To list the user's habits, make a `POST` request, with an empty body, for the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format, replacing `HABIT_ID` in the URL with the id of the habit to be tagged.
    
     If:
    
     - The habit is already checked
     - The habit is not current day
     - The habit is not of the logged in user
    
     the server will respond with `Bad Request (400)`.

- Desmarcar hábito como feito
    
    Para fazer listar os hábitos do usuário, faça uma requisição `POST` , com o body vazio, para a URL
    
    ```
    https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck
    ```
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`, substituindo `ID_DO_HABITO` na URL pelo id do hábito a ser marcado.
    
    Se:
    
    - O hábito não estiver marcado
    - O hábito não for do dia atual
    - O hábito não for do usuário logado
    
    o servidor vai responder com `Bad Request (400)`.

- Histórico de hábitos diário
    
    Para obter o histórico de hábitos diário do usuário, faça uma requisição `GET` para a URL
    
    ```
    https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily
    ```
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`
    
    O servidor responderá com um array no formato
    
    ```json
    [
        {
            "day": "20/05/2021",
            "habits": [
                {
                    "id": 3,
                    "name": "Acordar",
                    "date": "2021-05-20T12:00:00.000Z",
                    "weekDay": 4,
                    "historyId": null,
                    "done": false
                }
            ]
        },
        {
            "day": "19/05/2021",
            "habits": [
                {
                    "id": 3,
                    "name": "Acordar",
                    "date": "2021-05-19T12:00:00.000Z",
                    "weekDay": 3,
                    "historyId": 626,
                    "done": true
                },
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-19T12:00:00.000Z",
                    "weekDay": 3,
                    "historyId": 625,
                    "done": true
                }
            ]
        },
        {
            "day": "18/05/2021",
            "habits": [
                {
                    "id": 3,
                    "name": "Acordar",
                    "date": "2021-05-18T12:00:00.000Z",
                    "weekDay": 2,
                    "historyId": 7,
                    "done": true
                }
            ]
        },
        {
            "day": "17/05/2021",
            "habits": [
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-17T12:00:00.000Z",
                    "weekDay": 1,
                    "historyId": 1,
                    "done": true
                }
            ]
        },
        {
            "day": "16/05/2021",
            "habits": [
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-16T12:00:00.000Z",
                    "weekDay": 0,
                    "historyId": null,
                    "done": false
                }
            ]
        },
        {
            "day": "14/05/2021",
            "habits": [
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-14T12:00:00.000Z",
                    "weekDay": 5,
                    "historyId": null,
                    "done": false
                }
            ]
        }
    ]
    ```
    
_____

## Requirements

- Login screen (`/` route)
     - [ ] The email and password must be sent to the API according to the documentation
     - [ ] While loading, the fields and the button must be disabled, according to the layout
         - 💡 **Tip**: to make the loading animation, use the `react-loader-spinner` library
     - [ ] In case of success, the user should be redirected to the route `/hoje`
     - [ ] In case of failure, an `alert` must be displayed informing the user of the error and the fields/button must be enabled again
     - [ ] When clicking on the link to register, the user must be redirected to the route `/registration`

- Registration screen (route `/registration`)
      - [ ] The data must be sent to the API according to the documentation
      - [ ] While loading, the fields and the button must be disabled, according to the layout
      - [ ] In case of success, the user must be redirected to the `/` route (Login route)
      - [ ] In case of failure, an `alert` must be displayed informing the user of the error and the fields/button must be enabled again
      - [ ] When clicking on the login link, the user should be redirected to the `/` route (Login route)

- Topo e Menu
    - [ ]  Topo e menu devem ter posicionamento fixo
    - [ ]  No topo deve ser exibida a foto do usuário conforme layout
        - **OBS**: Utilize **ContextAPI** para compartilhar o estado do usuário logado globalmente entre os componentes.
    - [ ]  No menu, os 3 botões de Hábitos, Hoje e Histórico devem redirecionar o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente
    - [ ]  O botão de Hoje deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário
        - 💡 **Dica**: utilize a biblioteca `react-circular-progressbar`
        - **OBS**: Esse progresso deve ser atualizado automaticamente conforme o usuário for concluindo os hábitos. Utilize **ContextAPI** para compartilhar esse estado globalmente entre os componentes.

- Habits screen (route `/habitos`)
     - [ ] Load user habits, sending request to API according to documentation and displaying below according to layout
     - [ ] When clicking to delete a habit, a `confirm` should be displayed to confirm if the user would really like to delete the habit. If so, a request must be sent to the API according to the documentation and the habits reloaded shortly afterwards.
     - [ ] If the user does not have any habit registered, the text must be displayed according to the layout
     - [ ] When clicking on the "+" button, a habit registration form should be displayed just below the title according to the layout
     - [ ] The user must enter the name of the habit in a text field and select the days of the week that he wants to perform the habit according to the layout
     - [ ] When saving, the data must be sent to the API according to the documentation
     - [ ] While loading, the text field and the button must be disabled, according to the layout. The buttons for the days of the week must be disabled, but it is not necessary to change the visuals during loading.
     - [ ] In case of success, the fields must be cleared and re-enabled, the form must be hidden again and the list of habits below reloaded
     - [ ] In case of error, the fields must be re-enabled and an alert must indicate the problem to the user
     - [ ] When Canceling, the form must be hidden. If you have data already filled in, they must be kept if the user reopens the creation form.

- Today Screen (route `/today`)
     - [ ] Load the user's habits today, sending a request to the API according to the documentation and displaying it below according to the layout
     - [ ] The title of the screen must display today according to the layout
         - 💡 **Tip**: use the `dayjs` library for this
     - [ ] In the subtitle, the phrase "No habits completed yet" or "x% of habits completed" should be displayed, depending on the user's progress
     - [ ] When marking or unmarking a habit as completed, a request must be sent to the API according to the documentation. It is not necessary to put loading.
     - [ ] When marking a habit as completed, the count of the **current sequence** must be set to green
     - [ ] If the current sequence is **equal to the user's record and greater than zero**, this must also be displayed in green

- History screen (route `/historico`)
     - [ ] The text must be displayed according to the layout
